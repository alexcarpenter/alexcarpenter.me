import { downloadNodeAsPng } from "./export-image";
import { formatPastedCode } from "./format";
import { highlightCode } from "./highlight";
import { detectLanguage, type LanguageMode } from "./language";
import {
  $code,
  $detectedLanguage,
  $filename,
  $languageMode,
  $resolvedLanguage,
  $scale,
  hydrateFromUrl,
} from "./store";

class CodeImageMaker extends HTMLElement {
  #abort?: () => void;
  #sync = () => {
    this.syncForm();
    void this.syncPreview();
  };
  #renderId = 0;
  #formatTimer: number | undefined;

  connectedCallback() {
    hydrateFromUrl();
    this.render();
    this.bindEvents();

    const unlisteners = [
      $code.listen(this.#sync),
      $resolvedLanguage.listen(this.#sync),
      $detectedLanguage.listen(this.#sync),
      $languageMode.listen(this.#sync),
      $filename.listen(this.#sync),
      $scale.listen(this.#sync),
    ];
    this.#abort = () => unlisteners.forEach((unlisten) => unlisten());

    this.syncForm();
    void this.syncPreview();
  }

  disconnectedCallback() {
    this.#abort?.();
    window.clearTimeout(this.#formatTimer);
  }

  private render() {
    this.innerHTML = `
      <div class="code-image-maker">
        <header class="code-image-toolbar" data-ignore-in-export>
          <div>
            <h3>Code Image</h3>
            <p class="code-image-status" role="status" aria-live="polite"></p>
          </div>

          <div class="code-image-actions">
            <button type="button" data-action="download">Export Image</button>
          </div>
        </header>

        <section class="code-image-stage" aria-label="Code image editor">
          <div class="code-image-frame" data-export-target>
            <div class="code-image-editor">
              <div data-highlighted-code></div>
              <textarea id="code-image-input" aria-label="Code" spellcheck="false" autocomplete="off"></textarea>
            </div>
          </div>
        </section>

        <section class="code-image-controls" data-ignore-in-export>
          <div class="code-image-field">
            <label for="code-image-language">Language</label>
            <select id="code-image-language">
              <option value="auto">Auto detect</option>
              <option value="html">HTML</option>
              <option value="css">CSS</option>
              <option value="tsx">TSX</option>
            </select>
          </div>

          <div class="code-image-field">
            <label for="code-image-filename">Filename</label>
            <input id="code-image-filename" type="text" />
          </div>

          <div class="code-image-field">
            <label for="code-image-scale">Scale</label>
            <select id="code-image-scale">
              <option value="1">1x</option>
              <option value="2">2x</option>
              <option value="3">3x</option>
              <option value="4">4x</option>
            </select>
          </div>

          <div class="code-image-field">
            <span>Detected</span>
            <output data-language></output>
          </div>
        </section>
      </div>
    `;
  }

  private bindEvents() {
    this.input.addEventListener("input", () => {
      $code.set(this.input.value);
      this.scheduleFormat();
    });
    this.input.addEventListener("blur", () => {
      void this.formatInput();
    });
    this.input.addEventListener("change", () => {
      void this.formatInput();
    });
    this.input.addEventListener("keydown", (event) => {
      if (event.key !== "Tab") return;
      event.preventDefault();
      const start = this.input.selectionStart;
      const end = this.input.selectionEnd;
      const value = this.input.value;
      this.input.value = `${value.slice(0, start)}  ${value.slice(end)}`;
      this.input.selectionStart = this.input.selectionEnd = start + 2;
      $code.set(this.input.value);
    });
    this.input.addEventListener("paste", async (event) => {
      event.preventDefault();
      const pasted = event.clipboardData?.getData("text/plain") ?? "";
      const start = this.input.selectionStart;
      const end = this.input.selectionEnd;
      const value = this.input.value;
      const nextValue = `${value.slice(0, start)}${pasted}${value.slice(end)}`;

      this.input.value = nextValue;
      this.input.selectionStart = this.input.selectionEnd =
        start + pasted.length;
      $code.set(nextValue);

      await this.formatInput();
    });
    this.language.addEventListener("change", () =>
      $languageMode.set(this.language.value as LanguageMode),
    );
    this.filename.addEventListener("input", () =>
      $filename.set(this.filename.value),
    );
    this.scale.addEventListener("change", () =>
      $scale.set(Number(this.scale.value)),
    );

    this.querySelector<HTMLElement>(".code-image-actions")?.addEventListener(
      "click",
      async (event) => {
        const button = (event.target as HTMLElement).closest<HTMLButtonElement>(
          "button[data-action]",
        );
        if (!button) return;

        const action = button.dataset.action;
        const exportName = ($filename.get() || "code").replace(/\.[\w-]+$/, "");

        try {
          button.disabled = true;
          if (action === "download") {
            await this.formatInput();
            await this.syncPreview();
            await downloadNodeAsPng(this.exportTarget, exportName, 2);
            this.setStatus("PNG downloaded.");
          }
        } catch (error) {
          this.setStatus(
            error instanceof Error ? error.message : "Something went wrong.",
          );
        } finally {
          button.disabled = false;
        }
      },
    );
  }

  private syncForm() {
    if (this.input.value !== $code.get()) this.input.value = $code.get();
    this.language.value = $languageMode.get();
    this.filename.value = $filename.get();
    this.scale.value = String($scale.get());
    this.querySelector<HTMLElement>("[data-language]")!.textContent =
      $languageMode.get() === "auto"
        ? `Auto: ${$detectedLanguage.get().toUpperCase()}`
        : $resolvedLanguage.get().toUpperCase();
  }

  private scheduleFormat() {
    window.clearTimeout(this.#formatTimer);
    this.#formatTimer = window.setTimeout(() => {
      void this.formatInput();
    }, 750);
  }

  private async formatInput() {
    window.clearTimeout(this.#formatTimer);
    const value = this.input.value;
    const formatted = await formatPastedCode(value, detectLanguage(value));
    if (formatted === value) return;

    this.input.value = formatted;
    $code.set(formatted);
  }

  private async syncPreview() {
    const renderId = ++this.#renderId;
    const html = await highlightCode($code.get(), $resolvedLanguage.get());
    if (renderId !== this.#renderId) return;
    this.querySelector<HTMLElement>("[data-highlighted-code]")!.innerHTML =
      html;
    this.input.style.minHeight = `${this.querySelector<HTMLElement>("[data-highlighted-code] pre")?.offsetHeight ?? 0}px`;
  }

  private setStatus(message: string) {
    this.querySelector<HTMLElement>(".code-image-status")!.textContent =
      message;
  }

  private get input() {
    return this.querySelector<HTMLTextAreaElement>("#code-image-input")!;
  }

  private get language() {
    return this.querySelector<HTMLSelectElement>("#code-image-language")!;
  }

  private get filename() {
    return this.querySelector<HTMLInputElement>("#code-image-filename")!;
  }

  private get scale() {
    return this.querySelector<HTMLSelectElement>("#code-image-scale")!;
  }

  private get exportTarget() {
    return this.querySelector<HTMLElement>("[data-export-target]")!;
  }
}

if (!customElements.get("code-image-maker")) {
  customElements.define("code-image-maker", CodeImageMaker);
}

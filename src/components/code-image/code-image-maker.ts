import { define } from "nanotags";
import { downloadNodeAsPng } from "./export-image";
import { formatPastedCode } from "./format";
import { highlightCode } from "./highlight";
import { detectLanguage } from "./language";
import { $code, $resolvedLanguage } from "./store";

function getErrorMessage(error: unknown) {
  if (error instanceof Error)
    return error.message.split("\n")[0] ?? error.message;
  return "Unknown error";
}

define("code-image-maker")
  .withRefs((r) => ({
    actions: r.one<HTMLElement>("[data-ref='actions']"),
    error: r.one<HTMLElement>("[data-ref='error']"),
    exportTarget: r.one<HTMLElement>("[data-ref='exportTarget']"),
    highlightedCode: r.one<HTMLElement>("[data-ref='highlightedCode']"),
    input: r.one<HTMLTextAreaElement>("[data-ref='input']"),
  }))
  .setup((ctx) => {
    let renderId = 0;

    const syncPreview = async () => {
      const currentRenderId = ++renderId;
      const html = await highlightCode($code.get(), $resolvedLanguage.get());
      if (currentRenderId !== renderId) return;

      ctx.refs.highlightedCode.innerHTML = html;
      ctx.host.toggleAttribute("data-highlighted", true);
      ctx.refs.input.style.minHeight = `${ctx.refs.highlightedCode.querySelector<HTMLElement>("pre")?.offsetHeight ?? 0}px`;
    };

    const setError = (error: unknown) => {
      ctx.refs.error.textContent = `Unable to format code: ${getErrorMessage(error)}`;
      ctx.refs.error.hidden = false;
    };

    const clearError = () => {
      ctx.refs.error.textContent = "";
      ctx.refs.error.hidden = true;
    };

    const formatInput = async () => {
      const value = ctx.refs.input.value;

      try {
        const formatted = await formatPastedCode(value, detectLanguage(value));
        clearError();
        if (formatted === value) return true;

        ctx.refs.input.value = formatted;
        $code.set(formatted);
        return true;
      } catch (error) {
        setError(error);
        return false;
      }
    };

    ctx.effect($code, (code) => {
      if (ctx.refs.input.value !== code) ctx.refs.input.value = code;
      void syncPreview();
    });

    ctx.effect($resolvedLanguage, () => {
      void syncPreview();
    });

    ctx.on(ctx.refs.input, "input", () => {
      clearError();
      $code.set(ctx.refs.input.value);
    });

    ctx.on(ctx.refs.input, "blur", () => {
      void formatInput();
    });

    ctx.on(ctx.refs.input, "change", () => {
      void formatInput();
    });

    ctx.on(ctx.refs.input, "keydown", (event) => {
      if (event.key !== "Tab") return;

      event.preventDefault();
      const start = ctx.refs.input.selectionStart;
      const end = ctx.refs.input.selectionEnd;
      const value = ctx.refs.input.value;

      ctx.refs.input.value = `${value.slice(0, start)}  ${value.slice(end)}`;
      ctx.refs.input.selectionStart = ctx.refs.input.selectionEnd = start + 2;
      $code.set(ctx.refs.input.value);
    });

    ctx.on(ctx.refs.input, "paste", async (event) => {
      event.preventDefault();
      const pasted = event.clipboardData?.getData("text/plain") ?? "";
      const start = ctx.refs.input.selectionStart;
      const end = ctx.refs.input.selectionEnd;
      const value = ctx.refs.input.value;
      const nextValue = `${value.slice(0, start)}${pasted}${value.slice(end)}`;

      ctx.refs.input.value = nextValue;
      ctx.refs.input.selectionStart = ctx.refs.input.selectionEnd =
        start + pasted.length;
      $code.set(nextValue);

      await formatInput();
    });

    ctx.on(ctx.refs.actions, "click", async (event) => {
      const button = (event.target as HTMLElement).closest<HTMLButtonElement>(
        "button[data-action]",
      );
      if (!button) return;

      try {
        button.disabled = true;
        if (!(await formatInput())) return;
        await syncPreview();
        await downloadNodeAsPng(ctx.refs.exportTarget, "code", 2);
      } finally {
        button.disabled = false;
      }
    });
  });

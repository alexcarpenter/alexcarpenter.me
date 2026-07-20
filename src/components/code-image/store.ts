import { atom, computed } from "nanostores";
import { detectLanguage, isLanguageMode, type LanguageMode } from "./language";

export const defaultCode = `<article class="card">
  <h2>Code images</h2>
  <p>Paste a snippet, tweak the frame, and share it.</p>
</article>`;

export const $code = atom(defaultCode);
export const $languageMode = atom<LanguageMode>("auto");
export const $filename = atom("example.tsx");
export const $scale = atom(2);
export const $detectedLanguage = computed($code, detectLanguage);
export const $resolvedLanguage = computed(
  [$languageMode, $detectedLanguage],
  (mode, detected) => (mode === "auto" ? detected : mode),
);

export function hydrateFromUrl() {
  const params = new URLSearchParams(window.location.search);
  const code = params.get("code");
  const lang = params.get("lang");
  const filename = params.get("filename");
  const scale = Number(params.get("scale"));

  if (code) {
    try {
      $code.set(
        new TextDecoder().decode(
          Uint8Array.from(atob(code), (char) => char.charCodeAt(0)),
        ),
      );
    } catch {
      $code.set(code);
    }
  }

  if (isLanguageMode(lang)) $languageMode.set(lang);
  if (filename) $filename.set(filename);
  if ([1, 2, 3, 4].includes(scale)) $scale.set(scale);
}

export function persistToUrl() {
  const params = new URLSearchParams(window.location.search);
  const encoded = btoa(
    String.fromCharCode(...new TextEncoder().encode($code.get())),
  );

  params.set("code", encoded);
  params.set("lang", $languageMode.get());
  params.set("filename", $filename.get());
  params.set("scale", String($scale.get()));

  window.history.replaceState(
    null,
    "",
    `${window.location.pathname}?${params}`,
  );
}

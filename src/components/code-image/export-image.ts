import { toBlob, toPng } from "html-to-image";

export async function downloadNodeAsPng(
  node: HTMLElement,
  filename: string,
  pixelRatio: number,
) {
  const dataUrl = await toPng(node, exportOptions(pixelRatio, node));
  // html-to-image can miss fonts/styles on first paint in some browsers.
  const stableDataUrl = await toPng(node, exportOptions(pixelRatio, node));

  const link = document.createElement("a");
  link.download = filename.endsWith(".png") ? filename : `${filename}.png`;
  link.href = stableDataUrl || dataUrl;
  link.click();
}

export async function copyNodeAsPng(node: HTMLElement, pixelRatio: number) {
  if (!navigator.clipboard || !("ClipboardItem" in window)) {
    throw new Error("Image clipboard is not supported in this browser.");
  }

  const blob = await toBlob(node, exportOptions(pixelRatio, node));
  if (!blob) throw new Error("Unable to create PNG.");

  await navigator.clipboard.write([
    new ClipboardItem({
      [blob.type]: blob,
    }),
  ]);
}

export async function shareNodeAsPng(
  node: HTMLElement,
  filename: string,
  pixelRatio: number,
) {
  const blob = await toBlob(node, exportOptions(pixelRatio, node));
  if (!blob) throw new Error("Unable to create PNG.");

  const file = new File(
    [blob],
    filename.endsWith(".png") ? filename : `${filename}.png`,
    {
      type: blob.type,
    },
  );

  if (!navigator.canShare?.({ files: [file] })) {
    window.open(
      "https://twitter.com/intent/tweet?text=",
      "_blank",
      "noopener,noreferrer",
    );
    return;
  }

  await navigator.share({ files: [file] });
}

function exportOptions(pixelRatio: number, node?: HTMLElement) {
  return {
    backgroundColor: node ? getComputedStyle(node).backgroundColor : undefined,
    cacheBust: true,
    pixelRatio,
    filter: (node: Node) => {
      if (!(node instanceof HTMLElement)) return true;
      return (
        node.tagName !== "TEXTAREA" &&
        !node.hasAttribute("data-ignore-in-export")
      );
    },
    style: {
      margin: "0",
    },
  };
}

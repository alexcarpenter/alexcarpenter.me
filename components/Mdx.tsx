import Code from '@/components/Code';
import Note from '@/components/Note';

function CodeSandbox({ src }) {
  return (
    <iframe
      src={src}
      style={{
        width: '100%',
        height: 500,
        border: 0,
        borderRadius: 4,
        overflow: 'hidden',
      }}
      title="swipeable-tabs-3"
      allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
      sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
    ></iframe>
  );
}

export const components = {
  code: Code,
  Note,
  CodeSandbox,
};

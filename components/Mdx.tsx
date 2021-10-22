import { slugify } from '@/lib/utils';
import Code from '@/components/Code';
import Note from '@/components/Note';

export const components = {
  h2: ({ children }) => <h2 id={slugify(children)}>{children}</h2>,
  code: Code,
  Note,
  CodeSandbox: ({ src, title }: { src: string; title: string }) => (
    <iframe
      title={title}
      src={src}
      className="my-12"
      style={{
        width: '100%',
        height: 500,
        border: 0,
        borderRadius: 4,
        overflow: 'hidden',
      }}
      allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
      sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
    ></iframe>
  ),
};

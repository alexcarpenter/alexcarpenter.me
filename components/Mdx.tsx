import Code from '@/components/Code';

export const components = {
  blockquote: ({ children }) => (
    <blockquote className="border-l-4 border-white border-opacity-10 pl-4">
      {children}
    </blockquote>
  ),
  code: Code,
  h2: ({ children }) => <h2 className="mt-8 text-xl">{children}</h2>,
  h3: ({ children }) => <h3 className="mt-8">{children}</h3>,
};

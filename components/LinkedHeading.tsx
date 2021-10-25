import { slugify } from '@/lib/utils';

interface LinkedHeadingProps {
  as?: 'h2' | 'h3';
  children: string;
  className?: string;
}

export default function LinkedHeading({
  as: Component = 'h2',
  children,
  className,
}: LinkedHeadingProps) {
  const id = slugify(children);
  return (
    <Component id={id} className={className}>
      <a
        href={`#${id}`}
        className="!no-underline hover:after:content-['#'] after:text-gray-300 after:pl-2 after:opacity-0 hover:after:opacity-100"
      >
        {children}
      </a>
    </Component>
  );
}

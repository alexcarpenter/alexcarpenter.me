import { ExternalLink as FExternalLink } from 'react-feather';

export default function ExternalLink({
  href,
  children,
  icon: Icon = FExternalLink,
}: {
  href: string;
  children?: React.ReactNode;
  icon?: React.ElementType;
}) {
  let text = children;
  if (!text) {
    const { hostname } = new URL(href);
    text = hostname;
  }
  let iconProps = {
    width: '1em',
    height: '1em',
    className: 'ml-1',
    focusable: false,
    'aria-hidden': true,
  };
  return (
    <a
      href={href}
      rel="noopener noreferrer"
      className="inline-flex items-center text-blue hover:underline"
    >
      {text} <Icon {...iconProps} />
    </a>
  );
}

import { getHostname } from '@/lib/utils';

type ExternalLinkProps = {
  href: string;
};

const ExternalLink: React.FC<ExternalLinkProps> = ({ href, children }) => {
  return (
    <div className="flex-1">
      <p>
        <a
          className="underline hover:no-underline focus:no-underline"
          target="_blank"
          rel="noopener noreferrer"
          href={href}
        >
          {children}
        </a>
        &nbsp;
        <span
          role="img"
          aria-hidden="true"
          className="flex-shrink-0 textSecondary"
        >
          →
        </span>
      </p>
      <p className="mt-0.5 text-sm textSecondary">{getHostname(href)}</p>
    </div>
  );
};

export default ExternalLink;

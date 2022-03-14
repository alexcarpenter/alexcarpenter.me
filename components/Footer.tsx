import { cx } from '@/lib/utils';
import ExternalLink from '@/components/ExternalLink';
import RightArrow from '@/components/RightArrow';
import ThemeSelect from '@/components/ThemeSelect';
import data from '@/data/global.json';

const Footer = () => {
  return (
    <footer
      className={cx(
        'pt-12 mt-12 border-t',
        'border-gray-200',
        'dark:border-gray-700',
      )}
    >
      <h2 className="sr-only">Connect</h2>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div className="col-span-2">
          <ul className="grid grid-cols-2 gap-4">
            {data.footer.map((item, index) => {
              return (
                <li key={index}>
                  <ExternalLink href={item.href} hostname={false}>
                    {item.label}
                  </ExternalLink>
                </li>
              );
            })}
          </ul>
        </div>
        <div>
          <ThemeSelect />
        </div>
      </div>
    </footer>
  );
};

export default Footer;

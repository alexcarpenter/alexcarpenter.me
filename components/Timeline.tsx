import * as React from 'react';
import Tags from '@/components/Tags';
import { cx, formatDate } from '@/lib/utils';

const themes = {
  default: {
    border: 'border-gray-500',
    background: 'from-gray-400',
  },
  hashicorp: {
    border: 'border-[#2e71e5]',
    background: 'from-[#2e71e5]',
  },
  waypoint: {
    border: 'border-[#62d4dc]',
    background: 'from-[#62d4dc]',
  },
  consul: {
    border: 'border-[#dc477d]',
    background: 'from-[#dc477d]',
  },
  packer: {
    border: 'border-[#63d0ff]',
    background: 'from-[#63d0ff]',
  },
  nomad: {
    border: 'border-[#60dea9]',
    background: 'from-[#60dea9]',
  },
};

function Timeline({ children }) {
  return (
    <ul className={cx('space-y-8')}>
      {React.Children.map(children, (child) => {
        const { theme = 'default' } = child.props;
        return (
          <li
            className={cx('relative pl-8 py-8 border-l', themes[theme].border)}
          >
            <span
              className={cx(
                'absolute inset-0 bg-gradient-to-r opacity-20',
                themes[theme].background,
              )}
              aria-hidden={true}
            />
            <div className="relative">{React.cloneElement(child)}</div>
          </li>
        );
      })}
    </ul>
  );
}

interface EventProps {
  theme?: keyof typeof themes;
  date: string;
  heading: string | React.ReactNode;
  link?: string;
  children?: React.ReactNode;
  tags?: Array<string>;
}

function Event({ date, heading, children, link, tags }: EventProps) {
  return (
    <article className={cx('w-full')}>
      <time className={cx('text-sm text-gray-300')} dateTime={date}>
        {formatDate(date, 'long')}
      </time>
      <h2 className={cx('mt-1')}>
        {link ? (
          <>
            <a
              className="underline hover:no-underline focus:no-underline"
              target="_blank"
              rel="noopener noreferrer"
              href={link}
            >
              {heading}
            </a>
            <span className="text-gray-300" aria-hidden={true}>
              &nbsp;&#8594;
            </span>
          </>
        ) : (
          <>{heading}</>
        )}
      </h2>
      {link && (
        <p className="mt-0.5 text-sm text-gray-300">{new URL(link).hostname}</p>
      )}
      {children && <div className={cx('my-8 prose')}>{children}</div>}
      <Tags items={tags} />
    </article>
  );
}

// const Event = React.forwardRef<HTMLDivElement, EventProps>((props, ref) => {
//   const {
//     date,
//     heading,
//     children,
//     link,
//     tags,
//   } = props;
//   return (
//     <article className={cx('w-full')} ref={ref}>
//       <time className={cx('text-gray-300')} dateTime={date}>
//         <a href={`#${slugify(heading)}`}>{formatDate(date, 'long')}</a>
//       </time>
//       <h2 className={cx('mt-2')}>
//         {link ? (
//           <>
//             <a
//               className="underline hover:no-underline focus:no-underline"
//               target="_blank"
//               rel="noopener noreferrer"
//               href={link}
//             >
//               {heading}
//             </a>
//             <span className="text-gray-300">&nbsp;&#8594;</span>
//           </>
//         ) : (
//           <>{heading}</>
//         )}
//       </h2>
//       {link && (
//         <p className="mt-2 text-sm text-gray-300">
//           {new URL(link).hostname}
//         </p>
//       )}
//       {children && <div className={cx('my-8 prose')}>{children}</div>}
//       <Tags items={tags} />
//     </article>
//   );
// }

Timeline.Event = Event;
export default Timeline;

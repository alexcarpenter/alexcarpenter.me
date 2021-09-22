import * as React from 'react';
import Tags from '@/components/Tags';
import { cx, formatDate, slugify } from '@/lib/utils';

const themes = {
  hashicorp: 'border-[#2e71e5]',
  waypoint: 'border-[#62d4dc]',
  consul: 'border-[#dc477d]',
  packer: 'border-[#63d0ff]',
  nomad: 'border-[#60dea9]',
};

function Timeline({ children }) {
  return (
    <ul className={cx('space-y-8')}>
      {React.Children.map(children, (child) => {
        const { heading, theme = 'hashicorp' } = child.props;
        return (
          <li
            id={slugify(heading)}
            className={cx('relative border-l-2 pl-8 py-8', themes[theme])}
          >
            {React.cloneElement(child)}
          </li>
        );
      })}
    </ul>
  );
}

interface EventProps {
  theme?: keyof typeof themes;
  date: string;
  heading: string;
  link?: string;
  children?: React.ReactNode;
  tags?: Array<string>;
}

function Event({ date, heading, children, link, tags }: EventProps) {
  return (
    <article className={cx('w-full')}>
      <time
        className={cx('text-sm text-white text-opacity-75')}
        dateTime={date}
      >
        <a href={`#${slugify(heading)}`}>{formatDate(date, 'long')}</a>
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
            <span className="text-white text-opacity-75">&nbsp;&#8594;</span>
          </>
        ) : (
          <>{heading}</>
        )}
      </h2>
      {link && (
        <p className="mt-2 text-sm text-white text-opacity-75">
          {new URL(link).hostname}
        </p>
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
//       <time className={cx('text-white text-opacity-75')} dateTime={date}>
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
//             <span className="text-white text-opacity-75">&nbsp;&#8594;</span>
//           </>
//         ) : (
//           <>{heading}</>
//         )}
//       </h2>
//       {link && (
//         <p className="mt-2 text-sm text-white text-opacity-75">
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

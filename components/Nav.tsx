import * as React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { cx } from '@/lib/utils';

const navData = [
  {
    path: '/work',
    label: 'Work',
  },
  {
    path: '/posts',
    label: 'Posts',
  },
  {
    path: '/bookmarks',
    label: 'Bookmarks',
  },
];

export default function Nav() {
  const { pathname } = useRouter();

  const [tabBoundingBox, setTabBoundingBox] = React.useState(null);
  const [wrapperBoundingBox, setWrapperBoundingBox] = React.useState(null);
  const [highlightedTab, setHighlightedTab] = React.useState(null);
  const [isHoveredFromNull, setIsHoveredFromNull] = React.useState(true);

  const highlightRef = React.useRef(null);
  const wrapperRef = React.useRef(null);

  const repositionHighlight = (e, tab) => {
    setTabBoundingBox(e.target.getBoundingClientRect());
    setWrapperBoundingBox(wrapperRef.current.getBoundingClientRect());
    setIsHoveredFromNull(!highlightedTab);
    setHighlightedTab(tab);
  };

  const resetHighlight = () => setHighlightedTab(null);

  const highlightStyles: {
    transitionDuration?: string;
    opacity?: number;
    width?: string;
    transform?: string;
  } = {};

  if (tabBoundingBox && wrapperBoundingBox) {
    highlightStyles.transitionDuration = isHoveredFromNull ? '0ms' : '150ms';
    highlightStyles.opacity = highlightedTab ? 1 : 0;
    highlightStyles.width = `${tabBoundingBox.width}px`;
    highlightStyles.transform = `translate(${
      tabBoundingBox.left - wrapperBoundingBox.left
    }px)`;
  }
  return (
    <nav className="relative" ref={wrapperRef} onMouseLeave={resetHighlight}>
      <span
        ref={highlightRef}
        style={highlightStyles}
        className="hidden md:block absolute top-0 left-0 bottom-0 opacity-0 bg-gray-900 rounded-md"
      />
      <ul className="flex flex-col items-end sm:items-start sm:flex-row space-y-2 sm:space-y-0 sm:space-x-8">
        {navData.map((item) => {
          return (
            <li>
              <Link href={item.path}>
                <a
                  key={item.label}
                  onMouseOver={(ev) => repositionHighlight(ev, item)}
                  className={cx('p-2 relative text-gray-300 hover:text-white')}
                  aria-current={pathname === item.path ? 'page' : null}
                >
                  {item.label}
                </a>
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}

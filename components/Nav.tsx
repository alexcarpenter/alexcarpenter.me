import * as React from 'react';
import { motion, AnimateSharedLayout, useReducedMotion } from 'framer-motion';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { cx } from '@/lib/utils';
import data from '@/data/global.json';

export default function Nav() {
  const { pathname } = useRouter();
  const [activeIndex, setActiveIndex] = React.useState<number | null>(null);
  const shouldReduceMotion = useReducedMotion();
  return (
    <nav className="relative -mx-2 -my-1">
      <AnimateSharedLayout>
        <motion.ul
          className="flex flex-col items-end sm:items-start sm:flex-row gap-x-4 gap-y-1"
          onHoverEnd={() => setActiveIndex(null)}
        >
          {data.nav.map((item, index) => {
            const isActive = activeIndex === index;
            return (
              <motion.li key={index} onHoverStart={() => setActiveIndex(index)}>
                <Link href={item.path}>
                  <a
                    className={cx('relative block px-2 py-1')}
                    aria-current={pathname === item.path ? 'page' : undefined}
                  >
                    <span className="relative z-10">{item.label}</span>
                    {isActive && (
                      <motion.span
                        layoutId="shadow"
                        transition={{
                          duration: shouldReduceMotion ? 0 : 0.2,
                        }}
                        className={cx(
                          'absolute inset-0 rounded-md pointer-events-none z-0',
                          ['bg-gray-200'],
                          ['dark:bg-gray-800'],
                        )}
                      />
                    )}
                  </a>
                </Link>
              </motion.li>
            );
          })}
        </motion.ul>
      </AnimateSharedLayout>
    </nav>
  );
}

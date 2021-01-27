import * as React from 'react';
import { useCombobox } from 'downshift';
import { matchSorter } from 'match-sorter';
import { Search, ArrowRightCircle } from 'react-feather';
import data from '@/data/search.json';
import clsx from 'clsx';
import { useRouter } from 'next/router';
import Separator from '@/components/Separator';

export default function SearchInput({ onClose }) {
  const router = useRouter();
  const itemToString = (item) => (item ? item.title : '');
  const [inputItems, setInputItems] = React.useState(data);
  const {
    isOpen,
    getToggleButtonProps,
    getLabelProps,
    getMenuProps,
    getInputProps,
    getComboboxProps,
    highlightedIndex,
    getItemProps,
  } = useCombobox({
    items: inputItems,
    itemToString,
    initialIsOpen: true,
    onSelectedItemChange: (val) => {
      const href = `/${val.selectedItem.type}/${val.selectedItem.slug}`;
      router.push(href);
      onClose();
    },
    onInputValueChange: ({ inputValue }) => {
      setInputItems(
        matchSorter(data, inputValue, { keys: ['title', 'tags', 'type'] }),
      );
    },
  });
  const type = (str) => <span className="capitalize">{str.slice(0, -1)}</span>;
  return (
    <div className="relative mt-2">
      <div {...getComboboxProps()}>
        <div className="relative">
          <label htmlFor="search" className="sr-only" {...getLabelProps()}>
            Search
          </label>
          <input
            {...getInputProps()}
            className="border border-gray-300 rounded bg-white p-3 pr-8 w-full focus:outline-none focus:ring shadow-2xl"
            placeholder="Search by name, type, or tag..."
          />
          <Search
            aria-hidden="true"
            focusable={false}
            width="1em"
            height="1em"
            className="text-gray-600 absolute top-1/2 transform -translate-y-1/2 right-3"
          />
        </div>
      </div>
      <ul
        {...getMenuProps()}
        className={clsx([
          'divide-y overflow-y-auto max-h-80 rounded mt-3 border border-gray-300 relative z-10',
          isOpen && inputItems.length ? 'opacity-100' : 'opacity-0',
        ])}
      >
        {isOpen &&
          inputItems.map((item, index) => (
            <li
              key={`${item}${index}`}
              className={clsx([
                'p-3 cursor-pointer flex items-center justify-between',
                highlightedIndex === index ? 'bg-blue text-white' : 'bg-white',
              ])}
              {...getItemProps({ item, index })}
            >
              <div className="mr-1">
                <span
                  className={clsx([
                    'text-xs',
                    highlightedIndex === index
                      ? 'text-white opacity-80'
                      : 'text-gray-600',
                  ])}
                >
                  {type(item.type)} <Separator />{' '}
                  {item.tags.map((t) => `#${t}`).join(', ')}
                </span>
                <span className="block">{item.title}</span>
              </div>
              <ArrowRightCircle
                aria-hidden="true"
                focusable={false}
                width="1.2em"
                height="1.2em"
                className={clsx([
                  highlightedIndex === index ? 'opacity-100' : 'opacity-0',
                ])}
              />
            </li>
          ))}
      </ul>
    </div>
  );
}

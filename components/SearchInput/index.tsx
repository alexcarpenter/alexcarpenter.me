import * as React from 'react';
import { useCombobox } from 'downshift';
import { Search } from 'react-feather';
import data from '@/data/search.json';
import clsx from 'clsx';

export default function SearchInput() {
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
    onInputValueChange: ({ inputValue }) => {
      setInputItems(
        data.filter((item) =>
          itemToString(item).toLowerCase().startsWith(inputValue.toLowerCase()),
        ),
      );
    },
  });
  return (
    <div className="relative">
      <div {...getComboboxProps()}>
        <div className="relative">
          <label htmlFor="search" className="sr-only" {...getLabelProps()}>
            Search
          </label>
          <input
            {...getInputProps()}
            className="border border-gray-300 rounded bg-white p-3 pr-8 w-full focus:outline-none focus:ring"
            placeholder="Search by tag or name..."
          />
          <Search
            width="1em"
            className="text-gray-600 absolute top-1/2 transform -translate-y-1/2 right-3"
          />
        </div>
      </div>
      <ul
        {...getMenuProps()}
        className={clsx([
          'divide-y overflow-y-auto max-h-80 rounded mt-3 border border-gray-300',
          isOpen && inputItems.length ? 'opacity-100' : 'opacity-0',
        ])}
      >
        {isOpen &&
          inputItems.map((item, index) => (
            <li
              key={`${item}${index}`}
              className={clsx([
                'p-3',
                highlightedIndex === index ? 'bg-blue text-white' : 'bg-white',
              ])}
              {...getItemProps({ item, index })}
            >
              {item.title}
            </li>
          ))}
      </ul>
    </div>
  );
}

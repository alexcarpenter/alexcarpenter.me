import {
  Combobox,
  ComboboxInput,
  ComboboxPopover,
  ComboboxList,
  ComboboxOption,
  ComboboxOptionText,
} from '@reach/combobox';
// import '@reach/combobox/styles.css';
import { Search } from 'react-feather';
import data from '@/data/search.json';

export default function SearchInput() {
  return (
    <Combobox
      aria-label=""
      className="mt-2"
      openOnFocus
      onSelect={(val) => alert(val)}
    >
      <div className="relative">
        <label htmlFor="search" className="sr-only">
          Search
        </label>
        <ComboboxInput
          className="border border-gray-300 rounded bg-white p-3 pr-8 w-full focus:outline-none focus:ring"
          placeholder="Search by tag or name..."
        />
        <Search
          width="1em"
          className="text-gray-600 absolute top-1/2 transform -translate-y-1/2 right-3"
        />
      </div>
      <ComboboxPopover className="bg-white mt-2 rounded border border-gray-300 max-h-64 overflow-y-auto">
        <ComboboxList className="divide-y">
          {data.map((item) => (
            <ComboboxOption
              key={item.slug}
              className="p-3 hover:bg-gray-100 focus:bg-gray-100"
              value={item.title}
            />
          ))}
        </ComboboxList>
      </ComboboxPopover>
    </Combobox>
  );
}

export default function Tags({ items }) {
  return items.map((t) => <span className='text-gray-600 text-sm font-mono'>#{t}</span>).reduce((prev, curr) => [prev, ", ", curr]);
}

import { format } from 'timeago.js';

export default function UpdatedAt({ date }) {
  const formattedDate = format(new Date(date), 'en_US');
  return <p className="text-gray-600">Updated {formattedDate}</p>;
}

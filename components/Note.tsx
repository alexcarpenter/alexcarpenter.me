import { Info } from 'react-feather';
export default function Note({ children }) {
  return (
    <div className="border border-white border-opacity-10 p-4 rounded-md bg-gray-900">
      {children}
    </div>
  );
}

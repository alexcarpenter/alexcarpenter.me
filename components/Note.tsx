import * as React from "react";

export const Note: React.FC<{
  label?: string;
  children: React.ReactNode;
}> = ({ label, children }) => {
  return (
    <aside className="border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-900 p-4 rounded-sm">
      {label ? <strong>{label}</strong> : null} {children}
    </aside>
  );
};

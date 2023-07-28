const Note = ({
  label,
  children,
}: {
  label?: string;
  children: React.ReactNode;
}) => {
  return (
    <aside className="note relative border border-dashed">
      <p className="absolute left-1 top-0 -translate-y-1/2 bg-page px-2 text-sm font-semibold uppercase tracking-widest text-[#F04A00] text-secondary">
        {label || "Note"}
      </p>
      <div className="space-y-2 p-3 pt-4 text-sm">{children}</div>
    </aside>
  );
};

export { Note };

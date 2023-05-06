export default function NotFound() {
  return (
    <>
      <header className="mt-16 grid gap-16 md:grid-cols-4">
        <div className="md:col-span-2 md:col-start-2">
          <h1 className="font-variable-semibold text-6xl text-foreground">
            404&nbsp;<span aria-hidden="true">¬</span>
          </h1>
          <p className="mt-2 text-lg text-foreground-neutral">
            Could not find requested resource.
          </p>
        </div>
      </header>
    </>
  );
}

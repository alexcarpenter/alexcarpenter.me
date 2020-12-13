function Section({ children }) {
  return <section className='mt-8'>{children}</section>;
}

function Title({ children }) {
  return (
    <div className='relative flex items-center mb-4'>
      <h2 className='font-bold uppercase tracking-wide'>{children}</h2>
      <div className='bg-gray-200 flex-1 ml-4' style={{ height: 1 }}></div>
    </div>
  );
}

Section.Title = Title;

export default Section;

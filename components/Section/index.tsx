function Section({ children }) {
  return <section className='mt-8'>{children}</section>;
}

function Title({ children }) {
  return (
    <div className='relative flex items-center mb-8 text-sm'>
      <h2 className='font-bold uppercase tracking-wider'>{children}</h2>
      <div className='bg-gray-200 flex-1 ml-4' style={{ height: 1 }}></div>
    </div>
  );
}

Section.Title = Title;

export default Section;

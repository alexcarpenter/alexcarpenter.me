import Head from '@/components/Head';
import Nav from '@/components/Nav';

export default function Page({ title = '', description = '', children }) {
  return (
    <>
      <Head title={title} description={description} />
      <div className="max-w-screen-sm mx-auto">
        <Nav />
        {children}
      </div>
    </>
  )
}

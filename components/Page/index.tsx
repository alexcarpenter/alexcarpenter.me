import Head from "@/components/Head";
import Nav from "@/components/Nav";

export default function Page({ title = "", description = "", children }) {
  return (
    <>
      <Head title={`${title ? `${title} - ` : ""}Alex Carpenter`} description={description} />
      <div className='max-w-screen-sm mx-auto w-100 mb-16'>
        <Nav />
        {children}
      </div>
    </>
  );
}

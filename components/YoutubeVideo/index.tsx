export default function YoutubeVideo({ id }) {
  return (
    <div className='relative pb-16/9 w-full bg-gray-200'>
      <iframe className='absolute h-full w-full object-cover' width='560' height='315' src={`https://www.youtube.com/embed/${id}`} frameBorder='0' allow='autoplay; encrypted-media' allowFullScreen></iframe>
    </div>
  );
}

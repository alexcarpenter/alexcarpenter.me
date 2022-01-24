type VideoProps = {
  id: string;
};

const Video = ({ id }: VideoProps) => {
  return (
    <div className="relative aspect-video">
      <iframe
        className="w-full h-full absolute inset-0"
        width="560"
        height="315"
        src={`https://www.youtube.com/embed/${id}`}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default Video;

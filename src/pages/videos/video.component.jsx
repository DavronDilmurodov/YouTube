import { useParams } from "react-router-dom";

export const Video = () => {
  const { id } = useParams();
  return (
    <div className="container text-center">
      <iframe
        width="700"
        height="374"
        src={`https://www.youtube.com/embed/${id}`}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      ></iframe>
    </div>
  );
};

import { useNavigate } from "react-router-dom";
import { useData } from "../../../hooks/useData";

export const HomeLayout = () => {
  const [data] = useData();
  const onNavigate = useNavigate();

  return (
    <div>
      <div className="home__layout"></div>
      <div className="container mt-4 d-flex justify-content-between align-items-center">
        <div className="d-flex">
          <img
            className="rounded-circle"
            src={data?.avatar?.thumbnails[0]?.url}
            alt="logo"
            width={128}
            height={128}
          />
          <div className="card-group d-flex flex-column">
            <h5 className="card-title mt-2 ms-3 h2 d-flex align-items-center">
              {data.title}{" "}
              <i className="bi bi-check-circle-fill fs-6 ms-2 mt-2"></i>
            </h5>

            <div className="mt-1 d-flex">
              <p className="smth ms-3 fs-5">@Apple</p>
              <p className="smth ms-2 fs-5">{data.subscriberCountText}</p>
              <p className="smth ms-2 fs-5">181 videos</p>
            </div>
            <p className="ms-3">
              {data?.description?.substring(0, 73)}...
              <i
                className="bi bi-chevron-right fs-5"
                onClick={() => onNavigate("/about")}
              ></i>
            </p>
          </div>
        </div>
        <button
          onClick={() => {
            alert("You have successfully subscribed");
          }}
          className="btn btn-dark rounded-5 px-3 py-2"
        >
          Subscribe
        </button>
      </div>
    </div>
  );
};

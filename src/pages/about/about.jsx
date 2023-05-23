import Link from "antd/es/typography/Link";
import { useData } from "../../hooks/useData";
import { FlagOutlined } from "@ant-design/icons";

export const About = () => {
  const [data] = useData();

  return (
    <div className="container">
      <div className="row">
        <div className="col-sm-8">
          <h5 className="mb-3">Description</h5>
          <p className="fs-6 fw-semibold">{data?.description}</p>
          <hr
            style={{
              border: "1px solid #1677ff",
            }}
            className="mt-4"
          />
          <h5 className="my-4">Additionally</h5>
          <p className="fs-6">A country: {data.country}</p>
          <hr
            style={{
              border: "1px solid #1677ff",
            }}
            className="mt-5"
          />
          <h5 className="my-4">Links</h5>
          <div className="d-flex justify-content-between w-50">
            <Link>{data?.links?.primaryLinks[0]?.title?.simpleText}</Link>
            <Link>{data?.links?.secondaryLinks[0]?.title?.simpleText}</Link>
          </div>
          <hr
            style={{
              border: "1px solid #1677ff",
            }}
            className="mt-5"
          />
        </div>
        <div className="col-sm-4 text-end">
          <h5>Statistics</h5>
          <hr
            style={{
              border: "1px solid #1677ff",
            }}
          />
          <p className="h6">Registration date: {data.joinedDateText}</p>
          <hr
            style={{
              border: "1px solid #1677ff",
            }}
          />
          <p className="h6">{data.viewCountText}</p>
          <hr
            style={{
              border: "1px solid #1677ff",
            }}
          />
          <FlagOutlined
            className="bottom__icons"
            style={{
              fontSize: "24px",
              marginRight: "20px",
            }}
          />
          <img
            src="https://cdn-icons-png.flaticon.com/128/2958/2958783.png"
            alt="share"
            width={24}
            className="bottom__icons bottom__icons2"
          />
        </div>
      </div>
    </div>
  );
};

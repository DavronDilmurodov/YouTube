import { Card, Col, Row } from "antd";
import { useTrendingData } from "../../hooks/useTrendingData";
import { useNavigate } from "react-router-dom";

const { Meta } = Card;

export const Home = () => {
  const [trendingData] = useTrendingData();

  const navigate = useNavigate();

  const onNavigate = (id) => {
    navigate("/video/" + id);
  };

  return (
    <Row gutter={[16, 20]} className="container mx-auto">
      {trendingData.map(({ video }) => (
        <Col span={6} key={video.videoId}>
          <Card
            onClick={onNavigate.bind(null, video.videoId)}
            hoverable
            bodyStyle={{
              padding: "16px",
            }}
            cover={<img alt="example" src={video.thumbnails[0].url} />}
          >
            <Meta
              title={video.title}
              description={
                <>
                  <p
                    style={{
                      marginBottom: "10px",
                      fontWeight: "600",
                    }}
                  >
                    Channel: <b>{video.channelName}</b>
                  </p>
                  <p
                    style={{
                      marginBottom: "10px",
                      fontWeight: "600",
                    }}
                  >
                    {video.viewCountText}
                  </p>
                  <p
                    style={{
                      marginBottom: "10px",
                      fontWeight: "600",
                    }}
                  >
                    {video.publishedTimeText}
                  </p>
                </>
              }
            />
          </Card>
        </Col>
      ))}
    </Row>
  );
};

import { useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import { Jobs, Images } from "../../Data/AllData";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { CiLocationOn, CiLock } from "react-icons/ci";
import { CiClock2 } from "react-icons/ci";
import { CiCalendar } from "react-icons/ci";
import "../Css/Style.css";

const Featured = () => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  const chunkJobs = (jobs) => {
    const chunks = [];
    for (let i = 0; i < jobs.length; i += 3) {
      chunks.push(jobs.slice(i, i + 3));
    }
    return chunks;
  };

  const jobChunks = chunkJobs(Jobs);

  const [index1, setIndex1] = useState(0);

  const handleSelect1 = (selectedIndex1) => {
    setIndex1(selectedIndex1);
  };

  const chunkImg = (Images) => {
    const chunks = [];
    for (let i = 0; i < Images.length; i += 6) {
      chunks.push(Images.slice(i, i + 6));
    }
    return chunks;
  };

  const ImgChunks = chunkImg(Images);

  return (
    <>
      <div className="my-3">
        <h1 className="text-center text-white fw-bold">Featured Jobs</h1>
        <Carousel
          activeIndex={index}
          onSelect={handleSelect}
          className="custom-carousel"
        >
          {jobChunks.map((chunk, chunkIndex) => (
            <Carousel.Item key={chunkIndex}>
              <Row className="justify-content-center">
                {chunk.map((data, i) => (
                  <Col xs={12} md={4} key={i}>
                    <Card className="text-center border apply-card m-2">
                      <label className="work-mode">{data.type}</label>
                      <Card.Body>
                        <div>
                          <label className="d-flex justify-content-start fw-bold">
                            {data.title}
                          </label>
                          <label className="d-flex justify-content-start text-black">
                            {data.company}
                          </label>
                          <label className="d-flex justify-content-left card-content">
                            {data.employmentType}
                          </label>
                          <label className="d-flex justify-content-left card-content">
                            {data.experience}
                          </label>
                          <label className="d-flex justify-content-left card-content">
                            {data.location}
                          </label>
                        </div>
                        <Button variant="success" className="mt-2 fw-bold">
                          Apply
                        </Button>
                      </Card.Body>
                    </Card>
                  </Col>
                ))}
              </Row>
            </Carousel.Item>
          ))}
        </Carousel>
      </div>
      <div>
        <h1 className="text-center text-white fw-bold">
          Featured <span style={{ color: "#ffd30c" }}>Employers</span>
        </h1>
        <Carousel
          activeIndex={index1}
          onSelect={handleSelect1}
          className="custom-carousel"
        >
          {ImgChunks.map((chunk, chunkIndex) => (
            <Carousel.Item key={chunkIndex}>
              <Row className="justify-content-center">
                {chunk.map((data, i) => (
                  <Col xs={6} md={4} lg={2} key={i}>
                    <Card className="text-center border apply-card card2 m-2">
                      <img src={data.url} className="img-fluid" />
                    </Card>
                  </Col>
                ))}
              </Row>
            </Carousel.Item>
          ))}
        </Carousel>
      </div>
    </>
  );
};

export default Featured;

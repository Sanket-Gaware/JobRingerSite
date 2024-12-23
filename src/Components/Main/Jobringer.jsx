import Button from "react-bootstrap/esm/Button";
import SearchDiv from "../SearchComponents/SearchDiv";
import Card from "react-bootstrap/Card";
import "../Css/Style.css";
import QuickSearch from "../SearchComponents/QuickSearch";
import Featured from "../FeaturedJobs/Featured";

const Jobringer = () => {
  return (
    <>
      <div className="p-3">
        <Card className="emp-card mar">
          <Card.Title className="emp-card-title">EMPLOYERS</Card.Title>
          <Card.Body>
            <Card.Text
              style={{
                color: "#ffcd05",
                fontWeight: "bold",
                fontSize: "large",
                letterSpacing: 1,
                wordSpacing: 2,
              }}
            >
              WELCOME OFFER - FREE JOB Postings and Much More.
            </Card.Text>
            <br />
            <div className="d-flex gap-5 justify-content-center">
              <Button className="empbtn" variant="outline-primary">
                Register For Free
              </Button>
              <Button className="empbtn" variant="outline-dark">
                Post A Job
              </Button>
            </div>
          </Card.Body>
          <Card.Footer style={{ background: "transparent" }}>
            <a
              href="https://www.jobringer.com/contact-us"
              className="text-decoration-none"
            >
              click here for sales enquiry
            </a>
          </Card.Footer>
        </Card>
        <div className="mt-3">
          <h3
            style={{ textAlign: "center", color: "white", fontWeight: "bold" }}
          >
            Bringing you the Perfect Job !
          </h3>
          <h5 style={{ textAlign: "center", color: "whitesmoke" }}>
            11,000+ JOBS to Apply
          </h5>
        </div>
        <SearchDiv />
        <QuickSearch />
        <Featured />
      </div>
    </>
  );
};
export default Jobringer;

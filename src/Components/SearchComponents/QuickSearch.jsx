import Card from "react-bootstrap/Card";
import "../Css/Style.css";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/esm/Button";

const jobCategories = [
  "Fresher",
  "WFH",
  "IT",
  "HR",
  "Back Office",
  "BPO Jobs",
  "ITES",
  "Finance",
  "Accounts",
  "Medical",
  "Pharma",
  "Manager",
  "Developer",
  "Marketing",
  "Engineering",
  "Non Government Jobs",
];

const QuickSearch = () => {
  return (
    <div>
      <Card className="emp-card ">
        <Card.Title className="emp-card-title">Quick Job Search</Card.Title>
        <Button className="searchBtn d-flex mx-auto justify-content-center fw-bold fs-5">
          Search
        </Button>
        <Card.Body>
          <Form>
            <div className="checkbox-container">
              {jobCategories.map((data, i) => (
                <span key={i} className="w-auto fw-bold">
                  <Form.Check label={data} />
                </span>
              ))}
            </div>
          </Form>
        </Card.Body>
      </Card>
    </div>
  );
};
export default QuickSearch;

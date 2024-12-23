import Button from "react-bootstrap/esm/Button";
import Form from "react-bootstrap/Form";
import NavDropdown from "react-bootstrap/NavDropdown";
import "../Css/Style.css";

import { useState } from "react";

const experienceYears = [
  "Fresher (less than 1 year)",
  "1 Year",
  "2 Years",
  "3 Years",
  "4 Years",
  "5 Years",
  "6 Years",
  "7 Years",
  "8 Years",
  "9 Years",
  "10 Years",
  "11 Years",
  "12 Years",
  "13 Years",
  "14 Years",
  "15 Years",
  "16 Years",
  "17 Years",
  "18 Years",
  "19 Years",
  "20 Years",
  "21 Years",
  "22 Years",
  "23 Years",
  "24 Years",
  "25 Years",
  "26 Years",
  "27 Years",
  "28 Years",
  "29 Years",
  "30 Years",
  "31 Years",
  "32 Years",
  "33 Years",
  "34 Years",
  "35 Years",
  "36 Years",
  "37 Years",
  "38 Years",
  "39 Years",
  "40 Years",
  "41 Years",
  "42 Years",
  "43 Years",
  "44 Years",
  "45 Years",
  "46 Years",
  "47 Years",
  "48 Years",
  "49 Years",
  "50 Years",
];

const SearchDiv = () => {
  const [yrs, setYrs] = useState("Exprience");
  return (
    <div className="row searchdiv">
      <div className="col-md-2 col-sm-12">
        <label className="searchDivtxt d-flex align-items-center">
          Over 11,000+ jobs to explore
        </label>
      </div>
      <div className="col-md-10 col-sm-12">
        <Form>
          <div className="d-flex search">
            <Form.Control
              className="search1"
              type="search"
              placeholder="Search jobs by skills or company"
            />
            <Form.Control
              className="search2"
              type="search"
              placeholder="Location"
            />
            <NavDropdown
              className="search3 d-flex align-items-center"
              title={yrs}
              placeholder="Experience"
            >
              {experienceYears.map((data, i) => {
                return (
                  <NavDropdown.Item
                    key={i}
                    className="exptext"
                    onClick={() => setYrs(data)}
                  >
                    {data}
                  </NavDropdown.Item>
                );
              })}
            </NavDropdown>

            <Button className="searchBtn fw-bold">Search</Button>
          </div>
        </Form>
      </div>
      <div className="col-md-4 d-flex gap-2 offset-8 view-job-btn">
        <Button
          variant="warning"
          className="fw-bold btn"
          href="https://www.jobringer.com/jobs"
        >
          View Jobs
        </Button>
        <Button variant="outline-light" className="fw-bold btn">
          Register For Free
        </Button>
      </div>
    </div>
  );
};
export default SearchDiv;

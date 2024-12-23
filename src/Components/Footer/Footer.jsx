import React from "react";
import "../Css/Style.css";
import Card from "react-bootstrap/Card";
import CardBody from "react-bootstrap/esm/CardBody";
import CardHeader from "react-bootstrap/esm/CardHeader";
import Button from "react-bootstrap/esm/Button";
import { FaWhatsapp } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaTelegram } from "react-icons/fa";

const cities = [
  "Mumbai",
  "Delhi",
  "Ajmer",
  "Pune",
  "Hyderabad",
  "Agra",
  "Chennai",
  "Kolkata",
  "Indore",
  "Gurugram",
  "Jaipur",
  "Ahmedabad",
];

const countries = [
  "Africa",
  "USA",
  "UK",
  "Australia",
  "Canada",
  "Singapore",
  "Dubai",
  "Saudi Arabia",
  "New Zealand",
  "Brazil",
  "India",
];

const Footer = () => {
  return (
    <footer className="footer w-100 m-0 d-flex ">
      <div className="footer__content">
        <div className="footer__jobs row ">
          <div className="footer__jobs-india col-md-6 col-sm-12 mt-2 footer_margin">
            <Card className="bg-transparent ">
              <CardHeader>
                <h4 className="d-flex justify-content-center fw-bold ">
                  Jobs in India
                </h4>
              </CardHeader>
              <CardBody>
                <div className="checkbox-container checkbox-container1">
                  {cities.map((data, i) => (
                    <span key={i} className="w-auto fw-bold ">
                      <Button variant="outline-dark fw-bold jbtn rounded-3">
                        {data}{" "}
                      </Button>
                    </span>
                  ))}
                </div>
              </CardBody>
            </Card>
          </div>
          <div className="footer__jobs-international col-md-6 col-sm-12 mt-2 footer_margin">
            <Card className="bg-transparent flex-fill">
              <CardHeader>
                <h4 className="d-flex justify-content-center fw-bold">
                  International Jobs
                </h4>
              </CardHeader>
              <CardBody>
                <div className="checkbox-container">
                  {countries.map((data, i) => (
                    <span key={i} className="w-auto fw-bold ">
                      <Button variant="outline-dark fw-bold jbtn rounded-3">
                        {data}{" "}
                      </Button>
                    </span>
                  ))}
                </div>
              </CardBody>
            </Card>
          </div>
        </div>
        <div className="footer__divider"></div>

        <div className="footer__stats row d-flex mx-auto footer_margin">
          <div className="footer__stats-item col-md-3 col-sm-6">
            <h3 className="d-flex justify-content-center fw-bold">
              Jobs Posted
            </h3>
            <p className="d-flex justify-content-center fw-bold">32580</p>
          </div>
          <div className="footer__stats-item col-md-3 col-sm-6">
            <h3 className="d-flex justify-content-center fw-bold">
              Jobs Filled
            </h3>
            <p className="d-flex justify-content-center fw-bold"> 15153</p>
          </div>
          <div className="footer__stats-item col-md-3 col-sm-6">
            <h3 className="d-flex justify-content-center fw-bold">Employers</h3>
            <p className="d-flex justify-content-center fw-bold">20636</p>
          </div>
          <div className="footer__stats-item col-md-3 col-sm-6">
            <h3 className="d-flex justify-content-center fw-bold ">
              Active Users
            </h3>
            <p className="d-flex justify-content-center fw-bold txt">1300695</p>
          </div>
        </div>
        <div className="footer__divider"></div>

        <div className="footer__disclaimer-recognition row footer_margin1">
          <div className="footer__disclaimer col-md-9 col-sm-12">
            <p className="footer__disclaimer_txt">
              <span className="fw-bold">Disclaimer</span>: All Trademarks and
              Logos are the property of their respective owners, depicted here
              purely for representation purpose. Jobringer.com has taken all
              reasonable steps to ensure that information on this site is
              genuine. Job Applicants are advised to evaluate independently.
              Jobringer.com shall not have any responsibility in this regard.
              All Jobseeker services are strictly designed & meant only for job
              search assistance and to maximize the chances for the jobseekers
              to get their dream job. All Job Seeker Credentials and Employment
              Opportunities are subject to individual merit & evaluation. We do
              not guarantee any job to any jobseeker.
            </p>
          </div>
          <div className="footer__recognition col-md-3 col-sm-12">
            <p className="fw-bold">Recognized By</p>
            <img src="/Images/startuplogo.png" alt="Startup India Logo" />
          </div>
        </div>
        <div className="footer__social row">
          <div className="footer__social-icons">
            <p className="fw-bold d-flex align-items-center follow-us">
              Follow us on
            </p>
            <a href="#" className="d-flex align-items-center">
              <FaWhatsapp />
            </a>
            <a href="#">
              <FaFacebook />
            </a>
            <a href="#">
              <FaTwitter />
            </a>
            <a href="#">
              <FaLinkedinIn />
            </a>
            <a href="#">
              <FaYoutube />
            </a>
            <a href="#">
              <FaInstagram />
            </a>
          </div>
        </div>
        <div className="footer__divider"></div>

        <div className="footer__links row">
          <div className="footer__links-list col-md-12 col-sm-12 ">
            <a href="#">Terms and conditions</a>
            <a href="#">Privacy Policy</a>
            <a href="#">Refund / Cancellation Policy</a>
            <a href="#">About Us</a>
            <a href="#">Contact Us</a>
            <a href="#">FAQ</a>
            <a href="#">Blogs</a>
          </div>
        </div>
        <div className="footer__copyright row">
          <div className="col-12">
            <p>
              © All Rights Reserved @ 2024 Jobtech Ventures Private Limited.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

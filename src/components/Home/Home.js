/* eslint-disable jsx-a11y/iframe-has-title */
import React, { useState } from "react";
import "./Home.css";
import LoadProducts from "../../hooks/LoadProducts";
import Product from "../Product/Product";
import banner1 from "../../img/New Project (1).png";
import banner2 from "../../img/New Project (2).png";
import banner3 from "../../img/New Project (3).png";
import { MdOutlineMapsHomeWork } from "react-icons/md";
import { FiShoppingBag, FiTruck } from "react-icons/fi";
import { FaTasks } from "react-icons/fa";
import { IoMdGitNetwork } from "react-icons/io";
import { AiOutlineArrowRight } from "react-icons/ai";
import { RiTeamLine } from "react-icons/ri";
import img from "../../img/Businessman-pana.svg";
import signature from "../../img/signature.png";
import deal from "../../img/Business deal-bro.svg";
import { Button, Modal } from "react-bootstrap";
const Home = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [Products] = LoadProducts();
  return (
    <div>
      {/* carousel section  */}
      <section
        id="carouselExampleCaptions"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-indicators">
          <button
            className="d-flex active"
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="0"
            aria-current="true"
            aria-label="Slide 1"
          >
            <MdOutlineMapsHomeWork />
          </button>
          <button
            className="d-flex"
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          >
            <FiTruck />
          </button>
          <button
            className="d-flex"
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          >
            <FiShoppingBag />
          </button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src={banner1} className="d-block w-100" alt="..." />
            <div className="carousel-caption d-none d-md-block">
              <h5>Warehousing Storage</h5>
              <p>
                You can opt for dedicated platforms from the advantages related
                to shared surfaces, resources and equipment.
              </p>
            </div>
          </div>
          <div className="carousel-item">
            <img src={banner2} className="d-block w-100" alt="..." />
            <div className="carousel-caption d-none d-md-block">
              <h5>Transatlantic Delivery</h5>
              <p>
                Combined rail road transport is particularly well suited to the
                shipping of hazardous goods since it reduces risk.
              </p>
            </div>
          </div>
          <div className="carousel-item">
            <img src={banner3} className="d-block w-100" alt="..." />
            <div className="carousel-caption d-none d-md-block">
              <h5>Sea & Ocean Delivery</h5>
              <p>
                Sea-Air cargo is the last to be loaded and the first to be
                unloaded, reducing transshipment times and risk.
              </p>
            </div>
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </section>
      {/* Welcome Section  */}
      <section className="welcome my-5 px-5">
        <div className="container">
          <div className="row d-flex align-items-center ">
            <div className="col-md-6 p-5 pe-0">
              <h2>WELCOME TO OUR WEBSITE!</h2>
              <p className="pt-3">
                Transcargo makes business flow. As one of the world’s leading
                non-asset-based supply chain management companies, we design and
                implement industry-leading solutions in both freight management.
              </p>
              <p>
                Over 42,000 dedicated employees, working in 17 regional clusters
                around the globe, deliver operational excellence — to provide
                viable answers to the most challenging supply chain questions.
              </p>
              <div className="row pt-3">
                <div className="col-md-6">
                  <p className="m-0">
                    <strong>swdRana</strong>
                  </p>
                  <small>Chairman & Chief Executive Officer</small>
                </div>
                <div className="col-md-6  d-flex justify-content-center">
                  <img className="signature" src={signature} alt="" />
                </div>
              </div>
            </div>
            <div className="col-md-6 d-flex justify-content-center position-relative">
              <img className="deal" src={deal} alt="" />
              <button className="play-btn" onClick={handleShow}></button>
              {/* show hide modal  */}
              <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton></Modal.Header>
                <Modal.Body>
                  <iframe
                    width="100%"
                    autoplay="true"
                    height="345"
                    src="https://www.youtube.com/embed/452JdnsXM54?allowfullscreen=1&autoplay=1&loop=1&controls=0"
                  ></iframe>
                </Modal.Body>
              </Modal>
            </div>
          </div>
        </div>
      </section>
      {/* product section  */}
      <section className="container mx-auto my-5 row">
          <h6 className="text-center">WANT TO SEE</h6>
          <h2 className="text-center mb-5">Our Services</h2>
        {
          Products.slice(0,6)?.map((product) => {
            return <Product key={product._id} product={product}></Product>;
          })
        }
      </section>
      {/* support section  */}
      <section className="support w-100 ">
        <div className="make-dark">
          <div className="container ">
            <div className="row d-flex align-items-center text-light">
              <div className="col-md-7 p-5">
                <h2>Reach your destination 100% sure and safe</h2>
                <p>
                  We designed a detailed homepage layouts that will fit any
                  transportation industry size. We will take care of your cargo
                  or your passenger and deliver them safe and on time!
                </p>
                <Button>
                  Contact Now <AiOutlineArrowRight />
                </Button>
              </div>
              <div className="col-md-5 img-area">
                <img src={img} alt="" />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Counter Section */}
      <section className="counter my-5">
        <div className="container px-5">
          <h6 className="text-center">WHY CHOOSE US</h6>
          <h2 className="text-center">Our Advantages</h2>
          <div className="counter-info row text-center mt-5">
            <div className="col-md-3 col-sm-6">
              <FaTasks color="green" size="50px"/>
              <h2 className="my-4">2154</h2>
              <p>Project Done</p>
            </div>
            <div className="col-md-3 col-sm-6">
              <IoMdGitNetwork color="green"  size="50px"/>
              <h2 className="my-4">162</h2>
              <p>Clients Worldwide</p>
            </div>
            <div className="col-md-3 col-sm-6">
              <FiTruck color="green"  size="50px"/>
              <h2 className="my-4">78</h2>
              <p>Owned Vehicles</p>
            </div>
            <div className="col-md-3 col-sm-6">
              <RiTeamLine color="green"  size="50px"/>
              <h2 className="my-4">245</h2>
              <p>People in Team</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;

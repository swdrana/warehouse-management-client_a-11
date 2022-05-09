import React from "react";
import "./Home.css";
import LoadProducts from "../../hooks/LoadProducts";
import Product from "../Product/Product";
import banner1 from "../../img/New Project (1).png";
import banner2 from "../../img/New Project (2).png";
import banner3 from "../../img/New Project (3).png";
import { MdOutlineMapsHomeWork } from "react-icons/md";
import { FiShoppingBag, FiTruck } from "react-icons/fi";
import { Button } from "react-bootstrap";
const Home = () => {
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
              You can opt for dedicated platforms from the advantages related to shared surfaces, resources and equipment.
              </p>
            </div>
          </div>
          <div className="carousel-item">
            <img src={banner2} className="d-block w-100" alt="..." />
            <div className="carousel-caption d-none d-md-block">
              <h5>Transatlantic Delivery</h5>
              <p>
              Combined rail road transport is particularly well suited to the shipping of hazardous goods since it reduces risk.

              </p>
            </div>
          </div>
          <div className="carousel-item">
            <img src={banner3} className="d-block w-100" alt="..." />
            <div className="carousel-caption d-none d-md-block">
              <h5>Sea & Ocean Delivery</h5>
              <p>
              Sea-Air cargo is the last to be loaded and the first to be unloaded, reducing transshipment times and risk.
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
      {/* product section  */}
      <section className="container mx-auto my-2 row">
        {Products.map((product) => {
          return <Product key={product.id} product={product}></Product>;
        })}
      </section>
      {/* support section  */}
      <section className="support w-100 ">
        <div className="make-dark">
        <div className="container ">
        <div className="row d-flex align-items-center text-light">
            <div className="col-md-7">
                <h2>Reach your destination 100% sure and safe</h2>
                <p>We designed a detailed homepage layouts that will fit any transportation industry size. We will take care of your cargo or your passenger and deliver them safe and on time!</p>
                <Button>Contact Now </Button>
            </div>
            <div className="col-md-5">

            </div>
          </div>
        </div>
        </div>
      </section>
    </div>
  );
};

export default Home;

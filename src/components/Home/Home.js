import React from "react";
import "./Home.css";
import LoadProducts from "../../hooks/LoadProducts";
import Product from "../Product/Product";
import banner1 from "../../img/New Project (1).png";
import banner2 from "../../img/New Project (2).png";
import banner3 from "../../img/New Project (3).png";
import { MdOutlineMapsHomeWork } from "react-icons/md";
import { FiShoppingBag , FiTruck } from "react-icons/fi";
const Home = () => {
  const [Products] = LoadProducts();
  return (
    <div>
    <div
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
        ><MdOutlineMapsHomeWork/></button>
        <button
          className="d-flex"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to="1"
          aria-label="Slide 2"
        ><FiTruck/></button>
        <button
          className="d-flex"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to="2"
          aria-label="Slide 3"
        ><FiShoppingBag/></button>
      </div>
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img src={banner1} className="d-block w-100" alt="..." />
          <div className="carousel-caption d-none d-md-block">
            <h5>First slide label</h5>
            <p>
              Some representative placeholder content for the first slide.
            </p>
          </div>
        </div>
        <div className="carousel-item">
          <img src={banner2} className="d-block w-100" alt="..." />
          <div className="carousel-caption d-none d-md-block">
            <h5>Second slide label</h5>
            <p>
              Some representative placeholder content for the second slide.
            </p>
          </div>
        </div>
        <div className="carousel-item">
          <img src={banner3} className="d-block w-100" alt="..." />
          <div className="carousel-caption d-none d-md-block">
            <h5>Third slide label</h5>
            <p>
              Some representative placeholder content for the third slide.
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
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleCaptions"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
      {/* <img className="img-fluid" src={banner} alt="" /> */}
      <div className="container mx-auto my-2 row">
        {Products.map((product) => {
          return <Product key={product.id} product={product}></Product>;
        })}
      </div>
    </div>
  );
};

export default Home;
import React from "react";
import "./Home.css";
import banner1 from "../../img/warehouse-industry.jpg";
import banner2 from "../../img/courier-with-parcel.jpg";
import banner3 from "../../img/warehouse-workers.jpg";
import LoadProducts from "../../hooks/LoadProducts";
import Product from "../Product/Product";
import { Carousel } from "react-bootstrap";
const Home = () => {
  const [Products] = LoadProducts();
  return (
    <div>
      <Carousel >
        <Carousel.Item interval={1000}>
          <img className="d-block w-100" src={banner1} alt="First slide" />
          <Carousel.Caption>
            <h3 className="text-danger mb-5">Continental Transportation</h3>
            <p className="text-success">To best support your ever-changing logistic needs, we are continuously evolving our transportation services.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={500}>
          <img
            className="d-block w-100"
            src={banner2}
            alt="Second slide"
          />
          <Carousel.Caption>
            <h3 className="text-danger mb-5">Transatlantic Delivery</h3>
            <p className="text-success">Combined rail road transport is particularly well suited to the shipping of hazardous goods since it reduces risk.
            </p> 
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={banner3}
            alt="Third slide"
          />
          <Carousel.Caption>
            <h3 className="text-danger mb-5">Warehousing Storage</h3>
            <p className="text-success">
            You can opt for dedicated platforms from the advantages releted to shared surfaces, resources and equipment.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
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

import React from "react";
import { Spinner } from "react-bootstrap";

const Loading = () => {
  return (
    <div className=" w-100 d-flex justify-content-center align-items-center">
      <Spinner animation="grow" variant="primary" />
      <Spinner animation="grow" variant="secondary" />
      <Spinner animation="grow" variant="success" />
      <Spinner animation="grow" variant="danger" />
      <Spinner animation="grow" variant="warning" />
    </div>
  );
};

export default Loading;

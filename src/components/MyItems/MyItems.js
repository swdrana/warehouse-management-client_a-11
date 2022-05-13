import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import auth from "../../firebase.init";
import Product from "../Product/Product";

const MyItems = () => {
  const [user, loading, error] = useAuthState(auth);
  //   console.log(user.email);
  const email = user.email;
  const [myItems, setMyItems] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:8080/my-items/${email}`)
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        setMyItems(data);
      });
  }, []);
  return (
    <div className="container mb-5">
      <div className="row">
          <div className="my-info text-center">
              <h5>{user?.displayName}</h5>
              <p>{user.email}</p>
          </div>
        { myItems?.length <=0 ? 
        <div className="text-center">
          <h2 className="text-danger my-2">You have not added any products</h2>
          <p>Please Add a new product to see here</p>
          <h4 className="mb-5">Click <Link to="/add-item">Here</Link> to add a new item</h4>
        </div> 
        : 
        <div className="">
            <h3 className="text-center text-success mb-5">{`You have added total: ${myItems.length} products`}</h3>
        </div>
        }
        {myItems.map((product) => {
          return <Product key={product._id} product={product}></Product>;
        })}
      </div>
    </div>
  );
};

export default MyItems;

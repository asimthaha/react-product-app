import React, { useEffect, useState } from "react";
import ProductNavbar from "./ProductNavbar";
import axios from "axios";

const ProductView = () => {
  const [data, changeData] = useState([]);

  const fetchData = () => {
    axios.get("https://fakestoreapi.com/products").then((response) => {
      changeData(response.data);
    });
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <ProductNavbar />
      <div className="container mt-3">
        <div className="row">
          <div className="col">
            <div className="row g-3">
              {data.map((value, index) => {
                return (
                  <div className="col col-12 col-sm-6 col-md-6 col-lg-4 colxl-3 col-xxl-3">
                    <div class="card text-center">
                      <img src={value.image} className="rounded" alt="" />
                      <div class="card-body">
                        <h5 class="card-title">Item: {value.title}</h5>
                        <p class="card-text">Category: {value.category}</p>
                        <p class="card-text">Rs: {value.price}</p>
                        <a href="" class="btn btn-primary">
                          Buy Now
                        </a>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductView;

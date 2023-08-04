import React from "react";
import Filter from "./Filter";
import { MDBContainer, MDBCol, MDBRow } from "mdb-react-ui-kit";
import useCategoryData from "../hooks/useCategoryData";
import ProductCard from "./ProductCard";
import { Link, useNavigate } from "react-router-dom";

function Layout() {
  const { categories } = useCategoryData("watches");
  const displaySomeWatches = categories.watches.slice(0, 3);

  const navigate = useNavigate();

  return (
    <>
      <MDBContainer fluid className="ms-0 mt-5 ">
        <MDBRow className="row-cols-2 row-cols-md-3 g-4 mt-5 justify-content-center">
          {displaySomeWatches.map((someWatches) => (
            <MDBCol key={someWatches.id} md="3">
              <ProductCard
                name={someWatches.name}
                image={someWatches.image}
                description={someWatches.description}
                price={someWatches.price}
              />
            </MDBCol>
          ))}
        </MDBRow>
        <MDBCol className=" d-flex justify-content-center mt-3">
          <button className="btn" onClick={() => navigate("/watches")}>
            View More Watches
          </button>
        </MDBCol>
      </MDBContainer>
    </>
  );
}

export default Layout;

import React from "react";
import Filter from "./Filter";
import { MDBContainer, MDBCol, MDBRow } from "mdb-react-ui-kit";
import useCategoryData from "../hooks/useCategoryData";
import ProductCard from "./ProductCard";
import { Link, useNavigate } from "react-router-dom";

function Layout() {
  const { categories: watchesData } = useCategoryData("watches");
  const { categories: jewelriesData } = useCategoryData("jewelries");
  const { categories: glassesData } = useCategoryData("glasses");

  const displaySomeWatches = watchesData?.watches?.slice(0, 3) || [];
  const displaSomeJewelries = jewelriesData?.jewelries?.slice(0, 3) || [];
  const displaySomeGlasses = glassesData?.glasses?.slice(0, 3) || [];
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
                rating={someWatches.rating}
              />
            </MDBCol>
          ))}
        </MDBRow>
        <MDBCol className=" d-flex justify-content-center mt-3">
          <button className="btn" onClick={() => navigate("/watches")}>
            View More Watches
          </button>
        </MDBCol>
        <MDBRow className="row-cols-2 row-cols-md-3 g-4 mt-5 justify-content-center">
          {displaSomeJewelries.map((someJewelries) => (
            <MDBCol key={someJewelries.id} md="3">
              <ProductCard
                name={someJewelries.name}
                image={someJewelries.image}
                description={someJewelries.description}
                price={someJewelries.price}
                rating={someJewelries.rating}
              />
            </MDBCol>
          ))}
        </MDBRow>
        <MDBCol className=" d-flex justify-content-center mt-3">
          <button className="btn" onClick={() => navigate("/jewelries")}>
            View More Jewelries
          </button>
        </MDBCol>
        <MDBRow className="row-cols-2 row-cols-md-3 g-4 mt-5 justify-content-center">
          {displaySomeGlasses.map((someGlasses) => (
            <MDBCol key={someGlasses.id} md="3">
              <ProductCard
                name={someGlasses.name}
                image={someGlasses.image}
                description={someGlasses.description}
                price={someGlasses.price}
                rating={someGlasses.rating}
              ></ProductCard>
            </MDBCol>
          ))}
        </MDBRow>
        <MDBCol className=" d-flex justify-content-center mt-3">
          <button className="btn" onClick={() => navigate("/glasses")}>
            View More Glasses
          </button>
        </MDBCol>
      </MDBContainer>
    </>
  );
}

export default Layout;

import React, { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";
import { MDBContainer, MDBCol, MDBRow } from "mdb-react-ui-kit";
import Filter from "../components/Filter";
import useCategoryData from "../hooks/useCategoryData";
function Watches() {
  const { categories } = useCategoryData("watches");

  return (
    <MDBContainer className="ms-0 mt-3 d-flex">
      <MDBRow>
        <MDBCol md="3">
          <Filter />
        </MDBCol>
      </MDBRow>
      <MDBRow>
        {categories.watches.map((watch) => (
          <ProductCard
            key={watch.id}
            name={watch.name}
            description={watch.description}
            image={watch.image}
          />
        ))}
      </MDBRow>
    </MDBContainer>
  );
}

export default Watches;

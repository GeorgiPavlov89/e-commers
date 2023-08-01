import React from "react";
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardImage,
  MDBBtn,
  MDBRow,
  MDBCol,
} from "mdb-react-ui-kit";
function ProductCard({ name, description, image }) {
  return (
    <MDBCol sm="3">
      <MDBCard>
        <MDBCardImage src={image} position="top" alt="..." />
        <MDBCardBody>
          <MDBCardTitle>{name}</MDBCardTitle>
          <MDBCardText>{description}</MDBCardText>
          <MDBBtn href="#">Button</MDBBtn>
        </MDBCardBody>
      </MDBCard>
    </MDBCol>
  );
}

export default ProductCard;

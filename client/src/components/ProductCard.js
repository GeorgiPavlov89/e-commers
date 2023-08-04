import React from "react";
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardImage,
  MDBBtn,
  MDBCardFooter,
  MDBCardGroup,
} from "mdb-react-ui-kit";
function ProductCard({ name, description, image, price }) {
  return (
    <MDBCard className="h-100">
      <MDBCardImage src={image} position="top" alt="product-image" />

      <MDBCardBody>
        <MDBCardTitle>{name}</MDBCardTitle>
        <MDBCardText>{description}</MDBCardText>
        <MDBCardText>{price} $</MDBCardText>
      </MDBCardBody>
      <MDBCardFooter className="d-flex justify-content-center">
        <MDBBtn href="#">Add to Cart</MDBBtn>
      </MDBCardFooter>
    </MDBCard>
  );
}

export default ProductCard;

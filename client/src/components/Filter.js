import React from "react";
import { MDBContainer, MDBCheckbox } from "mdb-react-ui-kit";
function Filter() {
  return (
    <MDBContainer className="m-0 border">
      <MDBCheckbox
        name="flexCheck"
        value=""
        id="flexCheckDefault"
        label="Type"
      />
      <MDBCheckbox
        name="flexCheck"
        value=""
        id="flexCheckChecked"
        label="Checked checkbox"
        defaultChecked
      />
    </MDBContainer>
  );
}

export default Filter;

import React from "react";
import {
  MDBDropdown,
  MDBDropdownMenu,
  MDBDropdownToggle,
  MDBDropdownItem,
} from "mdb-react-ui-kit";
function Sort() {
  return (
    <MDBDropdown group className="shadow-0">
      <MDBDropdownToggle color="dark">Sort</MDBDropdownToggle>
      <MDBDropdownMenu>
        <MDBDropdownItem link>Price (low-high)</MDBDropdownItem>
        <MDBDropdownItem link>Price (high-low)</MDBDropdownItem>
        <MDBDropdownItem link>Something else here</MDBDropdownItem>
      </MDBDropdownMenu>
    </MDBDropdown>
  );
}

export default Sort;

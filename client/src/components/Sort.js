import React, { useState } from "react";
import {
  MDBDropdown,
  MDBDropdownMenu,
  MDBDropdownToggle,
  MDBDropdownItem,
} from "mdb-react-ui-kit";
function Sort({ sortCriteria, setSortCriteria }) {
  const [selectedSortCriteria, setSelectedSortCriteria] = useState("");
  const handleSortCriteriaChange = (criteria, e) => {
    setSortCriteria(criteria, e);
    setSelectedSortCriteria(e.currentTarget.textContent);
  };

  return (
    <div>
      <MDBDropdown group className="shadow-0 ">
        <MDBDropdownToggle color="dark">Sort</MDBDropdownToggle>
        <MDBDropdownMenu style={{ margin: 0 }}>
          <MDBDropdownItem
            link
            onClick={(e) => handleSortCriteriaChange("relevance", e)}
            value="Relevance"
          >
            Relevance
          </MDBDropdownItem>
          <MDBDropdownItem
            link
            onClick={(e) => handleSortCriteriaChange("priceLowToHigh", e)}
            value="Price (high-low)"
          >
            Price (high-low)
          </MDBDropdownItem>
          <MDBDropdownItem
            link
            onClick={(e) => handleSortCriteriaChange("priceHighToLow", e)}
            value="Price (low-high)"
          >
            Price (low-high)
          </MDBDropdownItem>
          <MDBDropdownItem
            link
            onClick={(e) => handleSortCriteriaChange("brandAZ", e)}
            value="Brand (A-Z)"
          >
            Brand (A-Z)
          </MDBDropdownItem>
          <MDBDropdownItem
            link
            onClick={(e) => handleSortCriteriaChange("brandZA", e)}
            value="Brand (Z-A)"
          >
            Brand (Z-A)
          </MDBDropdownItem>
        </MDBDropdownMenu>
      </MDBDropdown>
      <div>
        <p>{selectedSortCriteria}</p>
      </div>
    </div>
  );
}

export default Sort;

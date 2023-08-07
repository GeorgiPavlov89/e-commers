import React, { useState, useEffect } from "react";
import { MDBContainer, MDBRow, MDBCol } from "mdb-react-ui-kit";
import Filter from "../components/Filter"; // Import your Filter component
import Sort from "../components/Sort"; // Import your Sort component
import ProductCard from "../components/ProductCard"; // Import your ProductCard component
import useCategoryData from "../hooks/useCategoryData";

const Jewelries = () => {
  const { categories } = useCategoryData("jewelries");
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [selectedMaterials, setSelectedMaterials] = useState([]);
  const [sortCriteria, setSortCriteria] = useState("");
  const [sortDirection, setSortDirection] = useState("");
  const [jewelriesFound, setJewelriesFound] = useState(
    categories.jewelries.length
  );
  console.log(jewelriesFound);

  const filterItems = (items, selectedCategories, selectedMaterials) => {
    return items.filter((item) => {
      if (
        (selectedCategories.length === 0 ||
          selectedCategories.includes(item.category)) &&
        (selectedMaterials.length === 0 ||
          selectedMaterials.includes(item.material))
      ) {
        return true;
      }
      return false;
    });
  };

  const sortJewelries = (jewelries, sortCriteria, sortDirection) => {
    return jewelries.slice().sort((a, b) => {
      if (sortCriteria === "relevance") {
        return jewelries;
      } else if (sortCriteria === "priceLowToHigh") {
        return sortDirection === "asc" ? a.price - b.price : b.price - a.price;
      } else if (sortCriteria === "priceHighToLow") {
        return sortDirection === "asc" ? b.price - a.price : a.price - b.price;
      } else if (sortCriteria === "brandAZ") {
        return sortDirection === "asc"
          ? a.brand.localeCompare(b.brand)
          : b.brand.localeCompare(a.brand);
      } else if (sortCriteria === "brandZA") {
        return sortDirection === "asc"
          ? b.brand.localeCompare(a.brand)
          : a.brand.localeCompare(b.brand);
      }
      return 0;
    });
  };
  // Apply Filters and Sorting
  const filteredJewelries = filterItems(
    categories.jewelries,
    selectedCategories,
    selectedMaterials,
    jewelriesFound
  );
  const sortedAndFilteredJewelries = sortJewelries(
    filteredJewelries,
    sortCriteria,
    sortDirection
  );

  // Load More Functionality
  const itemsPerPage = 6;
  const [displayedJewelries, setDisplayedJewelries] = useState(itemsPerPage);

  const loadMoreJewelries = () => {
    setDisplayedJewelries((prevDisplayed) => prevDisplayed + itemsPerPage);
  };

  useEffect(() => {
    setJewelriesFound(sortedAndFilteredJewelries.length);
  }, [sortedAndFilteredJewelries]);

  return (
    <MDBContainer fluid className="ms-0 mt-5">
      <MDBRow>
        <MDBCol md="2" size="6" className="filterMobile">
          <Filter
            setSelectedCategories={setSelectedCategories}
            setSelectedMaterials={setSelectedMaterials}
            setFoundFunction={setJewelriesFound}
            categories={categories}
            selectedCategories={selectedCategories}
            selectedMaterials={selectedMaterials}
            jewelriesFound={jewelriesFound}
            componentType="Jewelries"
          />
        </MDBCol>
        <MDBCol className="order-md-1 order-lg-1 order-sm-1 sortMobile">
          <Sort
            sortCriteria={sortCriteria}
            setSortCriteria={setSortCriteria}
            sortDirection={sortDirection}
            setSortDirection={setSortDirection}
          />
        </MDBCol>
        <MDBCol md="8">
          <MDBRow className="row-cols-2 row-cols-md-3 g-4 mt-5">
            {sortedAndFilteredJewelries
              .slice(0, displayedJewelries)
              .map((jewellery) => (
                <MDBCol key={jewellery.id}>
                  <ProductCard
                    name={jewellery.name}
                    description={jewellery.description}
                    image={jewellery.image}
                    price={jewellery.price}
                    rating={jewellery.rating}
                  />
                </MDBCol>
              ))}
          </MDBRow>
          {displayedJewelries < sortedAndFilteredJewelries.length && (
            <div className="text-center mt-3">
              <button className="btn btn-primary" onClick={loadMoreJewelries}>
                Load More
              </button>
            </div>
          )}
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
};

export default Jewelries;

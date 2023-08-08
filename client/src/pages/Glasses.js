import React, { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";
import { MDBContainer, MDBCol, MDBRow } from "mdb-react-ui-kit";
import Filter from "../components/Filter";
import useCategoryData from "../hooks/useCategoryData";
import Sort from "../components/Sort";

function Glasses() {
  const { categories } = useCategoryData("glasses");
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [selectedMaterials, setSelectedMaterials] = useState([]);
  const [sortCriteria, setSortCriteria] = useState("priceLowToHigh");
  const [sortDirection, setSortDirection] = useState("asc");

  const [glassesFound, setGlassesFound] = useState(categories.watches.length);

  // Sort Glasses
  const sortGlasses = (glasses, sortCriteria, sortDirection) => {
    return glasses.slice().sort((a, b) => {
      if (sortCriteria === "relevance") {
        return glasses;
      } else if (sortCriteria === "priceHighToLow") {
        return sortDirection === "asc" ? a.price - b.price : b.price - a.price;
      } else if (sortCriteria === "priceLowToHigh") {
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
  //Filter Glasses and display them
  const filteredGlasses = filterItems(
    categories.glasses,
    selectedCategories,
    selectedMaterials
  );
  const sortedAndFilteredGlasses = sortGlasses(
    filteredGlasses,
    sortCriteria,
    sortDirection
  );

  // Load More Functionality
  const itemsPerPage = 3;
  const [displayedGlasses, setDisplayedGlasses] = useState(6);

  const loadMoreGlasses = () => {
    setDisplayedGlasses((prevDisplayed) => prevDisplayed + itemsPerPage);
  };
  useEffect(() => {
    setGlassesFound(sortedAndFilteredGlasses.length);
  }, [sortedAndFilteredGlasses]);

  return (
    <MDBContainer fluid className="ms-0 mt-5 ">
      <MDBRow>
        <MDBCol md="2" size="6" className="filterMobile">
          <Filter
            setSelectedCategories={setSelectedCategories}
            setSelectedMaterials={setSelectedMaterials}
            setFoundFunction={setGlassesFound}
            categories={categories}
            selectedCategories={selectedCategories}
            selectedMaterials={selectedMaterials}
            componentType="Glasses"
            glassesFound={glassesFound}
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
            {sortedAndFilteredGlasses
              .slice(0, displayedGlasses)
              .map((glass) => (
                <MDBCol key={glass.id}>
                  <ProductCard
                    name={glass.name}
                    description={glass.description}
                    image={glass.image}
                    price={glass.price}
                    rating={glass.rating}
                  />
                </MDBCol>
              ))}
          </MDBRow>
          {displayedGlasses < sortedAndFilteredGlasses.length && (
            <div className="text-center mt-3">
              <button className="btn btn-primary" onClick={loadMoreGlasses}>
                Load More
              </button>
            </div>
          )}
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
}

export default Glasses;

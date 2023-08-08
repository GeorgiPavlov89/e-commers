import React, { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";
import { MDBContainer, MDBCol, MDBRow } from "mdb-react-ui-kit";
import Filter from "../components/Filter";
import useCategoryData from "../hooks/useCategoryData";
import Sort from "../components/Sort";

function Watches() {
  const { categories } = useCategoryData("watches");
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [selectedMaterials, setSelectedMaterials] = useState([]);
  const [sortCriteria, setSortCriteria] = useState("priceLowToHigh");
  const [sortDirection, setSortDirection] = useState("asc");

  const [watchesFound, setWatchesFound] = useState(categories.watches.length);

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

  // Sort Watches
  const sortWatches = (watches, sortCriteria, sortDirection) => {
    return watches.slice().sort((a, b) => {
      if (sortCriteria === "relevance") {
        return watches;
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

  //Filter Watches and display them
  const filteredWatches = filterItems(
    categories.watches,
    selectedCategories,
    selectedMaterials
  );
  const sortedAndFilteredWatches = sortWatches(
    filteredWatches,
    sortCriteria,
    sortDirection
  );

  // Load More Functionality
  const itemsPerPage = 3;
  const [displayedWatches, setDisplayedWatches] = useState(6);

  const loadMoreWatches = () => {
    setDisplayedWatches((prevDisplayed) => prevDisplayed + itemsPerPage);
  };
  useEffect(() => {
    setWatchesFound(sortedAndFilteredWatches.length);
  }, [sortedAndFilteredWatches]);

  return (
    <MDBContainer fluid className="ms-0 mt-5 ">
      <MDBRow>
        <MDBCol md="2" size="6" className="filterMobile">
          <Filter
            setSelectedCategories={setSelectedCategories}
            setSelectedMaterials={setSelectedMaterials}
            setFoundFunction={setWatchesFound}
            categories={categories}
            selectedCategories={selectedCategories}
            selectedMaterials={selectedMaterials}
            componentType="Watches"
            watchesFound={watchesFound}
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
            {sortedAndFilteredWatches
              .slice(0, displayedWatches)
              .map((watch) => (
                <MDBCol key={watch.id}>
                  <ProductCard
                    name={watch.name}
                    description={watch.description}
                    image={watch.image}
                    price={watch.price}
                    rating={watch.rating}
                  />
                </MDBCol>
              ))}
          </MDBRow>
          {displayedWatches < sortedAndFilteredWatches.length && (
            <div className="text-center mt-3">
              <button className="btn btn-primary" onClick={loadMoreWatches}>
                Load More
              </button>
            </div>
          )}
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
}

export default Watches;

import React, { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";
import { MDBContainer, MDBCol, MDBRow } from "mdb-react-ui-kit";
import Filter from "../components/Filter";
import useCategoryData from "../hooks/useCategoryData";
import Sort from "../components/Sort";

function Watches() {
  const { categories } = useCategoryData("watches");
  const [selectedTypes, setSelectedTypes] = useState([]);
  const [selectedMaterials, setSelectedMaterials] = useState([]);
  const [displayedWatches, setDisplayedWatches] = useState(6);
  const [watchesFound, setWatchesFound] = useState(categories.watches.length);

  //Filter Watches and display them
  const watchesToDisplay = categories.watches
    .filter((watch) => {
      if (
        (selectedTypes.length === 0 || selectedTypes.includes(watch.type)) &&
        (selectedMaterials.length === 0 ||
          selectedMaterials.includes(watch.material))
      ) {
        return true;
      }
      return false;
    })
    .slice(0, displayedWatches);

  // Load More Button Function
  const loadMoreWatches = () => {
    setDisplayedWatches((prevCount) => prevCount + 3);
  };

  const applyFilters = () => {
    setDisplayedWatches(6);
  };

  return (
    <MDBContainer fluid className="ms-0 mt-5 ">
      <MDBRow>
        <MDBCol md="2" size="6" className="filterMobile">
          <Filter
            onApplyFilters={applyFilters}
            setSelectedTypes={setSelectedTypes}
            setSelectedMaterials={setSelectedMaterials}
            watchesFound={watchesFound}
            setWatchesFound={setWatchesFound}
            categories={categories}
            selectedTypes={selectedTypes}
            selectedMaterials={selectedMaterials}
          />
        </MDBCol>
        <MDBCol className="order-md-1 order-lg-1 order-sm-1 sortMobile">
          <Sort />
        </MDBCol>
        <MDBCol md="8">
          <MDBRow className="row-cols-2 row-cols-md-3 g-4 mt-5">
            {watchesToDisplay.map((watch) => (
              <MDBCol key={watch.id}>
                <ProductCard
                  name={watch.name}
                  description={watch.description}
                  image={watch.image}
                  price={watch.price}
                />
              </MDBCol>
            ))}
          </MDBRow>
          {displayedWatches < categories.watches.length && (
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

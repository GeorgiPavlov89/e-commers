import React, { useEffect, useState } from "react";
import {
  MDBCheckbox,
  MDBBtn,
  MDBModal,
  MDBModalDialog,
  MDBModalContent,
  MDBModalHeader,
  MDBModalTitle,
  MDBModalBody,
  MDBModalFooter,
} from "mdb-react-ui-kit";

function Filter({
  onApplyFilters,
  setSelectedTypes,
  setSelectedMaterials,
  watchesFound,
  setWatchesFound,
  categories,
  selectedTypes,
  selectedMaterials,
}) {
  const [basicModal, setBasicModal] = useState(false);

  const toggleShow = () => setBasicModal(!basicModal);

  const applyFiltersMobile = () => {
    onApplyFilters();
  };

  const handleCheckboxChange = (value, setSelectedFunction) => {
    setSelectedFunction((prev) =>
      prev.includes(value)
        ? prev.filter((item) => item !== value)
        : [...prev, value]
    );
  };

  useEffect(() => {
    const filteredWatches = categories.watches.filter((watch) => {
      if (
        (selectedTypes.length === 0 || selectedTypes.includes(watch.type)) &&
        (selectedMaterials.length === 0 ||
          selectedMaterials.includes(watch.material))
      ) {
        return true;
      }
      return false;
    });

    setWatchesFound(filteredWatches.length);
  }, [categories.watches, selectedTypes, selectedMaterials, setWatchesFound]);

  return (
    <>
      <div className="filter-modal">
        <MDBBtn color=" dark" onClick={toggleShow}>
          Filter
        </MDBBtn>
        <MDBModal show={basicModal} setShow={setBasicModal} tabIndex="-1">
          <MDBModalDialog>
            <MDBModalContent>
              <MDBModalHeader>
                <MDBModalTitle>Filter Watches</MDBModalTitle>
                <MDBBtn className="btn-close" onClick={toggleShow}></MDBBtn>
              </MDBModalHeader>
              <MDBModalBody>
                <span>By Type</span>
                <MDBCheckbox
                  name="flexCheck"
                  value="Wrist"
                  label="Wrist"
                  onChange={(e) =>
                    handleCheckboxChange("wrist", setSelectedTypes)
                  }
                />
                <MDBCheckbox
                  name="flexCheck"
                  value="Smart"
                  label="Smart"
                  onChange={(e) =>
                    handleCheckboxChange("smart", setSelectedTypes)
                  }
                />
                <MDBCheckbox
                  name="flexCheck"
                  value="Pocket"
                  label="Pocket"
                  onChange={(e) =>
                    handleCheckboxChange("pocket", setSelectedTypes)
                  }
                />
                <span>By Materials</span>
                <MDBCheckbox
                  name="flexCheck"
                  value="Steel"
                  label="Steel"
                  onChange={(e) =>
                    handleCheckboxChange("steel", setSelectedMaterials)
                  }
                />
                <MDBCheckbox
                  name="flexCheck"
                  value="Gold"
                  label="Gold"
                  onChange={(e) =>
                    handleCheckboxChange("gold", setSelectedMaterials)
                  }
                />
                <MDBCheckbox
                  name="flexCheck"
                  value="Bronze"
                  label="Bronze"
                  onChange={(e) =>
                    handleCheckboxChange("bronze", setSelectedMaterials)
                  }
                />
              </MDBModalBody>

              <MDBModalFooter className="align-self-center">
                <MDBBtn onClick={applyFiltersMobile}>
                  Show Results{" "}
                  <span style={{ color: "black" }}>
                    {watchesFound} products
                  </span>
                </MDBBtn>
              </MDBModalFooter>
            </MDBModalContent>
          </MDBModalDialog>
        </MDBModal>
      </div>

      <div className="filter-desktop">
        <div className="d-flex flex-column">
          <h3 className="ms-3">Filter Watches</h3>

          <p className="ms-3">{watchesFound} products</p>
        </div>
        <div className="ms-3">
          <span>By Type</span>

          <MDBCheckbox
            name="flexCheck"
            value="wrist"
            label="Wrist"
            onChange={(e) => handleCheckboxChange("wrist", setSelectedTypes)}
          />
          <MDBCheckbox
            name="flexCheck"
            value="smart"
            label="Smart"
            onChange={(e) => handleCheckboxChange("smart", setSelectedTypes)}
          />
          <MDBCheckbox
            name="flexCheck"
            value="pocket"
            label="Pocket"
            onChange={(e) => handleCheckboxChange("pocket", setSelectedTypes)}
          />

          <span>By Materials</span>
          <MDBCheckbox
            name="flexCheck"
            value="steel"
            label="Steel"
            onChange={(e) =>
              handleCheckboxChange("steel", setSelectedMaterials)
            }
          />
          <MDBCheckbox
            name="flexCheck"
            value="gold"
            label="Gold"
            onChange={(e) => handleCheckboxChange("gold", setSelectedMaterials)}
          />
          <MDBCheckbox
            name="flexCheck"
            value="bronze"
            label="Bronze"
            onChange={(e) =>
              handleCheckboxChange("bronze", setSelectedMaterials)
            }
          />
        </div>
      </div>
    </>
  );
}

export default Filter;

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
  glassesFound,
  setSelectedCategories,
  setSelectedMaterials,
  jewelriesFound,
  componentType,
  watchesFound,
}) {
  const [basicModal, setBasicModal] = useState(false);

  const toggleShow = () => setBasicModal(!basicModal);

  const handleCheckboxChange = (value, setSelectedFunction) => {
    setSelectedFunction((prev) =>
      prev.includes(value)
        ? prev.filter((item) => item !== value)
        : [...prev, value]
    );
  };

  return (
    <>
      <div className="filter-modal">
        <MDBBtn color=" dark" onClick={toggleShow}>
          Filter {componentType}
        </MDBBtn>
        <MDBModal show={basicModal} setShow={setBasicModal} tabIndex="-1">
          <MDBModalDialog>
            <MDBModalContent>
              <MDBModalHeader>
                <MDBModalTitle>Filter {componentType}</MDBModalTitle>
                <MDBBtn className="btn-close" onClick={toggleShow}></MDBBtn>
              </MDBModalHeader>
              <span>By Type</span>
              {componentType === "Jewelries" && (
                <MDBModalBody>
                  <MDBCheckbox
                    name="flexCheck"
                    value="Necklace"
                    label="Necklace"
                    onChange={(e) =>
                      handleCheckboxChange("necklace", setSelectedCategories)
                    }
                  />
                  <MDBCheckbox
                    name="flexCheck"
                    value="Bracelet"
                    label="Bracelet"
                    onChange={(e) =>
                      handleCheckboxChange("bracelet", setSelectedCategories)
                    }
                  />
                  <MDBCheckbox
                    name="flexCheck"
                    value="Ring"
                    label="Ring"
                    onChange={(e) =>
                      handleCheckboxChange("ring", setSelectedCategories)
                    }
                  />
                  <MDBCheckbox
                    name="flexCheck"
                    value="Crown"
                    label="Crown"
                    onChange={(e) =>
                      handleCheckboxChange("crown", setSelectedCategories)
                    }
                  />
                  <MDBCheckbox
                    name="flexCheck"
                    value="Decor"
                    label="Decor"
                    onChange={(e) =>
                      handleCheckboxChange("decor", setSelectedCategories)
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
                  <MDBModalFooter className="align-self-center">
                    <MDBBtn onClick={toggleShow}>
                      Show Results{" "}
                      <span style={{ color: "black" }}>
                        {jewelriesFound} products
                      </span>
                    </MDBBtn>
                  </MDBModalFooter>
                </MDBModalBody>
              )}
              {componentType === "Watches" && (
                <MDBModalBody>
                  <MDBCheckbox
                    name="flexCheck"
                    value="wrist"
                    label="Wrist"
                    onChange={(e) =>
                      handleCheckboxChange("wrist", setSelectedCategories)
                    }
                  />
                  <MDBCheckbox
                    name="flexCheck"
                    value="pocket"
                    label="Pocket"
                    onChange={(e) =>
                      handleCheckboxChange("pocket", setSelectedCategories)
                    }
                  />
                  <MDBCheckbox
                    name="flexCheck"
                    value="smart"
                    label="Smart"
                    onChange={(e) =>
                      handleCheckboxChange("smart", setSelectedCategories)
                    }
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
                    onChange={(e) =>
                      handleCheckboxChange("gold", setSelectedMaterials)
                    }
                  />
                  <MDBCheckbox
                    name="flexCheck"
                    value="bronze"
                    label="Bronze"
                    onChange={(e) =>
                      handleCheckboxChange("bronze", setSelectedMaterials)
                    }
                  />
                  <MDBModalFooter className="align-self-center">
                    <MDBBtn onClick={toggleShow}>
                      Show Results{" "}
                      <span style={{ color: "black" }}>
                        {watchesFound} products
                      </span>
                    </MDBBtn>
                  </MDBModalFooter>
                </MDBModalBody>
              )}
              {componentType === "Glasses" && (
                <MDBModalBody>
                  <MDBCheckbox
                    name="flexCheck"
                    value="men"
                    label="Men"
                    onChange={(e) =>
                      handleCheckboxChange("men", setSelectedCategories)
                    }
                  />
                  <MDBCheckbox
                    name="flexCheck"
                    value="women"
                    label="Women"
                    onChange={(e) =>
                      handleCheckboxChange("women", setSelectedCategories)
                    }
                  />
                  <MDBCheckbox
                    name="flexCheck"
                    value="unisex"
                    label="Unisex"
                    onChange={(e) =>
                      handleCheckboxChange("unisex", setSelectedCategories)
                    }
                  />

                  <span>By Materials</span>
                  <MDBCheckbox
                    name="flexCheck"
                    value="plastic"
                    label="Plastic"
                    onChange={(e) =>
                      handleCheckboxChange("plastic", setSelectedMaterials)
                    }
                  />
                  <MDBCheckbox
                    name="flexCheck"
                    value="metal"
                    label="Metal"
                    onChange={(e) =>
                      handleCheckboxChange("metal", setSelectedMaterials)
                    }
                  />
                  <MDBCheckbox
                    name="flexCheck"
                    value="wood"
                    label="Wood"
                    onChange={(e) =>
                      handleCheckboxChange("wood", setSelectedMaterials)
                    }
                  />
                  <MDBModalFooter className="align-self-center">
                    <MDBBtn onClick={toggleShow}>
                      Show Results{" "}
                      <span style={{ color: "black" }}>
                        {glassesFound} products
                      </span>
                    </MDBBtn>
                  </MDBModalFooter>
                </MDBModalBody>
              )}
            </MDBModalContent>
          </MDBModalDialog>
        </MDBModal>
      </div>

      <div className="filter-desktop">
        <div className="d-flex flex-column">
          <h3 className="ms-3">Filter {componentType}</h3>

          <p className="ms-3">
            {componentType === "Jewelries"
              ? jewelriesFound
              : componentType === "Watches"
              ? watchesFound
              : glassesFound}{" "}
            products
          </p>
        </div>
        <div className="ms-3">
          {componentType === "Jewelries" && (
            <>
              <span>By Type</span>

              <MDBCheckbox
                name="flexCheck"
                value="Necklace"
                label="Necklace"
                onChange={(e) =>
                  handleCheckboxChange("necklace", setSelectedCategories)
                }
              />
              <MDBCheckbox
                name="flexCheck"
                value="Bracelet"
                label="Bracelet"
                onChange={(e) =>
                  handleCheckboxChange("bracelet", setSelectedCategories)
                }
              />
              <MDBCheckbox
                name="flexCheck"
                value="Ring"
                label="Ring"
                onChange={(e) =>
                  handleCheckboxChange("ring", setSelectedCategories)
                }
              />
              <MDBCheckbox
                name="flexCheck"
                value="Crown"
                label="Crown"
                onChange={(e) =>
                  handleCheckboxChange("crown", setSelectedCategories)
                }
              />
              <MDBCheckbox
                name="flexCheck"
                value="Decor"
                label="Decor"
                onChange={(e) =>
                  handleCheckboxChange("decor", setSelectedCategories)
                }
              />

              <span>By Materials</span>
              <MDBCheckbox
                name="flexCheck"
                value="diamond"
                label="Diamond"
                onChange={(e) =>
                  handleCheckboxChange("diamond", setSelectedMaterials)
                }
              />
              <MDBCheckbox
                name="flexCheck"
                value="gold"
                label="Gold"
                onChange={(e) =>
                  handleCheckboxChange("gold", setSelectedMaterials)
                }
              />
              <MDBCheckbox
                name="flexCheck"
                value="bronze"
                label="Bronze"
                onChange={(e) =>
                  handleCheckboxChange("bronze", setSelectedMaterials)
                }
              />
              <MDBCheckbox
                name="flexCheck"
                value="platinum"
                label="Platinum"
                onChange={(e) =>
                  handleCheckboxChange("platinum", setSelectedMaterials)
                }
              />
            </>
          )}
        </div>
        <div className="ms-3">
          {componentType === "Watches" && (
            <>
              <span>By Type</span>

              <MDBCheckbox
                name="flexCheck"
                value="wrist"
                label="Wrist"
                onChange={(e) =>
                  handleCheckboxChange("wrist", setSelectedCategories)
                }
              />
              <MDBCheckbox
                name="flexCheck"
                value="pocket"
                label="Pocket"
                onChange={(e) =>
                  handleCheckboxChange("pocket", setSelectedCategories)
                }
              />
              <MDBCheckbox
                name="flexCheck"
                value="smart"
                label="Smart"
                onChange={(e) =>
                  handleCheckboxChange("smart", setSelectedCategories)
                }
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
                onChange={(e) =>
                  handleCheckboxChange("gold", setSelectedMaterials)
                }
              />
              <MDBCheckbox
                name="flexCheck"
                value="bronze"
                label="Bronze"
                onChange={(e) =>
                  handleCheckboxChange("bronze", setSelectedMaterials)
                }
              />
            </>
          )}
          {componentType === "Glasses" && (
            <>
              <MDBCheckbox
                name="flexCheck"
                value="men"
                label="Men"
                onChange={(e) =>
                  handleCheckboxChange("men", setSelectedCategories)
                }
              />
              <MDBCheckbox
                name="flexCheck"
                value="women"
                label="Women"
                onChange={(e) =>
                  handleCheckboxChange("women", setSelectedCategories)
                }
              />
              <MDBCheckbox
                name="flexCheck"
                value="unisex"
                label="Unisex"
                onChange={(e) =>
                  handleCheckboxChange("unisex", setSelectedCategories)
                }
              />

              <span>By Materials</span>
              <MDBCheckbox
                name="flexCheck"
                value="plastic"
                label="Plastic"
                onChange={(e) =>
                  handleCheckboxChange("plastic", setSelectedMaterials)
                }
              />
              <MDBCheckbox
                name="flexCheck"
                value="metal"
                label="Metal"
                onChange={(e) =>
                  handleCheckboxChange("metal", setSelectedMaterials)
                }
              />
              <MDBCheckbox
                name="flexCheck"
                value="wood"
                label="Wood"
                onChange={(e) =>
                  handleCheckboxChange("wood", setSelectedMaterials)
                }
              />
            </>
          )}
        </div>
      </div>
    </>
  );
}

export default Filter;

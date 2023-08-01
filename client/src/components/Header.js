import React, { useState, useEffect } from "react";
import {
  MDBNavbar,
  MDBNavbarNav,
  MDBNavbarItem,
  MDBNavbarLink,
  MDBNavbarToggler,
  MDBContainer,
  MDBIcon,
  MDBCollapse,
  MDBBadge,
} from "mdb-react-ui-kit";

export default function Header() {
  const [showBasic, setShowBasic] = useState(true);

  useEffect(() => {
    const handleResize = () => {
      setShowBasic(window.innerWidth >= 992);
    };

    window.addEventListener("resize", handleResize);

    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <header className="sticky-header" style={{ height: 100 }}>
      <MDBNavbar
        expand="lg"
        light
        bgColor="white"
        className="d-flex flex-nowrap h-100 "
      >
        <MDBContainer fluid className="h-100">
          <MDBNavbarToggler
            onClick={() => setShowBasic(!showBasic)}
            type="button"
            data-target="#navbarCenteredExample"
            aria-controls="navbarCenteredExample"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <MDBIcon fas icon="bars" />
          </MDBNavbarToggler>

          {showBasic ? (
            <MDBNavbarLink aria-current="page" href="/">
              <div className="logo">
                <img
                  src="./images/logo.jpg"
                  style={{ height: "70px", width: "70px" }}
                  alt="logo"
                />
              </div>
            </MDBNavbarLink>
          ) : null}

          <MDBCollapse show={showBasic} navbar>
            <MDBNavbarNav
              fullWidth={false}
              className="mb-2 mb-lg-0 align-items-center"
            >
              <MDBNavbarItem active></MDBNavbarItem>
              <MDBNavbarItem>
                <MDBNavbarLink href="/watches">Watches</MDBNavbarLink>
              </MDBNavbarItem>
              <MDBNavbarItem>
                <MDBNavbarLink href="#">Jewelries</MDBNavbarLink>
              </MDBNavbarItem>
              <MDBNavbarItem>
                <MDBNavbarLink href="#">Glasses</MDBNavbarLink>
              </MDBNavbarItem>
            </MDBNavbarNav>
          </MDBCollapse>
        </MDBContainer>
        <div className="d-flex align-items-center me-3">
          <MDBBadge pill color="danger">
            0
          </MDBBadge>
          <span>
            <MDBIcon fas icon="shopping-cart"></MDBIcon>
          </span>
        </div>
      </MDBNavbar>
    </header>
  );
}

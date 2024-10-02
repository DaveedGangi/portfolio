import { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import './index.css';  // Import the custom styles

import { Link as ScrollLink } from "react-scroll";

function NavSmaller() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  useEffect(() => {
    // Apply custom width dynamically when offcanvas is opened
    if (show) {
      document.querySelector('.offcanvas').style.width = '300px'; // Set your desired width here
    }
  }, [show]);

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Launch
      </Button>

      <Offcanvas show={show} onHide={handleClose} placement="end" className="small-offcanvas">
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Offcanvas</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <div>
            <div>
              <ScrollLink to="about" smooth={true} duration={500}>
                About Me
              </ScrollLink>
            </div>
            <div>
              <ScrollLink to="contact" smooth={true} duration={500}>
                Contact
              </ScrollLink>
            </div>
          </div>
        </Offcanvas.Body>
      </Offcanvas>

      <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css"
        integrity="sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN"
        crossOrigin="anonymous"
      />
    </>
  );
}

export default NavSmaller;

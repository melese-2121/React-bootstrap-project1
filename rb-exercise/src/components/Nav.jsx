import React, { useState, useContext } from "react";
import { CartContext } from "../CartContext";
import { getProductData } from "../products";
import { FaTrashAlt } from "react-icons/fa";

import { Container, Button, Navbar, Modal, Badge } from "react-bootstrap";

function Nav() {
  const [show, setShow] = useState(false);
  const toggleShow = () => {
    setShow(!show);
  };

  const cart = useContext(CartContext);
  let total = 0;
  cart.items.map((item) => {
    total += item.quantity;
  });

  // Calcultae Total Price Of Each Product
  const itemQuantity = (id) => {
    const item = cart.items.find((item) => item.id === id);
    return item.quantity;
  };

  return (
    <React.Fragment>
      <Navbar bg="dark" variant="dark">
        <Container className="m-3">
          <Navbar.Brand href="#home">Ecommerce-Store</Navbar.Brand>
          <Button onClick={toggleShow} variant="info" className="my-3 py-3">
            <strong>Cart</strong>{" "}
            <span className="badge bg-secondary py-2">
              {total}
              {total > 1 ? " Items" : " Item"}
            </span>
          </Button>
        </Container>
      </Navbar>
      <Modal show={show} onHide={toggleShow}>
        <Modal.Header className="bg-success" closeButton closeButton-danger>
          <Modal.Title>
            <h2>Cart Detail</h2>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {cart.items.map((item) => {
            const itemData = getProductData(item.id);
            return (
              <div>
                <h6 className="text-info d-flex justify-content-between">
                  <h4>{itemData.name}</h4>
                  <FaTrashAlt
                    style={{
                      color: "red",
                      width: "50px",
                      cursor: "pointer",
                    }}
                    fontSize="23px"
                    onClick={() => {
                      cart.deleteItemFromCart(item.id);
                    }}
                  />
                </h6>

                <p>
                  <strong>price:</strong> ${itemData.price}
                </p>
                <p>
                  <strong>Quantity:</strong> {itemQuantity(item.id)}
                </p>
                <p>
                  <strong>Total price:</strong> $
                  {itemData.price * itemQuantity(item.id)}
                </p>

                <div className="d-flex justify-content-end"></div>
                <hr />

                <hr />
              </div>
            );
          })}
          <div className="d-flex justify-content-between">
            <h5>
              Total Cost = $
              {<span className="text-warning">{cart.getTotalCost()}</span>}
            </h5>
            <Button className="bg-success">Purchase Products</Button>
          </div>
        </Modal.Body>
        <Modal.Footer>This is modal footer</Modal.Footer>
      </Modal>
    </React.Fragment>
  );
}

export default Nav;

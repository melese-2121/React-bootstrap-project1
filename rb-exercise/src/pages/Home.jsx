import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import { products } from "../products";
import ProductCard from "../components/ProductCard";
import "../custom.css";

function Home() {
  return (
    <React.Fragment>
      <Container className="mt-1 px-3 py-5 border border-dark">
        <Row md={3} xs={1} className="g-3">
          {products.map((product, index) => (
            <ProductCard key={index} product={product} />
          ))}
        </Row>
      </Container>
    </React.Fragment>
  );
}

export default Home;

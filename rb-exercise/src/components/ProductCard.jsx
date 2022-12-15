import { Col, Card, Button, Form } from "react-bootstrap";
import { useContext } from "react";
import { CartContext } from "../CartContext";
function ProductCard({ product }) {
  const cart = useContext(CartContext);
  const productQuantity = cart.getProductQuantity(product.id);

  return (
    <Col>
      <Card className="bg-dark text-white">
        <Card.Img className="img" variant="top" src={product.imageURL} />
        <Card.Body className="mt-2">
          <Card.Title className="text-info">{product.name}</Card.Title>
          <Card.Text className="text-white-50">
            <strong className="text-light">Description- </strong>{" "}
            {product.description}
          </Card.Text>
          <Card.Text>
            <strong>Price- </strong>{" "}
            <span className="text-warning">${product.price}</span>{" "}
          </Card.Text>
        </Card.Body>
        {productQuantity > 0 ? (
          <div>
            <div className="d-flex justify-content-center">
              <Button
                variant="primary"
                className="px-4"
                onClick={() => cart.removeOneFromCart(product.id)}
              >
                -
              </Button>
              <h2 className="mx-2">{productQuantity}</h2>
              <Button
                variant="primary"
                className="px-4"
                onClick={() => cart.addOneToCart(product.id)}
              >
                +
              </Button>
            </div>
            <div className="d-flex justify-content-center my-2">
              <Button
                variant="danger"
                onClick={() => {
                  cart.deleteItemFromCart(product.id);
                }}
              >
                Delete From Cart
              </Button>
            </div>
          </div>
        ) : (
          <Button
            variant="outline-success"
            className="mx-1 mt-5 mb-1"
            onClick={() => cart.addOneToCart(product.id)}
          >
            <strong>Add to cart</strong>
          </Button>
        )}
      </Card>
    </Col>
  );
}

export default ProductCard;

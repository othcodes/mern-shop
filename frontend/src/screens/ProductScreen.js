import React,  { useEffect, useState } from 'react'
// import { Link } from 'react-router-dom'
// import { Row, Col, Image, ListGroup, Card, Button } from 'react-bootstrap'
import Rating from '../components/Rating/Rating'
import styles from './ProductScreen.module.css'
import axios from 'axios'


const ProductScreen = ({ match }) => {

  const [product, setProduct] = useState({});
  useEffect(() => {
    const fetchProduct = async () => {
        const { data } = await axios.get(`/api/products/${match.params.id}`);
        setProduct(data);
    }
    fetchProduct();
}, [match])
  
    return (
      <>
        <div className={styles.ImageSide}>
          <img src={product.image} alt={product.name} fluid />
        </div>
        <div className={styles.DetailSide}>
          <Rating
            value={product.rating}
            // text={`${product.numReviews} reviews`}
          />
          <h1 className={styles.DetailTitle}>{product.name}</h1>
          <h3 className={styles.DetailPrice}>${product.price}</h3>
          <p className={styles.DetailDescription}>{product.description}</p>
          <button className={styles.DetailButton}>Add To Cart</button>
        </div>
        {/* <Row>
          <Col md={3}>
            <ListGroup.Item>
              <h3>{product.name}</h3>
            </ListGroup.Item>
            <ListGroup.Item>

            </ListGroup.Item>
            <ListGroup.Item>Price: ${product.price}</ListGroup.Item>
            <ListGroup.Item>Description: {product.description}</ListGroup.Item>
          </Col>
          <Col md={3}>
            <Card>
              <ListGroup variant="flush">
                <ListGroup.Item>
                  <Row>
                    <Col> Price: </Col>
                    <Col>
                      <strong>${product.price}</strong>
                    </Col>
                  </Row>
                </ListGroup.Item>
                <ListGroup.Item>
                  <Row>
                    <Col> Status: </Col>
                    <Col>
                      {product.countInStock > 0 ? "In Stock" : "Out Of Stock"}
                    </Col>
                  </Row>
                </ListGroup.Item>
                <ListGroup.Item>
                  <Button className="btn-block" type="button" disabled={product.countInStock === 0}>
                    Add To Cart
                  </Button>
                </ListGroup.Item>
              </ListGroup>
            </Card>
          </Col>
        </Row> */}
      </>
    );
}

export default ProductScreen

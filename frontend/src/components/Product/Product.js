import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import Rating from "../Rating/Rating";
import styles from "./Product.module.css";

const Product = ({ product }) => {
  return (
    <>
      <div className={styles.mainCardContainer}>
        <div className={styles.mainCard}>
          <Link to={`/product/${product._id}`}>
            <img src={product.image} alt="img" />
          </Link>
        </div>

        <div className={styles.ProductPrice}>
          <span>${product.price}</span>
        </div>


        <div className={styles.ProductTitle}>
          <Link to={`/product/${product._id}`}>
            <h6>{product.name}</h6>
          </Link>
        </div>

        <div className={styles.ProductRating}>
          <Rating
            value={product.rating}
            //text={`${product.numReviews} reviews`}
          />
        </div>

        {/* <div className={styles.SeeDetails}>
            <Link to={`/product/${product._id}`}>
              <button>See Details <i class="fal fa-long-arrow-right"></i></button>
            </Link>
          </div> */}
      </div>

      {/* <Card>
          <Link to={`/product/${product._id}`}>
            <Card.Img src={product.image} variant="top" />
          </Link>

          <Card.Body>
            <Link to={`/product/${product._id}`}>
              <Card.Title as="div">
                <strong>{product.name}</strong>
              </Card.Title>
            </Link>
            <Card.Text as="div">
              <Rating
                value={product.rating}
                // text={`${product.numReviews} reviews`}
              />
            </Card.Text>
            <Card.Text as="h3">${product.price}</Card.Text>
          </Card.Body>
        </Card> */}
    </>
  );
};

export default Product;

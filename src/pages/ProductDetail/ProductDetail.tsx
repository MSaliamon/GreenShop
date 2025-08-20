import { useParams } from "react-router-dom";
import cardData from "../../data/Card";
import { useDispatch } from "react-redux";
import { addToCart } from "../../store/cartSlice";
import type { AppDispatch } from "../../store/store";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import './ProductDetail.scss'

const ProductDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const product = cardData.find((item) => item.id === Number(id));
  const dispatch = useDispatch<AppDispatch>();
  if (!product) {
    return <p>Product not found</p>;
  }
  const handleAddToCart = () => {
    dispatch(addToCart({ ...product, quantity: 1 }));
  };
  return (
    <>
      <Header />
      <div className="product-detail">
        <img src={product.image} alt={product.title} className="product-detail__img" />
        <h2 className="product-detail__title">{product.title}</h2>
        <p className="product-detail__price">price: ${product.price}</p>
        <p className="product-detail__text">{product.description}</p>
        <button 
          className="button"
          onClick={handleAddToCart}
        >
          Add to Cart
        </button>
      </div>
      <Footer />
    </>
  );
};
export default ProductDetail;

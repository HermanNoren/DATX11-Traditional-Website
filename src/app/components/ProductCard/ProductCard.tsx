import "./ProductCard.css";

interface ProductCardProps {
  name: string;
  price: number;
  dimensions: string;
  image: string;
  quantity: number;
  onRemove: () => void;
  onQuantityChange: (quantity: number) => void;
}

const formatPrice = (price: number) => {
  return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
};

const ProductCard: React.FC<ProductCardProps> = ({
  name,
  price,
  dimensions,
  image,
  quantity,
  onRemove,
  onQuantityChange,
}) => {
  return (
    <div className="product-card">
      <img src={image} alt={`${name} Product`} className="product-image" />
      <div className="card-text">
        <div className="card-text-top">
          <h1 className="card-title">{name}</h1>
          <div className="card-quantity-amount">
            <select
              value={quantity}
              onChange={(e) => onQuantityChange(Number(e.target.value))}
            >
              {[...Array(10)].map((_, i) => (
                <option key={i + 1} value={i + 1}>
                  {i + 1}
                </option>
              ))}
            </select>
          </div>
          <p className="card-price" data-price={formatPrice(price)}>
            SEK
          </p>
        </div>
        <div className="card-text-bottom">
          <p className="card-dimensions">
            <strong>Dimensions:</strong> {dimensions}
          </p>
          <p className="card-remove" onClick={onRemove}>
            Remove
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;

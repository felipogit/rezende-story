import { categories } from "../Products";

export const ProductList = () => {
    return (
      <div>
        {categories.map((category) => (
          <div key={category.id}>
            <h2>{category.name}</h2>
            <div style={{ display: "flex", flexWrap: "wrap" }}>
              {category.products.map((product) => (
                <div
                  key={product.id}
                  style={{
                    border: "1px solid #ccc",
                    margin: "10px",
                    padding: "10px",
                    maxWidth: "200px",
                  }}
                >
                  <img
                    src={product.imageUrl}
                    alt={product.name}
                    style={{ width: "100%", height: "auto" }}
                  />
                  <h3>{product.name}</h3>
                  <p>{product.description}</p>
                  <p>
                    <strong>Preço:</strong> R$ {product.price.toFixed(2)}
                  </p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    );
  };
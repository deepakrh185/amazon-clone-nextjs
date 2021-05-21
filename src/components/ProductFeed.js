import Product from "./Product";

function ProductFeed({ products }) {
  return (
    <div>
      {products.map(({ id, title, category, image, price, description }) => (
        <div key={id}>
          <Product
            id={id}
            title={title}
            category={category}
            description={description}
            price={price}
            image={image}
          />
        </div>
      ))}
    </div>
  );
}

export default ProductFeed;

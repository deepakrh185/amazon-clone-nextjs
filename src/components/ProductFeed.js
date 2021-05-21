import Product from "./Product";

function ProductFeed({ products }) {
  return (
    <div className="grid grid-flow-row-dense md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 md:-mt-52 mx-auto">
      {products.map(({ id, title, category, image, price, description }) => (
        <Product
          key={id}
          id={id}
          title={title}
          category={category}
          description={description}
          price={price}
          image={image}
        />
      ))}
    </div>
  );
}

export default ProductFeed;

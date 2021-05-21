import Image from "next/image";

function Product({ id, title, category, image, price, description }) {
  return (
    <div>
      <p>{category}</p>;
      <Image src={image} width={200} height={200} />
    </div>
  );
}

export default Product;

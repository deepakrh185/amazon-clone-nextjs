import Image from "next/image";
import Header from "../components/Header";
import { useSelector } from "react-redux";
import { selectItems } from "../slices/basketSlice";
import CheckoutProducts from "../components/CheckoutProducts";

function checkout() {
  const items = useSelector(selectItems);

  return (
    <div className="bg-gray-100">
      <Header />
      <main className="lg:flex max-w-screen-2xl mx-auto">
        <div className="flex-grow m-5 shadow-sm">
          <Image
            src="https://links.papareact.com/ikj"
            width={1020}
            height={250}
            objectFit="contain"
          />
          <div className="flex flex-col p-5 bg-white space-y-10">
            <h1 className="text-3xl border-b pb-4">
              {items.length === 0
                ? "You Shopping Cart is empty"
                : "Shopping Basket"}
            </h1>
            {items.map(
              ({
                id,
                title,
                category,
                image,
                price,
                description,
                hasPrime,
                rating,
              }) => (
                <CheckoutProducts
                  key={id}
                  id={id}
                  title={title}
                  category={category}
                  description={description}
                  price={price}
                  image={image}
                  hasPrime={hasPrime}
                  rating={rating}
                />
              )
            )}
          </div>
        </div>
        <div></div>
      </main>
    </div>
  );
}

export default checkout;

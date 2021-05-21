import Image from "next/image";
import {
  MenuIcon,
  SearchIcon,
  ShoppingCartIcon,
} from "@heroicons/react/outline";

function Header() {
  return (
    <header>
      <div className="flex items-center bg-amazon_blue p-1 flex-grow py-2">
        <div className="mt-2 flex items-center flex-grow sm:flex-grow-0 p-1">
          <Image
            src="https://links.papareact.com/f90"
            width={150}
            height={40}
            className="cursor-pointer"
          />
        </div>
        <div className="bg-yellow-400 flexhover:bg-yellow-500 sm:flex hidden items-center h-10 rounded-md flex-grow cursor-pointer ">
          <input
            type="text"
            className="p-2 h-full w-6 flex-grow rounded-l-md flex-shrink outline-none px-4"
          />
          <SearchIcon className="h-12 p-4  " />
        </div>

        <div className="text-white flex items-center text-sm space-x-6 mx-6 whitespace-nowrap ">
          <div>
            <p className="link">Helo deepak</p>
            <p className="link  font-extrabold md:text-sm">Account & Lists</p>
          </div>
          <div>
            <p className="link">Returns</p>
            <p className="link font-extrabold md:text-sm"> & Orders</p>
          </div>
          <div className="relative flex  items-center">
            <span className="absolute top-0 right-0 md:right-10 sm:right-10 h-5 w-4 bg-yellow-400 text-center rounded-full text-black font-bold">
              0
            </span>
            <ShoppingCartIcon className="h-10" />
            <p className="link font-extrabold md:text-sm hidden sm:inline mt-2">
              Basket
            </p>
          </div>
        </div>
      </div>
      <div className="flex items-center bg-amazon_blue-light text-white text-sm p-2 space-x-3 pl-3">
        <p className="link flex items-center ">
          <MenuIcon className="h-5 mr-1" />
          All
        </p>
        <p className="link">Prime Video</p>
        <p className="link">Amazon Business</p>
        <p className="link">Today's Deals</p>
        <p className="link hidden lg:flex">Electronics</p>
        <p className="link hidden lg:flex">Food & Grocery</p>
        <p className="link hidden lg:flex">Prime</p>
        <p className="link hidden lg:flex">Buy Again</p>
        <p className="link hidden lg:flex">Shopper Toolkit</p>
        <p className="link hidden lg:flex">Health & Personal Care</p>
      </div>
    </header>
  );
}

export default Header;

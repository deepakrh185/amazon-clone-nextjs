import Image from "next/image";
import {
  MenuIcon,
  SearchIcon,
  ShoppingCartIcon,
} from "@heroicons/react/outline";
import { signIn, signOut, useSession } from "next-auth/client";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";
import { selectItems } from "../slices/basketSlice";

function Header(props) {
  const [session] = useSession();
  const router = useRouter();
  const items = useSelector(selectItems);

  return (
    <header style={{ position: "sticky", top: 0, zIndex: 50 }}>
      <div className=" flex items-center bg-amazon_blue p-1 flex-grow py-2">
        <div className="mt-2 flex items-center flex-grow sm:flex-grow-0 p-1 mr-2">
          <Image
            src="https://links.papareact.com/f90"
            width={100}
            height={40}
            className="cursor-pointer"
            onClick={() => router.push("/")}
          />
        </div>
        <div className="bg-yellow-400 flex hover:bg-yellow-500 sm:flex hidden items-center h-10 rounded-md flex-grow cursor-pointer ">
          <input
            type="text"
            className="p-2 h-full w-6 flex-grow rounded-l-md flex-shrink outline-none px-4"
            placeholder="Search for products, brands and more"
            onChange={props.handleChange}
          />
          <SearchIcon className="h-12 p-4  " />
        </div>

        <div className="text-white flex items-center text-sm space-x-6 mx-6 whitespace-nowrap ">
          <div onClick={!session ? signIn : signOut}>
            <p className="link">
              {session ? `Hello, ${session.user.name}` : "Sign in"}
            </p>
            <p className="link  font-extrabold md:text-sm">Account & Lists</p>
          </div>
          <div className="link" onClick={() => router.push("/orders")}>
            <p>Returns</p>
            <p className=" font-extrabold md:text-sm"> & Orders</p>
          </div>
          <div
            className="relative flex  items-center cursor-pointer"
            onClick={() => router.push("/checkout")}
          >
            <span className="absolute top-0 right-0 left-8 md:right-10 sm:right-10 h-5 w-4 bg-yellow-400 text-center rounded-full text-black font-bold ">
              {items.length}
            </span>
            {items.length > 0 ? (
              <ShoppingCartIcon className="h-10 animate-bounce  " />
            ) : (
              <ShoppingCartIcon className="h-10 " />
            )}

            <p className="link font-extrabold md:text-sm hidden sm:inline mt-2 ">
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

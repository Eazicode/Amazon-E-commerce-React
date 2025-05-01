import { IoSearchSharp } from "react-icons/io5";
import { GiHamburgerMenu } from "react-icons/gi";


const NavBar = () => {
  return ( 
    <>
      <div className="bg-[#131921] py-2 xl:px-8 flex items-center justify-around">
        <img className="w-12 md:w-22 xl:w-30 cursor-pointer"  src="../images/icons/amazon-logo-white.png" alt="" />

        <div className="flex justify-center ">
          <input className="bg-white w-30 sm:w-80 md:w-100 lg:w-150 xl:w-200 h-10 outline-none ps-5 rounded-tl-sm rounded-bl-sm border-none" type="text" placeholder="Search" />
          <button className="bg-[#FEBD69] h-10 w-10 flex justify-center items-center cursor-pointer rounded-tr-sm rounded-br-sm">< IoSearchSharp /></button>
        </div>

        <p className="hidden sm:block text-white text-sm lg:text-lg font-medium">Returns <br /> & Orders</p>

        <div className="hidden sm:block">
          <button><img className="w-8 lg:w-12" src="../images/icons/cart-icon.png" /></button>
        </div>

        <div className="block sm:hidden">
          <GiHamburgerMenu />
        </div>
      </div>
    </> 
  );
}
 
export default NavBar;
import { IoSearchSharp } from "react-icons/io5";


const NavBar = () => {
  return ( 
    <>
      <div className="bg-[#131921] py-2 px-10 flex items-center justify-around">
        <img className="w-30 cursor-pointer"  src="../images/icons/amazon-logo-white.png" alt="" />

        <div className="flex justify-center ">
          <input className="bg-white w-200 h-10 outline-none ps-5 rounded-tl-sm rounded-bl-sm border-none" type="text" placeholder="Search" />
          <button className="bg-[#FEBD69] h-10 w-10 flex justify-center items-center cursor-pointer rounded-tr-sm rounded-br-sm">< IoSearchSharp /></button>
        </div>

        <p className="text-white text-lg font-medium">Returns <br /> & Orders</p>

        <div>
          <button><img className="w-12" src="../images/icons/cart-icon.png" alt="" /></button>
        </div>
      </div>
    </> 
  );
}
 
export default NavBar;
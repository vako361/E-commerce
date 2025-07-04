import { useMenu } from "../context/Context";
import { useCard } from "../context/CardContext";

export default function Header() {
  const { menu, setMenu, cart } = useMenu();
  const { cardState, setCardState } = useCard();
  const menuData = ["Collections", "Men", "Women", "About", "Contact"];

  return (

    <div className="flex justify-between pt-[20px] w-[400px] lg:w-[1250px] pl-7 relative">
      <div className="flex gap-4 items-center">
        <img
          src="/images/icon-menu.svg"
          onClick={() => setMenu(!menu)}
          className={`${menu ? 'hidden' : "block"} w-4 h-3`}
          alt="menu icon"
        />
        <img
          src="/images/logo.svg"
          className="w-[137.5px] h-[20px]"
          alt="logo"
        />
      </div>

      <section className="hidden lg:flex gap-8">
        {menuData.map((item) => (
          <span key={item}>{item}</span>
        ))}
      </section>

      <div className="flex gap-5 relative">
        {cart > 0 && (
          <>
          <div className="absolute left-[12px] flex
           justify-center items-center 
          bottom-3.5 rounded-[6.5px] bg-[#FF7E1B] w-[19px] h-[13px]">
            <span className="text-[10px] text-white">{cart}</span>
          </div>
         </>
           )}
        <img
          src="/images/icon-cart.svg"
          className="w-5 h-5"
          onClick={() => setCardState(!cardState)}
          alt="cart icon"
        />
        <img src="/images/image-avatar.png" className="w-6 h-6" alt="" />
      </div>

      <div
        className={`${
          cardState ? "!absolute" : "hidden"
        } top-[60px] right-0 bg-white w-[360px] rounded-[10px] h-[256px] shadow-[0px_20px_50px_-20px_rgba(29,32,38,0.50)]`}
      >
        <div className="p-4 border-b">
          <h1 className="text-black font-bold">Cart</h1>
        </div>
        {cart > 0 ? (
          <div className="p-4 flex items-center gap-4">
            <img src="/images/image-product-1.jpg" className="w-[50px] h-[50px] rounded" alt="Product" />
            <div>
              <p>Fall Limited Edition Sneakers</p>
              <p>
                $125.00 x {cart}{" "}
                <span className="font-bold text-black">${125 * cart}.00</span>
              </p>
            </div>
                   <button className="absolute w-[312px]
           h-[56px] bg-[#FF7E1B]
            rounded-[10px]
             text-white text-[16px] bottom-[34px] left-[26px] cursor-pointer">Cheakout</button>
          </div>
        ) : (
          <p className="text-center text-gray-500 py-8">Your cart is empty</p>
        )}
      </div>
       <div className="hidden lg:block lg:absolute top-[75px] h-[1px] bg-[#E4E9F2] w-[1250px]"></div>
    </div>
     

  );
}

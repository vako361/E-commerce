import { useMenu } from "../context/Context"
export default function Header() {
    const {menu, setMenu, cart} = useMenu();
    const menuData = ["Collections", "Men", "Women", "About", "Contact"];

return(
 <div className="flex justify-between pt-[20px] w-[357px] lg:w-[1100px] pl-7"> 
    <div className="flex gap-4 items-center">
        <img src="/images/icon-menu.svg" onClick={() =>  setMenu(!menu)} className="w-4 h-3" alt="menu icon" />
        <img src="/images/logo.svg" className="w-[137.5px] h-[20px]" alt="logo" />
    </div>
    <section className="hidden lg:flex gap-8">
     {menuData.map((item) => <span key={item}>{item}</span> )}
    </section>
    <div className="flex gap-5 relative">
        <div className="absolute left-[12px] flex justify-center items-center
         bottom-3.5 rounded-[6.5px] bg-[#FF7E1B] w-[19px] h-[13px]"><span className="text-[10px] text-white">{cart}</span></div>
        <img src="/images/icon-cart.svg" alt="" />
        <img src="/images/image-avatar.png" className="w-6 h-6" alt="" />
    </div>
  </div>
)
}
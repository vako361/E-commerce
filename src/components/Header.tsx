import { useMenu } from "../context/Context"
export default function Header() {
    const {menu, setMenu} = useMenu()
return(
 <div className="flex justify-between pt-[20px] w-[357px] pl-7"> 
    <div className="flex gap-4 items-center">
        <img src="/images/icon-menu.svg" onClick={() =>  setMenu(!menu)} className="w-4 h-3" alt="menu icon" />
        <img src="/images/logo.svg" className="w-[137.5px] h-[20px]" alt="logo" />
    </div>
    <div className="flex gap-5">
        <img src="/images/icon-cart.svg" alt="" />
        <img src="/images/image-avatar.png" className="w-6 h-6" alt="" />
    </div>
  </div>
)
}
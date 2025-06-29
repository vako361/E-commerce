import { useMenu } from "../context/Context";
const menuData = ["Collections", "Men","Women","About","Contact"]
const Menu = () => {
 const { menu, setMenu } = useMenu();
 console.log(menu)
    return(
        <>
       {menu && <div className="flex flex-col gap-[20px] pt-[92px] bg-white min-h-screen w-[50%]">
            {menuData.map((item) => <span onClick={() => setMenu(!menu)} className="text-black" key={item}>{item}</span>)}
        </div>
        }
        </>
    )
}

export default Menu;
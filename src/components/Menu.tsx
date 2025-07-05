import { useMenu } from "../context/Context";

const menuData = ["Collections", "Men", "Women", "About", "Contact"];

const Menu = () => {
  const { menu, setMenu } = useMenu();

  return (
    <div className={`${menu ? 'absolute' : ' hidden' }  min-h-[1000px] left-0 absolute top-0 w-[70%] bg-white flex flex-col pl-6.5 gap-5 pt-6 `}>
      {menu && (
        <div className="left-0 absolute top-0 min-h-screen w-[70%] bg-white flex flex-col pl-6.5 gap-5 pt-6">
          <img src="/images/icon-close.svg" onClick={() => setMenu(!menu)} className="w-4 h-4 mt-6" alt="cancel icon" />
          {menuData.map((item) => (
            <span
              onClick={() => setMenu(false)}
              className="text-black text-[18px] font-bold cursor-pointer mt-8 "
              key={item}
            >
              {item}
            </span>
          ))}
        </div>
      )}
    </div>
  );
};

export default Menu;

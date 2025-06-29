import { useMenu } from "../context/Context";

const menuData = ["Collections", "Men", "Women", "About", "Contact"];

const Menu = () => {
  const { menu, setMenu } = useMenu();

  return (
    <>
      {menu && (
        <div className="left-0 absolute top-0 h-screen w-1/2 bg-white flex flex-col gap-6 p-10">
          {menuData.map((item) => (
            <span
              onClick={() => setMenu(false)}
              className="text-black text-2xl cursor-pointer mt-8 "
              key={item}
            >
              {item}
            </span>
          ))}
        </div>
      )}
    </>
  );
};

export default Menu;

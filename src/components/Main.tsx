import { useState } from "react";
import { useMenu } from "../context/Context";
const productImages = [
  {
    full: "/images/image-product-1.jpg",
    thumb: "/images/image-product-1-thumbnail.jpg",
  },
  {
    full: "/images/image-product-2.jpg",
    thumb: "/images/image-product-2-thumbnail.jpg",
  },
  {
    full: "/images/image-product-3.jpg",
    thumb: "/images/image-product-3-thumbnail.jpg", // ✅ You missed a slash!
  },
  {
    full: "/images/image-product-4.jpg",
    thumb: "/images/image-product-4-thumbnail.jpg",
  },
];

export default function Main() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const {menu , setCart,} = useMenu();
  const nextImage = () => {
    setCurrentIndex((prev) =>
      prev === productImages.length - 1 ? 0 : prev + 1
    );
  };

  const prevImage = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? productImages.length - 1 : prev - 1
    );
  };
  const [quantity, setQuantity] = useState<number>(0)
  const decrease = () =>{ 
    if(quantity === 0){
    return quantity
  } setQuantity(quantity - 1)}
    const increase = () =>{
     setQuantity(quantity + 1)
}
  return (
    <section className={`flex flex-col items-center justify-center w-screen mt-7`} >
      <div className={`${menu ? 'block' : 'relative'} w-full`}>
        <div onClick={prevImage} 
        className={`flex items-center justify-center
         rounded-full h-10 w-10 bg-[#FFFFFF]  ${!menu ? "absolute" : "block"} top-[55%] left-[16px]
        `}>
            <img className=" w-2 h-3" src="/images/icon-previous.svg"/></div>
        <img
          src={productImages[currentIndex].full}
          alt={`Product ${currentIndex + 1}`}
          className="w-full h-[300px] block "
        />
       <div onClick={nextImage} className=" absolute flex items-center justify-center rounded-full h-10 w-10 bg-[#FFFFFF]
          top-[55%] left-[87%]">
         <img   className="w-2 h-3" src="/images/icon-next.svg" />
        </div> 
      </div>
{/* 
   
      <div style={{ marginTop: "20px" }}>
        {productImages.map((item, index) => (
          <img
            key={index}
            src={item.thumb}
            alt={`Thumbnail ${index + 1}`}
            style={{
              width: "60px",
              height: "60px",
              margin: "0 5px",
              border: index === currentIndex ? "2px solid blue" : "1px solid gray",
              cursor: "pointer",
            }}
            onClick={() => setCurrentIndex(index)}
          />
        ))}
      </div> */}
      <div className="flex flex-col w-[327px] gap-6 mt-[24px]">
         <a href="https://stockx.com/category/sneakers" className="text-[#FF7E1B] w-full">Sneaker Company</a>
         <h2 
         className="font-[700] text-[28px] 
         text-[#1D2026] leading-[32px] w-full">
            Fall Limited Edition Sneakers</h2>
         <p className="text-4 text-[#69707D] font-[400] w-full">
            These low-profile sneakers are your perfect casual wear companion.
             Featuring a durable rubber outer sole, they’ll withstand everything
              the weather can offer.
         </p>

       <div className="flex justify-between w-full items-center">

        <div className="flex gap-4 items-center justify-center">
            <span className="text-[#1D2026] text-[28px] font-[700]">$125.00</span>

           <div
            className="flex w-[51px] h-[27px] rounded-[6px] justify-center items-center bg-[#FFEEE2] ">
                <span className="text-[#FF7E1B] ">50%</span>
            </div>

        </div>

        <span className="text-[#B6BCC8] line-through">$250.00</span>

       </div>
  {/*quantity button */}
        <div className="flex items-center justify-center gap-30 h-[56px] w-full">
      <button
        type="button"
        onClick={decrease}
        style={{
          width: "32px",
          height: "32px",
          fontSize: "20px",
          cursor: "pointer",
        }}
      >
        –
      </button>

      <span style={{ minWidth: "24px", textAlign: "center" }}>{quantity}</span>

      <button
        type="button"
        onClick={increase}
        style={{
          width: "32px",
          height: "32px",
          fontSize: "20px",
          cursor: "pointer",
        }}
      >
        +
      </button>
    </div>
  {/* // End */}
       <button className="flex text-white h-[56px] mt-4 mb-22
        items-center justify-center rounded-[10px] gap-4
         bg-[#FF7E1B]"
         onClick={() =>  setCart(quantity)}><img src="/images/icon-cart.svg" alt="" /><span>Add to cart</span></button>
      </div>

    </section>
  );
}

import { useMenu } from "../context/Context"
import { useState } from "react";
export default function Img() {
    const {img, setImg} = useMenu()
    console.log(img)
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
    thumb: "/images/image-product-3-thumbnail.jpg", 
    },
  {
    full: "/images/image-product-4.jpg",
    thumb: "/images/image-product-4-thumbnail.jpg",
  },
];
 const [currentIndex, setCurrentIndex] = useState(0);

    return(
        <div className={`${img ? 'absolute' : 'hidden' } flex flex-col 
         bg-[#FFF] items-center justify-center `}>
        
        <img src="/images/icon-close.svg" className="mb-[50px] ml-100 w-5 h-5" onClick={() => setImg(!img)} alt="" />
          <div className="h-[670px] flex gap-10 relative">
           
            <img src={productImages[currentIndex].full} alt=""  className="absolute rounded-[15px] h-[500px] w-[600px] top-0"/>
         <div className="hidden lg:flex gap-8 cursor-pointer " >
        {productImages.map((item, index) => (
          <img
            key={index}
            src={item.thumb}
            alt={`Thumbnail ${index + 1}`}
            className="rounded-[10px] w-21 h-21 mt-[590px]"
            onClick={() => setCurrentIndex(index)}
          />
        ))}
      </div>

      </div>

        </div>
    )
}
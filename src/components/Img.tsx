import { useMenu } from "../context/Context"
export default function Img() {
    const {img, setImg} = useMenu()
    console.log(img)
    return(
        <div className={`${img ? 'relative' : 'hidden' } absolute flex flex-col 
        w-screen h-screen bg-[#FFF] items-center justify-center`}>
            <img src="/images/image-product-1-thumbnail.jpg" alt=""  className="absolute"/>
        </div>
    )
}
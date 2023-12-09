import { FaPhoneAlt } from "react-icons/fa";
import { LuInstagram } from "react-icons/lu";
import { FaRegEnvelope } from "react-icons/fa6";

const Footer = () => {
    return ( 
        <div className="text-white font-sans mt-2">
<body className="bg-black">
    <h2 className="ml-12  font-bold pt-5">Creating Buyers</h2>
    <div className="flex justify-around mt-5">
    <div className="leading-8 gap-1 " >
        <h3 className="font-semibold text-base">Shop Footwear</h3>
        <p>Sneakers</p>
        <p>Casuals</p>
        <p>Formals</p>
        <p>Slippers</p>
        <p>Sandals</p>
    </div>
    <div className="leading-8 gap-1" >
        <h3 className="font-semibold text-base">Shop Men's Clothing</h3>
        <p>Shirt</p>
        <p>T-shirt</p>
        <p>Sweatshirt</p>
        <p>Jeans</p>
    </div>

    <div className="leading-8 gap-1">
        <h3 className="font-semibold text-base">Shop Women's Clothing</h3>
        <p>Tops</p>
        <p>T-shirts</p>
        <p>Shorts</p>
    </div>

    <div className="leading-8">
        <h3 className="font-semibold text-base">Contact Us</h3>
        <p className="w-72">Need Help? Get in touch with us we will guide you the right way!</p>
        <div className="flex items-center gap-2"> 
        <FaPhoneAlt />
            <p className="text-white mr-3">  9999955555</p></div>
       <div className="flex items-center gap-2">
       <LuInstagram />
        <p className="text-white mr-3" >Buyers_M&W</p></div> 
      <div className="flex items-center gap-2">
      <FaRegEnvelope />
         <p className="text-white mr-3">  Buyers@gmail.com</p></div>
    </div>

    <div className="leading-8 ">
        <h3>Keep Exploring</h3>
        <p className="w-60">Get pops for new arrivals, offers and more!</p>
        <br />
        <input className="rounded-xl outline-none border-white w-72 h-7 text-black" type ="text" placeholder="Email Address"/> 
        <submit className="-ml-16 text-black cursor-pointer">Submit</submit>
    </div>
    </div>


        <h2 className="text-center mt-10">Hurry Up And Grab It Up Soon....!!!</h2>



</body>
        </div>
     );
}
 
export default Footer;
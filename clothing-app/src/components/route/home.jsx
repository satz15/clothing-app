import Slider from "../slider";
import Shoes from "../mens-shoe";
import Apparel from "../apparel";
import Category from "../categories";
import Women from "../womens-shoe";
import Footer from "../footer";

const HomeShop = ({ addToCart }) => {
    return ( <>
    <Slider/>
      <Shoes/>
      <Apparel/>
      <Category/>
      <Women addToCart={addToCart} />
      <Footer/>
    </> );
}
 
export default HomeShop;
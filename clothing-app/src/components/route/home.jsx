import Slider from "../slider";
import Shoes from "../mens-shoe";
import Apparel from "../apparel";
import Category from "../categories";
import Women from "../womens-shoe";
import Footer from "../footer";

const HomeShop = ({ addToCart }) => {
    return ( <>
    <div className="home">
    <Slider/>
      <Shoes addToCart={addToCart}/>
      <Apparel addToCart={addToCart}/>
      <Category/>
      <Women addToCart={addToCart} />
      <Footer/>
      </div>
    </> );
}
 
export default HomeShop;
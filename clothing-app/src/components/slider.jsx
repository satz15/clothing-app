import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
 
const Slider = () => {

    const responsive = {
        superLargeDesktop: {
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };

    return ( <div><Carousel responsive={responsive}>
        <div><img src="src\assets\images\slider-1.jpg" alt="" /></div>
        <div><img src="src\assets\images\slider-2.jpg" alt="" /></div>
        <div><img src="src\assets\images\slider-3.jpg" alt="" /></div>
        <div><img src="src\assets\images\slider-4.jpg" alt="" /></div>
        </Carousel></div> );
}
 
export default Slider;
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Slide from "../assets/images/Slider-1.png";
import Sliderr from "../assets/images/Slider-2.png";
import Sliders from "../assets/images/Slider-3.png";
import Slidee from "../assets/images/Slider-4.jpg";

const Slider = () => {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 2, // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
  };

  return (
    <div className="pt-[3.5rem]">
      <Carousel
        swipeable={false}
        draggable={false}
        showDots={true}
        responsive={responsive}
        infinite={true}
        autoPlaySpeed={2000}
        autoPlay={true}
      >
        <img
          src={Slide}
          alt=""
          className="w-screen h-[700px]"
        />
        <img
          src={Sliderr}
          alt=""
          className="w-screen h-[700px]"
        />
        <img
          src={Sliders}
          alt=""
          className="w-screen h-[700px]"
        />
        <img
          src={Slidee}
          alt=""
          className="w-screen h-[700px]"
        />
      </Carousel>
    </div>
  );
};

export default Slider;
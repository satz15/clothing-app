import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";


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
    <div>
      <Carousel
        swipeable={false}
        draggable={false}
        showDots={true}
        responsive={responsive}
        infinite={true}
        autoPlaySpeed={3000}
        autoPlay={true}
      >
        <img
          src="../../src/assets/images/Slider-1.png"
          alt=""
          className="w-screen h-[700px]"
        />
        <img
          src="../../src/assets/images/Slider-2.png"
          alt=""
          className="w-screen h-[700px]"
        />
        <img
          src="../../src/assets/images/Slider-3.png"
          alt=""
          className="w-screen h-[700px]"
        />
        <img
          src="../../src/assets/images/Slider-4.jpg"
          alt=""
          className="w-screen h-[700px]"
        />
      </Carousel>
    </div>
  );
};

export default Slider;

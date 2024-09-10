import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const CarouselComponent = () => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 1,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  return (
    <Carousel className="h-[400px] sm:w-[400px] w-[350px] rounded-lg "
      responsive={responsive}
      swipeable={true}
      draggable={false}
      showDots={true}
      ssr={true}
      infinite={true}
      autoPlay={true}
      autoPlaySpeed={2000}
      transitionDuration={500}
      removeArrowOnDeviceType={["tablet", "mobile"]}
    >
      <img src="/banners/banner1.jpg" alt="" />
      <img src="/banners/banner2.jpg" alt="" />
      <img src="/banners/banner3.webp" alt="" />
      <img src="/banners/banner4.png" alt="" />
      <img src="/banners/banner5.jpg" alt="" />
    </Carousel>
  );
};

export default CarouselComponent;

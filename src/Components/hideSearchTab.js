import { Swiper, SwiperSlide } from "swiper/react";

export const HiddenSearchTab = () => {
  return (
    <Swiper
      slidesPerView="auto"
      resistanceRatio={0}
      initialSlide={0}
      direction="vertical"
      className="h-screen overflow-hidden"
    >
      <SwiperSlide />
      <SwiperSlide className="bg-blue-500 max-h-[80%] z-20">
        Slide 2
      </SwiperSlide>
    </Swiper>
  );
};

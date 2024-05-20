import { Swiper, SwiperSlide } from "swiper/react";

const LayoutSwiper = ({ children }) => {
  return (
    <Swiper
      slidesPerView="auto"
      resistanceRatio={0}
      initialSlide={0}
      direction="vertical"
      className="h-screen bg-slate-100 overflow-hidden"
    >
      <SwiperSlide />
      {children}
    </Swiper>
  );
};

function App() {
  return (
    <>
      <div>1</div>
      <LayoutSwiper>
        <SwiperSlide className="bg-blue-500 max-h-[80%]">Slide 2</SwiperSlide>
      </LayoutSwiper>
    </>
  );
}

export default App;

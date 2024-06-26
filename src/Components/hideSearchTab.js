import { Swiper, SwiperSlide } from "swiper/react";
import { useSearchTab } from "../contexts/searchTabContext";
import { InputSearch } from "./inputSearch";

export const HiddenSearchTab = () => {
  const { isOpenSearchTab, setIsOpenSearchTab } = useSearchTab();

  return (
    <Swiper
      slidesPerView="auto"
      resistanceRatio={0}
      initialSlide={0}
      direction="vertical"
      className="h-screen overflow-hidden"
      onSlideChange={() => {
        setIsOpenSearchTab(!isOpenSearchTab);
      }}
    >
      <SwiperSlide />
      <SwiperSlide className="bg-[#1B262C] max-h-[80%] opacity-95">
        <div className="flex justify-center">
          <InputSearch />
        </div>
      </SwiperSlide>
    </Swiper>
  );
};

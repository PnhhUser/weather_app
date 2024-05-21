import { WiCelsius, WiStrongWind } from "react-icons/wi";
import { Swiper, SwiperSlide } from "swiper/react";
import { useSearchTab } from "../contexts/searchTabContext";

const Temperature = ({ temp, city, country }) => {
  const defaultData = {
    temp: 38,
    city: "Da Nang",
    country: "Viet Nam",
  };

  return (
    <div className="py-2">
      <div className="flex justify-center">
        <p className="text-[3.5em] ps-10 font-bold text-[#0F4C75]">
          {temp ? temp : defaultData.temp}
        </p>
        <WiCelsius
          fontSize={80}
          className="-translate-x-6"
          strokeWidth={1}
          color="#0F4C75"
        />
      </div>
      <div className="flex justify-center">
        <p className="font-semibold pr-3 text-sm text-[#3282B8]">
          {city ? city : defaultData.city}
          <span> / </span>
          {country ? country : defaultData.country}
        </p>
      </div>
    </div>
  );
};

const TempDuringDays = () => {
  return (
    <div className="py-2">
      <Swiper slidesPerView={3} spaceBetween={10}>
        {Array.from({ length: 10 }, (_, i) => i + 1).map((item) => {
          return (
            <SwiperSlide
              className="p-1 rounded-md bg-gradient-to-t from-[#3282B8] to-[#0F4C75] shadow-lg"
              key={item}
            >
              <div className="flex">
                <p className="text-[0.7em] text-[#BBE1FA]">21/05</p>
                <p className="text-[0.7em] text-[#BBE1FA] ps-2">1:00 AM</p>
              </div>

              <div className="py-2">
                <div className="flex">
                  <p className="text-[2.8em] font-bold text-white">38</p>
                  <WiCelsius
                    fontSize={80}
                    strokeWidth={1}
                    color="#fff"
                    className="-translate-x-1 -translate-y-4"
                  />
                </div>

                <div>
                  <p className="font-semibold text-[0.7em] text-[#BBE1FA]">
                    Da Nang
                  </p>
                  <p className="font-semibold text-[1em] text-[#BBE1FA]">
                    Viet Nam
                  </p>
                </div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

const CardInfo = () => {
  return (
    <div className="p-1 rounded-md bg-gradient-to-t from-[#3282B8] to-[#0F4C75] shadow-lg">
      <div className="flex items-center">
        <p className="text-[0.7em] text-white"> Windy </p>
        <WiStrongWind color="white" className="ms-1" />
      </div>
      <div className="flex items-end justify-center">
        <p className="text-[2.5em] text-white font-thin">100</p>
        <p className="text-[#BBE1FA]">km/h</p>
      </div>
    </div>
  );
};

const InfoMore = () => {
  return (
    <div className="grid grid-cols-2 gap-2">
      <CardInfo />
      <CardInfo />
      <CardInfo />
      <CardInfo />
      <CardInfo />
      <CardInfo />
      <CardInfo />
      <CardInfo />
    </div>
  );
};

export const ContentApp = () => {
  const { isOpenSearchTab } = useSearchTab();

  return (
    <div className={`relative ${isOpenSearchTab ? "z-0" : "z-10"}`}>
      <Temperature />
      <TempDuringDays />
      <InfoMore />
    </div>
  );
};

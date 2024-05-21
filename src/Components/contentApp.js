import { WiCelsius } from "react-icons/wi";
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
        <p className="text-[3.5em] ps-10 font-bold text-white">
          {temp ? temp : defaultData.temp}
        </p>
        <WiCelsius
          fontSize={80}
          className="-translate-x-6"
          strokeWidth={1}
          color="white"
        />
      </div>
      <div className="flex justify-center">
        <p className="font-semibold pr-3 text-sm text-white">
          {city ? city : defaultData.city}
          <span> / </span>
          {country ? country : defaultData.country}
        </p>
      </div>
      <div className="px-4">
        <p className="text-[0.8em] text-center text-white">
          Cloudy skies throughout the day with a chance of rain throughout the
          day.
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
            <SwiperSlide className="p-1 rounded-md glassmorphin" key={item}>
              <div className="flex">
                <p className="text-[0.7em] text-gray-300">21/05</p>
                <p className="text-[0.7em] text-gray-300 ps-2">1:00 AM</p>
              </div>

              <div className="px-2">
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
                  <p className="font-semibold text-[0.7em] text-gray-300">
                    Da Nang
                  </p>
                  <p className="font-semibold text-[1em] text-gray-300">
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

export const ContentApp = () => {
  const { isOpenSearchTab } = useSearchTab();

  return (
    <div className={`relative ${isOpenSearchTab ? "z-0" : "z-10"}`}>
      <Temperature />
      <TempDuringDays />
    </div>
  );
};

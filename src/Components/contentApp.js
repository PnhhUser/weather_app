import { WiCelsius } from "react-icons/wi";
import { Swiper, SwiperSlide } from "swiper/react";
import { useSearchTab } from "../contexts/searchTabContext";
import { useWeather } from "../contexts/weatherContext";
import bgWeather from "../b1.jpg";
import {
  ConvertFtoC,
  getDayAndMonth,
  getLocationFromString,
  getTimeStringWithAMPM,
} from "../utils";

const Temperature = ({ temp, address, description }) => {
  const defaultData = {
    temp: 38,
    address: "Da Nang, Viet Nam",
  };

  return (
    <div className="py-2">
      <div className="flex justify-center">
        <p className="text-[3.5em] ps-10 font-bold text-white">
          {temp ? ConvertFtoC(temp) : defaultData.temp}
        </p>
        <WiCelsius
          fontSize={80}
          className="-translate-x-6"
          strokeWidth={1}
          color="white"
        />
      </div>
      <div className="flex justify-center">
        <p className="font-semibold pr-3 text-sm text-white capitalize">
          {address ? address : defaultData.address}
        </p>
      </div>
      <div className="px-4">
        <p className="text-[0.8em] text-center text-white">
          {description
            ? description
            : "Cloudy skies throughout the day with a chance of rain throughout the day."}
        </p>
      </div>
    </div>
  );
};

const TempDuringDays = ({ days, address }) => {
  const { city, country } = getLocationFromString(address);
  return (
    <div className="p-2">
      <Swiper slidesPerView={3} spaceBetween={10}>
        {days[0].hours.map((hour, index) => {
          return (
            <SwiperSlide className="p-1 rounded-md glassmorphin" key={index}>
              <div className="flex">
                <p className="text-[0.7em] text-gray-300">
                  {getDayAndMonth(days[0].datetime)}
                </p>
                <p className="text-[0.7em] text-gray-300 ps-2">
                  {getTimeStringWithAMPM(hour.datetime)}
                </p>
              </div>

              <div className="px-2">
                <div className="flex">
                  <p className="text-[2.4em] font-bold text-white pt-2">
                    {ConvertFtoC(hour.temp)}
                  </p>
                  <WiCelsius
                    fontSize={80}
                    strokeWidth={1}
                    color="#fff"
                    className="-translate-x-1 -translate-y-4"
                  />
                </div>

                <div>
                  <p className="font-semibold text-[0.7em] text-gray-300 capitalize">
                    {city}
                  </p>
                  <p className="font-semibold text-[1em] text-gray-300 capitalize">
                    {country}
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
  const { dataWeather, isLoadingData } = useWeather();
  const { currentConditions, address, description, days } = dataWeather;

  console.log(days);

  if (isLoadingData) {
    return (
      <div
        className="bg-white w-full h-full flex items-center justify-center bg-cover"
        style={{
          backgroundImage: `url(${bgWeather})`,
        }}
      >
        <div className="loader"></div>
      </div>
    );
  }

  console.log();

  return (
    <div className={`relative ${isOpenSearchTab ? "z-0" : "z-10"}`}>
      <Temperature
        temp={currentConditions.temp}
        address={address}
        description={description}
      />
      <TempDuringDays days={days} address={address} />
    </div>
  );
};

import { WiCelsius } from "react-icons/wi";

const Temperature = ({ temp, city, country }) => {
  const defaultData = {
    temp: 38,
    city: "Da Nang",
    country: "Viet Nam",
  };

  return (
    <div className="h-24">
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
          {city ? city : defaultData.city} /
          {country ? country : defaultData.country}
        </p>
      </div>
    </div>
  );
};

export const ContentApp = () => {
  return (
    <div>
      <Temperature />
    </div>
  );
};

export const ConvertFtoC = (f) => {
  return ((f - 32) / 1.8).toFixed(1);
};

export const sleep = (ms) =>
  new Promise((resolve) => setTimeout(resolve(), ms));

export const getDayAndMonth = (day) => {
  const currentDate = new Date(day);
  const currentDay = currentDate.getDate();
  const currentMonth = currentDate.getMonth() + 1;

  return `${currentDay}/${currentMonth}`;
};

export function getTimeStringWithAMPM(timeString) {
  const [hours, minutes] = timeString.split(":").map(Number);
  const amPm = hours >= 12 ? "PM" : "AM";
  const formattedHours = hours % 12 || 12;
  return `${formattedHours}:${minutes.toString().padStart(2, "0")} ${amPm}`;
}

export function getLocationFromString(locationString) {
  const [city, country] = locationString.split(",").map((item) => item.trim());
  return { city, country };
}

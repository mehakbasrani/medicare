const convertTime = (time) => {
  const timeparts = time.split(":");
  let hours = parseInt(timeparts[0]);
  let minutes = parseInt(timeparts[1]);

  let meridiem = "AM";

  if (hours > 12) {
    meridiem = "PM";

    if (hours > 12) {
      hours -= 12;
    }
  }

  return (
    hours.toString().padStart(2) +
    ":" +
    minutes.toString().padStart(2, "0") +
    " " +
    meridiem
  );
};

export default convertTime;

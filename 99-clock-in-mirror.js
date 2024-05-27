function WhatIsTheTime(timeInMirror) {
  const formatClock = (time) => {
    return time < 10 ? `0${time}` : time;
  };
  let [x, y] = timeInMirror.split(":");
  let hour = 12 - parseInt(x) ? 12 - parseInt(x) : 12;
  let minute = parseInt(y) ? 60 - parseInt(y) : 0;
  parseInt(y) ? (hour -= 1) : hour;
  return `${formatClock(hour ? hour : 12)}:${formatClock(minute)}`;
}

console.log(WhatIsTheTime("11:00"));

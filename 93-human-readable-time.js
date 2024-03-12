function humanReadable(seconds) {
  const pad = (d) => {
    return d < 10 ? "0" + d.toString() : d.toString();
  };
  return `${parseInt(seconds / 3600)}:${parseInt(pad((seconds / 60) % 60))}:${pad(seconds % 60)}`;
}

console.log(humanReadable(359999));

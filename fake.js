export function getStockData() {
  const randomPrice = (Math.random() * 3).toFixed(2); // Generate random number between 0 and 3, to two decimal places
  const now = new Date();
  const hours = String(now.getHours()).padStart(2, "0");
  const minutes = String(now.getMinutes()).padStart(2, "0");
  const seconds = String(now.getSeconds()).padStart(2, "0");
  const timestamp = `${hours}:${minutes}:${seconds}`; // Return time in hh/mm/ss format

  return {
    name: "QtechAI",
    sym: "QTA",
    price: randomPrice,
    time: timestamp,
  };
}

/*
App requirements:
 - The app should display the name, symbol, and 
   price of the stock, with a timestamp as per the 
   screenshot. 
 - The triangle compares the current stock price to 
   its previous price. If the price has increased, it 
   should be a green triangle pointing up, if the price 
   has decreased it should be a red triangle pointing 
   down, and if there has been no change it should be a 
   grey triangle pointing to the right.
 - The price should update every 1.5 seconds. 
*/

/*
Challenge:
  1. Find a way to get fresh stock data every 1.5 seconds.
  2. Call the renderStockTicker function with the fresh data.
  3. Add logic to renderStockTicker to display the correct 
     information.
  ⚠️ You will need to write code here in index.js and in
   fakeStockAPI.js.
*/
import { getStockData } from "./fake";

function renderStockTicker(stockData) {
  console.log("I Ran");
  const stockDisplayName = document.getElementById("name");
  const stockDisplaySymbol = document.getElementById("symbol");
  const stockDisplayPrice = document.getElementById("price");
  const stockDisplayPriceIcon = document.getElementById("price-icon");
  const stockDisplayTime = document.getElementById("time");

  stockDisplayName.innerHTML = stockData.name;
  stockDisplaySymbol.innerHTML = stockData.sym;
  stockDisplayPrice.innerHTML = stockData.price;
  stockDisplayPriceIcon.innerHTML = "$";
  stockDisplayTime.innerHTML = stockData.time;
}

setInterval(() => {
  const stockData = getStockData();
  renderStockTicker(stockData);
}, 3000);

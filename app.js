// var http = require('http');
// http.createServer(function (req, res) {
//   res.writeHead(200, {'Content-Type': 'text/plain'});
//   res.end('Hello World\n');
// }).listen(1337, '127.0.0.1');
// console.log('Server running at http://127.0.0.1:1337/');

// /api/v5/currencies?apiKey=[YOUR_API_KEY]

// var http = require('http');
//
// http.createServer(function(req,res){
//   res.writeHead(200,{'Content-Type': 'text/plain'});
//   res.end('Hellp World\n');
// }).listen(3000,'127.0.0.1');
// console.log('Server running at https://127.0.0.1:3000');

// const apiKey = '';
// https://www.currencyconverterapi.com/api/v3/convert?q=USD_PHP,PHP_USD&compact=ultra&apiKey=YOUR_API_KEY


window.addEventListener('load',async e => {
  // showCountries();
  // showCurrencies();
  await fromCurrencies();
  // convertCurrency(10,'USD','NGN');
});


async function showCountries(){
  const res = await fetch(`https://free.currencyconverterapi.com/api/v5/countries`);
  const json = await res.json();
  console.log(json);
}

async function showCurrencies(){
  const res = await fetch(`https://free.currencyconverterapi.com/api/v5/currencies`);
  const json = await res.json();
  console.log(json);
}

async function fromCurrencies(){
  const res = await fetch(`https://free.currencyconverterapi.com/api/v5/currencies`);
  const json = await res.json();

  console.log(json);
  fromCurrency.innerHtml = json.results.map(crc => `<option value="${crc.id}">${crc.currencyName}</option>`).join('\n');

}

async function convertCurrency(amount,fromCurrency,toCurrency){
  let query = fromCurrency + '_' + toCurrency;
  const res = await fetch('https://free.currencyconverterapi.com/api/v5/convert?q='
            + query + '&compact=ultra');
  const json = await res.json();
  value = json[query];
  finalValue = amount * value;
  console.log(Math.round(finalValue));
}

const fetch = require("node-fetch");

async function Privat() {
    const response = await fetch('https://api.privatbank.ua/p24api/pubinfo?json&exchange&coursid=5')
    const body = await response.json()
    return body
}


Privat()
    .then(res => res.map(obj => {
        console.log(obj.ccy + ' - ' + obj.base_ccy);
    }))

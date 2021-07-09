function bitcoinPrice2() {
    axios.get('https://api.coindesk.com/v1/bpi/currentprice/BTC.json')
        .then(function (response) {
            document.getElementById("btc_price").innerHTML = response.data.bpi.USD.rate_float;
        })
        .catch(function (error) {
            console.log(error);
        });
}






// fetches the price of bitcoin in USD
const bitcoinPrice2 = async () => { 
    try {
        const res = await axios.get('https://api.cryptonator.com/api/full/btc-usd')
        console.log(res.data.ticker.price)
    } catch (e) {
        console.log('Oh no error!', e)
    }
}
 // display the price of bitcoin in html

 


axios.get('https://api.cryptonator.com/api/full/btc-usd')
.then( res => {
   console.log(res.data.ticker.price)
})
.catch(err => {
    console.log("OH NO! ERROR!", err)
})


// const bitcoinPrice = async () => {
//     try {
//      const res = axios.get('https://api.cryptonator.com/api/full/btc-usd')
//      console.log(res.data.ticker.price)
// } catch (e) {
//     console.log('Oh no error!', e)
// }
 
// }

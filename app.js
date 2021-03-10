axios.get('https://api.cryptonator.com/api/full/btc-usd')
.then( res => {
   console.log(res.data.ticker.price)
})
.catch(err => {
    console.log("OH NO! ERROR!", err)
})

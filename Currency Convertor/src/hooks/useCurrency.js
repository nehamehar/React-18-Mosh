const { useEffect } = require("react");
// fetching API through useeffect
function currencyCon (currency){
    useEffect(() => {
        fetch(`https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`)
    }),[]
}
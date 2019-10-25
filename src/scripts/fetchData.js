const fetchNPData = () => fetch("http://localhost:8088/parks")
    .then(fetchedData => fetchedData.json())
    

const fetchWeatherData = (q1, q2) => fetch(`https://cors-anywhere.herokuapp.com/https://api.darksky.net/forecast/d37a6700ca73325ddf450f2218ea4656/${q1},${q2}`)
.then(jsonData => jsonData.json())


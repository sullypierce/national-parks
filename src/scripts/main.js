console.log("Hello there");


const showNationalParks = () => {
    fetchNPData()
        .then(parsedData => {
            postToDom(parsedData);
            console.log(parsedData);
        })
}


const DomRef = document.querySelector("#everythingGoesHere")

const postToDom = (ArrToPost) => {
    ArrToPost.forEach(npObj => {
        fetchWeatherData(npObj.latitude,npObj.longitude)
        .then(weatherData => {
            if (npObj.visited ===true) {
                DomRef.innerHTML += `
            <article class="visited">
                <h3>${npObj.name}</h3>
                <p>Located in ${npObj.state}</p>
                <p>Weather:</p>
                <ul>
                <li>Currently: ${weatherData.currently.summary}</li>
                <li>Today: ${weatherData.hourly.summary}</li>
                <li>Week: ${weatherData.daily.summary}</li>
                </ul>
            </article>`
            } else {
                DomRef.innerHTML += `
            <article class="notVisited">
                <h3>${npObj.name}</h3>
                <p>Located in ${npObj.state}</p>
                <p>Weather:</p>
                <ul>
                <li>Currently: ${weatherData.currently.summary}</li>
                <li>Today: ${weatherData.hourly.summary}</li>
                <li>Week: ${weatherData.daily.summary}</li>
                </ul>
            </article>`
            }
        })
        
        
        
        

    });
}




fetchWeatherData(43.582767,-110.821999)
.then(weatherData => {
    console.log(weatherData)
})

showNationalParks();
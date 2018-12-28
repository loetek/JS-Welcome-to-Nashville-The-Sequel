import fetchData from "./fetchData"
import appendDom from "./appendDom"
// import domBuilder from "./domBuilder"


fetchData.getParkData()
.then (fetchedAPIDataParks => {
console.log(fetchedAPIDataParks);
})

fetchData.queryParkData()
.then (queryAPIDataParks => {
console.log(queryAPIDataParks);
})


console.log(appendDom.listenUpParks())


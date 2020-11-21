const findCityBN = require('./findCityByName')
const sunrisetDB = require('sunriset')

const findClosestAirport = function (cityA){
  //find cityA location
  const cityData = findCityBN(cityA)
  const cityLongtitude = cityData.loc.coordinates[1]
  const cityLatitude = cityData.loc.coordinates[0]

  const getSuntime = sunrisetDB(new Date(), cityLongtitude, cityLatitude)

  return getSuntime
}

// console.log(findClosestAirport('Chengdu'))
module.exports = findClosestAirport
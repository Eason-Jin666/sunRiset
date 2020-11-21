const findCityBN = require('./findCityByName')
const sunrisetDB = require('sunriset')

const findClosestAirport = function (cityA){
  //find cityA location
  const cityData = findCityBN(cityA)
  const cityLatitude = cityData.loc.coordinates.re


}
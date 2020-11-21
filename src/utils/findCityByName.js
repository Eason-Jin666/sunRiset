const cityDb = require('all-the-cities')

const findCityByName = function (name) {
    const result = cityDb.find(function(item){
        return (item.name === name)
    })

    //result
    return result
}
//test
console.log(findCityByName('Chengdu'))
// module.exports = findCityByName
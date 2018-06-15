const yargs = require('yargs')
var geocode = require('./geocode/geocode.js')
var weather = require('./geocode/weather.js')

var argv = yargs.options({
    a:{
        demand: true,
        alias: 'address',
        description: 'address to fetch weather',
        string: true
    }
}).help().alias('help','h').argv
// https://api.darksky.net/forecast/56f8a400067dd9b659ad5e4e2835131e/13.0826802,80.2707184
geocode.geocodeAddress(encodeURIComponent(argv.address),(error,result)=> {
    if(error) {
        console.log(error)
    } 
    else if(result) {
        weather.getWeather(result.latitude,result.longitude, (error,weatherObj)=> {
            if(error) {
                console.log(error)
            } else if(result) {
                console.log(`It is currently ${weatherObj.temperature}. Weather will be ${weatherObj.summary}`)
            }
        })     
    }


})
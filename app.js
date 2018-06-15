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

geocode.geoCode(encodeURIComponent(argv.address)).then((location) => {
    return weather.checkWeather(location.latitude,location.longitude)
}).then((weather) => {
   console.log(`It is currently ${weather.temperature}. Weather will be ${weather.summary}`) 
}).catch((error)=> {
    console.log(error)
})

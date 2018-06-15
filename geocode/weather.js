const request = require('request')

getWeather = (latitude,longitude,callback) => {
    request({
        url:`https://api.darksky.net/forecast/56f8a400067dd9b659ad5e4e2835131e/${latitude},${longitude}`,
        json: true   
 },(error,response,body) => {
     if(error) {
         callback("Unable to connect forecast server")
     }
     else if(response.statusCode === 200){
        //  console.log(body)
         callback(undefined, {
             "temperature": body.currently.temperature,
             "summary": body.currently.summary
         })
     }
     else if(response.statusCode == 400) {
         console.log(response.statusCode)
         console.log(JSON.stringify(body,undefined,2))
         callback("Unable to fetch weather for given co-ords")
     }
 })
}   

module.exports.getWeather = getWeather
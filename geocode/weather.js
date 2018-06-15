const request = require('request')

  

checkWeather = (latitude,longitude) => {

    return new Promise((resolve,reject)=> {
        request({
            url:`https://api.darksky.net/forecast/56f8a400067dd9b659ad5e4e2835131e/${latitude},${longitude}`,
            json: true   
     },(error,response,body) => {
         if(error) {
             reject("Unable to connect forecast server")
         }
         else if(response.statusCode === 200){
             resolve({
                 "temperature": body.currently.temperature,
                 "summary": body.currently.summary
             })
         }
         else if(response.statusCode == 400) {
             reject("Unable to fetch weather for given co-ords")
         }
     })
    })
}

module.exports = {
  
    checkWeather : checkWeather 
}
var asyncAdd = (a, b) => {
    return new Promise((resolve,reject) => {
       setTimeout(()=> {
            if(typeof a === 'number' && typeof b === 'number') 
                resolve(a + b)
            else
                reject('Arguments must be numbers')
       }, 5000) 
    
    })
}



asyncAdd(23,77).then((result) => {
    console.log(`The answer is ${result}`)
},(error) => {  
    console.log(error)
})

// var promise = new Promise((resolve,reject)=> {

//     setTimeout(()=> {
//         resolve("Resolved data")        
//     },5000)
// })


// promise.then((message)=> {
//     console.log(message)
// }, (error)=> {
//     console.log(error)
// })
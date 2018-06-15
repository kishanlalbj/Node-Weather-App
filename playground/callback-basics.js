var getUser = (id,callback) => {
    var user = {
        id:id,
        name:'Chiyaan'
    }
    setTimeout(()=>{
        callback(user)
    },2000)
    
}

console.log("Waiting...")

getUser(31,(userObject)=> {
    console.log("User Object Added ",userObject )
})
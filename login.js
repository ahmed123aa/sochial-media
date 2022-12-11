// ---------show and hidden pass => start-----------
let e = document.querySelector(".shHi")
e.addEventListener("click", () =>{
    if(e.nextElementSibling.type==="password"){
        e.nextElementSibling.type="text"
        e.src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRdeXo7qrLCm3bGGgGCZ1Ief-6ZCxVI-OmvwRKp9UmJYLRQMuAJUk4DdD9c6Wynr1XVEM&usqp=CAU"
    }else{
        e.nextElementSibling.type="password"
        e.src="https://icons-for-free.com/iconfiles/png/512/hidden+icon-1320183614047893754.png"
    }
})
// ---------show and hidden pass => end-----------


// ---------send data from login => start--------- 

let login = document.getElementById("login")
login.addEventListener("click",function(){
    let email = document.getElementById("email").value
    let password = document.getElementById("password").value    
        let req =new XMLHttpRequest()
    req.open("POST","https://reqres.in/api/login")
    let body = JSON.stringify({ 
      "email":email,
      "password":password
      }) 
    req.send(body)
    req.onload = function(){
      if(req.status >=200 && req.status <300 ){
        let responseSucsees = JSON.parse(req.response)
        console.log(`response is Sucsees:. ${req.status} `)
        window.localStorage.setItem("token",responseSucsees.data.token)
    }else{
        console.log(`response is unSucsees:. ${req.status} `)
        let responseUnsucsees = JSON.parse(req.response)
        console.log(responseUnsucsees.error)
        location.href= "../login and rigester/welcome.html"

    }
}
}
)



// // reqLogin
// function reqLogin(){
//     let req =new XMLHttpRequest()
//     req.open("POST","https://reqres.in/api/login")
//     let body = JSON.stringify({ 
//       "email": 
//       "password": 
//       }) 
//     req.send(body)
//     req.onload = function(){
//       if(req.status >=200 && req.status <300 ){
//         let responseSucsees = JSON.parse(req.response)
//         console.log(`response is Sucsees:. ${req.status} `)
//         window.localStorage.setItem("token",responseSucsees.data.token)
//     }else{
//         console.log(`response is unSucsees:. ${req.status} `)
//         let responseUnsucsees = JSON.parse(req.response)
//         console.log(responseUnsucsees.error)
//       }
//     }
// }






















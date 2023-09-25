// const { default: axios } = require("axios")

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
// ---------send data from login => start by ajax--------- 

// let login = document.getElementById("login")
// login.addEventListener("click",function(){
//     let UserName = document.getElementById("UserName").value
//     let password = document.getElementById("password").value    
//     let req =new XMLHttpRequest()
//     req.open("POST","https://tarmeezacademy.com/api/v1/login")
//     req.setRequestHeader("Accept", "application/json");
//     req.setRequestHeader("Content-type","application/json");
//     let body = JSON.stringify({
//             username:"ahmeddd123",
//             password :123456789,
//     })
//     // "username":"ahmeddd123",
//     // "password": "123456789",
//     // "name":"ali"
//     req.send(body)
//     console.log(`sent `)
//     req.onload = function(){
//             if(req.status >=200 && req.status <300 ){
//                 let responseSucsees = JSON.parse(req.response)
//         // window.localStorage.setItem("token",JSON.stringify(req.response))
//         // location.href= "../login and rigester/home.html"
//     }else{
//             let responseUnsucsees = JSON.parse(req.response)
//             alert(responseUnsucsees.error)
//         console.log(`response is unSucsees:. status ${req.status}  readyState  ${req.readyState} `)
//     }
// }
// }
// )
// ---------send data from login => end by ajax--------- 




// window.localStorage.clear()

    function message (mess){
        document.getElementById("countMessage").innerHTML =`
            <div id="message">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2odXc3DVvMonj_yuXb8q5kR0N-1ndG8Fv9VSufsUAf60UjwbOPkWZVbPmZVuOf3-PoB0&usqp=CAU">
                <p id="contentMessage">${mess}</p>
            </div> 
        `
        setTimeout( ()=>{
            document.getElementById("countMessage").innerHTML = ""
        },3000)
    }
     // ---------send data from register => start by axios--------- 

     // baseUrl
     let baseUrl = "https://tarmeezacademy.com/api/v1/" 
     let signup = document.getElementById("signup")
     signup.addEventListener("click",function(){
         console.log("you clicked on signup")
         let UserName = document.getElementById("username-signup").value
         let password = document.getElementById("password-signup").value    
         let name = document.getElementById("name-signup").value   
         let image = document.getElementById("file").files[0]   
         console.log(UserName,name,password)
         // body params
        //  let body = {
        //      "username":UserName,
        //      "password":password,
        //      "name":name
        //  }
        let formData= new FormData()
        formData.append("username",UserName)
        formData.append("password",password)
        formData.append("name",name)
        formData.append("image",image)

         // full url to login
         let url =`${baseUrl}register`
         axios.post(url,formData)
    .then(response=>{
        // console.log(response.data)
        localStorage.setItem("token",response.data.token)
        localStorage.setItem("userData",JSON.stringify(response.data.user))
        location.href= "../social/index.html"
        })
    .catch(error=>{
        console.log(error)
        console.log(`eroor message  ${error.response.data.message}  `)
        message(error.response.data.message)
    //  alert(error.response.data.message)
     })
 }
 )

     // ---------send data from register => end by axios--------- 
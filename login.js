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
    let UserName = document.getElementById("UserName").value
    let password = document.getElementById("password").value    
    let req =new XMLHttpRequest()
    req.open("POST"," https://tarmeezacademy.com/api/v1/login")
    req.setRequestHeader("Accept", "application/json");
    req.setRequestHeader("Content-type","application/json");
    let body = JSON.stringify({
        "username":UserName,
        "password":password,
    })
    // "username":"ahmeddd123",
    // "password": "123456789",
    // "name":"ali"
    req.send(body)
    req.onload = function(){
        if(req.status >=200 && req.status <300 ){
        let responseSucsees = JSON.parse(req.response)
        // window.localStorage.setItem("token",JSON.stringify(req.response))
        // location.href= "../login and rigester/home.html"
    }else{
        let responseUnsucsees = JSON.parse(req.response)
        alert(responseUnsucsees.error)
        console.log(`response is unSucsees:. status ${req.status}  readyState  ${req.readyState} `)
    }
}
}
)







// window.localStorage.clear()


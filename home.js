// const { all } = require("axios")

let sidbar = document.querySelectorAll(".part-2 >div")

sidbar.forEach((element)=>{
    
    element.addEventListener("click",function(){
        
        // console.log(element)
        sidbar.forEach((ele)=>{
            ele.classList.remove("active")
        })
        element.classList.add("active")
    })

})

// *****************************************************

// go to Login => whene click login
function goToLogin () {
    let login = document.getElementById("login")

    login.addEventListener("click",()=>{
    
        location.href= "../login and rigester/login.html"
    })
}
goToLogin ()

// *****************************************************

// appear and disappear => login &Logout & Buttom => start
function loginLogoutButtom(){
    if(localStorage.getItem("token") !==null){
        document.getElementById("login").style.display = "none"
        document.getElementById("namePerson").textContent =JSON.parse(localStorage.getItem("userData")).name
        if( document.getElementById("whatIsOnYourMind")!=null){
            document.getElementById("whatIsOnYourMind").placeholder= `what is on your mind, ${JSON.parse(localStorage.getItem("userData")).name}`
        }
        var emptyObject = JSON.parse(localStorage.getItem("userData")).profile_image;
        // update defult picture (user) => it depends user has picture or not
        if (isObjEmptyPictureProfile(emptyObject)) {
            console.log("empty => stil defult")
        }else{
            console.log("there is picture => it shoude be change to it")
            document.getElementById("imgeProfile").src =emptyObject
            if( document.getElementById("whatIsOnYourMind")!=null){
                document.getElementById("imge-pro").src =emptyObject
            }
            document.getElementById("imge-prof").src =emptyObject
            document.getElementById("userName").textContent =`@${JSON.parse(localStorage.getItem("userData")).username}`
            console.log(emptyObject)
            
        }
    }else{
        document.getElementById("login").style.display = "block" 
        document.getElementById("logout").style.display = "none"
        
        // todo => i wanna apear measage whene login
    }
}
loginLogoutButtom()

// *****************************************************

// appear and disappear => login &Logout & Buttom => end
function logout(){
    localStorage.removeItem("token")
    localStorage.removeItem("userData")
    loginLogoutButtom()
    message("your logout has been confirmed","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_wbBfnys5rxvgITJDUK-vKqPbaCW2rKSp-w&usqp=CAU")
  
}

// *****************************************************
// message => as alert
function message (mess,imge){
    document.getElementById("countMessage").innerHTML =`
        <div id="message">
            <img src="${imge}">
            <p id="contentMessage"> ${mess} </p>
        </div> 
    `
    setTimeout( ()=>{
        document.getElementById("countMessage").innerHTML = ""
    },3000)
}

// *****************************************************
// is Obj Empty Picture Profile
function isObjEmptyPictureProfile (obj) {
    return Object.keys(obj).length === 0;
}

// *****************************************************
// creat post => open model
function creatPost (){
        // console.log(document.getElementsByClassName("new-post"))
    if(localStorage.getItem("token") !==null){
        // in console
        console.log("you can")
        // open model
        document.getElementById("model").style.visibility = "visible"
        // confused content
        document.getElementById("home").style.filter = "blur(3px)"

        
    }else{
        // in console
        console.log("you can not")
        // go to login first
        location.href= "../login and rigester/login.html"

    }
}

// *****************************************************
// close models &  clear content
if(document.getElementById("close-model-1")!=null){
    document.getElementById("close-model-1").addEventListener("click",()=>{
        document.getElementById("model").style.visibility = "hidden"
          document.getElementById("home").style.filter = "none"
          
        })
        document.getElementById("close-model-2").addEventListener("click",()=>{
            document.getElementById("model").style.visibility = "hidden"
            document.getElementById("home").style.filter = "none"
    })
}

// *****************************************************
function craetPost() {
      // ---------creat post => start by axios--------- 
        // baseUrl
        let baseUrl = "https://tarmeezacademy.com/api/v1/" 
        let craetPostt = document.getElementById("craetPostt")
        craetPostt.addEventListener("click",function(){
            let title = document.getElementById("title").value
            let content  = document.getElementById("content").value    
            let fileImage = document.getElementById("fileImage").files[0]    
            let token =localStorage.getItem("token")
            // formData =>body params
            let formData = new FormData()
            formData.append("title",title)
            formData.append("body",content)
            formData.append("image",fileImage)
        // let body = {
        //     "title":title,
        //     "body":content,
        // }
            // full url to login
            let url =`${baseUrl}posts`
            axios.post(url,formData,{
                headers:{
                "authorization": `Bearer ${token}`,
                }
            })
        .then(response=>{
            // console.log(response.data)
            console.log(response)
            // hidde model
            document.getElementById("model").style.visibility = "hidden"
            document.getElementById("home").style.filter = "none"
            // message => alert
            message ("your post was created","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_wbBfnys5rxvgITJDUK-vKqPbaCW2rKSp-w&usqp=CAU")
        //    read posts
            readPost()
          
            })
            .catch(data=>{
                console.log(data)
                // console.log(`eroor message  ${data.response.data.message}  `)
                message (data.message,"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2odXc3DVvMonj_yuXb8q5kR0N-1ndG8Fv9VSufsUAf60UjwbOPkWZVbPmZVuOf3-PoB0&usqp=CAU")
                // message (data.message,"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_wbBfnys5rxvgITJDUK-vKqPbaCW2rKSp-w&usqp=CAU")
        })
    }
    )
    // ---------creat post => end by axios--------- 

}

if( document.getElementById("craetPostt")!=null){
    craetPost()
}
function detailspost (idPost) {
    console.log(idPost)
    location = `../login and rigester/detailsPost.html?idPost=${idPost}`
}
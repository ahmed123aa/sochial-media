let countCurrent =""
// const { all } = require("axios")
function activeClass(){   
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
}
activeClass()

// *****************************************************

// go to Login => whene click login
let login = document.getElementById("login")
function goToLogin () {

    login.addEventListener("click",()=>{
    
        location.href= "../login and rigester/login.html"
    })
}
if(login !=undefined){
    
    goToLogin ()
}

// *****************************************************

// appear and disappear => login &Logout & Buttom => start
function loginLogoutButtom(){
    if(localStorage.getItem("token") !==null){
        if(login !=undefined){    
            document.getElementById("login").style.display = "none"
        }
        // if(document.getElementById("new-post") ==undefined){    
        //     document.getElementById("commentCreat").style.visibility = "visible"
        // }
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
            if(document.getElementById("imgeProfile") !=undefined){    
                document.getElementById("imgeProfile").src =emptyObject
            }
            if( document.getElementById("whatIsOnYourMind")!=undefined){
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
    location.reload()
  
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
        // namePublisher
        document.getElementById("namePublisher").innerText=JSON.parse(localStorage.getItem("userData")).name
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
function closeModels (){
    if(document.getElementById("close-model-1")!=null){
        document.getElementById("close-model-1").addEventListener("click",()=>{
            document.getElementById("model").style.visibility = "hidden"
                document.getElementById("home").style.filter = "none"
                    location.reload()
                })
                document.getElementById("close-model-2").addEventListener("click",()=>{
                    document.getElementById("model").style.visibility = "hidden"
                        document.getElementById("home").style.filter = "none"
                            location.reload()
        })
    
    }
}
closeModels()

// *****************************************************
// craet Post
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
            let url =""
            let idPost =document.getElementById("hiddenForId").value
            if(idPost==null || idPost==""){
                url =`${baseUrl}posts`
                console.log(idPost)
            }else{
                formData.append("_method","put")
                url =`${baseUrl}posts/${idPost}`
                console.log(idPost)
            }
            axios.post(url,formData,{
                headers:{
                "authorization": `Bearer ${token}`,
                }
            }).then(response=>{
                // console.log(response.data)
                console.log(response)
                // hidde model
                document.getElementById("model").style.visibility = "hidden"
                document.getElementById("home").style.filter = "none"
                // message => alert
                message ("your post was created","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_wbBfnys5rxvgITJDUK-vKqPbaCW2rKSp-w&usqp=CAU")
            //    read posts
                // readPost()
                location.reload() 

              
                })
                .catch(data=>{
                    console.log(data)
                    // console.log(`eroor message  ${data.response.data.message}  `)
                    message (data.message,"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2odXc3DVvMonj_yuXb8q5kR0N-1ndG8Fv9VSufsUAf60UjwbOPkWZVbPmZVuOf3-PoB0&usqp=CAU")
                    // message (data.message,"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_wbBfnys5rxvgITJDUK-vKqPbaCW2rKSp-w&usqp=CAU")
            })
       
    }
    )
    // ---------creat post => end by axios--------

}
// *****************************************************

// check Element Creat In Page or not
function checkElementCreatInPage (){
    if( document.getElementById("craetPostt")!=null){
        craetPost()
    }
}
// *****************************************************

checkElementCreatInPage()
// details post
function detailspost (idPost) {
    console.log(idPost)
    location = `../login and rigester/detailsPost.html?idPost=${idPost}`
}
// *****************************************************

// apear popp setting
function  apearPoppSetting (count){
    let countElement = document.getElementsByClassName("menuSetting").length
    for(let i =0 ; i < countElement ; i++){
        document.getElementsByClassName("menuSetting")[i].style.cssText ="visibility:hidden;"
    }
    document.getElementsByClassName("menuSetting")[count-1].style.cssText ="visibility:visible;"
    countCurrent = count-1
    // console.log(  document.getElementsByClassName("menuSetting").length)
}
// *****************************************************
// update Post
function update(Post){
    let Postt= JSON.parse(decodeURIComponent(Post))
    // console.log(Postt)
    // console.log( document.getElementsByClassName("titleModel").value)
    if(localStorage.getItem("token") !==null)
    // in console
    console.log("you can")
    // name publisher
        document.getElementById("namePublisher").innerText=JSON.parse(localStorage.getItem("userData")).name
    //    fill hiddenForId
        document.getElementById("hiddenForId").value =Postt.id
        //    fill filds
        if(Postt.title != null){
            document.getElementsByClassName("titleModel")[0].value =Postt.title
        }
        document.getElementsByClassName("contentModel")[0].value =Postt.body
        // change to update
        document.getElementById("tittlePost").innerText= "update post"
        document.getElementsByClassName("craetPosttOrUpdate")[0].innerText= "update"
        // open model
        document.getElementById("model").style.visibility = "visible"
        // confused content
        document.getElementById("home").style.filter = "blur(3px)"
    }
// *****************************************************

function closeSetting(){ 
    document.getElementsByClassName("menuSetting")[countCurrent].style.cssText ="visibility:hidden;"
}
// *****************************************************
// setting Popp
let edit =""
let popp =""
function settingPopp(post){
    
    if(localStorage.getItem("token") !==null){
    if(post.author.id==JSON.parse(localStorage.getItem("userData")).id){
        edit=`<img id="threeLines" class="threeLines"  onclick="apearPoppSetting ()" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEI8WPzGIYKhyNogTncG7fYhEW-1UOTi8YvA&usqp=CAU">`
        popp=`
            <div style ="visibility: hidden;" id ="menuSetting" class="menuSetting">
                <div class="deleteCont">
                    <img src=" https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4EMnEciew_onpMaTiS2xtPZxPlw4upCFNpQ&usqp=CAU">
                    <span>delete</span>
                </div>
                <div class="updateCont"  onclick="update('${encodeURIComponent(JSON.stringify(post))}')" >
                    <img src="https://cdn0.iconfinder.com/data/icons/social-media-glyph-1/64/Facebook_Social_Media_User_Interface-41-512.png">
                    <span>update</span>
                </div>
                <div>
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWppIpYBlxcjmQ0lRNsZvBWjrrwthDt6_ZKg&usqp=CAU">
                    <span>hidden</span>
                </div>
                <span onclick="closeSetting()" class ="closeSetting"> x</span>
            </div>
        
        `
    }   

    }
}

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
// read Posts
readPost()
function readPost() {
    // Requests => show some posts
fetch("https://tarmeezacademy.com/api/v1/tags/1/posts")
.then((responseJson)=>{
  return  responseJson.json()

}).then((jsObject)=>{
   let data =  jsObject.data
   for(let post of data){
        let  tagName =[]
        for(tag of post.tags){
            tagName.push(tag.name)
        }
        if(tagName[2]==undefined){
            tagName[2]=tag.arabic_name
        }
        let titleCont =""
        if(post.title != null){
            titleCont =`${ post.title} :`
        }
        document.querySelector(".countner >div").innerHTML +=  `
        <div class="cont-post">
            <div>
                <div><img class="imge-pro" src="file:///C:/Users/Black%20Horse/Desktop/webs/pictures/255102914_1418254615243946_3157813420997906125_n.jpg"></div>
                <div>
                    <p>${post.author.username}</p>
                    <p>cairo ${post.created_at} </p>
                </div>
                <img class="threeLines" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEI8WPzGIYKhyNogTncG7fYhEW-1UOTi8YvA&usqp=CAU">
            </div>
            <div class="imge-post">
                <img  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQ_0egIARAu6k6cg13wstDifbKi9djp4tjhQ&usqp=CAU">
            </div>
            <div class="body-post"> 
                <h4>${titleCont}</h4>
                <p>${post.body}</p>
            </div>
            <div class="actionsAndTags"> 
                <div class="actions">
                    <div>
                        <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHoAAAB6CAMAAABHh7fWAAAAYFBMVEUAAAD////p6ent7e35+fmHh4e9vb329vaLi4syMjI7OztnZ2dDQ0N0dHTi4uLz8/Ovr69hYWHR0dF8fHzIyMgLCwsqKipUVFQdHR3Z2dm2traioqIUFBRNTU2VlZVsbGxrIfkgAAADrklEQVRoge2a6baqMAyFW2aRWWVwfP+3vChO0Cktga51j/t/8gktdTcJodZEfugf+of+Y2gvdx3HzUPdrOEQ55mhPSeIbk2yads6vmx3RQbkh1nhby9x3babpLlFgSPkC9CVn5CJ6jRQg4O0nsYlfgVHeycm/ik/k3GdSBBWX3mvjEW7viDBQ2UnAnelLM531eiTLMFdKZvk/oNTVdxpuugTdMUsMav2yJKPrToumaz5GK185EG7ydKFO1jcSYxWvrSXLs7oZV+gcakA7TXQDIScv7Z6dobHNR4PHcbwDL3eO73TCotDFu0BNthIz+fONMMSj0FLv0qezo/fH2q87UHlFC06iCRq7nEa++OlaIze62cg5Erp1SRuP0KbZOi3mt4We+sbDTwSpor1Poq3dh+04Y83V/dGa+/uuSpf6GptMiHVE71dH70d0NlhffQhe6CB/5S4Oj3Qhl/IPMV3dGfhffdvvOvRhQ0yIUWPBlsTXKU9emMHvaHEs7LU/WJ7RNdloCkjFk7RQRUxMgkY2pPAFjr4o2iLa21xhzu20A6h2tcHHJ37M1z3roWkpEdLSyfLKerRlr6uoEc7gDIIvlrn7s0MLovz1Txs4dEG+vhAu6La4IKq3eH2YWGP+8+LjwWjkr1umqs/tv++5OZro/NPVWHla0DxXUsBlxoxdBmVcVb963TGdbMVT/JXH+NdLTSqgJnoyhQqTeqFJoooi16H/SGPSvErvPMr5aOXZ3+TJ72Phdkj8rTjs2g1adx1YfpcCx6pBZWjlztbmI4o21hc6BLG9mI57dRF2HuWw+vkVuh3oQOvj8ztX3fI7DO3g81vneMWLw/8xrOga495JWkdPkM0q+CiFRFrbr9bgqY5Uq06zkUE8XBIiHLxjsWDHZK5FJ2mskgXyWiKbCRmPruRDcXIp3Fu88hbaXLFDJJhx3FQKs+tGn+acR3zFamVk1fGbBUZMPRlaFQjZWLAvJmRYbuq80JG3QwM20mdFTZlp13omdowc7SuYQMMpoHRemwYGTzWGMDNA5AMn6jcA03TgWMAZ6JpBXpurgGciwaZxbNw/m8WmmZKw9ZKxx5noJXVVKENm49WmMWNwHqioKkrMWyx1jPrjyvnwuJeIrSeSGhhYVFmALHQ/ImlUh2HgOYNDskNIB6aHepQGEBE9NSo7oySGA7kjwyb0gCior8NG8CGoaI/hg1iw3DRrwobyIYho+m+rOsSbAxQ0f2JrnlqI6Ln6Yf+oX/o/w/9DwWyLwoZImi1AAAAAElFTkSuQmCC">
                        <span>54</span>
                    </div>
                    <div>
                        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/45/Simple_Comments.svg/1024px-Simple_Comments.svg.png">
                        <span>${post.comments_count} </span>
                    </div>
                    <div>
                        <img src="https://cdn.icon-icons.com/icons2/936/PNG/512/share-symbol_icon-icons.com_73418.png">
                        <span>76</span>
                    </div>
                </div>
                <div class="tags">
                    <div><span> ${tagName[0]}</span></div>
                    <div><span> ${tagName[1]} </span></div>
                    <div><span> ${tagName[2]}</span></div>
                
                </div>
            </div>
        </div>

        `
   }
}).catch(()=>{
    console.log("error")
})

}

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
        document.getElementById("whatIsOnYourMind").placeholder= `what is on your mind, ${JSON.parse(localStorage.getItem("userData")).name}`
        var emptyObject = JSON.parse(localStorage.getItem("userData")).profile_image;
        // update defult picture (user) => it depends user has picture or not
        if (isObjEmptyPictureProfile(emptyObject)) {
            console.log("empty => stil defult")
        }else{
            console.log("there is picture => it shoude be change to it")
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
document.getElementById("close-model-1").addEventListener("click",()=>{
    document.getElementById("model").style.visibility = "hidden"
      document.getElementById("home").style.filter = "none"
      
    })
    document.getElementById("close-model-2").addEventListener("click",()=>{
        document.getElementById("model").style.visibility = "hidden"
        document.getElementById("home").style.filter = "none"
})

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
craetPost()

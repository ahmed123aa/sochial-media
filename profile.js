let url = new URLSearchParams(location.search)
let id =url.get("id") 
// ===========show posts => start==============================================

function readPost(id) {
    // Requests => show some posts
    let baseUrl = "https://tarmeezacademy.com/api/v1"
    axios.get(baseUrl+`/users/${id}/posts`)
        .then(function (dataResp) {
            // console.log(response)
            let posts =dataResp.data.data
            let count =1
            for(let post of posts){
                if (isObjEmptyPictureProfile (post.image)) {
                    var imagee = "https://i.pinimg.com/originals/84/2a/d6/842ad68b315b0f586c30b465221da609.jpg"                 
                }else{
                    imagee = `"${post.image}"`
                }
                if (isObjEmptyPictureProfile (post.author.profile_image)) {
                    var imageProfile = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR05q_vg5Ux_rPqNDBBeYLc1BHrG-qjaw7_tA&usqp=CAU"                 
                }else{
                    imageProfile =post.author.profile_image
                }
                let titleCont =""
                if(post.title != null){
                    titleCont =`${ post.title} :`
                }
                settingPopp(post,count)
                count++
                document.querySelector(".content").innerHTML +=  `
                <div class="cont-post " >
                    <div>
                        <div><img class="imge-pro" src="${imageProfile}"></div>
                        <div>
                            <p >${post.author.username}  </p>
                            <p>cairo ${post.created_at} </p>
                        </div>
                        ${edit}
                    </div>
                    <div class="imge-post" onclick="detailspost (${post.id})" style ="cursor: pointer;">
                        <img  src=${imagee}>
                    </div>
                    <div class="body-post" onclick="detailspost (${post.id})" style ="cursor: pointer;"> 
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
                        
                    </div>
                    ${popp}
                </div>

                `
            }
            })
        .catch((eroor)=>{
            console.log("error")
            console.log(eroor)
        })

}
readPost(id)
// ===========show posts => end================================================

// ============> transform =>start==============================================

function transform(){
    let trans = document.querySelectorAll(".trans >div")
trans.forEach((element)=>{
        
        element.addEventListener("click",function(){
            
            // console.log(element)
            trans.forEach((ele)=>{
                ele.classList.remove("activee")
            })
            element.classList.add("activee")
        })

    })

}
transform()
// ============> transform =>end================================================

// ============> infoProfile =>start=============================================

function infoProfile(id){
       // Requests => show some posts
       let baseUrl = "https://tarmeezacademy.com/api/v1"
       axios.get(baseUrl+`/users/${id}`)
        .then(function (dataResp) {
            let user =dataResp.data.data
            // console.log(user)
            document.getElementById("nameProfile").textContent=user.username
            document.getElementById("emailProfile").textContent=user.email
            let imgeProfile
            if (isObjEmptyPictureProfile (user.profile_image)) {
                imgeProfile ="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR05q_vg5Ux_rPqNDBBeYLc1BHrG-qjaw7_tA&usqp=CAU"                 
            }else{
                imgeProfile =user.profile_image
            }
            document.getElementById("imge-pro-page").src=imgeProfile
            document.getElementsByClassName("spechial")[0].textContent=user.posts_count
            document.getElementsByClassName("spechial")[1].textContent=user.comments_count
        })
}
infoProfile(id)
// ============> infoProfile =>end===============================================
   


// console.log(id)


























































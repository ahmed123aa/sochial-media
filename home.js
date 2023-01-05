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

// ******************************
// Requests => show some posts

// ******************************
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

// ***************************
let login = document.getElementById("login")

login.addEventListener("click",()=>{[

    location.href= "../login and rigester/login.html"

]})














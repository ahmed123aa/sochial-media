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





















// show and hidden pass with loop
    // shHid.forEach(function(e){
//     e.addEventListener("click", () =>{
//         console.log( e)
//         if(e.nextElementSibling.type==="password"){
//             e.nextElementSibling.type="text"
//             e.src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRdeXo7qrLCm3bGGgGCZ1Ief-6ZCxVI-OmvwRKp9UmJYLRQMuAJUk4DdD9c6Wynr1XVEM&usqp=CAU"
//             //   e.classList.add("aha")
//         }else{
//             e.nextElementSibling.type="password"
//             e.src="https://icons-for-free.com/iconfiles/png/512/hidden+icon-1320183614047893754.png"
            
//         }
//         })

// })

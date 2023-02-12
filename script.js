let inptag=document.querySelector("input")
let ultag=document.querySelector("ul")
inptag.addEventListener("keydown",function(e){

    let key=e.key;
    if(key=="Enter")
    {
        let value=inptag.value
        // console.log(value)
        inptag.value=""
        let litag=document.createElement('li')
        litag.innerHTML=`<div>${value}</div>
                          <div class="delete"><i class= "fa fa-trash"></i></div>`;

        handleremoval(litag)                
        ultag.appendChild(litag)


    }
   
})

function handleremoval(litag)
{
    let deleteDiv=litag.querySelector(".delete")
    deleteDiv.addEventListener("click",function(){
        litag.remove()
    })

}

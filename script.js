var addpopup=document.getElementById("addpopup")
var popupoverlay=document.querySelector(".popupoverlay")
var popupcontent=document.querySelector(".popupcontent")
function popup()
{
popupoverlay.style.display="block"
popupcontent.style.display="block"

}
var addbook=document.getElementById("addbook")
var cancelpopup=document.getElementById("cancelpopup")
cancelpopup.addEventListener("click", function(event){
    event.preventDefault()
})

cancelpopup.addEventListener("click", function(){
    popupcontent.style.display="none"
    popupoverlay.style.display="none"
})
var inbox=document.querySelector(".inbox")
var booktitle=document.getElementById("booktitle")
var bookauthor=document.getElementById("bookauthor")
var bookdesc=document.getElementById("bookdesc")

addbook.addEventListener("click", function(event){
    event.preventDefault()
var div=document.createElement("div")
div.setAttribute("class","bookcontainer")
div.innerHTML=`<h2>${booktitle.value}</h2><h4>${bookauthor.value}</h2><p>${bookdesc.value}</p>
<button onclick="deletebook(event)">Delete</button>`
inbox.append(div)
popupoverlay.style.display="none"
popupcontent.style.display="none"

}
)
function deletebook(event)
{
event.target.parentElement.remove()

}
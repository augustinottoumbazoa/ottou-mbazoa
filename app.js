let save = document.querySelector(".btn-save")
let inputtile= document.getElementById("titlefield")
let contain= document.querySelector(".cards-grid")
let inputext= document.getElementById("description")
let i =0
let compt =0
let look = 0

let isUpdate = false, updateId;


function addCard(i ,inputtile,inputext){

 // cree la div qui  a pour class card
 let card = document.createElement("div")
 card.className="card"// donne la class card a la div cree
 contain.appendChild(card)// insere ce bloc dans la balise qui a pour class .cards-grid appeler contain
 /* ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++*/
 /* ---------------------------------------------------------------------------------------------------------*/
 // cree le div qui  a pour class card-actions
 let card_action = document.createElement("div")
 card_action .className="card-actions"// donne la class card a la div cree
 card.appendChild(card_action)// insere ce div dans la balise qui a pour class .cards-grid appeler container
 /* ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++*/
 /* ---------------------------------------------------------------------------------------------------------*/
  // cree la div qui  a pour class action delete
  let supprimer = document.createElement("div")
  supprimer.className="action delete"//donne la class "action delete" a la div cree
  supprimer.cloneNode(true) //copie tout ce qui se trouve
  card_action.appendChild( supprimer) //insere cet div dans la balise qui a pour class "card-actions"
   /* ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++*/
 /* ---------------------------------------------------------------------------------------------------------*/
  // cree l image qui permmettra de supprimer  
  const imgdelete = document.createElement("img")
  imgdelete.src="delete.svg"
  supprimer.appendChild(imgdelete )//insere cet img dans la balise qui a pour class "action delete""
/* ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++*/
 /* ---------------------------------------------------------------------------------------------------------*/
 imgdelete.onclick = () => del(id);
  // cree la  div  qui  a pour class action update
  let modifier = document.createElement("div")
   modifier.className="action update"//donne la class "action update" a la div cree
modifier.cloneNode(true) //copie tout ce qui se trouve
card_action .appendChild( modifier) //insere cet div dans la balise qui a pour class "card-actions"
  /* ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++*/
 /* ---------------------------------------------------------------------------------------------------------*/
  // cree l image qui permmettra de modifier 
  const updateimage = document.createElement("img")
  updateimage.src="update.svg"
  modifier.appendChild(updateimage  )//insere cet img dans la balise qui a pour class "action update""
/* ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++*/
 /* ---------------------------------------------------------------------------------------------------------*/
 updateimage.onclick = () => updateNote(id,inputtile,inputext);
//cree le div++ qui  a pour class "card-wrapper"
 let wrapper = document.createElement("div")
 wrapper.className="card-wrapper"// donne la class card-wrapper a la div cree
 card.appendChild( wrapper)// insere ce div dans la balise qui a pour class .cards-grid appeler container
 /* ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++*/
 /* ---------------------------------------------------------------------------------------------------------*/
 //cree l identifiant de chaque block
 let id = document.createElement("span")
id.innerHTML="#" +i
 wrapper.appendChild( id)// insere ce bloc dans la balise qui a pour class "card-wrapper" appeler wrapper

 
 
 /* ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++*/
 /* ---------------------------------------------------------------------------------------------------------*/
//cree la balise h1 qui  a pour class "title"
 let titre = document.createElement("h1")
titre.className="title"// donne title la classe  au h1 cree
wrapper.appendChild( titre)// insere ce bloc dans la balise qui a pour class "card-wrapper" wrapper
titre.innerText=inputtile.value
inputtile.value= ""
/* ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++*/
 /* ---------------------------------------------------------------------------------------------------------*/
// cree la balise p qui  a va contenir la description
let textarea = document.createElement("p")
wrapper.appendChild( textarea)// insere ce bloc dans la balise qui a pour class "card-wrapper" wrapper
textarea.innerText=inputext.value
inputext.value=""
/* ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++*/
 /* ---------------------------------------------------------------------------------------------------------*/
 
}
function del(el) {
    el.parentElement.parentElement.remove(); //supprime le parent et les enfants
    
    compt--
    

    
}


function updateNote(el) {
  save.innerHTML="update"
  look=1


    
  
  save.onclick = () =>{
    del(el)
  
    if (look==1) {

 let newtitle =inputtile.value
 let newtext =inputext.value
  addCard(i ,inputtile,inputext)
  look=0
  save.innerHTML="Enregistrer"
  
}

}

}

controlid = function(){
 

       
      

    if (compt=0) {
        compt++

        return i  
        
    }else{
     i++
     
       return i
  }

}

 
save.addEventListener("click",(e) => {


e.preventDefault()

    

  alert("entrer un titre et un text")

  
if (look== 0) {
  

   controlid()
    addCard(i ,inputtile,inputext)
    
  }})
  

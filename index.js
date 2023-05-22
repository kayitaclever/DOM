// Change document background color to
// silver

document.getElementById("document").style.backgroundColor="silver"


// Change the font color for h1 title tag to
// green
document.getElementById("title").style.fontSize="100px"
document.getElementById("title").style.color="green"


// Change the font case for h3 title tags to
// uppercase
document.getElementById("fruits").style.textTransform="uppercase"
document.getElementById("vegetables").style.textTransform="uppercase"



// Add one more fruit to the fruits list
let newFruit= document.createElement("li");
newFruit.innerHTML="Apples"
document.getElementById("fruList").appendChild(newFruit);

// Add one more vegetable to the vegetables
// list

let newVegetable= document.createElement("li")
newVegetable.innerHTML="Brocoli"
document.getElementById("vegList").appendChild(newVegetable);



    var img= document.createElement("img");
    img.src="images/foto.jpg"
    var container=document.getElementById("image-container");
    container.appendChild(img)
    img.style.width="50%"
    img.style.marginLeft="20%"

 document.getElementById("all").style.margin="20%"

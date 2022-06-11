// 1:
// console.log (first.innerText);
// 2://///////////////////////////////////////////////////
// var newt= document.getElementsByTagName("p");
// newt.innerHTML= "my dom app";
// 3:
// console.log(document.getElementsByTagName("h2"));
// console.log(document.getElementsByTagName("div"));
// console.log(document.getElementsByTagName("h3"));
// console.log(document.getElementsByTagName("span"));
// // 4:
// console.log(document.getElementsByTagName("div"));
// 5:
// textsave= document.getElementsByTagName("h3");
// console.log(textsave.innerText);
// 6:
// for(var i=0; i<4; i++){
//     var textsave=0;
//     textsave= document.getElementsByTagName("p")[i].innerHTML;
//     console.log(textsave);
// }
// 7:
// function getname(){
//     document.getElementById("ma").innerText = prompt("name");
    
// }
// getname();
// 8:
// function getfromuser(){
//     var num= +prompt("num"); 
//     var mycolor= document.getElementById("ma").innerText = prompt("color");

//     for(var i=0; i<num-1; i++){
        
//         document.write(mycolor);
//     }
// }

// getfromuser();
// 9:
function builddom(){
    var txt = prompt("text"); 
    var tagname = prompt ("tagname");
    document.createElement("tagname");
    tagname.innerText = txt;
   
}

builddom();




// // 12:
// function addspan(){
//     var idont= document.getElementsByTagName("p");

//     // for(){
//     idont.innerHTML="<span>uuuuu</span>";
//     // }
// }

// addspan();

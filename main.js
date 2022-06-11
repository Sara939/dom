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
// // 9:
// function builddom(){
    
//     var tagname = prompt ("tagname");
//     var txt = prompt("text"); 

//     var newtag= document.createElement(tagname);
//     document.body.appendChild(newtag);
//     newtag.innerText = txt;
   
// }

// builddom();

// 10:

// function builinput(){
    
//     var inputType = prompt ("type");
//     var newtag= document.createElement("input");
//     document.body.appendChild(newtag);
//     newtag.setAttribute("type", inputType);
   
// }

// buildinput();
// 11:
// function changetext(classname, mytext){
//     var myclass= document.getElementsByClassName(classname);
//     for(var i= 0; i<myclass.length; i++){
//     myclass[i].innerText= mytext;
//     }
 
// }

// changetext("myp", "gggggggtttttt");

// 12:
// function myp(){
//     var ptags = document.getElementsByTagName("p");
//     for(var i=0; i< ptags.length; i++){
//         ptags[i].innerHTML= "<span> jgjggj </span>";
//     }
// }
// myp();

// 13:
// function detailsfun(){
//     var firstname= prompt("name");
//     var lastname= prompt("lname");
//     var age= +prompt("age");
//     document.write(firstname,lastname,age);
//     if(age>18){
//         var myinput= document.createElement("input");
//         document.body.appendChild(myinput);
//         myinput.setAttribute("type", "checkbox");
//     }
// }
// detailsfun();
// 14:
// function movie(){
//     var mymovie= {
//         name: prompt("name"),
//         views: +prompt("v"),
//         year: +prompt("ye"),
//         imgURL: prompt("img"),
//     }

//     document.body.innerHTML="<h1>" +mymovie.name+"</h1>" +mymovie.views+"<span>"+
        //  mymovie.year+"</span>" +mymovie.imgFile;
//     }
    
// movie();

// // 15:////////////////////////////////////////////////////////////////////////////
// function employefun(){
//     myemploy= {
//     name: document.createElement("input"),
//     // last:document.createElement("input"),
//     // email: document.createElement("input"),
//     // deparment: document.createElement("input")  
//     }
    
//     document.body.innerHTML= myemploy.name.setAttribute("type", "text");

// }
// employefun();

// 16:
// function mybiulding(){
//     var num= +prompt("num");
//     for(var i=0; i<num; i++){
//         var biulding = {
//             name:prompt("nn"),
//             constructor:prompt("co"),
//             company:prompt("c"),
//             floors:prompt("f"),
//             apartments:prompt("a")
//         }
//      document.body.innerHTML+= "<h3>"+ biulding.name + biulding.constructor + biulding.company + biulding.floors + biulding.apartments +"</h3>";
//     }

// }
// mybiulding();
// 17:
// function myshope(){
//     var number= +prompt("number");
//     for(var i=0; i<number; i++){
//         var shop= {
//             name:prompt("name"),
//             address:prompt("add"),
//             emploeys: +prompt("numberemp")
//         }
//         if (shop.emploeys> 10){
//             document.body.innerHTML+= "<div>"+shop.name+ shop.address+shop.emploeys+"</div>"
//         }
//     }
// }
// myshope();

// // 18:
// var count= 0;////////////////////////////////////////////////////
// function countelments(){
//     window.print() ;
//     count +=1;
//     console.log(count);
// }
// countelments();

// 19:
//  function mycont(){
//         var number= +prompt("number");
//         for(var i=0; i<number; i++){
//             var contact= {
//                 name:prompt("name"),
//                 email:prompt("addemail"),
//                 tel: +prompt("number")
//             }
//                 document.body.innerHTML+= "<li>"+contact.name+"</li>";
//         }
//         }
    
//     mycont();



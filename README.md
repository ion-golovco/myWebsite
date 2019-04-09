# myWebsite

Going to upload more as I learn more <br>


   <b>Update 0.05<b>
   
   Massive overhaul!!<br>New Layout<br>More Pages!!<br>
   
   <b>Update 0.04</b><br>    
   Massive overhaul!!<br>More mobile friendly
  <br>More Pages!!
           

 <b>Update 0.03<br></b>

 New Layout! again<br> Updated the Articles<br>


 <b>Update 0.02<br></b>

 New Layout!<br> Bio Added and some more stuff<br>
 
 
 <b>Update 0.01<br></b>
 
 New colors!<br> Some bug fixes<br>
   
function likes(names) {
  let namer = names.length-2
  if(names.length==0){return "No one likes this"}
  if(names.length==1){return names[0]+" likes this"}
  if(names.length==2){return names[0]+" and "+names[1]+" like this"}
  if(names.length==3){return names[0]+", "+names[1]+" and "+names[2]+" like this"}
  if(names.length>3){return names[0]+', '+names[1]+" and " + namer + " others like this" }
}
console.log(likes(["Ion"]))

//Ion likes this

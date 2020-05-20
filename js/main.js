var off, on, article, onoff, wraper, wrapboxleftH2, left, wrapboxrightH1, right, wrapboxrightPara;
off = document.getElementById("off");
on = document.getElementById("on");
article = document.getElementById("article");
onoff = document.getElementById("onoff");
wraper = document.getElementById("wraper");
wrapboxleftH2 = document.getElementById("wrapboxleftH2");
wrapboxrightH1 = document.getElementById("wrapboxrightH1");
wrapboxrightPara = document.getElementById("wrapboxrightPara");
left = document.getElementById("left");
right = document.getElementById("right");



function toggle(){
   if(on.style.display === "none"){
       on.style.display = "block";
       off.style.display = "none";
       article.style.backgroundColor = "black";
       wraper.style.backgroundImage = "url(images/FOOTER.jpg)";
       wrapboxleftH2.style.color = "white";
       left.style.borderRightColor = "white";
       wrapboxrightH1.style.color = "white";
       right.style.borderLeftColor = "white";
       wrapboxrightPara.style.color = "white";
       onoff.title = "switch to Light Mode";
       
       
   }
    else{
        off.style.display = "block";
        on.style.display = "none";
        article.style.backgroundColor = "";
        wraper.style.backgroundImage = "url(images/FOOTERtwo.jpg)";
        wrapboxleftH2.style.color = "black";
        left.style.borderRightColor = "black";
        wrapboxrightH1.style.color = "black";
        right.style.borderLeftColor = "black";
        wrapboxrightPara.style.color = "black";
        onoff.title = "switch to Dark Mode";
    }
    

}







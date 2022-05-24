function backgroundColor(){
    var bgColor=prompt("Enter Color for Background");
    var h1=document.getElementById("h1");
    h1.style.backgroundColor=bgColor;
}
function textColor(){
    var textColor=prompt("Enter Color for Text");
    var text=document.getElementById("h1");
    text.style.color=textColor;
}
function imageTransform(imgtransfer){

    var image=document.getElementById("img");
    if(imgtransfer=="hide"){
        image.style.display="none";
        
    }
    else if(imgtransfer=="show"){
        image.style.display="block";
        image.style.margin="0 auto"
    }
    else if(imgtransfer=="large"){
        image.style.width="600px";
        image.style.height="600px";
      
    }
    else if(imgtransfer=="small"){
        image.style.width="300px";
        image.style.height="300px";
       
    }
    else{
        return;
    }
    
}
function imgChange(toggle,e){
    if(toggle=="img1"){
        e.src="images/images.jpeg";
    }
    else{
        e.src="images/download (3).jpegtopping.jpeg";
    }
}
function paraColor(){
    var para1=prompt("Enter Color for First Paragraph");
    var para2=prompt("Enter Color for Second Paragraph");
    var para3=prompt("Enter Color for Third Paragraph");
    var para4=prompt("Enter Color for Fourth Paragraph");

    var para=document.getElementsByTagName("p");
    para[0].style.color=para1;
    para[1].style.color=para2;
    para[2].style.color=para3;
    para[3].style.color=para4;
}
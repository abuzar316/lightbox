const imgTag = document.querySelectorAll("#img-tag"),
popupBox = document.querySelector(".light-box-popup"),
lightBoxImg = document.querySelector("#light-box-img"),
prevBtn = document.querySelector("#prev"),
nextBtn = document.querySelector("#next"),
overlay = document.querySelector(".overlay"),
totalImg = document.querySelector("#total-img"),
currentImg = document.querySelector("#currunt-img"),
closeBtn = document.querySelector("#clase-btn");

console.log(imgTag.length)

imgTag.forEach((e  , i)=>{

    let newIndex = i;
    totalImg.innerText = imgTag.length;
    imgTag[i].onclick = ()=> {
        function preview(){
            currentImg.innerText = newIndex + 1;
            lightBoxImg.src = imgTag[newIndex].src;
        }
        preview();
        if(newIndex == 0){
            prevBtn.style.display = "none"
        }
        if(newIndex == imgTag.length - 1){
            nextBtn.style.display = "none"
        }
        prevBtn.onclick = ()=>{
            newIndex--;
            if(newIndex == 0){
                preview();
                prevBtn.style.display = "none"
                nextBtn.style.display = "block"
            }else{
                preview();
                nextBtn.style.display = "block"
            }
        }
        nextBtn.onclick = ()=>{
            newIndex++;
            if(newIndex == imgTag.length - 1){
                preview();
                nextBtn.style.display = "none"
                prevBtn.style.display = "block"
            }else{
                preview();
                prevBtn.style.display = "block"
            }
        }

        popupBox.classList.add("active");
        overlay.classList.add("active");
    }
})

closeBtn.addEventListener("click", close);
overlay.addEventListener("click",close);
function close(){
    popupBox.classList.remove("active");
    overlay.classList.remove("active");
    prevBtn.style.display = "block";
    nextBtn.style.display = "block";
}
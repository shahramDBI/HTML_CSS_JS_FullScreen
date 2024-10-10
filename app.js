let elem = document.documentElement;
let btn = document.getElementById('btn');
// --------------------------------------
btn.addEventListener('click', ()=>{
    if (btn.textContent === "GO FullScreen"){
        if(elem.requestFullscreen){
            elem.requestFullscreen();
        } else if(elem.webkitRequestFullscreen){ /* Safari */
            elem.requestFullscreen();
        } else if (elem.msRequestFullscreen){    /* IE */
            elem.msRequestFullscreen();
        } else if (elem.mozRequestFullscreen){
            elem.mozRequestFullscreen();
        }

        btn.textContent = "Exit FullScreen";
    } else{
        if(document.exitFullscreen){
            document.exitFullscreen();
        } else if(document.webkitexitFullscreen){
            document.exitFullscreen();
        } else if (document.msexitFullscreen){
            elem.msexitFullscreen();
        } else if (document.mozexitFullscreen){
            document.mozexitFullscreen();
        }

        btn.textContent = "GO FullScreen";
    }
})
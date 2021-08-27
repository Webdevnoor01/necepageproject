console.log("this is nice page website that I build");

// const body = document.body;
const body = document.getElementsByTagName("body")
const toggleBar = document.querySelector(".toggle_bar");
const menuList = document.querySelector(".menu_list");

toggleBar.addEventListener("click", showMenuBar)

function showMenuBar(){
   menuList.classList.add(".open")
// menuList.style.transform = "translate(0)"
    console.log("button click");

    if((menuList.classList.contains("open") === false)){
        menuList.classList.add("open")
        body.classList.add("linGrd")
        // body.style.background = "linear-gradient((rgba(0, 0, 0, 0.45) 50%, rgba(0, 0, 0, 0.45) 50%))"
        
    }else{

        menuList.classList.remove("open")
        menuList.style.transition= "all .5s"
        body.classList.remove("linGrd")


    }
}


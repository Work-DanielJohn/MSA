window.onload = () => {
    btn = document.getElementById("btn");
    console.log(btn);
    btn.innerHTML = "worlddddd";
    let btnColor = "blue";

    btn.onclick = () => {
        if (btnColor == "blue") {
            btnColor = "red";
            btn.style = "color : red";
        }
        else {
            btnColor = "blue";
            btn.style = "color : blue";
        }
    }
}
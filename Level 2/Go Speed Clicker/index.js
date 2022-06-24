let numClicked = 0;

if (localStorage.getItem('click') !== null) {
    numClicked = Number(localStorage.click);
}

const pageClicked = () => {
    numClicked++;
    localStorage.setItem("click",numClicked);
    console.log(numClicked);
}

window.addEventListener("click", pageClicked);
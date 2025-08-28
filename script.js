const container = document.querySelector("#container");
const size = document.querySelector("#size");
let initialSize = 16;

size.addEventListener("click", () => {
    while(true){
        const sizer = parseInt(prompt("Enter a number, but no bigger than 100: "));
    if(!isNaN(sizer) && sizer > 0 && sizer <= 100){
        initialSize = sizer;
        setSize(initialSize);
        break;
    }
    else{
        alert("Please enter a valid number between 1 and 100!");
    }
}  
});
function setSize(n) {
  container.innerHTML = "";

  const containerWidth = container.clientWidth;
  const containerHeight = container.clientHeight;

  const cellWidth = containerWidth / n;
  const cellHeight = containerHeight / n;

  for (let i = 0; i < Math.pow(n, 2); i++) {
    const cell = document.createElement("div");
    cell.classList.add("element");
    cell.style.width = `${cellWidth}px`;
    cell.style.height = `${cellHeight}px`;
    container.appendChild(cell);
  }
}

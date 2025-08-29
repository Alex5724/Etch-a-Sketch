const container = document.querySelector("#container");
const size = document.querySelector("#size");
const clear = document.querySelector("#clear");
let initialSize = 16;

function standardSize(){
  const containerWidth = container.clientWidth;
  const containerHeight = container.clientHeight;

  const cellWidth = containerWidth / initialSize;
  const cellHeight = containerHeight / initialSize;

  for (let i = 0; i < Math.pow(initialSize, 2); i++) {
    const cell = document.createElement("div");
    cell.classList.add("element");
    cell.style.width = `${cellWidth}px`;
    cell.style.height = `${cellHeight}px`;
    clear.addEventListener('click', () => {
    cell.style.backgroundColor = '';
 });
    cell.addEventListener('click', (event) => {
    if(event.target.classList.contains("element")){
      if(!event.target.style.backgroundColor){
        event.target.style.backgroundColor = '#' + Math.floor(Math.random() * 16777215).toString(16).padStart(6,'0');
      }
      else{
        let currentOpacity = parseFloat(event.target.style.opacity) || 1;
        if(currentOpacity > 0.1){
        event.target.style.opacity = currentOpacity - 0.1;
        }
      }
    }
  });
    container.appendChild(cell);
  }
}

standardSize();

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
  clear.addEventListener('click', () => {
  cell.style.backgroundColor = '';
 });
  cell.addEventListener('click', (event) => {
    if(event.target.classList.contains("element")){
      if(!event.target.style.backgroundColor){
        event.target.style.backgroundColor = '#' + Math.floor(Math.random() * 16777215).toString(16).padStart(6,'0');
      }
      else{
        let currentOpacity = parseFloat(event.target.style.opacity) || 1;
        if(currentOpacity > 0.1){
        event.target.style.opacity = currentOpacity - 0.1;
        }
      }
    }
  });
  container.appendChild(cell);
}
};
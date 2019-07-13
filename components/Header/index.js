// STEP 1: Create a header component.
// -----------------------
// Using a function create the component you see below:
//
//  <div class="header">
//    <span class="date">SMARCH 28, 2019</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div >
// And add it to the DOM in the .headerContainer component
const heading = document.querySelector(".header-container")

function createHeading() {
    const header = document.createElement('div')
    const date = document.createElement('span')
    const lambdaTimes = document.createElement('h1')
    const temp = document.createElement('span')
//style set
    header.classList.add('header')
    date.classList.add('date')
    temp.classList.add('temp')

//textContent
    date.textContent =`SMARCH 28, 2019`
    lambdaTimes.textContent=`Lambda Times`
    temp.textContent=`98°`
//all put together
    
    header.appendChild(date)
    header.appendChild(lambdaTimes)
    header.appendChild(temp)
   console.log(header)
    
    return header
}

heading.appendChild(createHeading())

// Step 2: Create Tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
// Once the data is returned console.log it and review the structure.
// Iterate over the topics creating a new Tab component and add it to the DOM
// under the .topics element.
//
//  The tab component should look like this:
//    <div class="tab">topic here</div>
const tabs = document.querySelector('.topics')
axios.get('https://lambda-times-backend.herokuapp.com/topics')
.then(data => {
    console.log("it is alive!",data.data.topics)
   data.data.topics.forEach(tab =>{console.log(tab)
    tabs.appendChild(tabList(tab))
   })
})
.catch(error => {
    console.log("it is broken",error)
})

function tabList(tab1){
    const tab= document.createElement('div')
    

//style
    tab.classList.add('tab')
    

//textContent
    tab.textContent= tab1
// connect
    
    return tab

}
// STEP 3: Create Article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Stduy the response data you get back, closely.
// You will be creating a component for each 'article' in the list.
// This won't be as easy as just iterating over an array though.
// Create a function that will programmatically create the following DOM component:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {authors name}</span>
//   </div>
// </div>
//
// Create a card for each of the articles and add the card to the DOM.
const cards= document.querySelector('.cards-container')
axios.get('https://lambda-times-backend.herokuapp.com/articles')
.then( data => {
    let article = Object.values(data.data.articles)
    article.forEach(item => {
        item.forEach( itemList => {
            console.log(itemList)
            cards.appendChild(articleList(itemList))
        })
    })
})
.catch(error => {
    console.log('info failed',error)
})


function articleList(itemList){
    const card=document.createElement('div')
    const headline=document.createElement('div')
    const author=document.createElement('span')
    const imgContainer=document.createElement('div')
    const authorImg=document.createElement('img')
    const authorContainer=document.createElement('div')
    
    
   
//style
    card.classList.add('card')
    headline.classList.add('headline')
    authorContainer.classList.add('author')
    imgContainer.classList.add('img-container')
    

//text content
author.textContent=itemList.authorName
headline.textContent=itemList.headline
authorImg.src=itemList.authorPhoto

    

//connected
    card.appendChild(headline)
    card.appendChild(authorContainer)
    authorContainer.appendChild(imgContainer)
    imgContainer.appendChild(authorImg)
    authorContainer.appendChild(author)
    
    return card

}
 

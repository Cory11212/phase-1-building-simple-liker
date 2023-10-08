// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!

/*const hearts = document.querySelectorAll('.like-glyph')
hearts.forEach((item) => {
  if(item.textContent = FULL_HEART){
    item.addEventListener('click', (event) => {
      event.target.textContent = EMPTY_HEART
      event.target.classList.remove('activated-heart')
    })
  }else if(item.textContent = EMPTY_HEART){
    item.addEventListener('click', (event) => {
      mimicServerCall("http://mimicServer.example.com")
  .then((res) => {
    event.target.textContent = FULL_HEART
    event.target.classList.add("activated-heart")
  })
  .catch((error) => {
    const errmsg = document.querySelector('#modal')
    errmsg.className = " "
    setTimeout(() => errmsg.className = "hidden", 3000)
  })
    })
  }})*/

  const hearts = document.querySelectorAll('.like-glyph')

  hearts.forEach((heart) => {
    heart.addEventListener('click', () => {
      if (heart.textContent === EMPTY_HEART){
        mimicServerCall()
        .then((res) => {
          heart.textContent = FULL_HEART
          heart.classList.add('activated-heart')
        })
        .catch((error) => {
          const errmsg = document.querySelector('#modal')
          errmsg.className = " "
          setTimeout(() => errmsg.className = "hidden", 3000)
        })
      } else {
        heart.textContent = EMPTY_HEART
        heart.classList.remove('activated-heart')
      }
    })})
  
  /*function nono(e) {
    
  }

function gogo(e) {
  const heart = e.target
  mimicServerCall()
    .then((res) => {
      heart.innerText = FULL_HEART
      heart.classList.add('activated-heart')
    })
    .catch((error) => {
      const errmsg = document.querySelector('#modal')
      errmsg.className = " "
      setTimeout(() => errmsg.className = "hidden", 3000)
    })
}



for (const item of hearts){
  if(item.innerText === FULL_HEART){
    item.addEventListener('click', nono)
  } else{
  item.addEventListener('click', gogo)
  }
}
const learts = document.getElementsByClassName('activated-hearts')*/

/*const hearts = document.querySelectorAll('.like-glyph')
hearts.forEach((item) => item.addEventListener('click', (e) => {
  mimicServerCall("http://mimicServer.example.com")
  .then((res) => {
    e.target.innerHTML = FULL_HEART
    e.target.classList.add("activated-heart")
  })
  .catch((error) => {
    const errmsg = document.querySelector('#modal')
    errmsg.className = " "
    setTimeout(() => errmsg.className = "hidden", 3000)
  })
}))

hearts.forEach((item) => item.addEventListener('click', (e) => {
if(item.classList[1]){
  return item.classList.remove('activated-heart')
}
}))*/




//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}

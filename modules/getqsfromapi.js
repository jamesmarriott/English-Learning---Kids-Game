const urlBase = "https://quiz-kids-api.herokuapp.com/questions"
const getQuests = document.getElementById("qform");
const qDiv = document.querySelector('.quest-display')

getQuests.addEventListener("submit", (event) => {
  // this gets the selected elements from the submitted form
  event.preventDefault()
  const qCategory = getQuests.elements['category'].value
  const qTheme = getQuests.elements['theme'].value
  const qLevel = getQuests.elements['level'].value
  console.log(qCategory, qTheme, qLevel)
  
  // these choosen elements then need to be passed to the api once the api paramters have been added. Currently this will just display all elements from the api.
  getProducts()
  .then(renderHTML)
  // .then(putjsonintolocalstorage)
  // need to write this as seperate module
  .catch(err => console.log(err))
})

async function getProducts(){
  const promise = await fetch(urlBase)
  const json = await promise.json()
  console.log(json)
  return json
}

function renderHTML(json) {
    let qHTML = ""
    json.forEach(item => 
      {
        qHTML += `
        <div class='q-item-wrapper'>
          <p class="qnum">Question Number ${item.ID}</p>
          <p class="qlineone">${item.QL1}.</p>
          <p class="qlinetwo">${item.QL2}</p>
          <p class="qa1bol"><p>
          <p class="qa1bo2"><p>
          <p class="qa1bo3"><p>
          <p class="qa1txt">${item.A1.value}.</p>
          <p class="qa2txt">${item.A2.value}.</p>
          <p class="qa3txt">${item.A3.value}.</p>
        </div>
        `
    })
      qDiv.innerHTML += qHTML
}



// <p class="qa1bol">${item.A1.correct ? "Yes" : "No"}</p>
// <p class="qa1bo2">${item.A2.correct ? "Yes" : "No"}</p>
// <p class="qa1bo3">${item.A3.correct ? "Yes" : "No"}</p>
const saveBtn = document.getElementById('input-btn')
const inputText = document.getElementById('input-el') 
const ulEl = document.getElementById('ul-el')
const container = document.querySelector('.container')
const box = document.querySelector('.box')
const deleteBtn = document.getElementById('delete-btn')
const leadsFromLocalStorage = JSON.parse( localStorage.getItem("myLead") )
const tabBtn = document.getElementById('tab-btn')

let myLead = [];


// DELETNG LOCALSTORAGE AND CLEARING THE DOM



deleteBtn.addEventListener('dblclick', clearBtn)

function clearBtn(){
    localStorage.clear()
    myLead = [];
    render(myLead)
}
// localstorage is storing of data in browser for a period that you want
//  getting from  local storage

if (leadsFromLocalStorage) {
    myLead = leadsFromLocalStorage
    // call savelead fnc for the called url from local storage to render the trace of save url with eas
    render(myLead)
    
}
function render(lead){
    // const li = document.createElement('li');
// li.appendChild(document.createTextNode(`${inputText.value}`))

// ulEl.append(li)

// how localStorage is rendered 
let listItems = ""

for (let i = 0; i < lead.length; i++) {
  
  listItems +=  `<li>
  <a target ="_blank" href =${lead[i]}>${lead[i]}
  </a>
  </li>`
  
  }
ulEl.innerHTML = listItems

}

// savebtn
saveBtn.addEventListener('click', saveLead);

function saveLead(){
    // pushing to localStorage
    localStorage.setItem( "myLead",JSON.stringify(myLead))

    myLead.push(inputText.value)
  
    inputText.value = "";
    
    render(myLead)
    
    }


// Grabing the url that you are in at that given time by save tab
tabBtn.addEventListener('click', grabbing)

function grabbing(){
    chrome.tabs.query({active: true, currentWindow: true}, (tab)=>{
        myLead.push(tab[0].url)
        localStorage.setItem("myLeads", JSON.stringify(myLead) )
        render(myLead)
    })
}

// container.innerHTML ='<button>submit</button>' 

// container.addEventListener('click', buyBtn)
// function buyBtn()
//    const para = document.createElement('p');
//    para.appendChild(document.createTextNode('than you'))
//   container.appendChild(para)
// }

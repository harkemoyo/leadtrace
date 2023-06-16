const saveBtn = document.getElementById('input-btn')
const inputText = document.getElementById('input-el') 
const ulEl = document.getElementById('ul-el')
const container = document.querySelector('.container')
const box = document.querySelector('.box')

let myLead = [];
// localstorage is storing of data in browser for a period 
//  getting from  local storage
const leadsFromLocalStorage = JSON.parse( localStorage.getItem("myLead") )

if (leadsFromLocalStorage) {
    myLead = leadsFromLocalStorage
    // call savelead fnc for the called url from local storage to render the trace of save url with eas
    saveLead()
}
   


saveBtn.addEventListener('click', saveLead);

function saveLead(){
    localStorage.setItem( "myLead",JSON.stringify(myLead))

    myLead.push(inputText.value)
  
    inputText.value = "";
    
    
        // const li = document.createElement('li');
        // li.appendChild(document.createTextNode(`${inputText.value}`))
        
        // ulEl.append(li)

        // how localStorage is rendered 
        let listItems = ""
        
        for (let i = 0; i < myLead.length; i++) {
            
            listItems +=  `<li>
            <a target ="_blank" href =${myLead[i]}>${myLead[i]}
            </a>
            </li>`
            
            }
          ulEl.innerHTML = listItems
    }
    




// container.innerHTML ='<button>submit</button>' 

// container.addEventListener('click', buyBtn)
// function buyBtn(){
//    const para = document.createElement('p');
//    para.appendChild(document.createTextNode('than you'))
//   container.appendChild(para)
// }

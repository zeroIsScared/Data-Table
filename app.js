// module that has the logic



// - add
// - show
//- update
//-remove


//DOM helpers
const newElement = (type, classList = [], children =[])=>{
    let element = document.createElement(type);
    classList.forEach(
        className => element.classList.add(className)
    )

    if (children != null){
       children.forEach( child=> element.append(child))
    }
    return element;
}

const newTextNode= (text)=> {
    return document.createTextNode( text);
}

//CRUD fucntions
const saveAlert=()=>{

    alert(`New user was saved!`)
}

const addUser=(data, selector) => {
let rootTable= document.querySelector(selector);


    rootTable.appendChild(
        newElement('tr', [], 
           Object.keys(data[0]).map(
              key =>{ 
                let input = newElement('input');
                input.setAttribute('placeholder', key);             
                //saveButton(input);
                let inputs= newElement('td', [], [                            
                       input                      
                    ]) 

                    if(input.getAttribute('placeholder') === 'blocked') {

                        let saveButton1= newElement('button',['save'],[]); 
                       
                        saveButton1.innerHTML = '&#9989';
                        
                        input.insertAdjacentElement('afterend',saveButton1);

                       saveButton1.addEventListener("click",saveAlert);
                    }

                    return inputs;

                    }              
                   
                       //button
                    
                       
                 )

                 // in the last Td adda buuton next to the input
                 //with inner text - 'save'
                 // add an addEventListener
                 // which will show an alert when clicking this button
                 //collect 3 values each from an input .value
                 //show them in console
                 // add new user to data array
           )
        )
    
}



const showAsTable=(data, selector)=> {
    let root = document.querySelector(selector);

    root.appendChild(
        
          newElement('table', ['data-table'], 
               data.map(
                   user => newElement('tr', [], 
                        Object.values(user).map(value => newElement('td', [], [newTextNode(value)]))
                   )
                )  
          )
    )
    
}

showAsTable(data, "section");
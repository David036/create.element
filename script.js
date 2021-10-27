let addBtn = document.querySelector('.add-btn')
let removBtn = document.querySelector('.remove-btn')
let addBlock = document.querySelector('.add-block')
let licNum = document.getElementById('cout')
let cout = 1
addBtn.addEventListener('click',()=>{
    addBlock.style.display = 'flex'
})
let nameInp = document.querySelector('.name-input')
let idInp = document.querySelector('.id-input')
let userName = nameInp.value
let userId = idInp.value
let addBtn2 = document.querySelector('.add-btn-2')
let myUser = document.querySelector('.my-user')
let usersBlock = document.querySelector('.users-block')
addBtn2.addEventListener('click'  , () =>  {
   let newUser = document.createElement('div')
   newUser.setAttribute('class','my-user')
   usersBlock.append(newUser)
   let newUserList = document.createElement('ul')
   newUserList.setAttribute('class','user-list')
   newUser.append(newUserList)
   let btnBlock = document.createElement('div')
   btnBlock.setAttribute('class','btn-block')
   newUser.append(btnBlock)
   let removeBtn = document.createElement('button')
   removeBtn.setAttribute('class','remove-btn')
   btnBlock.append(removeBtn)
   removeBtn.innerHTML = 'Remove'
   console.log(newUser);
   let sysName = document.createElement('li')
   sysName.style.backgroundColor = 'black'
   newUserList.append(sysName)
   sysName.innerHTML = nameInp.value
   let id = document.createElement('li')
   id.style.backgroundColor = 'black'
   newUserList.append(id)
   id.innerHTML = idInp.value
   let day = document.createElement('li')
   day.style.backgroundColor = 'black'
   newUserList.append(day)
   day.innerHTML = '27.Oct.2021'
   addBlock.style.display = 'none'
   let number = document.createElement('li')
   number.style.backgroundColor = 'black'
   newUserList.append(number)
    number.innerHTML = '+'
   nameInp.value = ''
   idInp.value = ''
    plus()
removeBtn.addEventListener('click',()=> {
    newUser.style.display = 'none'
    minus()
})
})

let parent = document.querySelector('.add-block')
let child = document.querySelector('.add-menu')
parent.addEventListener('click',(ev) => {
    ev.stopImmediatePropagation()
    if (ev.target == parent && ev.target != child) {
        parent.style.display = 'none'
    }    
})

function plus() {
    cout++
licNum.innerHTML = cout
}
function minus(){
    cout--
    licNum.innerHTML = cout
}



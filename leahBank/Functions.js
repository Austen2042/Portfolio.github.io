let total = document.querySelector('#ammount');
let cList = document.querySelector('#costList');
let iList = document.querySelector('#itemList');

let newCost = document.querySelector('#aForm');
let newItem = document.querySelector('#pForm');
let newbalance = document.querySelector('#tForm');
let submit = document.querySelector('#bForm');

let managerBtn = document.querySelector('#Manager');
let Menu = document.querySelector('.mMenu');
let cMenu = document.querySelector('#closeM');

let transactions = [];

submit.onclick = function(){
let transaction = {
    id: Date.now(),
    tItem: newItem.value,
    tCost: newCost.value
}

newCost.value = "";
newItem.value = "";


transactions.push(transaction);

localStorage.setItem('myTransactions', JSON.stringify(transactions));

}
let data = localStorage.getItem('myTransactions');
data = JSON.parse(data);
console.log(data);

for(i = 0; i < data.length; i++){
    var cnode = document.createElement('li');
    var inode = document.createElement('li');
    cnode.appendChild(document.createTextNode('-$' + data[i].tCost));
    inode.appendChild(document.createTextNode(data[i].tItem));
    document.querySelector('ul').appendChild(cnode);
    document.querySelector('ol').appendChild(inode);
}

managerBtn.onclick = function(){
Menu.classList.add('active');
}
cMenu.onclick = function(){
    Menu.classList.remove('active');
}
var btn=document.getElementById("btn");
btn.addEventListener("click",fun);
function createMenuItem(name) {
    let li = document.createElement('li');
    li.textContent = name;
    let btn1=document.createElement('button');
    btn1.textContent="Delete Expense";
    btn1.id="btn1";
    li.appendChild(btn1);
    let btn2=document.createElement('button');
    btn2.textContent="Edit Expense";
    li.appendChild(btn2);
    return li;
}
// get the ul#menu

function fun()
{
    var amount=document.getElementById("amount");
    var desc=document.getElementById("desc");
    var category=document.getElementById("category");
    const menu = document.querySelector('#list');
menu.appendChild(createMenuItem(`${amount.value}-${desc.value}-${category.value}`));
var btn1=document.getElementById("btn1");
btn1.addEventListener("click",funDel);
function funDel()
{
 menu.remove();   
}
}
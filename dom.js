/*var item=document.getElementsByClassName('list-group-item');
item[2].style.backgroundColor="green";
for(let i=0;i<5;i++)
{
    item[i].style.fontWeight="bold";
}*/
/*var item=document.querySelectorAll('.list-group-item');
/*item[1].style.backgroundColor="green";
item[2].style.display="none";
item[1].style.color="green";
var odd=document.querySelectorAll('li:nth-child(odd)');
for(let i=0;i<odd.length;i++)
{
    odd[i].style.backgroundColor="green";
}*/
var newDiv=document.createElement('div');
var newDivText=document.createTextNode('hello word');
newDiv.appendChild(newDivText);
var container=document.querySelector('header .container');
var h1=document.querySelector('header h1');
container.insertBefore(newDiv,h1);
var items=document.getElementById('items');
var item1=document.querySelector('list-group-item');
items.insertBefore(newDiv,item1);
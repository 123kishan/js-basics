/*var item=document.getElementsByClassName('list-group-item');
item[2].style.backgroundColor="green";
for(let i=0;i<5;i++)
{
    item[i].style.fontWeight="bold";
}*/
var item=document.querySelectorAll('.list-group-item');
/*item[1].style.backgroundColor="green";
item[2].style.display="none";*/
item[1].style.color="green";
var odd=document.querySelectorAll('li:nth-child(odd)');
for(let i=0;i<odd.length;i++)
{
    odd[i].style.backgroundColor="green";
}
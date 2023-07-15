const input=document.getElementById("text");
const submit=document.getElementById("submit");
submit.addEventListener('click',onSubmitPress);
const listItems=document.getElementById("list");
listItems.addEventListener('click',onDeletePress);
const filter=document.getElementById("search");
filter.addEventListener('keyup',filterItems);
function filterItems(e){
    let text=e.target.value.toLowerCase();
    let items=document.getElementsByTagName("li");
    Array.from(items).forEach(function(item){
       
        let Itemname=item.firstChild.textContent;
    })
}
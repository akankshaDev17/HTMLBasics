const input=document.getElementById("text");
const submit=document.getElementById("submit");
submit.addEventListener('click',onSubmitPress);
const listItems=document.getElementById("list");
listItems.addEventListener('click',onDeletePress);
const filter=document.getElementById("search");
filter.addEventListener('keyup',filterItems);
function filterItems(e){
    let text=e.target.value.toLowerCase();
    let items=listItems.getElementsByTagName("li");
    console.log(items);
    console.log("Array-items",Array.from(items));
    Array.from(items).forEach(function(item){
        console.log("item",item);
        let itemName=item.firstChild.textContent;
        console.log("itemName",itemName);
        if(itemName.toLowerCase().indexOf(text) != -1){
            item.style.display="flex";
            item.style.display="space-between";
        }
        else{
            item.style.display=none;
        }
    })
}
function onDeletePress(e){
    if(e.target.classList.contains('delete')){
        if(confirm('Are you sure')){
            let li=e.target.parentElement;
            listItems.removeChild(li);
        }
        console.log(1);
    }
}
function onSubmitPress(e){
    let li=document.createElement("li");
    li.id="line";
    li.appendChild(document.createTextNode(input.value));
    listItems.appendChild(li);
    let del_btn=document.createElement("button");
    del_btn.id="Danger";
    del_btn.appendChild(document.createTextNode("X"));
    li.appendChild(del_btn);
}
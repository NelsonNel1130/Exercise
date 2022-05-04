'use strict';

const Button1 = document.querySelector('#Button1');
//function to get input from the input box
const input = () => document.getElementById("name").value;
//State of the submit button
const edditing = {
    state: false,
    ItemToEdit: null
}

//Reset the submit button
const Reset = function(Input)
{
    edditing.state = false;
    Button1.textContent = "Submit";
    document.getElementById("name").value = '';
}

//Add html tab
const Button = Button1.addEventListener('click', function()
{   
    //Create Item features
    if (edditing.state === false)
    {
        const item = input();
        //create a new div block
        const newDiv = document.createElement("div");
        newDiv.id = item;
        const Textnode = document.createTextNode(item);

        //create edit button
        const EditButton = document.createElement("button");
        EditButton.classList.add('Edit');
        EditButton.innerHTML = "Edit";

        //create remove button
        const ReomveButton = document.createElement("button");
        ReomveButton.innerHTML = "Remove";
        ReomveButton.classList.add('Remove');
        
        //append the button and text to the new div block
        newDiv.appendChild(Textnode);
        newDiv.appendChild(EditButton);
        newDiv.appendChild(ReomveButton);

        const target = document.getElementById("ItemList");
        target.appendChild(newDiv);
        Reset();
    }
    //Edditing features
    else if (edditing.state)
    {
        const item = input();
        const TargetItem = document.getElementById(edditing.ItemToEdit);

        //TargetItem.id = item;
        TargetItem.textContent =item;
        //create edit button
        const EditButton = document.createElement("button");
        EditButton.classList.add('Edit');
        EditButton.innerHTML = "Edit";
        
        //create remove button
        const ReomveButton = document.createElement("button");
        ReomveButton.innerHTML = "Remove";
        ReomveButton.classList.add('Remove');
        //Append Button to updated div block
        TargetItem.appendChild(EditButton);
        TargetItem.appendChild(ReomveButton);
        Reset();
    }

})


//Use DOM Event delegation to handle the edit and remove features
document.getElementById("ItemList").addEventListener("click", function(e)
{
    
    
    if (e.target && e.target.classList.contains("Edit")  )
    {
        //assign the id of div class to edditing
        edditing.ItemToEdit = e.target.parentNode.id;
        //change the state of edditing to true
        edditing.state = true;
        //change the button from submit to update
        Button1.textContent = "Update";
        
    }
    else if (e.target && e.target.classList.contains("Remove"))
    {
        e.target.parentNode.remove();
    }
})

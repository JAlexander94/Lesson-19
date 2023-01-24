var shoppingFormEl = $('#shopping-form');
var shoppingListEl = $('#shopping-list');

// TODO: Create a function to handle the form submission event that captures the form's `<input>` value and prints it to the `shoppingListEl` as a `<li>`

function additem(event){
    event.preventDefault();
    var item = $("<li>")
    var itemvalue = $('input[name="shopping-input"]')
    item.text(itemvalue.val())
    shoppingListEl.append(item)
    $('input[type="text"]').val("")
}

// TODO: Add an event listener to the `shoppingFormEl` to handle submission

shoppingFormEl.on('submit', additem);
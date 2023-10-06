import ShoppingListItem from "./ShoppingListItem";


function ShoppingList({ items }) {
    return (
        <ul>
            {items.map((i) => (
            <ShoppingListItem
                key={i.id} {...i} //using spread operator to access other values 
            />
            ))}
        </ul> 
    )
}

export default ShoppingList; 



// const data = [
//     { item: 'eggs', quantity: 12, completed: false },
//     { item: 'milk', quantity: 1, completed: false },
//     { item: 'bread', quantity: 2, completed: false },
//     { item: 'lettuce', quantity: 4, completed: false },
//     { item: 'soup', quantity: 8, completed: false },
//   ] 



//plain js setting up event listener
// const btn = document.querySelector('button')
// btn.addEventListener('click', function() {

//})

//in react
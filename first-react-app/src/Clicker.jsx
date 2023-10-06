
// function handleClick() {
//     console.log("CLICKED THE BUTTON")
    
// }

// function handleHover(){
//     console.log('HOVERED!')

// }
// export default function Clicker() {
//     return (
//         <div>
//             <p onMouseOver={handleHover}>Hover over me</p>
//             <button onClick={handleClick}>Click</button>
//         </div>
//     );
// }

export default function Clicker({buttonText, message }){

    const handleClick = () => {
        alert(message);
    }
    return <button onClick={handleClick}>{buttonText}</button>
}

import Button from "./Button";
// function NavigationBar(){
//     return (
//         <nav>
//             <ul>
//                 <li>Home</li>
//                 <li>About</li>
//                 <li>Contact</li>
//             </ul>
//         </nav>
//     )
// }

const NavigationBar = () => {
    return (
        <nav>
            <ul>
                <li>Home</li>
                <li><Button buttonContent={'About'} /></li>
                <li><Button buttonContent={'Contact'}/></li>
            </ul>
        </nav>
    )
}

export default NavigationBar;
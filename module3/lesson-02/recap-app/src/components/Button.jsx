function Button({ buttonContent }){
    const displayConsole = ()=> {
        console.log(`button ${buttonContent} has been clicked!`)
    }
    
    return (
        <button onClick={displayConsole}>{buttonContent}</button>
    )
}

export default Button;
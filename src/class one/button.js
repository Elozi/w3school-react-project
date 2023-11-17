import './button.css'


const Button = (props) => {
    if (props.customStyle==="style-one"){
    return (
     <button className='button-style-one' style={{backgroundColor:props.bg, color:props.color}} onClick={props.handleClick}> {props.title}</button>
    
    );}
    else{
        return(
        <button className='button-style-two' style={{backgroundColor:props.bg, color:props.color}} onClick={props.handleClick}> {props.title}</button>

    )}
}

export default Button;

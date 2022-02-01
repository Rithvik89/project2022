import './Input.css'


export default function InputElement(props){

    return(
      <input type={props.type} className='loginpage-inputelement' placeholder={props.placeholder} required/>
    )
}
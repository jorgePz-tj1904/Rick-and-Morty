import { useState } from 'react';
import validation from '../validation';
import style from './components-css/form.module.css'
const Form=({login})=>{
    const [userData, setUserData] = useState({
        email: '',
        password: ''
    });
    const [errors, setErrors] = useState({});

    const handleChage=(event)=>{
        setUserData({
            ...userData,
            [event.target.name]: event.target.value
        })
        setErrors(validation({
            ...userData,
            [event.target.name]: event.target.value
        }))   
    }
    const handleSubmit =(event)=>{
        event.preventDefault();
        login(userData);
    }
    
    return (
        <form className={style.formContiner} onSubmit={handleSubmit}>
            <img src="https://i.pinimg.com/originals/98/29/21/9829215db6f9210c0ae4e318e854cb1f.png"/>
            <h1>Login</h1>
            <hr/>
            <input placeholder='ingrese su email' type="email" name='email' value={userData.email} onChange={handleChage} className={style.inputs} id={style.email}/><br />
            {errors.email && <p>{errors.email}</p>}
            <input placeholder='ingrese su password' type="password" name='password' value={userData.password} onChange={handleChage} className={style.inputs} id={style.password}/><br/>
            {errors.password && <p>{errors.password}</p>}
            <button>Submit</button>
        </form>
    )
}
export default Form;
import style from './components-css/about.module.css'
const About=()=>{

    return(
        <div className={style.container}>
         <h1 className={style.id}>Autor:</h1>
         <h2>Jorge Perez</h2>
         <ul>
         <li>State: alive</li>
         <li>Species: programer</li>
         <li>Gender: male</li>
         <li>Origin: Henry</li>
         </ul>
         <img src='https://th.bing.com/th/id/OIG.jWKq5WjlGv8o9oF6FZ77?pid=ImgGn'/>
        </div>
    )
}
export default About;
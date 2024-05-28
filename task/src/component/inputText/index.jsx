import style from './index.module.css';

const InputText = ({text, name}) =>{
    return(
        <div>
            <input type="text" className={style.holder} placeholder={text} name={name}/>
        </div>

    )
}
export default InputText;
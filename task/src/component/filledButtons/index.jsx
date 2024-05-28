import style from "./index.module.css"

const FilledButtons = ({text}) =>{
    return (
        <div>
            <button className={style.btn}>{text}</button>
        </div>
    )
}
export default FilledButtons;
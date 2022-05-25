import style from './textinput.module.css'

const Textinput = () => {
  return (
      <label htmlFor="input-text">
        <input type={style.text} name="text" id="input-text"/>
      </label>
  )
}

export default Textinput
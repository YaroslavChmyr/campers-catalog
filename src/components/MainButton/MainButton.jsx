import css from './MainButton.module.css'

function MainButton({children}) {
  return (
    <button className={css.button}>{children}</button>
  )
}

export default MainButton
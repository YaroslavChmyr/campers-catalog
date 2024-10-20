import css from './MainButton.module.css'

function MainButton({children, onClick}) {
  return (
    <button className={css.button} onClick={onClick}>{children}</button>
  )
}

export default MainButton
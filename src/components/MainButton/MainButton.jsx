import css from './MainButton.module.css'

function MainButton({children, onClick, onSubmit}) {
  return (
    <button className={css.button} onClick={onClick} onSubmit={onSubmit}>{children}</button>
  )
}

export default MainButton
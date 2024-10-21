import css from './LoadMoreButton.module.css'

function LoadMoreButton({onClick}) {
  return (
    <button className={css.button} onClick={onClick}>Load More</button>
  )
}

export default LoadMoreButton
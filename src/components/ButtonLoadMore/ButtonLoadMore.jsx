import css from '../ButtonLoadMore/ButtonLoadMore.module.css';

const ButtonLoadMore = ({ onClick, type = "submit", children }) => {
    return <button onClick={onClick} type={type} className={css.btn}>{children}</button>
}

export default ButtonLoadMore;
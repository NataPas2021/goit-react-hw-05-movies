import { useState, useEffect, useMemo, useRef } from "react";
import { nanoid } from "nanoid";
import css from './SearchForm.module.css';

const SearchForm = ({onSubmit}) => {
    const [state, setState] = useState({
        search: '',
    })

    const inputRef = useRef(null);
    
    useEffect(() => {
        inputRef.current.focus();
    }, [])

    const handleChange = ({target}) => {
        const {name, value} = target;
        setState({
            ...state,
            [name]: value,
        })
    }
    
    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit({...state});
        reset();
    }

    const reset = () => {
        setState({
            search: ''
                });
    }

    const searchId = useMemo(() => nanoid(), []);

    return(
    <>
    <form onSubmit={handleSubmit} className={css.form}>
            <div className={css.fieldGroup}>
                <input id={searchId} ref={inputRef} value={state.search} onChange={handleChange} required type="text" name="search" placeholder="Enter movie name" />
            </div>
            <button type="submit">Search</button>
        </form>
    </>
    )
}

export default SearchForm;
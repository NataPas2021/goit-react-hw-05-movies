import css from './MoviesSearchForm.module.css';
import { useState, useEffect, useRef, useMemo } from 'react';
import {nanoid} from 'nanoid';


const MoviesSearchForm = ({onSubmit}) => {
    const [state, setState] = useState({
        search: "",
    });


    const inputRef = useRef(null);

    useEffect(() => {
        inputRef.current.focus();
    }, [])

    const handleChange = event => {
        setState({search: event.currentTarget.value.toLowerCase()})
       };

    const handleSubmit = (e) => {
       e.preventDefault();
       onSubmit({...state});
       reset();
    }

    const reset = () => {
        setState({
            search: ""
        });
    }

    const searchId = useMemo(() => nanoid(), [])

    return (
        <>
        <form onSubmit={handleSubmit} className={css.form}>
            <div className={css.fieldGroup}>
                <input id={searchId} ref={inputRef} value={state.search} onChange={handleChange} required type="text" name="search" placeholder="Enter search phrase" />
            </div>
            <button type="submit">Search</button>
        </form>
        </>
    )
}

export default MoviesSearchForm;


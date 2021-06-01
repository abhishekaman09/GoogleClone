import React,{useState} from 'react';
import './search.css';
import SearchIcon from '@material-ui/icons/Search';
import MicIcon from '@material-ui/icons/Mic';
import {Button} from '@material-ui/core';
import { useHistory } from 'react-router';
import {useStateValue} from "../stateProvider";
import {actionTypes} from "../reducer";



function Search({hideButtons=false}) {

    const [,dispatch]=useStateValue();

    const[input,setInput] = useState();
    const history= useHistory();

    const search = (e)=>{
        e.preventDefault();


        console.log('ddjs',input);
            dispatch({
                type:actionTypes.SET_SEARCH_TERM,
                term : input
            })



        history.push('/search');
    }


    return (
        <form className="search">
            <div className="searchInput">
                <SearchIcon className="search_inputIcon"/>
                <input value={input} onChange={e=>setInput(e.target.value)}/>
                <MicIcon/>
            </div>
            {/* Ternary operator to pass props */}
            {!hideButtons ? (

                 <div className="search_buttons">
                <Button type='submit' onClick={search} variant='outlined'>Google Search</Button>
                <Button variant='outlined'>I'm Feeling Lucky</Button>
                 </div>
            ):(
                <div className="search_buttons">
                <Button className="search_buttonsHidden" type='submit' onClick={search} variant='outlined'>Google Search</Button>
                <Button className="search_buttonsHidden" variant='outlined'>I'm Feeling Lucky</Button>
                 </div> 
            )}

        </form>
    )
}

export default Search

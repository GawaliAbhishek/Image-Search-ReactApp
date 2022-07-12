import React, { useState } from "react";
import '../Serach.css';
import Image from '../Images/Google.png'
import SearchIcon from '@material-ui/icons/Search';



function Search(props) {

    const [ser,setSer]=useState("");
   
    const chnEvent=(event)=>{
        setSer(event.target.value);
        props.Search(ser);
    }
    return (
        <>
            <div className="main_ser">

                <div className="in_div">
                    <div className="img_div">
                        <img src={Image} alt="Image"/>
                    </div>
                    <div className="input_div">
                        <SearchIcon className="icon1" />
                        <input id="search_bar" value={ser} onChange={chnEvent}/>
                        {/* <TextField
                            id="search_bar"
                            label=""
                            placeholder="Search"
                            helperText=""
                            fullWidth
                            InputLabelProps={{
                                shrink: true,
                            }}
                            inputRef={textFieldRef}
                            onChange={chnEvent}
                        /> */}

                    </div>
                </div>

            </div>
        </>
    )
}
export default Search;
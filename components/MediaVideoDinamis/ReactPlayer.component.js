import React from "react";
import ReactPlayer from 'react-player';
import useMediaQuery from '@mui/material/useMediaQuery';


export default function ReactVideoComponent(props){

    const matches = useMediaQuery('(min-width:600px)');
    return(
        <div>
            {matches ? 
                ( 
                    <ReactPlayer url={props.url} width="100%" height="500px" controls={true}/>
                ) : 
                (
                    <ReactPlayer url={props.url} width="100%" controls={true}/> 
                )
            }
            

        </div>

    )
}
import React, { useRef } from "react";
import { Player, ControlBar} from 'video-react';
import useMediaQuery from '@mui/material/useMediaQuery';



export default function VideoPlayer(props){
    const player = useRef();
    const matches = useMediaQuery('(min-width:600px)');
    return(
        <div>
            {matches ? 
                (
                    <div style={{width: "30%", display: "block", marginLeft: "auto", marginRight: "auto"}}>
                        <Player autoPlay ref={player} poster="/images/RPSgame.jpeg" > 
                            <source src={props.src} type="video/mp4"/>
                            <ControlBar autoHide={false}/>
                        </Player>
                    </div>				
                ):
                (
                    <Player autoPlay ref={player} poster="/images/RPSgame.jpeg" > 
                        <source src={props.src} type="video/mp4"/>
                        <ControlBar autoHide={false}/>
                    </Player>
                )
            }
        </div>
    )
}




// export const sources = {
//     sintelTrailer: 'https://media.w3.org/2010/05/sintel/trailer.mp4'
// }

// export function player(){
//     const [source, setSource ] = useState(sources.sintelTrailer);
//     const [_player, _setPlayer] = useState();
//     const player = useRef();

//     useEffect(()=>{
//         player.current.subscribeToStateChange(handleStateChange)
//     }, [])

//     const setMuted = (muted) => {
//         player.current.muted = muted
//     }

//     const handleStateChange = (state) => {
//         _setPlayer(state)
//     }

//     const play = () => {
//         play.current.play()
//     }

//     const pause = () => {
//         player.current.pause()
//     }

//     const changeCurrentTime = (seconds) => {
//         return () =>{
//             const data = player.current.getState()
//             player.current.seek(player.current.currentTime + seconds)
//         }
//     }

//     const seek = (seconds) => {
//         player.current.seek(seconds)
//     }

//     const changePlaybackRateRate = (steps) => {
//         return () => {
//             const data = player.current.getState()
//             player.current.playbackRate = data.player.playbackRate + steps
//         }
//     }

//     const changeVolume = (steps) => {
//         return () => {
//             const data = player.current.getState()
//             player.current.volume = data.player.volume + steps
//         }
//     }

//     const changeSource = (name) => {
//         return () => {
//             setSource(sources[name])
//             player.current.load()
//         }
//     }
// }
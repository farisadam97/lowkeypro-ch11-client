import {settings} from '../config/game';
import './Choice.css';

import Typography from '@mui/material/Typography';
import imgfacebook from '../../../images/facebook.svg';
import imgtwitter from '../../../images/twitter-white.svg';

export const Choice = ({ value, id, className, choiceIcon, onClick }) => {
    console.log(settings)
    return (
      <div value={value} onClick={onClick}>
        <img className={className} id={id} src={choiceIcon} alt="icon" />
      </div>
    );
  };

export const Selection = ({children, userScore, trophyIcon}) => {
    return(
        <>
        {userScore < settings.winTarget ? (
            <>
            <div className="selection">
            {children} 
            </div>
            {/* <h3>{userSelection === "" ? "Pick one!" : `Your choice: ${userSelection}`}</h3> */}
            </>
        ) : (
            <>
            <img src={trophyIcon} className='trophyStyle' alt="trophy" />
            <h3 style={{textAlign:"center"}}>Victory!</h3>
			
			<Typography style={{textAlign:"center"}}
				fontSize={{
					lg: 18,
					md: 16,
					sm: 14,
					xs: 12
				}}
			>
				Share to social media
			</Typography>
			<div style={{textAlign:"center"}}>
				<a href="https://www.facebook.com/sharer/sharer.php?u=http%3A%2F%2Flowkeypro.netlify.app%2F&quote=I won this Rock Paper Scissor Game and you should try it too" target="_new" className="iconshare iconsharefb"><img src={imgfacebook} alt="Facebook" /></a>
				<a href="https://twitter.com/intent/tweet?text=I won this Rock Paper Scissor Game and you should try it too https://lowkeypro.netlify.app/" target="_new" className="iconshare iconsharett"><img src={imgtwitter} alt="Twitter" /></a>
			</div>
            </>
        )}
        </>
        
    )
}

export const SelectionComputer = ({children, pcScore, trophyIcon}) => {
    return(
        <>
            {pcScore < settings.winTarget ? (
            <>
            <div className="show computer">
            {children}
            </div>
            {/* <h3>{userSelection === "" ? "Pick one!" : `Your choice: ${userSelection}`}</h3> */}
            </>
            ) : (
                <>
                <img src={trophyIcon} className='trophyStyle' alt="trophy" />
                <h3 style={{textAlign:"center"}}>Victory!</h3>
			
				<Typography style={{textAlign:"center"}}
					fontSize={{
						lg: 18,
						md: 16,
						sm: 14,
						xs: 12
					}}
				>
					Share to social media
				</Typography>
				<div style={{textAlign:"center"}}>
					<a href="https://www.facebook.com/sharer/sharer.php?u=http%3A%2F%2Flowkeypro.netlify.app%2F&quote=Check out this cool Rock Paper Scissor Game" target="_new" className="iconshare iconsharefb"><img src={imgfacebook} alt="Facebook" /></a>
					<a href="https://twitter.com/intent/tweet?text=Check out this cool Rock Paper Scissor Game https://lowkeypro.netlify.app/" target="_new" className="iconshare iconsharett"><img src={imgtwitter} alt="Twitter" /></a>
				</div>
                </>
            )}
        </>
        
    )
}

export const ChoiceComputer = ({ pcScore, userSelection, pcSelection, id, className, imgbatu, imgkertas, imggunting, activeimg, trophyIcon }) => {
    console.log(pcSelection);
    return (
        <>
            {pcScore < settings.winTarget ? (
                userSelection === "" ? (
                    <>
                    <div>
                        <img className={className} id={id} src={imgbatu} alt="icon" />
                    </div>
                    <div>
                        <img className={className} id={id} src={imgkertas} alt="icon" />
                    </div>
                    <div>
                        <img className={className} id={id} src={imggunting} alt="icon" />
                    </div>
                    </>
                //   <h3 className="waiting-message">{settings.waitingMessage}</h3>
                ) : (
                <>
                   {
                        pcSelection === "Rock" ? 
                        (<div>
                            <img className={[className, activeimg].join(" ")} id={id} src={imgbatu} alt="icon" />
                        </div>) : 
                        (<div>
                        <img className={className} id={id} src={imgbatu} alt="icon" />
                        </div>)
                    } 
                    {
                        pcSelection === "Paper" ? 
                        (<div>
                            <img className={[className, activeimg].join(" ")} id={id} src={imgkertas} alt="icon" />
                        </div>) : 
                        (<div>
                            <img className={className} id={id} src={imgkertas} alt="icon" />
                        </div>)
                    }
                    {   
                         pcSelection === "Scissors" ? 
                        (<div>
                            <img className={[className, activeimg].join(" ")} id={id} src={imggunting} alt="icon" />
                        </div>) :
                        (<div>
                            <img className={className} id={id} src={imggunting} alt="icon" />
                        </div>)
                    }
                    {/* <h3>PC selected: {pcSelection}</h3> */}
                </>
                )
            ) : (
                <>
                <img src={imggunting} alt="trophy" />
                <h3 style={{textAlign:"center"}}>Victory!</h3>
                </>
            )
            }
        </>
      
    );
  };


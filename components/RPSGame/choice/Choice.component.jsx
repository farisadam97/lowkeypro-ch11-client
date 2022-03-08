import {settings} from '../config/game';

import Image from 'next/image';

import Typography from '@mui/material/Typography';
// import imgfacebook from '../../../public/images/logo-facebook.png';
// import imgtwitter from '../../../public/images/logo-twitter.png';

export const Choice = ({ value, id, className, choiceIcon, onClick }) => {
    return (
      <div className="img" value={value} onClick={onClick}>
        <Image 
            className={className} 
            id={id} 
            src={choiceIcon} 
            alt="icon"
            width={145}
            height={150}
            value={value}
        />
      </div>
    );
  };

export const Selection = ({children, trophyIcon, data}) => {
    return(
        <>
        {data.userscore < settings.winTarget ? (
            <>
            <div className="selection">
                {children} 
            </div>
            </>
        ) : (
            <>
                <div  className="trophyStyle">
                <Image 
                    src={trophyIcon}
                    alt="trophy"
                    width={145}
                    height={150}
                />
                </div>
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
				<a href="https://www.facebook.com/sharer/sharer.php?u=http%3A%2F%2Flowkeypro.netlify.app%2F&quote=I won this Rock Paper Scissor Game and you should try it too" target="_new" className="iconshare iconsharefb">
                    <Image 
                        src="/images/logo-facebook.png"
                        alt="Facbook"
                        height={15}
                        width={19}
                    />
                </a>
				<a href="https://twitter.com/intent/tweet?text=I won this Rock Paper Scissor Game and you should try it too https://lowkeypro.netlify.app/" target="_new" className="iconshare iconsharett">
                    <Image 
                        src="/images/logo-twitter.png"
                        alt="Twitter"
                        height={15}
                        width={19}
                    />
                </a>
			</div>
            </>
        )}
        </>
        
    )
}

export const SelectionComputer = ({children, trophyIcon, data}) => {
    return(
        <>
            {data.pcscore < settings.winTarget ? (
            <>
                <div className="show computer">
                {children}
                </div>
            </>
            ) : (
                <>
                    <div  className="trophyStyle">
                        <Image 
                            src={trophyIcon} 
                            alt="trophy"
                            width={145}
                            height={150}
                        />
                    </div>

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
                        <a href="https://www.facebook.com/sharer/sharer.php?u=http%3A%2F%2Flowkeypro.netlify.app%2F&quote=Check out this cool Rock Paper Scissor Game" target="_new" className="iconshare iconsharefb">
                            <Image 
                                src="/images/logo-facebook.png"
                                alt="Facbook"
                                height={15}
                                width={19}
                            />
                        </a>
                        <a href="https://twitter.com/intent/tweet?text=Check out this cool Rock Paper Scissor Game https://lowkeypro.netlify.app/" target="_new" className="iconshare iconsharett">
                            <Image 
                                src="/images/logo-twitter.png"
                                alt="Twitter"
                                height={15}
                                width={19}
                            />
                        </a>
                    </div>
                </>
            )}
        </>
        
    )
}

export const ChoiceComputer = ({ id, className, imgbatu, imgkertas, imggunting, activeimg, trophyIcon, data}) => {
    return (
        <div>
            {data.pcscore < settings.winTarget ? 
            (
                data.userselection === "" ?  (
                    <>
                        <div className="img">
                            <Image 
                                className={className} 
                                id={id} 
                                src={imgbatu} 
                                alt="icon"
                                width={145}
                                height={150}
                            />
                        </div>
                        <div className="img">
                            <Image 
                                className={className} 
                                id={id} 
                                src={imgkertas} 
                                alt="icon"
                                width={145}
                                height={150}
                            />
                        </div>
                        <div className="img">
                            <Image 
                                className={className} 
                                id={id} 
                                src={imggunting} 
                                alt="icon"
                                width={145}
                                height={150}
                            />
                        </div>
                    </>
                ) : (
                <>
                   {
                        data.pcselection === "Rock" ? 
                        (
                            <div className="img">
                                <Image 
                                    className={[className, activeimg].join(" ")} 
                                    id={id} 
                                    src={imgbatu} 
                                    alt="icon"
                                    width={145}
                                    height={150}
                                />
                            </div>
                        ) : 
                        (
                            <div className="img">
                            <Image 
                                    className={className} 
                                    id={id} 
                                    src={imgbatu} 
                                    alt="icon"
                                    width={145}
                                    height={150}
                            />
                            </div>
                        )
                    } 
                    {
                        data.pcselection === "Paper" ? 
                        (
                            <div className="img">
                                <Image 
                                    className={[className, activeimg].join(" ")} 
                                    id={id} 
                                    src={imgkertas} 
                                    alt="icon"
                                    width={145}
                                    height={150}
                                />
                            </div>
                        ) : 
                        (
                            <div className="img">
                                <Image 
                                    className={className} 
                                    id={id} 
                                    src={imgkertas} 
                                    alt="icon"
                                    width={145}
                                    height={150}
                                />
                            </div>
                        )
                    }
                    {   
                         data.pcselection === "Scissors" ? 
                        (
                            <div className="img">
                                <Image 
                                    className={[className, activeimg].join(" ")} 
                                    id={id} 
                                    src={imggunting} 
                                    alt="icon"
                                    width={145}
                                    height={150}
                                />
                            </div>
                        ) :
                        (
                            <div className="img">
                                <Image 
                                    className={className} 
                                    id={id} 
                                    src={imggunting} 
                                    alt="icon"
                                    width={145}
                                    height={150}
                                />
                            </div>
                        )
                    }
                </>
                )
            ) : (
                <>
                    <Image 
                            src={imggunting}
                            alt="trophy"
                    />
                    <h3 style={{textAlign:"center"}}>Victory!</h3>
                </>
            )
            }
        </div>
      
    );
  };


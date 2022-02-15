import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
// import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Grid, Alert }from '@mui/material';
// import { Link } from 'react-router-dom';
import Link from 'next/link';
import Image from 'next/image';

import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { addStatusGame } from '../../redux/actions/statusgame.action';

const GameCard = (props) => {
	const dispatch = useDispatch()
    const statusGame = useSelector(store => store.statusGame);
    const counters = useSelector(state => state.counters);
	
	const handlePlayButtonClicked = (nameGame) => (e) => {
        // console.log("lala")
		console.log(nameGame)

        switch (nameGame) {
            case "rps":
                return(
                    dispatch(
                        addStatusGame({
                            rpsStatusgame: "Game pernah dimainkan sebelumnya"
                        })
                    )
                )
            case "female_assasin":
                return(
                    dispatch(
                        addStatusGame({
                            female_assasin: "Game pernah dimainkan sebelumnya"
                        })
                    )
                )
            case "iamfastest":
                return(
                    dispatch(
                        addStatusGame({
                            iamfastest: "Game pernah dimainkan sebelumnya"
                        })
                    )
                )
            case "zombieoutbreak":
                return(
                    dispatch(
                        addStatusGame({
                            zombieoutbreak: "Game pernah dimainkan sebelumnya"
                        })
                    )
                )
            case "supermario":
                return(
                    dispatch(
                        addStatusGame({
                            supermario: "Game pernah dimainkan sebelumnya"
                        })
                    )
                )
            case "alienkiller":
                return(
                    dispatch(
                        addStatusGame({
                            alienkiller: "Game pernah dimainkan sebelumnya"
                        })
                    )
                )
            case "warships":
                return(
                    dispatch(
                        addStatusGame({
                            warships: "Game pernah dimainkan sebelumnya"
                        })
                    )
                )
            case "dragonsmagic":
                return(
                    dispatch(
                        addStatusGame({
                            dragonsmagic: "Game pernah dimainkan sebelumnya"
                        })
                    )
                )
            case "dragonsmagic":
                return(
                    dispatch(
                        addStatusGame({
                            dragonsmagic: "Game pernah dimainkan sebelumnya"
                        })
                    )
                )
            case "thesims":
                return(
                    dispatch(
                        addStatusGame({
                            thesims: "Game pernah dimainkan sebelumnya"
                        })
                    )
                )
            default:
                alert("Uups, data tidak ditemukan!")
                break;
        }
        
    }
	
    return(
        <Grid item xs={12} md={6} lg={4}>
            <Card sx={{ height:'100%', borderRadius:4 }}>
                {props.gameInfo != "" ? (
                        <Alert severity="success">
                            {props.gameInfo}
                        </Alert>
					) :
					(
						<Alert severity="info">
							Game belum pernah dimainkan!
						</Alert>
					)
				}
                <Link href={props.link}>
					<a target="_blank" onClick={handlePlayButtonClicked}>
						<Image
						src={props.image} alt="" 
						width="700"
						height="600"
						/>
					</a>
                </Link>
                <CardContent sx={{px:3}}>
                    <Grid container spacing={2}>
                        <Grid item xs={7}>
                            <Typography gutterBottom variant="h5" component="div">
                                Game {props.gamenumber}:
								<br/>{props.title}
                            </Typography>
                        </Grid>
                        <Grid item xs={5}>
                             <p style={{ fontFamily: 'Roboto,Helvetica,Arial,sans-serif', fontSize: '0.875rem', lineHeight: '1.75', textTransform: 'uppercase', textDecoration: 'none', padding: '4px 15px', textAlign: "right" }}><span style={{ backgroundColor: '#55daab', color: 'white', borderRadius: '3px', padding: '2px 6px',}}>Score: {counters.value}</span></p> 
                        </Grid>
                    </Grid>
                    <Typography variant="body2" color="text.secondary">
                        {props.description}
                    </Typography>
                </CardContent>
                <CardActions sx={{px:3}}>
                    <Button variant="contained" sx={{width:"100%" , my:2}}>
                        <Link style={{ textDecoration: 'none', color: '#fff' }} href={props.link}>
                           <a onClick={handlePlayButtonClicked(props.nameGame)}>Play Now!</a>
                        </Link>
                    </Button>
                </CardActions>
            </Card>
        </Grid>
    )
}

export default GameCard
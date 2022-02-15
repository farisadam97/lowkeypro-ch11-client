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

const GameCard = (props) => {
    const statusGame = useSelector(store => store.statusGame);
    return(
        <Grid item xs={12} md={6} lg={4}>
            <Card sx={{ height:'100%', borderRadius:4 }}>
                {statusGame.rpsGame != "" ? (
                        <Alert severity="success">
                            {statusGame.rpsStatusgame}
                        </Alert>
					) :
					(
						<Alert severity="info">
							{statusGame.rpsStatusgame}
						</Alert>
					)
				}
                <Image
                    src={props.image} alt="" 
                    width="700"
                    height="600"
                />
                <CardContent sx={{px:3}}>
                    <Grid container spacing={2}>
                        <Grid item xs={7}>
                            <Typography gutterBottom variant="h5" component="div">
                                {props.title}
                            </Typography>
                        </Grid>
                        <Grid item xs={5}>
                             <p style={{ fontFamily: 'Roboto,Helvetica,Arial,sans-serif', fontSize: '0.875rem', lineHeight: '1.75', textTransform: 'uppercase', textDecoration: 'none', padding: '4px 15px', textAlign: "right" }}><span style={{ backgroundColor: '#55daab', color: 'white', borderRadius: '3px', padding: '2px 6px',}}>Score: 50</span></p> 
                        </Grid>
                    </Grid>
                    <Typography variant="body2" color="text.secondary">
                        {props.description}
                    </Typography>
                </CardContent>
                <CardActions sx={{px:3}}>
                    <Button variant="contained" sx={{width:"100%" , my:2}}>
                        <Link style={{ textDecoration: 'none', color: '#fff' }} href={props.link}>
                           <a>Play Now!</a>
                        </Link>
                    </Button>
                </CardActions>
            </Card>
        </Grid>
    )
}

export default GameCard
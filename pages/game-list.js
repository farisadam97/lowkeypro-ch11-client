import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import GameCard from '../components/GameCard/GameCard';
import styles from '../styles/gamelist.module.css'
import ResponsiveAppBar from '../components/navbar/Navbar.component';
import imageRPS from '../public/images/RPSgame.jpeg';
import imagegame2 from '../public/images/game2.jpg';
import imagegame3 from '../public/images/game3.jpg';
import imagegame4 from '../public/images/game4.jpg';
import imagegame5 from '../public/images/game5.jpg';
import imagegame6 from '../public/images/game6.jpg';
import imagegame7 from '../public/images/game7.jpg';
import imagegame8 from '../public/images/game8.jpg';
import imagegame9 from '../public/images/game9.jpg';

import { useSelector } from "react-redux";

const GameList = () => {
    const statusGame = useSelector(store => store.statusGame);
    const gameListItem = [
        {
            title: "Rock Paper Scissor",
            description:"A well known traditional games from entire world that could ruin your friendship with your bestfriend",
            image: imageRPS,
            link:"/rps-game",
            nameGame: "rps",
            gameInfo: statusGame.rpsStatusgame
        },
		{
            title: "Female Assassin",
            description:"A well known first person shooting game with fast paced action, can play multiplayer online with your friends",
            image: imagegame2,
            link:"",
            nameGame: "female_assasin",
            gameInfo: statusGame.female_assasin
        },
		{
            title: "I Am Fastest",
            description:"Challenge your friends in this fun racing game, who is the fastest among all?",
            image: imagegame3,
            link:"",
            nameGame: "iamfastest",
            gameInfo: statusGame.iamfastest
        },
		{
            title: "Zombie Outbreak",
            description:"Kill the zombies and save the world",
            image: imagegame4,
            link:"",
            nameGame: "zombieoutbreak",
            gameInfo: statusGame.zombieoutbreak
        },
		{
            title: "Super Mario Bros.",
            description:"A classic and exciting nintendo game",
            image: imagegame5,
            link:"",
            nameGame: "supermario",
            gameInfo: statusGame.supermario
        },
		{
            title: "Alien Killer",
            description:"Conquer the universe and smash the aliens in this new game",
            image: imagegame6,
            link:"",
            nameGame: "alienkiller",
            gameInfo: statusGame.alienkiller
        },
		{
            title: "The Warships",
            description:"Battle with your friends in world war game and conquer the world",
            image: imagegame7,
            link:"",
            nameGame: "warships",
            gameInfo: statusGame.warships
        },
		{
            title: "Dragons & Magic",
            description:"Slay the dragon in this magical world, save the kingdom and the king",
            image: imagegame8,
            link:"",
            nameGame: "dragonsmagic",
            gameInfo: statusGame.dragonsmagic
        },
		{
            title: "The Sims",
            description:"Welcome to the world of the sims, build your house and make it pretty",
            image: imagegame9,
            link:"",
            nameGame: "thesims",
            gameInfo: statusGame.thesims
        }
    ]
    
    return(
        <div className={styles.mainpagegame}>
            <ResponsiveAppBar />
            <Container  maxWidth="xl" sx={{px:2,pt:8}}>
                <Typography variant="h2" align="center" sx={{ fontWeight: 'bold',color:'whitesmoke', }}>
                    Our Games List
                </Typography>
                <Grid container spacing={6} sx={{mt:2}}>
                    {
                        gameListItem.map((item,index) => (
                            <GameCard
                                key={index} 
								gamenumber={index+1} 
                                title={item.title} 
                                description={item.description}
                                image={item.image}
                                link={item.link}
                                nameGame={item.nameGame}
                                gameInfo={item.gameInfo}
                            />
                        ))
                    }
                    
                </Grid>
                <br />
                <br />
            </Container>
        </div>
    )
}

export default GameList 
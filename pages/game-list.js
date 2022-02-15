import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import GameCard from '../components/GameCard/GameCard';
import styles from '../styles/gamelist.module.css'
import ResponsiveAppBar from '../components/navbar/Navbar.component';
import imageRPS from '../public/images/RPSgame.jpeg';




const GameList = () => {

    const gameListItem = [
        {
            title: "Rock Paper Scissor",
            description:"A well known traditional games from entire world that could ruin your friendship with your bestfriend",
            image: imageRPS,
            link:"/rps-game"
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
                                title={item.title} 
                                description={item.description}
                                image={item.image}
                                link={item.link}
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
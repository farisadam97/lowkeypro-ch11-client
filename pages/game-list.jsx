import React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import { useSelector } from 'react-redux';
import GameCard from '../components/GameCard/GameCard';
import styles from '../styles/gamelist.module.css';
import ResponsiveAppBar from '../components/navbar/Navbar.component';

function GameList() {
  const statusGame = useSelector((store) => store.statusGame);
  const gameListItem = [
    {
      id: 1,
      title: 'Rock Paper Scissor',
      description: 'A well known traditional games from entire world that could ruin your friendship with your bestfriend',
      image: '/images/RPSgame.jpeg',
      link: '/rps-game',
      nameGame: 'rps',
      gameInfo: statusGame.rpsStatusgame,
    },
    {
      id: 2,
      title: 'Female Assassin',
      description: 'A well known first person shooting game with fast paced action, can play multiplayer online with your friends',
      image: '/images/game2.jpg',
      link: '',
      nameGame: 'female_assasin',
      gameInfo: statusGame.female_assasin,
    },
    {
      id: 3,
      title: 'I Am Fastest',
      description: 'Challenge your friends in this fun racing game, who is the fastest among all?',
      image: '/images/game3.jpg',
      link: '',
      nameGame: 'iamfastest',
      gameInfo: statusGame.iamfastest,
    },
    {
      id: 4,
      title: 'Zombie Outbreak',
      description: 'Kill the zombies and save the world',
      image: '/images/game4.jpg',
      link: '',
      nameGame: 'zombieoutbreak',
      gameInfo: statusGame.zombieoutbreak,
    },
    {
      id: 5,
      title: 'Super Mario Bros.',
      description: 'A classic and exciting nintendo game',
      image: '/images/game5.jpg',
      link: '',
      nameGame: 'supermario',
      gameInfo: statusGame.supermario,
    },
    {
      id: 6,
      title: 'Alien Killer',
      description: 'Conquer the universe and smash the aliens in this new game',
      image: '/images/game6.jpg',
      link: '',
      nameGame: 'alienkiller',
      gameInfo: statusGame.alienkiller,
    },
    {
      id: 7,
      title: 'The Warships',
      description: 'Battle with your friends in world war game and conquer the world',
      image: '/images/game7.jpg',
      link: '',
      nameGame: 'warships',
      gameInfo: statusGame.warships,
    },
    {
      id: 8,
      title: 'Dragons & Magic',
      description: 'Slay the dragon in this magical world, save the kingdom and the king',
      image: '/images/game8.jpg',
      link: '',
      nameGame: 'dragonsmagic',
      gameInfo: statusGame.dragonsmagic,
    },
    {
      id: 9,
      title: 'The Sims',
      description: 'Welcome to the world of the sims, build your house and make it pretty',
      image: '/images/game9.jpg',
      link: '',
      nameGame: 'thesims',
      gameInfo: statusGame.thesims,
    },
  ];

  return (
    <div className={styles.mainpagegame}>
      <ResponsiveAppBar />
      <Container maxWidth="xl" sx={{ px: 2, pt: 8 }}>
        <Typography variant="h2" align="center" sx={{ fontWeight: 'bold', color: 'whitesmoke' }}>
          Our Games List
        </Typography>
        <Grid container spacing={6} sx={{ mt: 2 }}>
          {
			gameListItem.map((item, index) => (
  <GameCard
    key={item.id}
    gamenumber={index + 1}
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
  );
}

export default GameList;

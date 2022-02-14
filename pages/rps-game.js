// import styles from '../styles/RPSGame.module.css';
import React from 'react';

// Component Game
import { Gamecontainer } from '../components/RPSGame/template/game-container/Gamecontainer.component';
import { Gamesection } from '../components/RPSGame/template/game-section/Gamesection.component';
import { Resultsection } from '../components/RPSGame/template/resultsection/Resultsection.component';
import { Info } from '../components/RPSGame/template/info/Info.component';
import { Score } from '../components/RPSGame/score/Score.component';
import { settings } from '../components/RPSGame/config/game';
import { Message } from '../components/RPSGame/message/Message.component';
import { Choice, Selection, ChoiceComputer, SelectionComputer } from '../components/RPSGame/choice/Choice.component';
import { Round } from '../components/RPSGame/round/Round';
// End Component Game

import Image from 'next/image';

// Component Navbar
import ResponsiveAppBar from '../components/navbar/Navbar.component';
import { Container, Typography, Alert, Grid } from '@mui/material';

import imgbatu from '../public/images/batu.png';
import imgkertas from '../public/images/kertas.png';
import imggunting from '../public/images/gunting.png';
import imgrefresh from '../public/images/refresh.png';
import trophy from '../public/images/trophy.png';
import {postScoreAxios} from '../services/game.score.service';

import { useDispatch, useSelector } from "react-redux";
import { addScoreUser, resetGame } from '../redux/actions/rpsgame.action';

import { incrementCounterAction } from '../redux/actions/counters';
import { addStatusGame } from '../redux/actions/statusgame.action';



const RPSGame = () => {
	const dispatch = useDispatch();

	const rpsGame = useSelector(store => store.rpsGame);
  const counters = useSelector(state => state.counters);
  const statusGame = useSelector(store => store.statusGame);
	
	const reset = () => {
		dispatch(
			resetGame({
				userselection: "",
				pcselection: "",
				round: 0,
				userscore: 0,
				pcscore: 0,
				message: "",
			})
		)
	};

	const { winMessage, tieMessage, lostMessage, winTarget } = settings;
 	const { pcscore, userscore, round } = rpsGame;

	const play = (e) => {
		if (pcscore < winTarget) {
		  const userselection = e.target.getAttribute("value");
		  const pcselection = ["Rock", "Paper", "Scissors"][Math.floor(Math.random() * 3)];
		  
			var resulttoupdate = "";
			var scoretoupdate = 0;
			
			if(userselection === pcselection)
			{
				dispatch(
					addScoreUser({
						message: tieMessage
					})
				)
				resulttoupdate = "DRAW";
			}
			else
			{
				if((userselection === "Rock" && pcselection === "Scissors") || (userselection === "Paper" && pcselection === "Rock") || (userselection === "Scissors" && pcselection === "Paper"))
				{
					dispatch(
						addScoreUser({
							userscore: userscore + 1,
							message: winMessage
						})
					)
					resulttoupdate = "WIN";
					scoretoupdate = 1;
				
					dispatch(
						incrementCounterAction()
					)
					localStorage.setItem('total_score', counters.value+1);
				}
				else
				{
					dispatch(
						addScoreUser({
							pcscore: pcscore + 1,
							message: lostMessage
						})
					)
					resulttoupdate = "LOSE";
				}
			}

			dispatch(
				addScoreUser({
					round: round + 1,
					userselection: userselection,
					pcselection: pcselection
				})
			)
			
			if(statusGame.rpsGame === ""){
				dispatch(
					addStatusGame({
						rpsGame: "true",
						rpsStatusgame: "Game pernah dimainkan sebelumnya"
					})
				)
			}

			const currentuserid = localStorage.getItem('id');
			var currentyear = new Date().getFullYear();
			const datatoupdate = {user_id: currentuserid, game_id: 1, result: resulttoupdate, score: scoretoupdate, game_date: currentyear};
			postScoreAxios(JSON.stringify(datatoupdate));
		}
	}; 
    return (
		<div>
			<ResponsiveAppBar />
			<div className="pagegame">
				<Container maxWidth="xl">
					<div>
						<Typography variant="h3"
							fontSize={{
								lg: 50,
								md: 40,
								sm: 30,
								xs: 20
							}}
						>
							Rock Paper Scissors
						</Typography>
						<Round data={rpsGame}/>
						<Grid container direction="row" justifyContent="center">
							{statusGame.rpsStatusgame != "" ? (
									<Alert severity="success">
										{statusGame.rpsStatusgame}
									</Alert>
								) :
								(
									<Alert severity="info">
										Game belum pernah dimainkan!
									</Alert>
								)
							}
						</Grid>	
						<Gamecontainer>
							<Gamesection>
								<Info>
									<p className="headertitle">PLAYER 1 (<Score score={userscore} />)</p>
								</Info>
								<br/>
								<Selection data={rpsGame} trophyIcon={trophy}>
									<Choice data={rpsGame} value="Rock" id="rock" className="fas fa-hand-rock" onClick={play} choiceIcon={imgbatu} />
									<Choice data={rpsGame} value="Paper" id="paper" className="fas fa-hand-paper" onClick={play} choiceIcon={imgkertas} />
									<Choice data={rpsGame} value="Scissors" id="scissors" className="fas fa-hand-scissors" onClick={play} choiceIcon={imggunting} />
								</Selection>
							</Gamesection>

							<Resultsection>
								<Message data={rpsGame} />
							</Resultsection>

							<Gamesection>
								<Info>
									<p className="headertitle">COM (<Score score={pcscore} />)</p>
								</Info>
								<br/>
								<SelectionComputer data={rpsGame} trophyIcon={trophy}>
									<ChoiceComputer data={rpsGame} id="comrock" className="fas fa-hand-rock" activeimg="activeimg" imgbatu={imgbatu} imgkertas={imgkertas} imggunting={imggunting}/>
								</SelectionComputer>
							</Gamesection>
						</Gamecontainer>
						<div className="divrefresh">
                            <Image 
                                src={imgrefresh}
                                alt="Refresh"
                                width={60}
                                height={50}
                                data={rpsGame}
                                onClick={reset}
                            />
						</div>
			
					</div>
				</Container>
			</div>
		</div>
	)
}

export default RPSGame
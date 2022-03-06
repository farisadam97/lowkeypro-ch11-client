import React from 'react';
import { Page, Text, Image, View, Document, StyleSheet, BlobProvider } from '@react-pdf/renderer';

const styles = StyleSheet.create({
	page: {
		backgroundColor: '#ebebeb'
	},
	title: {
		fontSize: '26pt', textAlign: 'center', marginBottom: 10
	},
	img: {
		width: '100%', marginTop: 5, marginBottom: 10
	},
	img250: {
		width: '250px', marginTop: 5, marginBottom: 10
	},
	img450: {
		width: '450px', marginTop: 5, marginBottom: 10
	},
	section: {
		margin: 4, padding: 20, fontSize: '12pt'
	},
	section1: {
		backgroundColor: '#d2dbff', borderRadius: '15px', margin: 4, padding: 20, fontSize: '12pt'
	},
	section2: {
		backgroundColor: '#8ef9d5', borderRadius: '15px', marginTop: 24, marginLeft: 4, marginRight: 4, marginBottom: 4, padding: 20, fontSize: '12pt'
	},
	section3: {
		backgroundColor: '#fffead', borderRadius: '15px', marginTop: 16, marginLeft: 4, marginRight: 4, marginBottom: 4, padding: 20, fontSize: '12pt'
	},
	section4: {
		backgroundColor: '#caf2ff', borderRadius: '15px', marginTop: 24, marginLeft: 4, marginRight: 4, marginBottom: 4, padding: 20, fontSize: '12pt'
	},
	sectiontitle: {
		fontSize: '20pt', marginBottom: 20
	}
});
function pdfText() {
	return(
		<Document>
		<Page size="A4" style={styles.page}>
			<View style={styles.section}>
				<Text style={styles.title}>How to play?</Text>
				<View style={styles.section1}>
					<Text style={styles.sectiontitle}>1. Create Account and Login</Text>
					<Text>Click the SIGN UP FREE button at the top right</Text>
					<Image style={styles.img250} src="/images/pdf1.jpg" alt="Sign Up Button"/>
					<Text>Fill up the registration form and submit</Text>
					<Image style={styles.img250} src="/images/pdf2.jpg" alt="Registration Form"/>
					<Text>Login with your username and password</Text>
					<Image style={styles.img250} src="/images/pdf3.jpg" alt="Login Form"/>
				</View>
				
				<View style={styles.section2} wrap={false}>
					<Text style={styles.sectiontitle}>2. Select a Game to Play</Text>
					<Text>Click PLAY GAMES to see the list of games</Text>
					<Image style={styles.img} src="/images/pdf4.jpg" alt="Home Page"/>
					<Text>Select a game you want to play and click PLAY NOW!</Text>
					<Image style={styles.img} src="/images/pdf5.jpg" alt="Select Game"/>
					<Text>Have fun!</Text>
				</View>
				
				<View style={styles.section3} wrap={false}>
					<Text style={styles.sectiontitle}>3. Play Game</Text>
					<Text>This is the page for Rock Paper Scissors game</Text>
					<Image style={styles.img450} src="/images/pdf6.jpg" alt="Rock Paper Scissors Game"/>
					<Text>Pick either one option and then the computer will pick it's option, in this case, you picked Rock and computer picked Paper, so you lost.</Text>
					<Image style={styles.img450} src="/images/pdf7.jpg" alt="Game Result"/>
					<Text>Continue playing the game and have fun!</Text>
				</View>
				
				<View style={styles.section4} wrap={false}>
					<Text style={styles.sectiontitle}>4. Check Top Score Leaderboard</Text>
					<Text>You can click the Top Score on the navigation bar and it will bring you to this page that shows the score of all players</Text>
					<Image style={styles.img} src="/images/pdf8.jpg" alt="Top Score"/>
					<Text>Continue playing the game and get more score and ranked higher!</Text>
				</View>
			</View>
		</Page>
		</Document>
	)
}
export default class PdfRender extends React.Component {
	constructor() {
		super();
		this.state = {
			isClient: false,
		};
	}

	setIsClient = () => {
		this.setState({
			isClient: true,
		});
	}

	componentDidMount() {
		this.setIsClient();
	}
	
	render() {
		return (
			<div style={{ height: '100vh' }}>
				{this.state.isClient && (
					<BlobProvider document={pdfText()}>
						{({ url }) => <iframe src={url} style={{ width: '100%', height: '100%' }} />}
					</BlobProvider>
				)}
			</div>
		)
	}
}
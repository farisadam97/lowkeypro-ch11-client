import React, { Component } from 'react';
import Axios from 'axios';
import styles from '../../styles/gamehistory.module.css';
import {baseURL} from '../../services/config.service';
import Typography from '@mui/material/Typography';

export default class GameHistories extends Component {

    constructor(props) {
        super(props);
        this.state = { gameHistoriesCollection: [] };
    }

    componentDidMount() {
		if (typeof window !== 'undefined') {
			var currentuserid = localStorage.getItem('id');
		}
        Axios.get(`${baseURL}/history/${currentuserid}`)
            .then(res => {
                this.setState({ gameHistoriesCollection: res.data.message });
            })
            .catch(function (error) {
                console.log(error);
            })
    }

	formatter = new Intl.DateTimeFormat("en-GB", {
		year: "numeric",
		month: "long",
		day: "2-digit",
		hour: 'numeric',
		minute: 'numeric',
		second: 'numeric'
	});
    dataTable() {
        return this.state.gameHistoriesCollection.sort((a, b) => a.id > b.id ? 1:-1).map((data, i) => {
			
			return (
				<div key={i} className={styles.tableleaderboardrow} style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gridGap: 20 }}>
					<div>
						<Typography 
							fontSize={{
								lg: 20,
								md: 20,
								sm: 16,
								xs: 12
							}}
						>
							{i+1}
						</Typography>
					</div>
					<div>
						<Typography 
							fontSize={{
								lg: 20,
								md: 20,
								sm: 16,
								xs: 12
							}}
						>
							Rock Paper Scissor
						</Typography>
					</div>
					<div>
						<Typography 
							fontSize={{
								lg: 20,
								md: 20,
								sm: 16,
								xs: 12
							}}
						>
							{this.formatter.format(Date.parse(data.createdAt))}
						</Typography>
					</div>
					<div>
						<Typography 
							fontSize={{
								lg: 20,
								md: 20,
								sm: 16,
								xs: 12
							}}
						>
							{data.result}
						</Typography>
					</div>
				</div>
			);
        });
    }

    render() {
        return (
			<div>
				{this.dataTable()}
            </div>
        )
    }
}
import './Message.css';

export const Message = ({ userSelection, message }) => {
    return (
        <>
        {
                userSelection === "" ? (<p id="vs">VS</p>) : 
                message === "Player win!" ? (<p className="result">Player Win!</p>) : 
                message === "Draw!" ? (<p className="resultdraw">Draw!</p>) : 
                (<p className="resultlost">You lost!</p>)
        }
        </>
       
    );
};
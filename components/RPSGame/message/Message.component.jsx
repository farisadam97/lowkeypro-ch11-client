
export const Message = ({ data }) => {
    return (
        <>
        {
                data.userselection === "" ? (<p id="vs">VS</p>) : 
                data.message === "Player win!" ? (<p className="result">Player Win!</p>) : 
                data.message === "Draw!" ? (<p className="resultdraw">Draw!</p>) : 
                (<p className="resultlost">You lost!</p>)
        }
        </>
       
    );
};
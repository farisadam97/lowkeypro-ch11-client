export const Round = ({ data }) => {
    return (
      <h1 className="round">
        {data.userSelection === "" ? "No rounds yet!" : `Round Game: ${data.round}`}
      </h1>
    );
  };  
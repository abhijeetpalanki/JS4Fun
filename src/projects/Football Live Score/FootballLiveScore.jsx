import { useState, useEffect } from "react";
import { useErrorBoundary } from "react-error-boundary";

const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": process.env.REACT_APP_RAPID_API_KEY,
    "X-RapidAPI-Host": process.env.REACT_APP_RAPID_API_HOST,
  },
};

const FootballLiveScore = () => {
  const { showBoundary } = useErrorBoundary();
  const [homeTeam, setHomeTeam] = useState({});
  const [awayTeam, setAwayTeam] = useState({});
  const [matchData, setMatchData] = useState({});

  const findNextMatch = () => {
    fetch(
      "https://api-football-v1.p.rapidapi.com/v3/fixtures?live=all",
      options
    )
      .then((response) => {
        response.json().then((data) => {
          const fixtures = data.response.sort(
            (a, b) => b.fixture.date - a.fixture.date
          );
          const fixture = fixtures[0].fixture;
          const league = fixtures[0].league;
          const teams = fixtures[0].teams;
          const goals = fixtures[0].goals;

          const updatedHomeTeam = {
            id: teams.home.id,
            name: teams.home.name,
            logo: teams.home.logo,
            currentScore: goals.home,
          };

          const updatedAwayTeam = {
            id: teams.away.id,
            name: teams.away.name,
            logo: teams.away.logo,
            currentScore: goals.away,
          };

          const updatedMatchData = {
            status: fixture.status.long,
            league: league.name,
            logo: league.logo,
            result: `${goals.home} - ${goals.away}`,
          };

          setHomeTeam((prevHomeTeam) => ({
            ...prevHomeTeam,
            ...updatedHomeTeam,
          }));
          setAwayTeam((prevAwayTeam) => ({
            ...prevAwayTeam,
            ...updatedAwayTeam,
          }));
          setMatchData((prevMatchData) => ({
            ...prevMatchData,
            ...updatedMatchData,
          }));
        });
      })
      .catch((err) => showBoundary(err.message));
  };

  useEffect(() => {
    findNextMatch();
  }, []);

  return (
    <div className="font-['Poppins'] flex flex-col items-center justify-center h-screen">
      <section className="flex flex-col justify-center items-center w-[500px] h-[500px] p-4 bg-white shadow-[0_8px_32px_0_rgba(31,38,135,0.37)] backdrop-blur-[14px] backdrop-saturate-[180%] rounded-2xl border border-black/20 text-black">
        <div className="w-full">
          {matchData && (
            <div className="flex flex-col items-center justify-center">
              <div className="flex flex-col items-center justify-center">
                <img
                  src={matchData.logo}
                  alt="league_logo"
                  className="w-[150px]"
                />
                <h5 className="py-1 text-2xl">({matchData.league})</h5>
              </div>
              <div className="flex justify-around w-full mt-10 text-center">
                <div>
                  <img
                    src={homeTeam.logo}
                    alt="home_team_logo"
                    className="w-[100px]"
                  />
                  <h5 className="pt-[5px]">{homeTeam.name}</h5>
                </div>
                <p className="pl-3 tracking-[10px] text-xl font-bold flex flex-col justify-around items-center">
                  <span>{matchData.status}</span>
                  <span>{matchData.result}</span>
                </p>
                <div>
                  <img
                    src={awayTeam.logo}
                    alt="away_team_logo"
                    className="w-[100px]"
                  />
                  <h5 className="pt-[5px]">{awayTeam.name}</h5>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default FootballLiveScore;

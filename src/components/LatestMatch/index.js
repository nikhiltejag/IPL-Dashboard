import './index.css'

const LatestMatch = props => {
  const {latestMatchDetails} = props

  const {
    competingTeam,
    date,
    competingTeamLogo,
    venue,
    result,
    firstInnings,
    secondInnings,
    manOfTheMatch,
    umpires,
  } = latestMatchDetails

  return (
    <div className="latest-match-details">
      <div className="competing-teams-container">
        <div className="competing-team-details">
          <div className="competing-match-info">
            <p className="competing-team-name">{competingTeam}</p>
            <p className="match-date">{date}</p>
            <p className="venue">{venue}</p>
            <p className="result">{result}</p>
          </div>
          <div className="competing-img-container">
            <img
              src={competingTeamLogo}
              className="competing-team-logo"
              alt={`latest match ${competingTeam}`}
            />
          </div>
        </div>
        <div className="first-innings-container">
          <p className="innings-head">First Innings</p>
          <p className="innings-team">{firstInnings}</p>
          <p className="innings-head">Second Innings</p>
          <p className="innings-team">{secondInnings}</p>
          <p className="man-of-the-match-umpire-head">Man Of The Match</p>
          <p className="man-of-the-match-umpire-name">{manOfTheMatch}</p>
          <p className="man-of-the-match-umpire-head">Umpires</p>
          <p className="man-of-the-match-umpire-name">{umpires}</p>
        </div>
      </div>
    </div>
  )
}

export default LatestMatch

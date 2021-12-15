import './index.css'

const MatchCard = props => {
  const {details} = props

  const {competingTeam, competingTeamLogo, matchStatus, result} = details

  return (
    <li className="match-card-item-container">
      <img
        src={competingTeamLogo}
        className="match-card-logo"
        alt={`competing team ${competingTeam}`}
      />
      <p className="match-card-team-name">{competingTeam}</p>
      <p className="match-card-result">{result}</p>
      <p className={`match-card-status ${matchStatus}`}>{matchStatus}</p>
    </li>
  )
}

export default MatchCard

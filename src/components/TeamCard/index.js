import {Link} from 'react-router-dom'

import './index.css'

const TeamCard = properties => {
  const {details} = properties
  const {id, teamImageUrl, name} = details

  return (
    <li className="team-card-item-container">
      <Link to={`/team-matches/${id}`} className="team-card-link">
        <img src={teamImageUrl} alt={name} className="team-card-img" />
        <p className="team-card-head">{name}</p>
      </Link>
    </li>
  )
}

export default TeamCard

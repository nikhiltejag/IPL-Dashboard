import {Component} from 'react'
import Loader from 'react-loader-spinner'

import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'

import TeamCard from '../TeamCard'

import './index.css'

class Home extends Component {
  state = {
    isLoading: true,
    teamsList: [],
  }

  componentDidMount() {
    this.getTeamsData()
  }

  getTeamsData = async () => {
    const response = await fetch('https://apis.ccbp.in/ipl')
    const data = await response.json()
    console.log(data)
    const updatedData = data.teams.map(each => ({
      id: each.id,
      name: each.name,
      teamImageUrl: each.team_image_url,
    }))
    this.setState({teamsList: updatedData, isLoading: false})
  }

  renderLoader = () => (
    <div testid="loader">
      <Loader type="Oval" color="#ffffff" height={50} width={50} />
    </div>
  )

  renderHome = () => {
    const {teamsList} = this.state

    return (
      <>
        <div className="home-logo-head-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/ipl-logo-img.png"
            alt="ipl logo"
            className="app-logo"
          />
          <h1 className="home-heading">IPL Dashboard</h1>
        </div>
        <div className="team-cards-container">
          <ul className="card-list-container">
            {teamsList.map(each => (
              <TeamCard key={each.id} details={each} />
            ))}
          </ul>
        </div>
      </>
    )
  }

  render() {
    const {isLoading} = this.state

    return (
      <div className="home-container">
        {isLoading ? this.renderLoader() : this.renderHome()}
      </div>
    )
  }
}

export default Home

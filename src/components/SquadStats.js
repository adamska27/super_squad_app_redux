import React, { Component } from 'react'
import { connect } from 'react-redux'

class SquadStats extends Component {
    render() {
        let stats = this.props.heroes.reduce( (a, b) => {
            return {
                strength: a.strength + b.strength,
                intelligence: a.intelligence + b.intelligence,
                speed: a.speed + b.speed,
            }
        }, {strength: 0, intelligence: 0, speed: 0})
        return(
            <div>
                <h4>SquadStats</h4>
                <ul className="list-group">
                    <li className="list-group-item">
                        <b> Overall strenght: </b> {stats.strength}
                    </li>
                    <li className="list-group-item">
                        <b>Overall intelligence: </b>{stats.intelligence}
                    </li>
                    <li className="list-group-item">
                        <b>Overall speed: </b>{stats.speed}
                    </li>
                </ul>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        heroes: state.heroes
    }
}

export default connect(mapStateToProps)(SquadStats)
import React, { Component } from 'react'
import CharactersList from './CharactersList'
import HeroesList from './HeroesList'
import SquadStats from './SquadStats'
import '../style/index.css'

class App extends Component {
    render() {
        return (
            <div className="App">
                <h2>SuperSquad</h2>
                <div className="col-md-4">
                    <CharactersList />
                </div>
                <div className="col-md-4">
                    <HeroesList />
                </div>
                <div className="col-md-4">
                    <SquadStats />
                </div>
            </div>
        )
    }
}

export default App
// Import the React library, the BotCollection component, the BotArmy component, and the BotSpecs component//
import React, { Component } from "react"
import BotCollection from './BotCollection'
import BotArmy from './YourBotArmy'
import BotSpecs from '../components/BotSpecs'

// Define a new React component called BotsPage//
class BotsPage extends Component {
    // Set the initial state for the component//
  state = {
    botCollection: [],
    filteredCollection: [],
    botArmy: [],
    collectionVisible: true,
    botSpecs: {},
  }
// Use the componentDidMount method to fetch the bot data from a JSON server//
  componentDidMount() {
    fetch('https://json-server-vercel2-fttjs0ch8-benjah7.vercel.app/bots')
      .then(response => response.json())
      .then(bots => this.setState({ botCollection: bots, filteredCollection: bots }))
      .then(console.log("Bots Fetched!"))
  }
// Add a bot to the bot army//
  addToArmy = (bot) => {
     // Filter out any bots with the same bot class as the selected bot and update the state//
    const newCollection = this.state.filteredCollection.filter(card => card.bot_class !== bot.bot_class)
    this.setState({
      filteredCollection: newCollection,
      botArmy: [...this.state.botArmy, bot],
      collectionVisible: true,
    })
  }

// Remove a bot from the bot army//
  removeFromArmy = (bot) => {
// Filter out the selected bot and update the state//
    const newArmy = this.state.botArmy.filter(card => card.id !== bot.id)
// Create an array of bot classes for the new army//
    const armyClasses = newArmy.map(bot => bot.bot_class)
// Filter the bot collection to include only bots whose bot class is not in the new army//
    const newCollection = this.state.botCollection.filter(bot => {
      console.log("Filter:", !armyClasses.includes(bot.bot_class))
      return !armyClasses.includes(bot.bot_class)
    })
    console.log("newCollection", newCollection)

// Update the state with the new army and bot collection//
    this.setState({ botArmy: newArmy, filteredCollection: newCollection })
  }

// Remove a bot from the bot collection permanently//
  removeBotPermanently = (bot) => {
    let newCollection = this.state.botCollection.filter(card => card !== bot)
    let newFilteredCollection = this.state.filteredCollection.filter(card => card !== bot)
    let newArmy = this.state.botArmy.filter(card => card !== bot)

        // Update the state with the new bot collection, filtered collection, and bot army//
    this.setState({ botCollection: newCollection, filteredCollection: newFilteredCollection, botArmy: newArmy })
// fetching  a DELETE request to the server to remove the bot from the server data //
    fetch(` http://localhost:8001/bots${bot.id}`, {
      method: 'DELETE'
    }).then(response => response.json())
      .then(result => console.log(result))
  }

  // Display the specs for a particular bot//
  displayBotSpecs = (bot) => {
    this.setState({ collectionVisible: false, botSpecs: bot })
  }

  displayBotCollection = () => {
    this.setState({ collectionVisible: true })
  }

  render() {
    const { filteredCollection, botArmy, botSpecs, collectionVisible } = this.state

    return (
      <div>
        <BotArmy
          bots={botArmy}
          action={this.removeFromArmy}
          removeCard={this.removeBotPermanently} />
        {collectionVisible
          ? < BotCollection
            botCollection={filteredCollection}
            action={this.displayBotSpecs}
            removeCard={this.removeBotPermanently} />
          : < BotSpecs
            bot={botSpecs}
            back={this.displayBotCollection}
            enlist={this.addToArmy} />
        }
      </div>
    )
  }
}

export default BotPage

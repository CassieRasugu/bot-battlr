import React from 'react'
import BotCard from "../components/BotCard"

// Define a new React component called BotCollection that takes three props as input//
export default function BotCollection({ botCollection, action, removeCard }) {
  // Map over each bot in the botCollection array and create a new BotCard component for each one//
    const displayBotCards = botCollection.map(bot => {
          // Set the key prop to the bot object's id property and pass in the bot, action, and removeCard props//
    return <BotCard key= {bot.id} bot={bot} action={action} removeCard={removeCard} />
  })
  // Render the BotCollection component//
  return (
    <div className="ui four column grid">
      <div className="row">
         {/* Display all of the BotCard components */}
        {displayBotCards}
        Cassie's Bot Army are offcially done . No more bots available  to collect.
      </div>
    </div>
  )
}
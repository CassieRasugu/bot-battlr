import React from "react"

// An object that maps bot classes to CSS classes for icons//
const botTypeClasses = {
  Assault: "icon military",
  Witch: "icon magic",
  Captain: "icon star"
  Defender: "icon shield",
  Support: "icon plus circle",
  Medic: "icon ambulance",
}

// A functional component that displays information about a single bot//
const BotCard = props => {
    // Destructure props to get bot, action, and removeCard//
  const { bot, action, removeCard } = props
 // A function to handle clicks on the card//
  function handleClick(e) {
    console.log("handleClick fired!")
    // e.stopPropagation()
    action(bot)
  }
// A function to handle clicks on the red Y button//
  function handleDischarge(e) {
    console.log("Red Y Clicked!")
    e.stopPropagation()
    removeCard(bot)
  }

//runing the bot card//
  return (
    <div className="ui column">
      <div
        className="ui card"
        key={props.bot.id}
        onClick={handleClick}
      >
        <div className="image">
          <img alt="oh no!" src={props.bot.avatar_url} />
        </div>
        <div className="content">
          <div className="header">
         {/* Display the bot's name and an icon based on its class */}
            {props.bot.name}
            {props.bot.name}
            <i className={botTypeClasses[props.bot.bot_class]} />
          </div>
          <div className="meta text-wrap">
            <small>{props.bot.catchphrase}</small>
          </div>
        </div>
        <div className="extra content">
          <span>
            <i className="icon heartbeat" />
            {props.bot.health}
          </span>

          <span>
            <i className="icon lightning" />
            {props.bot.damage}
          </span>
          <span>
            <i className="icon shield" />
            {props.bot.armor}
          </span>
          <span>
         {/* Render a red Y button to remove the bot card */}
           <div className="ui center aligned segment basic">
              <button
                className="ui mini red button"
                onClick={handleDischarge}
              >
              </button>
            </div>
          </span>
        </div>
      </div>
    </div >
  )
}

export default BotCard
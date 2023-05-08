import React from "react"
// An object containing class names for different bot types//
const botTypeClasses = {
  Assault: "icon military",
  Witch: "icon magic",
  Captain: "icon star"
  Defender: "icon shield",
  Support: "icon plus circle",
  Medic: "icon ambulance",
}
// A functional component that displays detailed information about a single bot//

const BotSpecs = props => {
  return (
    <div className="ui segment">
      <div className="ui two column centered grid">
        <div className="row">
          <div className="four wide column">
              {/* Displays the bot's avatar */}
            <img
              alt="oh no!"
              className="ui medium circular image bordered"
              src={props.bot.avatar_url}
            />
          </div>
          <div className="four wide column">
            <h2>Name: {props.bot.name}</h2>
            <p>
              <strong>Catchphrase: </strong>
              {props.bot.catchphrase}
            </p>
            <strong>
              Class: {props.bot.bot_class}
              <i className={botTypeClasses[props.bot.bot_class]} />
            </strong>
            <br />
            <div className="ui segment">
              <div className="ui three column centered grid">
                <div className="row">
                  <div className="column">
                    <i className="icon large circular red heartbeat" />
                    <strong>{props.bot.health}</strong>
                  </div>
                  <div className="column">
                    <i className="icon large circular yellow lightning" />
                    <strong>{props.bot.damage}</strong>
                  </div>
                  <div className="column">
                    <i className="icon large circular blue shield" />
                    <strong>{props.bot.armor}</strong>
                  </div>
                </div>
              </div>
            </div>
            <button
              className="ui button fluid"
              onClick={() =>
                props.back()
              }
            >
              Go Back
            </button>
            <button
              className="ui button fluid"
              onClick={() =>
                props.enlist(props.bot)
              }
            >
              Enlist
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BotSpecs

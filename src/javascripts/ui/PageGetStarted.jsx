import React from 'react'
import Header from './Header.jsx'
import SubHeader from './SubHeader.jsx'

import { Router, Route, Link } from 'react-router'

const rolls = 8743219; //Mock until there is real code for this
const users = Math.floor((Math.random() * 100) + 1568); //Mock until there is real code for this

export default class PageGetStarted extends React.Component {
  render() {
    return (<div>
		<Header>Getting Started</Header>
		<p>UberRoller is a new mobile friendly and free DiceRoller application I designed this app to be secure and robust.</p>
		<Header>Donate</Header>
		<p>I am just one man running this on my own paying for it out of pocket for the good of the community. Please donate to help me keep this running!</p>
		<Header>They see me rolling… My D20!</Header>
		<SubHeader>Multiplayer/Multi-User Session</SubHeader>
		<p>This software allows you to join a group session with others and then when you roll dice they are rolled securely on the server so it is impossible to cheat. Then the results are sent to you and the group.</p>
<p>Depending on the settings of the group these maybe visible to just you and the DM/GM/Owner or to everyone!</p>
		<Header>Playing with yourself</Header>
		<SubHeader>Private Session</SubHeader>
		<p>This software also supports private local rolling which allows you to roll using your local device this allows you to use the app offline if you desire but because these results are not secure you may not invite people to this session.</p>
		<p>We also respect your privacy so this option allows you to roll without requiring login.</p>
		<p>How ever if you do Login we will save your rolls for you.</p>
		<Header>Verification</Header>
		<p>If you get emailed a dice roll and you’re unsure it was valid we support validation. Just click the validation link in your email.</p>
		<Header>Stats</Header>
		<p>
		<div>Number of users online: <span>{users}</span></div>
		<div>Number of dice rolled: <span>{rolls}</span></div>
		</p>
		</div>)
  }
}
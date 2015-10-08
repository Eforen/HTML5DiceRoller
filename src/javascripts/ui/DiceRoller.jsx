import React from 'react'
import FloatingActionButton from 'material-ui/lib/floating-action-button';

//import { Router, Route, Link } from 'react-router'

export default class DiceRoller extends React.Component {
  constructor(props, context) {
    super(props, context)
    //this.state = { n: 0 }
  }
  render () {
  	var style={
  		color: "#8200D4",
  		fontWeight: "bold"
  	}

    return <div>
		<FloatingActionButton style={style} backgroundColor="#52D400" mini={true}>
			d2
		</FloatingActionButton>
		<FloatingActionButton style={style} backgroundColor="#52D400" mini={true}>
			d4
		</FloatingActionButton>
		<FloatingActionButton style={style} backgroundColor="#52D400" mini={true}>
			d6
		</FloatingActionButton>
		<FloatingActionButton style={style} backgroundColor="#52D400" mini={true}>
			d8
		</FloatingActionButton>
		<FloatingActionButton style={style} backgroundColor="#52D400" mini={true}>
			d12
		</FloatingActionButton>
		<FloatingActionButton style={style} backgroundColor="#52D400" mini={true}>
			d20
		</FloatingActionButton>
    </div>
  }
}
import React from 'react'
import FloatingActionButton from 'material-ui/lib/floating-action-button';
import { Button , ButtonGroup, Input, Glyphicon} from 'react-bootstrap';

//import { Router, Route, Link } from 'react-router'

export default class DiceRoller extends React.Component {
  constructor(props, context) {
    super(props, context)
    //this.state = { n: 0 }
    this.state = {
    	code: "d6",
    	dieBtn: 2,
    	btns: ["d2", "d4", "d6", "d8", "d10", "d12", "d20", "d100"],
    	feature: {}
    }
  }

  btnClicked(index){
  	this.setState({"dieBtn":index})
  	//alert(this.state.dieBtn+"|"+index)
  }

  checkState(self, id){
  	return self.state.dieBtn == id
  }

  featureToggle(feature){
  	if (this.state.feature[feature] == true) this.state.feature[feature]=false
  	else {
	  	switch(feature){
	  		case "Drop Low":
	  			this.state.feature["Add Low"] = false
	  		case "Add Low":
	  			this.state.feature["Drop Low"] = false
	  		case "Drop High":
	  			this.state.feature["Add High"] = false
	  		case "Add High":
	  			this.state.feature["Drop High"] = false
	  	}
	  	this.state.feature[feature] = true
  	}
  	this.setState({"feature":this.state.feature})
  }

  checkFeature(self, feature){
  	if(self.state.feature[feature]===true) return true
  	return false
  }

  render () {
  	var style={
  		color: "#8200D4",
  		fontWeight: "bold"
  	}

  	var btnCountDec = <Button><Glyphicon glyph="minus" /></Button>
  	var btnCountInc = <Button><Glyphicon glyph="plus" /></Button>

  	var current = (
  		<div className="DiceRoller">
<Glyphicon glyph="glyphicons-minus" /> <Glyphicon glyph="glyphicons-plus" />
    		<Input bsSize="large" className="DiceCountSelect" type="number" min={1} buttonBefore={btnCountDec} buttonAfter={btnCountInc} />
	  		<ButtonGroup justified={true} className="DiceSideSelect">
		        {this.state.btns.map(function(btn, i) {
		          var boundClick = this.btnClicked.bind(this, i);
		          return (
		          	<Button bsSize="large" key={i} componentClass="DiceSideBtn" active={this.checkState(this, i)} onClick={boundClick} >{btn}</Button>
		          );
		        }, this)}
	  		</ButtonGroup>
	  		<ButtonGroup justified={true} className="DiceFeatureSelect1">
		        {["Reroll Ones", "Extra Dice"].map(function(feature, i) {
		          var boundClick = this.featureToggle.bind(this, feature);
		          return (
		          	<Button bsSize="large" key={"features1-"+i} componentClass="DiceSideBtn" active={this.checkFeature(this, feature)} onClick={boundClick} >{feature}</Button>
		          );
		        }, this)}
	  		</ButtonGroup>
	  		<ButtonGroup justified={true} className="DiceFeatureSelect2">
		        {["Drop Low", "Add Low", "Drop High", "Add High"].map(function(feature, i) {
		          var boundClick = this.featureToggle.bind(this, feature);
		          return (
		          	<Button bsSize="large" key={"features2-"+i} componentClass="DiceSideBtn" active={this.checkFeature(this, feature)} onClick={boundClick} >{feature}</Button>
		          );
		        }, this)}
	  		</ButtonGroup>
  		</div>)

    return current
  }
}
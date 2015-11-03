import React from 'react'
//import FloatingActionButton from 'material-ui/lib/floating-action-button';

import * as RollActions from "../data/actions/RollActions.js";

import { FloatingActionButton, Toggle} from 'material-ui';
import { Button , ButtonGroup, Input, Glyphicon} from 'react-bootstrap';

//import { Router, Route, Link } from 'react-router'

export default class DiceRoller extends React.Component {
  constructor(props, context) {
    super(props, context)
    //this.state = { n: 0 }
    this.state = {
    	code: "d6",
      dieCount: 1,
    	dieBtn: 1,
    	btns: ["d4", "d6", "d8", "d10", "d12", "d20", "d100"],
    	feature: {}
    }
  }

  compileCode(){
    if(this.state.dieCount === 1) this.state.code = this.state.btns[this.state.dieBtn]
    else this.state.code = this.state.dieCount+this.state.btns[this.state.dieBtn]

    if(this.state.feature["Add Low"] == true) this.state.code += "+L"
    if(this.state.feature["Drop Low"] == true) this.state.code += "-L"
    if(this.state.feature["Add High"] == true) this.state.code += "+H"
    if(this.state.feature["Drop High"] == true) this.state.code += "-H"
    if(this.state.feature["Extra Dice"] == true) this.state.code += "E"
    if(this.state.feature["Reroll Ones"] == true) this.state.code += "R"
    this.setState({"code":this.state.code})
  }

  btnClicked(index){
  	this.state.dieBtn = index
    this.compileCode()
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
          RollActions.createRole("Test");
	  			this.state.feature["Add Low"] = false
          break
	  		case "Add Low":
	  			this.state.feature["Drop Low"] = false
          break
	  		case "Drop High":
	  			this.state.feature["Add High"] = false
          break
	  		case "Add High":
	  			this.state.feature["Drop High"] = false
          break
	  	}
	  	this.state.feature[feature] = true
  	}
  	//this.setState({"feature":this.state.feature})
    this.compileCode()
  }

  checkFeature(self, feature){
  	if(self.state.feature[feature]===true) return true
  	return false
  }

  customMode(event, toggled){
    this.setState({"customMode": toggled})
    this.compileCode()
  }

  changeDiceCount(up, count){
    if(up.target && up.target.value){
      this.state.dieCount = parseInt(up.target.value)
    } else{
      if(up){
        this.state.dieCount = count ? this.state.dieCount + count : this.state.dieCount + 1
      } else{
        if((count ? this.state.dieCount - count : this.state.dieCount - 1) > 0)
          this.state.dieCount = count ? this.state.dieCount - count : this.state.dieCount - 1
      }
    }
    this.compileCode()
  }

  roll(){
    alert("Rolling")
  }

  renderCustomMode(){
    if (this.state.customMode !== true){
      var btnCountDec = <Button onClick={this.changeDiceCount.bind(this,false,1)}><Glyphicon glyph="minus" /></Button>
      var btnCountInc = <Button onClick={this.changeDiceCount.bind(this,true,1)}><Glyphicon glyph="plus" /></Button>

      return <div className="customModeWrapper">
        <Input bsSize="large" className="DiceCountSelect" type="number" roller={this} min={1} value={this.state.dieCount} buttonBefore={btnCountDec} buttonAfter={btnCountInc} onChange={this.changeDiceCount.bind(this)} />
        <ButtonGroup justified={true} className="DiceSideSelect">
            {this.state.btns.map(function(btn, i) {
              var boundClick = this.btnClicked.bind(this, i);
              return (
                <Button key={i} componentClass="DiceSideBtn" active={this.checkState(this, i)} onClick={boundClick} >{btn}</Button>
              );
            }, this)}
        </ButtonGroup>
        <ButtonGroup justified={true} className="DiceFeatureSelect1">
            {["Reroll Ones", "Extra Dice"].map(function(feature, i) {
              var boundClick = this.featureToggle.bind(this, feature);
              return (
                <Button key={"features1-"+i} componentClass="DiceSideBtn" active={this.checkFeature(this, feature)} onClick={boundClick} >{feature}</Button>
              );
            }, this)}
        </ButtonGroup>
        <ButtonGroup justified={true} className="DiceFeatureSelect2">
            {["Drop Low", "Add Low", "Drop High", "Add High"].map(function(feature, i) {
              var boundClick = this.featureToggle.bind(this, feature);
              return (
                <Button key={"features2-"+i} componentClass="DiceSideBtn" active={this.checkFeature(this, feature)} onClick={boundClick} >{feature}</Button>
              );
            }, this)}
        </ButtonGroup>
      </div>
    }
    return false
  }

  render () {
    var rollBtn = <Button justified={true} onClick={this.roll.bind(this)} >Roll</Button>
    
    return <div className="DiceRoller">
        <Input type="text" roller={this} disabled={this.state.customMode !== true} value={this.state.code} buttonAfter={rollBtn}/>
        <Toggle name="customRoll" label="Custom Roll Formula" onToggle={this.customMode.bind(this)}/>
        {this.renderCustomMode()}
        
      </div>
  }
}
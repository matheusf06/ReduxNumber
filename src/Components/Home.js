import React, {Component} from 'react';
import "../App.css";
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import redux_logo from '../redux_logo.svg';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actions from "../actions/actions";

class Home extends Component{

  plusnumber = () => {
    var number;
    number = this.props.number + 1;
    this.props.changenumber(number);

  }

  minusnumber = () => {
    if(this.props.number > 1){
      var number;
      number = this.props.number - 1;
      this.props.changenumber(number);
    }
    else{
      alert("Impossivel");
    }
  }

  render(){
    return(
      <div className="center">
        <img src={redux_logo} className="redux_logo"/>
        <h4 className="projectTitle">Redux Number</h4>
        <br/>
        <h3>{this.props.value}</h3>
        <Button variant="outline-dark" className="button" onClick={() => {this.props.numberplus()}}>Increment</Button>
        <Button variant="outline-dark" className="button" onClick={() => {this.props.numberminus()}}>Decrement</Button>
        <p>
          <h6>Range Number</h6>
          <br/>
          <a className="numbertext">{this.props.number}</a>
          <ButtonGroup size="sm">
            <Button variant="outline-dark" onClick={() => {this.plusnumber()}}>+</Button>
            <Button variant="outline-dark" onClick={() => {this.minusnumber()}}>-</Button>
          </ButtonGroup>

        </p>
      </div>
    )
  }
}

const mapDispatchToProps = dispatch =>
  bindActionCreators(actions, dispatch);

const mapStateToProps = state =>({
  value: state.value,
  number: state.number
});

export default connect(mapStateToProps,mapDispatchToProps)(Home)

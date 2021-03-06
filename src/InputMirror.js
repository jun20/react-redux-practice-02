import React from 'react'
import { connect } from 'react-redux';

const InputMirror = props => {
  return (  
    <div>
      <input value={props.inputValue} onChange={props.inputChanged} />
      <p>Value: {props.inputValue}</p>
    </div>
  )
}

const mapStateToProps = state => {
    return {
        inputValue: state.inputValue
    }
}

const mapDispatchToProps = dispatch => {
    return {
        inputChanged: (e) => {
            console.log('inputMirror.js - inhandler:', e.target.value);
            //dispatch action into store/index.js
            const action = {
                //case 'INPUT_CHANGE':
                type: 'INPUT_CHANGE',
                //inputValue: action.text
                text: e.target.value
            }
            dispatch(action);
        }
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(InputMirror);
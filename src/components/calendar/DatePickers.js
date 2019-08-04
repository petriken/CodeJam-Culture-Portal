import React, {Component} from 'react';
import TextField from '@material-ui/core/TextField';
import './DatePickers.css';


export default class DatePickers extends Component {
  state = {
    value: new Date()
  };

  render() {

    const { value } = this.state;

    return (
      <div className="container">

        <TextField
          className="textField"
          id="date"
          type="date"

          InputLabelProps={{
            shrink: true
          }}
          onChange={event => {
            this.setState({ value: event.target.value });
          }}
        />
      </div>
    );
  }
}

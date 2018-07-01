import React, { Component } from 'react';
class FormSubmit extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    render() {
        return (
            <div style={{ margin: 2 }}>
          <form onSubmit={this.props.onSubmitMessage} style={{ display: "flex" }}>
            <input type="text" style={{ flex: 9, height: 30 }} onChange={this.props.onChangmMessage}/>
            <button style={{ height: 35, flex: 1 }}>
              <strong>Add to List</strong>
            </button>
          </form>
        </div>
            
        );
    }
}

export default FormSubmit;
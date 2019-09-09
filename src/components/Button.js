import React, { Component } from 'react';


class Button extends Component {

    
    onfilter = () => {
      this.props.onFilter(this.props.Button)
    }
    render() { 
        return (
            <div className ='mt-2'>
              <button type="button" class="btn btn-info"
              onClick = {this.onfilter}     
              >{this.props.Button}</button>
            </div>
        );
    }
}


export default Button
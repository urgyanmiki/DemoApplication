import React, { Component } from "react"
import axios from 'axios'

class NewComment extends Component{

    render(){
        return (
            <div>
              <form onSubmit={this.handleSubmit}>
                <label>
                  Person Name:
                  <input type="text" name="name" onChange={this.handleChange} />
                </label>
                <button type="submit">Add</button>
              </form>
            </div>
          )
    }
}
export default NewComment
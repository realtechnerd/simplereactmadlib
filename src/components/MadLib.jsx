import React from 'react';
import "./style.css";

class MadLib extends React.Component {
    constructor() {
        super();
        this.state = {
            adjective1: "",
            color1: "",
            noun1: "",
            verb1: "",
            adjective2: "",
            noun2: ""
        }
        this.handleChange = this.handleChange.bind(this);
    }
    handleChange(event) {
        const {name, value} = event.target;

        this.setState({
            [name]: value
        })
    }
    render() {
        const placeholder = this.state.adjective1 === "" ? "[Adjective 1]" : this.state.adjective1;
        const placeholder1 = this.state.color1 === "" ? "[Color 1]" : this.state.color1;
        const placeholder2 = this.state.noun1 === "" ? "[Noun 1]" : this.state.noun1;
        const placeholder3 = this.state.verb1 === "" ? "[Verb 1]" : this.state.verb1;
        const placeholder4 = this.state.adjective2 === "" ? "[Adjective 2]" : this.state.adjective2;
        const placeholder5 = this.state.noun2 === "" ? "[Noun 2]" : this.state.noun2;
        return(
            <div className="MadLib">
                <label htmlFor="adjective1">Adjective 1: </label>
                <input
                    placeholder="Adjective 1" 
                    type="text"
                    id="adjective1"
                    name='adjective1'
                    value={this.state.adjective1}
                    onChange={this.handleChange}
                />
                <br/>
                <br/>
                <label htmlFor="color1">Color 1: </label>
                <input
                    placeholder="Color 1" 
                    type="text"
                    id="color1"
                    name='color1'
                    value={this.state.color1}
                    onChange={this.handleChange}
                />
                <br/>
                <br/>
                <label htmlFor="noun1">Noun 1: </label>
                <input
                    placeholder="Noun 1" 
                    type="text"
                    id="noun1"
                    name='noun1'
                    value={this.state.noun1}
                    onChange={this.handleChange}
                />
                <br/>
                <br/>
                <label htmlFor="verb1">Verb 1: </label>
                <input
                    placeholder="Verb 1" 
                    type="text"
                    id="verb1"
                    name='verb1'
                    value={this.state.verb1}
                    onChange={this.handleChange}
                />
                <br/>
                <br/>
                <label htmlFor="adjective2">Adjective 2: </label>
                <input
                    placeholder="Adjective 2" 
                    type="text"
                    id="adjective2"
                    name='adjective2'
                    value={this.state.adjective2}
                    onChange={this.handleChange}
                />
                <br/>
                <br/>
                <label htmlFor="noun2">Noun 2: </label>
                <input
                    placeholder="Noun 2" 
                    type="text"
                    id="noun2"
                    name='noun2'
                    value={this.state.noun2}
                    onChange={this.handleChange}
                />

            <div className='MadLibText'>
                <br/>
        <h2>The {placeholder} {placeholder1} {placeholder2} {placeholder3} over the {placeholder4} {placeholder5}.</h2>
            </div>
            </div>
        )
    }
}

export default MadLib;
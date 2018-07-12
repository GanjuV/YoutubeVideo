import React, { Component } from 'react';
/* Using ES6 we can change React.Component to React, { Component };
const Component = React.Component;
is same as React, { Component }
Meaning import React and pull of the property called component.

*/
//Functional component 
// Taking information and output is a JSX also a functional componenet can contain a class 
// based component.
/*
const SearchBar = () => {
    return <input />;
};
*/

// Component with intelligency i.e a react component class. When we have to deal wirh state.
// Data is changed 
class SearchBar extends Component {
    constructor(props) {
        super(props);

        // Only used in the component to initilise the state
        this.state = { term: ''};
    }

    // We can use this.state.term only to reference not for updating the value
    // So this.state.term = 'vaibhav' is a bad idea.

    // To render JSX its a react.component method 
    // onChange is a react defined property.
    render() {
        return (
            <div className="search-bar">
                <input 
                    value={this.state.term}
                    onChange={event => this.onInputChange(event.target.value)}/>
                {/* <button className="search-button" onClick={() => this.onInputChange()} type="button"><i className="fa fa-search"></i></button>     */}
            </div>        
        )
    }
    
    // Method to check when ever the input text changes.
    onInputChange(term) {
        this.setState({term});
        this.props.onSearchTermChange(term);
    }
}

export default SearchBar;
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchWeather } from '../actions/index';

class SearchBar extends Component {
    constructor(props) {
        super(props);

        this.state = { term: '' };

        // Bind context of onInputChange
        this.onInputChange = this.onInputChange.bind(this);
        this.onFormSubmit = this.onFormSubmit.bind(this);
    }

    render() {
        return (
            <form
                className="input-group"
                onSubmit={this.onFormSubmit}
            >
                <input
                    placeholder="Get a five-day forecast in your favourite cities"
                    className="form-control"
                    value={this.state.term}
                    onChange={this.onInputChange}
                />
                <span className="input-group-btn">
                    <button
                        type="submit"
                        className="btn btn-secondary"
                    >
                        Submit
                    </button>
                </span>
            </form>
        );
    }

    onInputChange(event) {
        this.setState({term: event.target.value});
    }

    onFormSubmit(event) {
        event.preventDefault();

        // Fetch weather data
        this.props.fetchWeather(this.state.term);
        // Clear input
        this.setState({term: ''});
    }
}

// Gives access to this.props.fetchWeather
function mapDispatchToProps(dispatch) {
    // Bind action to flow down in the application to middleware -> reducers
    return bindActionCreators({ fetchWeather }, dispatch);
}

// null because container doesn't care about application state
export default connect(null, mapDispatchToProps)(SearchBar);

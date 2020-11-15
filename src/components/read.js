import React from 'react';
import { Movies } from './movies';
import axios from 'axios';

export class Read extends React.Component {

    state = {

        movies: []

    };

    componentDidMount() {
        axios.get('http://localhost:4000/api/moives')
            .then(
                (response) => {
                    this.setState({ movies: response.data.movies})
                })
            .catch((error) => {
            console.log(error)
        });

    }

    render() {
        return (
            <div>
                <h1>My Read in another component</h1>
                <Movies movies={this.state.movies}></Movies>
            </div>
        );
    }
}

import React, { Component } from 'react';

class ExerciseList extends Component {

    state = {
        username: '',
        description: '',
        duration: 0,
        date: new Date(),
        users: []
    }

    componentDidMount() {
        this.setState({
            users: ['test user'],
            username: 'test user'
        });
    }

    handleUsernameChange = (e) => {
        this.setState({
            username: e.target.value
        });
    }

    handleDescriptionChange = (e) => {
        this.setState({
            description: e.target.value
        });
    }

    handleDurationChange = (e) => {
        this.setState({
            duration: e.target.value
        });
    }

    handleDateChange = (date) => {
        this.setState({
            date: date
        });
    }

    handleSubmit = (e) => {
        e.preventDefault();

        const exercise = {
            username: this.state.username,
            description: this.state.description,
            duration: this.state.duration,
            date: this.state.date
        }

        console.log(exercise);

        window.location = '/';


    }
    
    render() {
        return (
            <div>
                You are on the exercise list component
            </div>
        )    
    }
    
}

export default ExerciseList

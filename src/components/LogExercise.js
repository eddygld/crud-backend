import React, {Component} from 'react';
import axios from 'axios';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

class LogExercise extends Component {

    state = {
        username: '',
        description: '',
        duration: 0,
        date: new Date(),
        users: []
    }

    componentDidMount() {
        axios.get('http://localhost:5000/users/')
            .then(res=> {
                console.log(res.data);
                if(res.data.length > 0) {
                    this.setState({
                        users: res.data.map(user => user.username),
                        username: res.data[0].username
                    });
                }
            })
            .catch(error=> { console.log('Error fetching and parsing data', error)});
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

        // console.log(exercise);

        axios.post('http://localhost:5000/exercises/add', exercise)
            .then(res=> { console.log(res.data); })
            .catch(error=> { console.log('Error postiong data', error)});


        // window.location = '/';

    }

    render() {

        return (
            <div className="content-container">
                <div className="form-container">
                    <h3 className="form-title">Create New Exercise Log</h3>
                    <form onSubmit={this.handleSubmit} >
                        <div>
                            <label>Username: </label>
                            <select 
                                ref="userInput"
                                required
                                value={this.state.username}
                                onChange={this.handleUsernameChange}>
                                { this.state.users.map( user => 
                                <option 
                                    key={user} 
                                    value={user}>
                                        {user}

                                </option> ) }
                            </select>
                        </div>
                        <div>
                            <label>Description: </label>
                            <input
                                type="text"
                                value={this.state.description}
                                onChange={this.handleDescriptionChange} 
                            />
                        </div>
                        <div>
                            <label>Duration (in minutes): </label>
                            <input
                                type="text"
                                value={this.state.duration}
                                onChange={this.handleDurationChange} 
                            />
                        </div>
                        <div>
                            <label>Date: </label>
                            <div>
                                <DatePicker
                                    selected={this.state.date}
                                    onChange={this.handleDateChange} 
                                />
                            </div>
                        </div>
                        <div>
                            <input type="submit" value="Create Exercise Log" />
                        </div>
                    </form>
                </div>
            </div>
        )
    }


}

export default LogExercise

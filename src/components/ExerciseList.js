import React, { Component } from 'react';
import Exercise from './Exercise';
import axios from 'axios';

class ExerciseList extends Component {
 
    state = {
        exercises: []
    };

    componentDidMount() {
        axios.get('http://localhost:5000/exercises/')
            .then(res=>{
                this.setState({
                    exercises: res.data
                });
            })
            .catch(error=> { console.log('Error fetching and parsing data', error)});
    }

    deleteExercise = (id) => {
        axios.delete(`http://localhost:5000/exercises/${id}`)
            .then(res => {
                console.log(res.data)
            });

        this.setState(prevState => {
            return {
                exercises: prevState.exercises.filter(item => item._id !== id)
            };
        });
            
            
    }

    render() {
        return (
            <div>
                <h3> Logged Exercises </h3>
                <table>
                    <thead>
                        <tr>
                            <th>Username</th>
                            <th>Description</th>
                            <th>Duration</th>
                            <th>Date</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                    { this.state.exercises.map(currentexercise => 
                        <Exercise 
                            exercise={currentexercise} 
                            deleteExercise={this.deleteExercise} 
                            key={currentexercise._id} />
                    )}
                    </tbody>
                </table>

            </div>
        )    
    }
    
}

export default ExerciseList

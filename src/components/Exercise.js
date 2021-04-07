import React from 'react';
import {Link} from 'react-router-dom';

const Exercise = (props) => {
    return (
            <tr>
                <td data-label="Username"> {props.exercise.username} </td>
                <td data-label="Description"> {props.exercise.description} </td>
                <td data-label="Duration"> {props.exercise.duration} </td>
                <td data-label="Date"> {props.exercise.date.substring(0,10)} </td>
                <td data-label="Actions">
                     <Link to={`/edit/${props.exercise._id}`} >edit</Link> | <button onClick={()=> {props.deleteExercise(props.exercise._id)}} > delete </button>
                </td>
            </tr>
            
    )
}

export default Exercise

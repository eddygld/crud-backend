import React, {Component} from 'react'

class CreateUser extends Component {
    state = {
        username: '',
    }


    handleUsernameChange = (e) => {
        this.setState({
            username: e.target.value
        });
    }


    handleSubmit = (e) => {
        e.preventDefault();

        const user = {
            username: this.state.username,
        }
        
        console.log(user);
        this.setState({username: ''})


    }

    render() {

        return (
            <div className="content-container">
                <div className="form-container">
                    <h3 className="form-title">Create New User</h3>
                    <form onSubmit={this.handleSubmit} >
                        <div>
                            <label>Username: </label>
                            <input
                                type="text"
                                value={this.state.username}
                                onChange={this.handleUsernameChange} 
                            />
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

export default CreateUser

const React = require('react');

class Edit extends React.Component {
    render() {
        const { _id, title, comment, issueStatus} = this.props.todo;
        return (
            <div>
                <h1>Edit ToDos Page</h1>
                {/* url - /todos/id_of_todo? parameter to indicate the request */}
                <form action={`/todos/${_id}?_method=PUT`} method="POST">
                    Title: <input type="text" name="title" defaultValue={title}/> <br/>
                    <br/>
                    <input type="submit" name="" value="Submit ToDo Changes"/>
                </form>
            </div>
        )
    }
}

module.exports = Edit;
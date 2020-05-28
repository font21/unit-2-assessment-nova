const React = require('react');

class Show extends React.Component {
    render() {
        // deStructuring
        const { title, comment, issueStatus } = this.props.todo;
        return (
            <div>
                <h1>ToDo</h1>
                <p>{title}</p>
            </div>
        )
    }
}

module.exports = Show;
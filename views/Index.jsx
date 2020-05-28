const React = require('react');

class Index extends React.Component {
    render() {
        const { todos } = this.props;
        return (
            <div>
                <h1>All ToDos Index Page</h1>
                <nav>
                    <a href="/todos/new">Create a New ToDo (but we both know that this won't mitigate avoidance behavior)</a>
                </nav>
                <ul>
                    {
                        todos.map((todo, i) => {
                            return (
                                <li>
                                    <a href={`/todos/${todo._id}`}>{todo.title}</a> 
                                    <form action={`/todos/${todo._id}?_method=DELETE`} method="POST">
                                        <input type="submit" value="delete"/>
                                    </form>
                                    {/* Create a link to the edit route /posts/id_of_post/edit */}
                                    <a href={`/todos/${todo._id}/edit`}>Update ToDo</a>
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
        )
    }
}

module.exports = Index;
const React = require('react');

class New extends React.Component {
    render() {
      return (
        	<div>
            	<h1>New ToDo for feedback Page</h1>
            		<form action="/" method="POST">
                		Title: <input type="text" name="title" /><br/>
                		<input type="submit" name="" value="Create ToDo"/>
            		</form>
			</div>);
		}
	}
  
module.exports = New;
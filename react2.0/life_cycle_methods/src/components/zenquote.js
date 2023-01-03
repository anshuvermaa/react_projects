import React from 'react';
import axios from 'axios';
import './zenquote.css';
class ZenQuote extends React.Component {
constructor(props) {
	super(props);

	// Initializing the state
	this.state = { quote: '' ,isLoaded:false};
}
componentDidMount() {

	// Changing the state at render time
	// is rendered
    axios.get("https://api.github.com/zen").then(response=>{
      //  console.log(response);
        // showing loader for 3 sec before loading our website
        setTimeout(function () {
            this.setState({ quote: response.data,
                isLoaded:true,
            
            });
            // bind with function
        }.bind(this),300)
    })
}
render() {
	return (
        <div>
          {    this.state.isLoaded ? (
            <div>
                <h1>Always remember...</h1>
		        <p>{this.state.quote}</p>

	           </div>

              ):
              
       (   <div className="loader"></div>)
              }

       
	</div>
   
	);
}
}
export default ZenQuote;

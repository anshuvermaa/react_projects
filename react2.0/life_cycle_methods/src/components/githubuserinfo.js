import React,{Component} from 'react';
import axios from 'axios';

class GithubUserInfo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            imgUrl:'',
            name:'',

        };
    }
   async componentDidMount(){
       const url=`https://api.github.com/users/${this.props.username}`;
       let response=await axios.get(url);
       console.log(response);
       let data=response.data;
       this.setState({imgUrl:data.avatar_url,name:data.login});


   }
    render() {
        return (
            <div>
                <h1>Github user info</h1>
                <h3>{this.state.name}</h3>
                <img src={this.state.imgUrl} alt={this.state.name} />
            </div>
        )
    }
}
export default GithubUserInfo;
import React,{Component} from 'react';
import { choice } from './helper';
import Coin from './coin';


class CoinCont extends Component {
    static defaultProps = {
        
    coins:[
        {sides:'heads',imgSrc:'https://tinyurl.com/react-coin-heads-jpg3'},
        {sides:'tails',imgSrc:'https://tinyurl.com/react-coin-tails-jpg1'}
    ]

    };
    constructor(props) {
        super(props);
        this.state = {
            currCoin: 'null',
            nFlip:0,
            nHeads:0,
            nTails:0,

        };
        this.handleClick = this.handleClick.bind(this);
    }

    flipcoin(){
        const newCoin=this.props.coins[Math.floor(Math.random()*this.props.coins.length)];
        this.setState(st=>{
            return {
                currCoin:newCoin,
                nFlip:st.nFlip + 1,
                nHeads:st.nHeads + (newCoin.sides==='heads'?1:0),
                nTails:st.nTails + (newCoin.sides==='tails'?1:0),
            }
        })
    }
 


 handleClick(){
   this.flipcoin();
    }
    render() {
        return (
            <div className="coincontainer">
            <h2>Lets flip a coin!</h2>
            <Coin info={this.state.currCoin}/>
            <button onClick={this.handleClick}>Flip Me!</button>
           <p>
            Out of {this.state.nFlip} flips, there have been {this.state.nHeads} {" "}
            heads and  {this.state.nTails}  tails
           </p>
            </div>
        )
    }
}


export default CoinCont;
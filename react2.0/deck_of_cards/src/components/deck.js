import React,{Component} from 'react';
import axios from 'axios';
import Card from './cards';
import './deck.css';
const API_BASE_URL="https://deckofcardsapi.com/api/deck";
class Deck extends Component {
    constructor(props) {
        super(props);
        this.state = {deck:null,drawn:[]};
        this.getCard=this.getCard.bind(this)
    }

    async componentDidMount() {
       let deck=await axios.get(`${API_BASE_URL}/new/shuffle/`);
       let data=deck.data;
       this.setState({deck:data});
    }
   async getCard(){
        let id=this.state.deck.deck_id;
        try{
            let  cardUrl=`${API_BASE_URL}/${id}/draw`;
            let cardRes=await axios.get(cardUrl);
           if(!cardRes.data.success){
            throw new Error("No card left in deck");
           }

           let card=cardRes.data.cards[0];
           this.setState(st=>({
               drawn:[
                   ...st.drawn,
                   {
                       id:card.code,
                       image: card.image,
                       name:`${card.value} of ${card.suit}`
                   }
               ]
           }))
        }catch(e){

        }
        
        //  make request using get id
          
        // set state using new card info from api
    }
    render() {
        let Cards=this.state.drawn.map(c=>(
            <Card name={c.name} image={c.image} />
        ))
        return (
        <div className="deck">
               <h1 className="deck-title">🔷Card dealer🔷</h1>
               <h2 className="deck-title subtitle">🔷A little demo made with React🔷</h2>
               <button className="deck-btn" onClick={this.getCard}>Get cards!</button>
               <div className="deck-card">
               {Cards}

               </div>
        </div>
        )
    }
}
export default Deck;
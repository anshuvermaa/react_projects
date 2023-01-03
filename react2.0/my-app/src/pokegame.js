import React,{Component} from 'react';
import Pokedex from './pokedex/pokedex';
import './pokegame.css';

class Pokegame extends Component{

    constructor(){
        super();
        this.state = {
            pokemon:[
                {id:4,name: 'Charmender',type:'Fire',base_experience:62},
                {id:7,name: 'Squirtle',type:'Water',base_experience:63},
                {id:11,name: 'Metapod',type:'Bug',base_experience:72},
                {id:12,name: 'Buterfree',type:'Flying',base_experience:178},
                {id:25,name: 'Pikachu',type:'Electric',base_experience:112},
                {id:39,name: 'Jiggleypuff',type:'Normal',base_experience:95},
                {id:94,name: 'Gengar',type:'Poison',base_experience:225},
                {id:133,name: 'Eevee',type:'Normal',base_experience:65}
            ]


        }
    };
    render(){
        let hand1=[];
        let hand2=[...this.state.pokemon];
        while(hand1.length< hand2.length){
            let randonIndex=Math.floor((Math.random() * hand2.length));
            let randomPokemon=hand2.splice(randonIndex,1)[0];
            hand1.push(randomPokemon);
        }
        let exp1=hand1.reduce((exp,hand1)=> exp+hand1.base_experience,0);
        let exp2=hand2.reduce((exp,hand2)=> exp+hand2.base_experience,0);
        return (
            <div className="Poke-game">
             <Pokedex pokemon={hand1} exp={exp1} isWinner={exp1>exp2}/>
             <Pokedex pokemon={hand2} exp={exp2} isWinner={exp2>exp1} />
            </div>

        );
    }
}


export default Pokegame;
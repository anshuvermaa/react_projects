import  React,{Component} from 'react';
import Pokecard from '../pokecard/pokecard';
import './pokedex.css';

class Pokedex extends Component{
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
       
          
        };
    
      }
    render() {
        let title;
        if(this.props.isWinner){
            title=<h1 className="Pokedex-winner">Winning Hand</h1>;
        }else{
            title=<h1 className="Pokedex-loser">Losing Hand</h1>
        }
      
        return (
         <div className="Pokedex">
         {title}
         <h4>Total expirience: {this.props.exp}</h4>
        
        <div className="Pokedex-cards">
            {
                this.props.pokemon.map((p)=>(
                    <Pokecard id={p.id} name={p.name} type={p.type} exp={p.base_experience} />
                ))
            }
         

        </div>
         </div>

        );
    }
}

export default Pokedex;
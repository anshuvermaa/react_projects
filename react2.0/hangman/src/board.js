import React,{Component} from 'react';
import Cell from './cell'
import './board.css';

class Board extends Component {
    static defaultProps = {
        nrows:5,
        ncols:5,
        chanceLightStartsOn:0.25,
    }
    constructor(props){
        super(props);
        // setting initial state
        this.state = {
            hasWon: false,
            board:this.createBoard()

        };

    }
// create a board nrows high/ncols wide , each cell randmonlly lit and unlit


    createBoard(){
        let board =[];

        // create array-of-array of true and false value

        for(let y=0;y<this.props.nrows;y++){
            let row=[];
            for(let x=0;x<this.props.ncols;x++){
                row.push(Math.random()<this.props.chanceLightStartsOn);

            }
            board.push(row);
        }
        return board;
    }
// handle changing a cell : update board and determine if winner
    flipCellsAround(coord){
        let {ncols,nrows}=this.props;
        let board=this.state.board;
        let[y,x]=coord.split('-').map(Number);
        function flipCell(y,x){
            // if this coord is actually on the board flip it
            if (x>=0 && x<ncols && y>=0 && y<nrows){
                board[y][x]= !board[y][x];
            }
            
        }
        // flip initial cell
        flipCell(y,x);     // flip initial cell
        flipCell(y,x-1);    // flip left
        flipCell(y,x+1);    // flip right
        flipCell(y-1,x);    // flip belew
        flipCell(y+1,x);    // flip above
        //TODO: flip this cell and cells arround it
        
        //win when evey cell is turned off and
        // TODO: determine is the game has been won
        
        let hasWon=board.every(row=> row.every(cell=> !cell));    // this means every cell in every row should be false


        this.setState({ board:board,hasWon:hasWon});
    }
//*** Render game board and winning massage

    render(){
                if(this.state.hasWon){
        return ( <div className="board-title">
                       <div className="winner">
                         <span className="neon-orange">You</span>
                         <span className="neon-blue">Won</span>
                      </div>
               </div>)
        }
// if the game is won , just show a winnning msg & render nothing else
// ToDO 
// make baord table
// TODO
       let tblBoard=[];

       for(let y=0;y<this.props.nrows;y++){
        let row=[];
        for(let x=0;x<this.props.ncols;x++){
            let coord=`${y}-${x}`
            row.push(<Cell key={coord}
            isLit={this.state.board[y][x]} 
            flipCellsAroundMe={()=> this.flipCellsAround(coord)}/>);

        }
        tblBoard.push(<tr key={y}>{row}</tr>);  

    }
        return (
            <div>
                  <div className="board-title">
                       <div className="neon-orange">Lights</div>
                      <div className="neon-blue">Outs</div>
                  </div>

         <table className="board">
            <tbody>

            {tblBoard}

            </tbody>
         </table>
            </div>
        )
    }
}

export default Board;
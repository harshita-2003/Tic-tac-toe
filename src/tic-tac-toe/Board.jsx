import React,{useState} from "react";
import Square from "./square";


function Board(){
    const [state,setstate] = useState(Array(9).fill(null));
    const [isXturn,setXturn] = useState(true);
    
    function checkwinner(){
        const logic = [
            [0,1,2],
            [3,4,5],
            [6,7,8],
            [0,3,6],
            [1,4,7],
            [2,5,8],
            [0,4,8],
            [2,4,6]
        ]
        for (let i of logic) {
            const [a,b,c] = i;
            if (state[a]!=null && state[a]===state[b] && state[a]===state[c]) {
                return state[a];
            }
        }
        return false;
    }
    
    let iswinner = checkwinner();

    function handle(index){
        const copy= [...state];
        copy[index] = isXturn ? "X" : "0";
        setstate(copy);
        setXturn(!isXturn);
    }
    function playagain(){
        setstate(Array(9).fill(null))
    }
    return(
        <div className="board-container">
            { iswinner ? <div className="result">Congratulations!!!<br></br><br></br>{iswinner} won the Game<br></br><button className="btn" onClick={()=>playagain()}>Play Again</button></div> :
             <>
             <h3 className="heading">Your Turn : {isXturn ? "X" : "0"}</h3>
            <div className="board-row">
                <Square onClick={()=>handle(0)} value={state[0]}/>
                <Square onClick={()=>handle(1)} value={state[1]}/>
                <Square onClick={()=>handle(2)} value={state[2]}/>
            </div>
            <div className="board-row">
                <Square onClick={()=>handle(3)} value={state[3]}/>
                <Square onClick={()=>handle(4)} value={state[4]}/>
                <Square onClick={()=>handle(5)} value={state[5]}/>
            </div>
            <div className="board-row">
                <Square onClick={()=>handle(6)} value={state[6]}/>
                <Square onClick={()=>handle(7)} value={state[7]}/>
                <Square onClick={()=>handle(8)} value={state[8]}/>
            </div> 
            </> }
        </div> 
    )
}

export default Board;
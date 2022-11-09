import React from 'react'
import { useState,useEffect } from 'react';
import { Patterns } from '../Patterns';
import Square from './Square';

function Board() {
    const [board, setBoard] = useState(["","","","","","","","",""]);

    const [player, setPlayer] = useState("X");
  
    const [result, setResult] = useState({winner:"none",state:"none"});
  
    useEffect(() => {
      checkWin();
      checkTied();
    }, [board]);
  
    useEffect(() => {
      if(result.state != "none"){
        alert(`Game finished!,Player : ${result.winner},Result: ${result.state}`);
      }
    }, [result])
    
    
    const chooseSquare = (sqaure) =>{
      setBoard(board.map((val,idx)=>{
        if(idx === sqaure && val===""){
          return player;
        }
        return val;
      }))
      if(player == "X"){
        setPlayer("0");
      }else{
        setPlayer("X");
      }
    };
    const checkWin = () =>{
      Patterns.forEach((currPattern) =>{
        const one = board[currPattern[0]];
        const two = board[currPattern[1]];
        const three = board[currPattern[2]];
        if(one == two  && two == three && one != ""){
          setResult({winner:one,state:"won"});
          restartGame();
        }
      })
    }
    const checkTied = () =>{
      let empty=false; 
      board.forEach((sqaure) =>{
        if(sqaure == ""){
          empty = true;
          return;
        }
      })
      if(!empty){
        setResult({winner:"No One",state:"Tied"});
        restartGame();
      }
    }
    const restartGame = () =>{
      setBoard(["","","","","","","","",""]);
      setPlayer("X");
    }
    return (
      <div className="App">
        
        <div className='board'>
          <div className='row'>
          
          <Square val={board[0]} chooseSquare={()=>chooseSquare(0)}></Square>
          <Square val={board[1]} chooseSquare={()=>chooseSquare(1)}></Square>
          <Square val={board[2]} chooseSquare={()=>chooseSquare(2)}></Square>
          </div>
          <div className='row'>
          <Square val={board[3]} chooseSquare={()=>chooseSquare(3)}></Square>
          <Square val={board[4]} chooseSquare={()=>chooseSquare(4)}></Square>
          <Square val={board[5]} chooseSquare={()=>chooseSquare(5)}></Square>
          </div>
          <div className='row'>
          <Square val={board[6]} chooseSquare={()=>chooseSquare(6)}></Square>
          <Square val={board[7]} chooseSquare={()=>chooseSquare(7)}></Square>
          <Square val={board[8]} chooseSquare={()=>chooseSquare(8)}></Square>
  
          </div>
        </div>
      </div>
    );
}

export default Board
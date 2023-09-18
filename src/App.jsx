import { useState } from 'react'

function Game() {
  let [b, bChange] = useState(0);
  let [color, changeTheColor] = useState("white");
  let [chosenColor, chooseColor] = useState("");
  let [colorChange1, changeColor1] = useState("");
  let [colorChange2, changeColor2] = useState("");
  let [colorChange3, changeColor3] = useState("");
  let [colorChange4, changeColor4] = useState("");
  let [colorChange5, changeColor5] = useState("");
  let [colorChange6, changeColor6] = useState("");
  let [colorChange7, changeColor7] = useState("");
  let [colorChange8, changeColor8] = useState("");
  let [colorChange9, changeColor9] = useState("");
  let picker = getRandomInt(9);

  function getRandomInt(max) {
    return Math.floor(Math.random() * max)
  }

  function toggleColor(button) {
    if (button !== b+1){
      switch (button) {
        case 1:
          changeColor1(colorChange1 = 'grey-color')
          break;
        case 2:
          changeColor2(colorChange2 = 'grey-color')
          break;
        case 3:
          changeColor3(colorChange3 = 'grey-color')
          break;
        case 4:
          changeColor4(colorChange4 = 'grey-color')
          break;
        case 5:
          changeColor5(colorChange5 = 'grey-color')
          break;
        case 6:
          changeColor6(colorChange6 = 'grey-color')
          break;
        case 7:
          changeColor7(colorChange7 = 'grey-color')
          break;
        case 8:
          changeColor8(colorChange8 = 'grey-color')
          break;
        case 9:
          changeColor9(colorChange9 = 'grey-color')
          break;
      }
    } else {
      switch (button) {
        case 1:
          changeColor1(colorChange1 = color +'-color')
          break;
        case 2:
          changeColor2(colorChange2 = color +'-color')
          break;
        case 3:
          changeColor3(colorChange3 = color +'-color')
          break;
        case 4:
          changeColor4(colorChange4 = color +'-color')
          break;
        case 5:
          changeColor5(colorChange5 = color +'-color')
          break;
        case 6:
          changeColor6(colorChange6 = color +'-color')
          break;
        case 7:
          changeColor7(colorChange7 = color +'-color')
          break;
        case 8:
          changeColor8(colorChange8 = color +'-color')
          break;
        case 9:
          changeColor9(colorChange9 = color +'-color')
          break;
      }
    }
    
  }

  function reset() {
    changeColor1(colorChange1='white-color')
    changeColor2(colorChange2='white-color')
    changeColor3(colorChange3='white-color')
    changeColor4(colorChange4='white-color')
    changeColor5(colorChange5='white-color')
    changeColor6(colorChange6='white-color')
    changeColor7(colorChange7='white-color')
    changeColor8(colorChange8='white-color')
    changeColor9(colorChange9='white-color')
    picker = getRandomInt(9);
    bChange(b = picker)

  }
  return (
    <body>
      <h1>Charles and Olympia's Color Game</h1>
      <label>Pick a color: </label>
      <input value={chosenColor} onChange={e => chooseColor(e.target.value)}></input>
      <div className='row'>
      <button className='submit-button' onClick={()=>changeTheColor(color = chosenColor) + bChange(b = picker)}>Submit</button>
      <button className='reset-button' onClick={()=>reset()}>Reset</button>
        </div>
      <div className='row'>
        <button className={`${colorChange1} game-button`} onClick={()=>toggleColor(1)}></button>
        <button className={`${colorChange2} game-button`} onClick={()=>toggleColor(2)}></button>
        <button className={`${colorChange3} game-button`} onClick={()=>toggleColor(3)}></button>
      </div>
      <div className='row'>
      <button className={`${colorChange4} game-button`} onClick={()=>toggleColor(4)}></button>
      <button className={`${colorChange5} game-button`} onClick={()=>toggleColor(5)}></button>
      <button className={`${colorChange6} game-button`} onClick={()=>toggleColor(6)}></button>
      </div>
      <div className='row'>
      <button className={`${colorChange7} game-button`} onClick={()=>toggleColor(7)}></button>
      <button className={`${colorChange8} game-button`} onClick={()=>toggleColor(8)}></button>
      <button className={`${colorChange9} game-button`} onClick={()=>toggleColor(9)}></button>
      </div>
    </body>
    
  )
}

export default Game;

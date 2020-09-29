import React, {useState, useEffect} from 'react'
import './ShowQuestions.css'

const ShowQuestions = ({category, difficulty, question, correct_answer, incorrect_answers,next})=>{

    
    const [ checkCorrect, setCheckCorrect ] = useState(
        {
            default: "white",
            correct: "grenn",
            wrong: "red"
        }
    )
    const [ points, setPoints ] = useState(0)

    let incorrects = incorrect_answers.map(res => res)
    let options = []
    let questions = []
    
    function shuffle(array) {
        var m = array.length
        var t
        var i
      
        // While there remain elements to shuffle…
        while (m) {
      
          // Pick a remaining element…
          i = Math.floor(Math.random() * m--);
      
          // And swap it with the current element.
          t = array[m];
          array[m] = array[i];
          array[i] = t;
        }
      
        return array;
      }
    
      if(incorrects.length === 3){
        
        options[0] = incorrects[0]
        options[1] = incorrects[1]
        options[2] = incorrects[2]
        options[3] = correct_answer
        
        questions = shuffle(options)
    }else{
        
        options[0] = incorrects[0]
        options[1] = correct_answer
        
        questions = shuffle(options)
    }
    
    useEffect(() => {
        setCheckCorrect(false)
    },[next])
  
    return (
        <div className="question_container" >
            <div className="question__content">
                <div className="question" style={{backgroundColor : checkCorrect ? "green" : "white"}}>
                    <h1>{question}</h1>
                    <ul>
                        {
                            questions.map((res, key) => (
                                    <li 
                                        key={key} 
                                        onClick={() => res === correct_answer ?  setPoints(points + 1) & next(): next() } >
                                        {res}
                                    </li>
                                    )
                                )
                        
                        }
                    </ul>
                    <div>
                        <p>Acertos: <span>{points}</span></p>
                    </div>
                    <div className="question__options">
                      
                        <div className="queston__options__action">
                            <button onClick={next}>Proxima</button>
                        </div>
                    </div>
                </div>
               <div className="question__info">
                    <h3>{category}</h3>
                    <h3>{difficulty}</h3>
                </div>
            </div>
        </div>
    )
}

export default ShowQuestions
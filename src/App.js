import React,{ useEffect, useState } from 'react';
import OpenTriviaDB from './services/OpenTriviaDB'
import ShowQuestions from './components/showQuestions/ShowQuestions'
import './App.css';


function App() {

  const [quizData, setQuizData] = useState([])
  
  useEffect(() => {
    loadData()     
  }, [])

  async function loadData(){
    const  quiz =  await OpenTriviaDB(1)  
    setQuizData(quiz.results) 
  }
  
  return (
    <div className="App">
      
      {quizData.map( (response , key)=>(
        <ShowQuestions 
          key={key}
          category={response.category} 
          difficulty={response.difficulty}
          question={response.question}
          correct_answer={response.correct_answer}
          incorrect_answers={response.incorrect_answers}
          next={loadData}
        />  
      ))}
     
    </div>
  );
}

export default App;

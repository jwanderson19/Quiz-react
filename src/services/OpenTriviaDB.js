
export default async function fetchQuiz(size){
    const response = await fetch(`https://opentdb.com/api.php?amount=${size}`)
    const json =  await response.json()
    
    return json
}

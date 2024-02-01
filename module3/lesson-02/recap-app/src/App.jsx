import { v4 as uuidv4 } from 'uuid';
import ReactPlayer from 'react-player'
import Greeting from './components/Greeting'
import StudentCard from './components/StudentCard'
import NavigationBar from './components/NavigationBar'
import './App.css'

function App() {
  const people = [
    {_id: 'ujiuhsedihse', firstName: 'Julie' , lastName: 'Nommacher'},
    {_id: 'nkfnskfd', firstName: 'John' , lastName: 'Doe'},
    {_id: 'iohoihi', firstName: 'Michael' , lastName: 'Jordan'},
    {_id: 'iohoujhoi', firstName: 'Michael' , lastName: 'Jackson'}
  ] 

  const students = [
              {_id: 'jdlihsedki', name: 'James Brown', week: 4, info: {city: 'London', course: 'Web Development'}},
              {_id: 'udhkhaksdh', name: 'Steve McCurry', week: 5, info: {city: 'Barcelona', course: 'Data Analytics'}}
            ]

  return (
    <div className="App">
      <NavigationBar />
      {people.map((person)=> {
        return <Greeting key={uuidv4()} firstName={person.firstName} lastName={person.lastName} />
      })}

      {students.map((student)=>{
        return <StudentCard key={uuidv4()} name={student.name} week={student.week} info={student.info} />
      })}
      <ReactPlayer url='https://www.youtube.com/watch?v=LXb3EKWsInQ' />
    </div>
  )
}

export default App

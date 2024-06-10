
import './App.css';
import Card from './components/Card'
function App() {
  // let newArr=[1,2,3,4]
  return (
    <>
    <h1 className='text-3xl bg-green-500 p-3
     rounded-md'>React with TailwindCss</h1>
     <Card username="Vansh" post="Student" />
     <Card username="Yogesh" post="Teacher" />
     {/* <Card username="Yogesh" post={newArr} /> */}
     <Card />
     </>
  )
}

export default App;

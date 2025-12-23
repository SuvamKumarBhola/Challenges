// import DynamicList from "./Components/Challenge1/DynamicList"
import Alert from "./Components/Challenge2/Alert"


function App() {

  return (
    <>
      {/* Challenge_1 : Dynamic List Manager */}
      <DynamicList/>

      {/* Challenge_2 : AutoAlert */}
      <Alert type={"success"} message={"Welcome To Our Website"} duration={5000}/>

    </>
  )
}

export default App

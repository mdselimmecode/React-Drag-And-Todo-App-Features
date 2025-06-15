import DragAndDrop from "./assets/components/DragAndDrop"


function App() {

  const initialData = {
    Todo: [
      "Design UI mockups",
      "Set up project repository",
      "Write unit test",
      "Integrate payment gateway"
    ],
    "In Progress": [
      "Development authentication",
      "Implement Authentication"
    ],
    Completed: [
      "Set up CI/CD pipeline",
      "Conduct code reviews",
      "Deploy initial version to staging"
    ]
  }

  return (
    <>
      <h1 className="text-center py-5 text-3xl font-extrabold">Drag And Drop</h1>
      <DragAndDrop initialState={initialData}></DragAndDrop>
    </>
  )
}

export default App

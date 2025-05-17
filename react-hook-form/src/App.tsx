// import { BasicForm } from "./features/basic/BasicForm";
// import BasicFormTwo from "./features/basic/BasicFormTwo";
import MediumForm from "./features/medium/MediumForm";

function App() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 ">
      <div className="flex flex-col items-center justify-center w-full max-w-2xl p-4 bg-gray-800 rounded-lg shadow-lg">
        <div>
          <h2 className="text-white">Mastering React Hook Form</h2>
        </div>
        <MediumForm />
      </div>
    </div>
  );
}

export default App;

import Header from "./components/ui/Header";
import Leftbar from "./components/ui/Leftbar";

function App() {
  return (
    <>
      <div className="min-h-screen bg-slate-50 text-slate-800">
        <Header />
        <div className="max-w-6xl mx-auto px-4 py-6 grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Leftbar />
        </div>
      </div>
    </>
  );
}

export default App;

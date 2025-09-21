import { QueryProvider } from "./providers/QueryProvider";
import Layout from "./components/Layout";

function App() {
  return (
    <div className="app">
    <QueryProvider>
      <Layout />
    </QueryProvider>
    </div>
  );
}

export default App;


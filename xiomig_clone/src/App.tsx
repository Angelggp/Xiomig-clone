import { QueryProvider } from "./providers/QueryProvider";
import Layout from "./components/layout";

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


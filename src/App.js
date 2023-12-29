import Router from "./Router";
import IndexProvider from "./Contexts";

function App() {
  return (
    <IndexProvider>
      <Router/>
    </IndexProvider>
  );
}

export default App;

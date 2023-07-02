import "./App.css";
import CakeView from "./features/cake/CakeView";
import IcecreamView from "./features/icecream/IcecreamView";
import { useSelector } from "react-redux";
function App() {
  const state = useSelector((state) => state.cakeReducer);
  return (
    <>
      <h4>GLOBAL: Number of cakes in store:{state.numOfCakes}</h4>
      <h1>React app powered by Redux (without ReduxToolkit)</h1>
      <CakeView />
      <br />
      <IcecreamView />
    </>
  );
}

export default App;

import { Provider } from "react-redux";
import { store } from "./src/app/store";
import IntroductionScreen from "./src/screens/Introduction";
import Overview from "./src/screens/Overview";

export default function App() {
  return (
    <Provider store={store}>
        {/* <IntroductionScreen /> */}
        <Overview/>
    </Provider>
  );
}


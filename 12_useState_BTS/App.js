// export default function App() {
//   return <div>Hello App</div>;
// }

// we can't directly add image so we import

import AppleCounter from "./components/AppleCounter";
import { Counter } from "./components/Counter";

const App = () => {
  return (
    <div>
      <Counter />
      {/* <AppleCounter /> */}
    </div>
  );
};

export default App;

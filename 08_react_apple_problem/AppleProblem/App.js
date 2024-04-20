// export default function App() {
//   return <div>Hello App</div>;
// }

// we can't directly add image so we import
import LeftArrow from "./assets/images/left-arrow.png";
import AppleCounter from "./components/AppleCounter";

const App = () => {
  return (
    <div>
      <AppleCounter />
    </div>
  );
};

export default App;

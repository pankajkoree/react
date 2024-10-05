import "../../src/app/globals.css";
import Footer from "./components/Footer";
import NavigationBar from "./components/NavigationBar";
import UserView from "./components/UserView";

export default function Home() {
  return (
    <>
      <NavigationBar />
      <UserView />
      <Footer />
    </>
  );
}

import { Header, Body } from "./sections";
import useCalculator from "./CalculatorContext";

const App = () => {

  const { theme } = useCalculator();

  return (
    <main className= {`${theme === "three" ? "bg-theme-three-main-bg" : theme === "two" ? "bg-theme-two-main-bg" : "bg-theme-one-main-bg"} max-container min-h-screen p-6 font-league grid place-items-center`}>
        <Header theme = {theme}/>
        <Body theme = {theme}/>
    </main>
  )
}

export default App 
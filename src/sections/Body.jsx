/* eslint-disable react/prop-types */
import Button from "../components/Button";
import OperationBtn from "../components/OperationBtn";
import useCalculator from "../CalculatorContext";

const Body = ({theme}) => {
    

    const numericalBtn = ["7", "8", "9", "4", "5", "6", "1", "2", "3"];
    const {setResult, setCalc, setOperation, deleteLast, resetCalc} = useCalculator();
    
    
  return (
    <section className={`fluid-width h-fit p-6 mt-6 rounded-lg ${theme === "three" ? "bg-theme-three-keypad-bg" : theme === "two" ? "bg-theme-two-keypad-bg" : "bg-theme-one-keypad-bg"} grid-complete gap-5`}>
        <div className="row-span-3 col-start-1 col-span-3 grid grid-rows-subgrid grid-cols-subgrid">
            {   
                numericalBtn.map((num) => {
                    return (
                        <Button 
                            key={num} 
                            value={num} 
                            handleAction = {setCalc}
                            theme = {theme}
                        />
                    )
                })
            }
        </div>
        <div className="col-start-1 col-span-4 row-start-4 row-span-1 grid grid-rows-subgrid grid-cols-subgrid">
            <OperationBtn value={"."} handleAction={setCalc} theme = {theme}/>
            <OperationBtn value={"0"} handleAction={setCalc} theme = {theme}/>
            <OperationBtn value={"/"} handleAction={setOperation} theme = {theme}/>
            <OperationBtn value={"*"} handleAction={setOperation} theme = {theme}/>
        </div>
        <div className="col-start-1 col-span-4 row-start-5 row-span-1 grid grid-rows-subgrid grid-cols-subgrid">
           <button className={`${theme === "three" ? "secondary-btn-theme-three" : theme === "two" ? "secondary-btn-theme-two" : "secondary-btn-theme-one"} col-start-1 col-span-2 fluid-typography capitalize`} value={"reset"} onClick={resetCalc}>reset</button>
           <button className={`teritary-btn-theme-${theme} col-start-3 col-span-2 fluid-typography capitalize`} value={"equals"} onClick={setResult}>=</button>
        </div>
        <div className="col-start-4 col-end-5 row-start-1 row-span-3 grid grid-rows-subgrid">
            {/* <Button value="del" type="secondary"/> */}
            <button className={`secondary-btn-theme-${theme} col-start-1 col-span-1 fluid-typography capitalize`} value={"del"} onClick={deleteLast}>del</button>
            <OperationBtn value="+" handleAction= {setOperation} theme = {theme}/>
            <OperationBtn value="-" handleAction= {setOperation} theme = {theme}/>
        </div>
    </section>
  )
}

export default Body
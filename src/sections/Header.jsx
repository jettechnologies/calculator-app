/* eslint-disable react/prop-types */
import useCalculator from "../CalculatorContext";

const Header = ({theme}) => {
  // range is a string
  const {result, calc, previousCalc, operation, setTheme} = useCalculator();
  // console.log(previousCalc + "previous calc value");
  // console.log(calc + "calc value");
  const range = theme === "three" ? "10" : theme === "two" ? "5" : "0";

  return(
    <section className={`${theme === "three" ? "text-theme-three-text-yellow" : theme === "two" ? "text-theme-two-text-yellow" : "text-white" } fluid-width grid grid-rows-2 grid-cols-2 gap-y-5 `}>
        <h4 className="fluid-typography row-span-1 self-center">calc</h4>
        <div className="col-start-2 col-end-3 row-span-1 w-fit flex justify-self-end">
            <p className="font-normal text-size-400 capitalize mr-4 self-center">theme</p>
            <div className="h-fit w-16">
              <p className="text-size-500 tracking-[1.1em] pl-0.5">123</p>
              <input type="range" className={`w-full py-2 px-1 ${theme === "three" ? "bg-theme-three-keypad-bg" : theme === "two" ? "bg-theme-two-keypad-bg" : "bg-theme-one-keypad-bg"} cursor-pointer rounded-md appearance-none disabled:opacity-50 disabled:pointer-events-none focus:outline-none
                [&::-webkit-slider-thumb]:w-4
                [&::-webkit-slider-thumb]:h-4
                [&::-webkit-slider-thumb]:-mt-0.5
                [&::-webkit-slider-thumb]:appearance-none
                [&::-webkit-slider-thumb]:bg-theme-one-toggle-knot-bg
                [&::-webkit-slider-thumb]:rounded-full
                [&::-webkit-slider-thumb]:transition-all
                [&::-webkit-slider-thumb]:duration-150
                [&::-webkit-slider-thumb]:ease-in-out
                [&::-webkit-slider-thumb]:dark:bg-slate-700

                [&::-moz-range-thumb]:w-2.5
                [&::-moz-range-thumb]:h-2.5
                [&::-moz-range-thumb]:appearance-none
                [&::-moz-range-thumb]:${theme === "three" ? "bg-theme-three-toggle-knot-bg" : theme === "two" ? "bg-theme-two-toggle-knot-bg" : "bg-theme-one-toggle-knot-bg"}
                [&::-moz-range-thumb]:border-4
                [&::-moz-range-thumb]:border-blue-600
                [&::-moz-range-thumb]:rounded-full
                [&::-moz-range-thumb]:transition-all
                [&::-moz-range-thumb]:duration-150
                [&::-moz-range-thumb]:ease-in-out

                [&::-webkit-slider-runnable-track]:w-full
                [&::-webkit-slider-runnable-track]:rounded-full
                [&::-webkit-slider-runnable-track]:dark:bg-gray-700

                [&::-moz-range-track]:w-full
                [&::-moz-range-track]:rounded-full`} id="steps-range-slider-usage" min="0" value={range} max="10" step="5"
                onChange={(e) => {setTheme(e.target.value)}}
              />
            </div>
        </div>
        <div className={`${theme === "three" ? "bg-theme-three-screen-bg text-theme-three-text-yellow" : theme === "two" ? "bg-theme-two-screen-bg text-theme-two-text-yellow" : "bg-theme-one-screen-bg text-white"} row-span-1 col-span-2 py-6 px-6 rounded-lg`}>
            <p className="fluid-typography text-right"><span className="text-size-400 mr-4">{previousCalc !== "" && `${previousCalc} ${operation}`}</span>{calc !== "" ? calc : result !== "" ? result : "0"}</p>
        </div>
    </section>
  )
}

export default Header
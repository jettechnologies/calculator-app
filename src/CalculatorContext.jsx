/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */
import { createContext, useContext, useReducer, useCallback } from "react";
import calculatorReducer, { intialState, ACTIONS } from "./CalculatorReducer"; 

const CalculatorContext = createContext();

export const CalculatorProvider = ({children}) =>{

    const [state, dispatch] = useReducer(calculatorReducer, intialState);

    const setCalc = useCallback((value) =>{

        const operators = ["/", "*", "+", "-"];

        if(
                operators.includes(value) && state.calc === "" ||
                operators.includes(value) && operators.includes(state.calc.slice(-1))
            ){
                return
            }
        
            const payload = state.calc + value;
            dispatch({
                type: ACTIONS.ADD_DIGIT,
                payload: {value: payload}
            })
    }, [state.calc]);

    const setOperation = useCallback((value) =>{

        dispatch({
            type: ACTIONS.SET_OPERATION,
            payload: {value: value}
        });

    }, []);

    const setResult = useCallback(() =>{
        const calc = state.calc,
              operation = state.operation,
              previousCalc = state.previousCalc;

        
        dispatch({
            type: ACTIONS.SET_RESULT,
            payload: {value: {calc, operation, previousCalc}}
        });


    }, [state.calc, state.operation, state.previousCalc]);


const deleteLast = useCallback(() =>{

        const calc = state.calc, result = state.result;
        let value;

        if(calc === "" && result === "") return;

        if(calc !== ""){
            value = calc.slice(0, -1);

            dispatch({
                type: ACTIONS.ADD_DIGIT,	
                payload: {value: value}
            })
        }
        else if(result !== ""){
            value = result.slice(0, -1);
            console.log("result isnt empty", value)

            dispatch({
                type: ACTIONS.SET_RESULT,	
                payload: {value: value}
            })
        }
    }, [state.calc, state.result]);

    const resetCalc = useCallback(() =>{

        dispatch({
            type: ACTIONS.SET_RESULT,	
            payload: ""
        })

        dispatch({
            type: ACTIONS.ADD_DIGIT,
            payload: ""
        })

    }, []);

    const setTheme = useCallback((value) =>{
        const payLoad = value === "5" ? "two" :
                        value === "10" ? "three" : "one";
        dispatch({
            type: ACTIONS.SET_THEME,
            payload: payLoad 
        });

    }, []);


    const value = {
        theme: state.theme,
        calc: state.calc,
        result: state.result,
        previousCalc: state.previousCalc,
        operation: state.operation,
        setCalc,
        setOperation,
        setResult,
        setTheme,
        deleteLast,
        resetCalc,
    }

   

    return <CalculatorContext.Provider value={value}>{children}</CalculatorContext.Provider>;

}

const useCalculator = () => {
    const context = useContext(CalculatorContext);
  
    if (context === undefined) {
      throw new Error("useCalculator must be used within CalculatorContext");
    }
    
        return context;
    };
  
export default useCalculator;
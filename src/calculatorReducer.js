export const intialState = {
    result: "",
    previousCalc: "",
    calc: "",
    operation: "",
    theme: "one",
}

export const ACTIONS = {
    SET_THEME: "SET_THEME",
    SET_RESULT: "SET_RESULT",
    ADD_DIGIT: "ADD_DIGIT",
    SET_PREV: "SET_PREV",
    SET_PREV_RESULT: "SET_PREV_RESULT",
    SET_OPERATION: "SET_OPERATION",
}

function evaluate({ calc, previousCalc, operation }) {
    const prev = parseFloat(previousCalc)
    const current = parseFloat(calc)
    if (isNaN(prev) || isNaN(current)) return ""
    let computation = ""

    switch (operation) {
      case "+":
        computation = prev + current
        break
      case "-":
        computation = prev - current
        break
      case "*":
        computation = prev * current
        break
      case "/":
        computation = prev / current
        break
    }  
    return computation.toString()
}

const calculatorReducer = (state, action) =>{
    const type = action.type, 
          payload = action.payload;

    switch(type){
        case ACTIONS.SET_THEME: 
            return {...state, theme: payload}
        case ACTIONS.SET_RESULT:
            if (
                state.operation === "" ||
                state.calc === "" ||
                state.previousCalc === ""
              ) {
                return state
              }
        
              return {
                ...state,
                previousCalc: "",
                operation: "",
                calc: "",
                result: evaluate(payload.value)
              }

        case ACTIONS.ADD_DIGIT:
            return {...state, calc: payload.value}
        case ACTIONS.SET_PREV_RESULT:
            return {...state, prevResult: payload}
        case ACTIONS.SET_OPERATION: 
        if (state.calc === "" && state.previousCalc === "") {
            return state
          }
    
          if (state.calc === "") {
            return {
              ...state,
              operation: payload.value,
            }
          }
    
          if (state.previousCalc === "") {
            return {
              ...state,
              operation: payload.value,
              previousCalc: state.calc,
              calc: "",
            }
    
        }

          return {
            ...state,
            previousCalc: evaluate(state),
            operation: payload.value,
            calc: "",
          }
        default:
            throw new Error(`No case for type ${type} found in calculatorReducer.`);
    }
}

export default calculatorReducer;
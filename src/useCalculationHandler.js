import { useMemo } from 'react';

function useCalculationHandler(calc, initialResult) {
    const handleCalculation = useMemo(() => {
        const regex = /^\d+(\.\d{0,4})?[-+*/]\d+(\.\d{0,4})?$/;
        const operators = ["+", "-", "*", "/"];
        // let result= "", resultExp = "";

        // Check if the calculation is valid and the state should be updated
        if (calc !== "" && !operators.includes(calc.slice(-1))) {
            if (regex.test(calc) && initialResult.resultExp === "") {
                console.log("Normal Calculation")
                return eval(calc).toString();
            } else if (regex.test(calc) && calc.includes(initialResult.resultExp)) {
                console.log("Advanced Calculation")
                const s = initialResult.resultExp.length;
                const expTruncated = calc.substr(s);
                return eval(initialResult.result + expTruncated).toString();
            }
        }

        // Return the result from initialResult if no calculation is needed
        console.log(initialResult.result);
        return initialResult.result;
    }, [calc, initialResult]);

    return handleCalculation;
}

export default useCalculationHandler;

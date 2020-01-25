/* eslint-disable */

// main function that runs a code snippet provided as a `string`
var runCode = (code, problem) => {
    let {testCases, functionName} = problem;
    let inputs = getInputs(testCases);
    let actualOutputs;

    try {
        actualOutputs = getActualOutputs(code, inputs, functionName);
    } catch (e) {
        console.log(e);
        return {
            error: e.toString()
        }
    }

    let expectedOutputs = getExpectedOutputs(testCases);

    let count = 0;
    let errors = [];

    for (let i in testCases) {
        if(actualOutputs[i] == expectedOutputs[i]) {
            count++;
        } else {
            errors.push({
                input: inputs[i],
                expectedOutput: expectedOutputs[i],
                actualOutput: actualOutputs[i]
            });
        }
    }

    return {
        numTestCasesPassed: count,
        numTestCasesTotal: testCases.length,
        errors
    }
}

var getInputs = (testCases) => testCases.map(testCase => testCase.input);
var getExpectedOutputs = (testCases) => testCases.map(testCase => testCase.output);

let getActualOutputs = (code, inputs, functionName) => {
    inputs = inputs.map((input) => `${functionName}(${input})`);
    let evalString = `
    ${code}

    let outputs = [];

    for (let input of ${JSON.stringify(inputs).replace(/"/g, "")} ){
        outputs.push(input);
    };

    outputs
    `;
    console.log(evalString);
    return eval(evalString);
};

// returns results fromt test cases as JSON object
var generateTestResults = (code, problem) => {
    let functionName = problem.functionName;
    let testCases = problem.testCases;

    let testCode = generateTestCode(testCases, functionName);

    let result;
    try {
        console.log(code + testCode)
        let evalResponse = eval(code + testCode);
        result = evalResponse;
    } catch(e) {
        console.log(e);
        result = {"error" : e.toString()}
    }
    return(result);
}

// returns an array of inputs/output for a questionId
// let getTestCases = (/*questionId*/) => {
//     return  [
//        ['[1,3,4]','[1,4]'],
//        ['[1]','[1]'],
//        ['[1,2,3,4,5]','[1,3,5]']
//     ];
// }

let generateTestCode = (testCases, functionName) => {
    let individualTests = [];

    for (let testCase of testCases){
        let input = testCase[0];
        let expectedOutput = testCase[1].toString();
        let line = functionName + '(' + input + ')';
        // let testLine = `JSON.stringify(${line})==JSON.stringify(${expectedOutput}) && `;
        // individualTests.push(testLine.substring(0,testLine.length-3));

        test = {
            actualOutput: line,
            expectedOutput: expectedOutput
        };
        individualTests.push(JSON.stringify(test));
    }

    let iterateOverTestCases = `
    let count = 0;
    let errors = [];
    for (let testCase of [${individualTests}] ){
        let actualOutput = testCase.actualOutput;
        let expectedOutput = testCase.expectedOutput;

        if(JSON.stringify(actualOutput) == JSON.stringify(expectedOutput)){
            count++;
        } else {
            errors.push({
                actualOutput,
                expectedOutput
            });
        }
    };


    const res = () => ({
        numTestCasesPassed: count,
        numTestCasesTotal: ${individualTests.length},
        errors
    });

    res();
    `;

    return(iterateOverTestCases);
}

module.exports = {
    runCode,
};

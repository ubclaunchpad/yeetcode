// main function that runs a code snippet provided as a `string`
var runCode = (code) => {
    let questionId = 1;

    return generateTestResults(questionId, code);
}

// returns results fromt test cases as JSON object
var generateTestResults = (questionId, code) => {
    functionName = 'getOdds';
    let testCases = getTestCases(questionId);
    
    let testCode = generateTestCode(testCases, functionName);

    let result;
    try {
        let evalResponse = eval(code + testCode);
        result = {
            "numTestCasesPassed": evalResponse[0],
            "numTestCasesTotal": evalResponse[1]
        };
    } catch(e) {
        result = {"error" : e.toString()}
    }
    return(result);
}

// returns an array of inputs/output for a questionId 
getTestCases = (questionId) => {
    return  [
       ['[1,3,4]','[1,4]'],
       ['[1]','[1]'],
       ['[1,2,3,4,5]','[1,3,5]']
    ];
}

generateTestCode = (testCases, functionName) => {
    let individualTests = [];

    for (let testCase of testCases){
        input = testCase[0];
        expectedOutput = testCase[1].toString();
        let line = functionName + '(' + input + ')';
        let testLine = line + '==' + expectedOutput + ' && ';
        individualTests.push(testLine.substring(0,testLine.length-3));
    }

    let iterateOverTestCases = `let count = 0;
    for (let testCase of [${individualTests}] ){
        if(testCase){
            count++;
        }
    }

    [count, ${individualTests.length}]
    `;

    return(iterateOverTestCases);
}

module.exports = {
    runCode,
};
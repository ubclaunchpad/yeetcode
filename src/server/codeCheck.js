// import { exec } from "child_process";

var runCode = () => {
    let code = `function getOdds(arr){
        let ans = [];
        for (let i = 0; i < arr.length; i+=2){
            ans.push(arr[i])
        }
        return(ans);
    }
    `;

    let questionId = 1;

    generateTestResults(questionId, code);
}

var generateTestResults = (questionId, code) => {
    functionName = 'getOdds';
    let testCases = getTestCases(questionId);
    
    let testCode = generateTestCode(testCases, functionName);

    // console.log(code + testCode);
    eval(code + testCode);
}

// returns an array of inputs/output for a questionId 
getTestCases = (questionId) => {
    return  [
       ['1,3,4','[1,4]'],
       ['1','[1]']
    ];
}

generateTestCode = (testCases, functionName) => {
    let string = '';

    for (let testCase of testCases){
        input = testCase[0];
        expectedOutput = testCase[1];
        let line = functionName + '(' + input + ')';
        let testLine = line + '===' + expectedOutput + ' && ';
        string+= testLine;
    }

    return ("console.log( " + string.substring(0,string.length-3) + ")");
}

runCode();
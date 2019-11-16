// import { exec } from "child_process";

var runCode = (code) => {
    // let code = `function getOdds(arr){
    //     let ans = [];
    //     for (let i = 0; i < arr.length; i+=2){
    //         ans.push(arr[i])
    //     }
    //     return(ans.toString());
    // }
    // `;
    let questionId = 1;

    return generateTestResults(questionId, code);
}

var generateTestResults = (questionId, code) => {
    functionName = 'getOdds';
    let testCases = getTestCases(questionId);
    
    let testCode = generateTestCode(testCases, functionName);

    // console.log(code + testCode);
    let x;
    try {
        let ans = eval(code + testCode);
        x = {
            "numTestCasesPassed": ans[0],
            "numTestCasesTotal": ans[1]
        };
    } catch(e) {
        let str = e.toString();
        x = {"error" : str}
    }
    console.log(x);
    return(x);
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
    let string = '';
    let individualTests = [];

    for (let testCase of testCases){
        input = testCase[0];
        expectedOutput = testCase[1].toString();
        let line = functionName + '(' + input + ')';
        let testLine = line + '==' + expectedOutput + ' && ';
        individualTests.push(testLine.substring(0,testLine.length-3));
        string+= testLine;
    }

    // console.log(individualTests);

    let x = `let count = 0;
    for (let testCase of [${individualTests}] ){
        if(testCase){
            count++;
        }
    }

    [count, ${individualTests.length}]
    `;
    return(x);
    // return ("console.log( " + string.substring(0,string.length-3) + ");");
}

runCode(`function getOdds(arr){
    let ans = [];
    for (let i = 0; i < arr.length; i+=2){
        ans.push(arr[i])
    }
    return(ans.toString());
}`);

module.exports = {
    runCode,
};
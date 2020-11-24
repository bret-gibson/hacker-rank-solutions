function studentGrade 




function constructResults(scoreCount = 0, resutls){
    let sortedScores = []
    let resultArray = []

    for (key in results){
        sortedScores.push([key, results[key]])
    }

    sortedScores.sort((a, b) => b[1] - a[1])


    for (let i = 0; i < sortedScores.length; i++){

        resultArray.push(`${sortedScores[i][0]}: ` + 
        (parseFloat((sortedScores[i][1] / scoreCount) * 100)).toFixed(2) + "%")
    }
}
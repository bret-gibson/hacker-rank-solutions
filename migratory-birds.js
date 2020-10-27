function migratoryBirds(array) {
    let sorted = array.sort();
    let answer = sorted[0];
    let maxOccur = 1
    let counter = 0;
    
    for (let i = 0; i < sorted.length; i++) {
        counter = (sorted[i] === sorted[i - 1]) ? counter + 1 : 0;
        if (counter > maxOccur) {
            answer = sorted[i];
            maxOccur = counter;
        }
    }

    return answer;
}
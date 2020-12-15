function setZeroes(matrix) {
    let zeros = []
    for (let i = 0; i < matrix.length; i++) {
        zeros.push(...findAllZeros(matrix, i))
    }
    
    for (let i = 0; i < zeros.length; i++) {
        const { row, col } = zeros[i]
        markColumn(matrix, col)
        markRow(matrix, row)
    }
    
    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[i].length; j++) {
            matrix[i][j] = matrix[i][j] !== 'X' ? matrix[i][j] : 0
        }
    }
};

function findAllZeros(matrix, row){
    const result = []
    for (let col = 0; col < matrix[row].length; col++) {
        if (matrix[row][col] === 0) {
            result.push({ row, col })
        }
    }
    return result
}

function markColumn(matrix, column) {
    for (let i = 0; i < matrix.length; i++) {
        matrix[i][column] = 'X'
    }
}

function markRow(matrix, row) {
    matrix[row] = matrix[row].map(val => 'X')
}
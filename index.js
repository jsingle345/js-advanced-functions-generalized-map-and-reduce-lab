// Add your functions here
const map = (array, callback) => {
    let result = []

    for(let item in array){
        result.push(callback(array[item]))
    }
    return result
}

const reduce = (array, callback, starter) => {
    let beginner = (!!starter) ? starter : array[0]
    let i = (!!starter) ? 0 : 1 

    for (; i < array.length; i++){
        beginner = callback(array[i], beginner)
    }
    return beginner
}
/**
 * @param {string} address
 * @return {string}
 */
var defangIPaddr = function(address) {
    
    let arr = address.split(".")
    
    for (let i = 0; i < arr.length - 1; i++){
        arr[i] = arr[i] + "[.]"
    }
    
    return arr.join("")
    
    
};
var missingNumber = function(nums) {
    let max = nums[0];    
    const sum = nums.reduce((sum, ele)=>{
        max = Math.max(max, ele);
        return sum + ele;
    });
    
    if(max != nums.length){
        return nums.length;
    }
    
    const expectedSum = max / 2 * (nums.length + 1);
    
    return expectedSum - sum;
};
function integerReplacement(n) {
    let min = Number.POSITIVE_INFINITY;
    let stack = [{ num: n, step: 0 }];
    let set = new Set();
    let nextStep;
    let item;
    
    while (stack.length) {
        item = stack.shift();
        
        if (item.num === 1) {
            if (min > item.step) {
                min = item.step;
            }
            continue;
        }
        
        if (set.has(item.num) || item.step >= min) {
            continue;
        }
        set.add(item.num);
        
        nextStep = item.step + 1;
        if (item.num % 2 === 0) {
            item.num = (item.num / 2);
            stack.push({num: item.num, step: nextStep});
        } else {
            stack.push({num: item.num - 1, step: nextStep});
            stack.push({num: item.num + 1, step: nextStep});
        }
    }
    return min;
};
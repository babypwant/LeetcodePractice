
function last(arr){
    return arr[arr.length - 1]
}

var MinStack = function() {
    this.stack = []
    
};

/** 
 * @param {number} val
 * @return {void}
 */
MinStack.prototype.push = function(val) {

    if(this.stack.length === 0) {
        this.stack.push([val,val])
        return
    }
    const currentMin = last(this.stack)[1]
    this.stack.push([val, Math.min(currentMin, val)])
    
    
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
    this.stack.pop()
};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
    return last(this.stack)[0]
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function() {
    return last(this.stack)[1]
    
};

/** 
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(val)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */
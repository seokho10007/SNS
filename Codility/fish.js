const solution = (A, B) => {
    const len = A.length;
    let die = 0;

    const stack = []

    for(let i = 0; i < len; i++){
        if(B[i] === 1) stack.push(A[i]);
        else if(B[i] === 0 && stack.length > 0){
            while(stack.length > 0){
                die++;
                if(stack[stack.length - 1] > A[i]) break;
                else if(stack[stack.length - 1] < A[i]) stack.pop();
            }
        }
    }
    return A.length - die
}

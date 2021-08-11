const solution = (arr) => {
    const copy = [[...arr]]

    let min = Infinity;
    let index= -1;

    for(let i = 1; i < arr.length; i++){
        copy[i] = []
        for(let j = 0; j < arr.length - i; j++){
            copy[i][j] = copy[i - 1][j + 1] + arr[j];

            const cal = copy[i][j] / (i + 1);
          
            if (min > cal){
                min = cal;
                index = j;
            }else if( min === index ){
                if(index > j) index = j;
            }
        }
    }

    return index
};

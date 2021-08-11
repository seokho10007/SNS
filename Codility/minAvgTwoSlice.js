const solution = (arr) => {
	const len = arr.length;
    const copy = [[...arr]]

	let min = Infinity;
	let index = 0;

    // 평균의 성질 이용
    // 1) 집합의 평균은 제일 작은 인자보다 항상 크다
    // 2) 2개의 인자를 가지고있는 집합과 3개의 인자를 가지고 있는 집합만을 구하면 된다.
    //  ex) 
    // [1, 2, 3, 4] 일때, a+s+d+a 의 평균을 구하고자 하면
    //  2개의 인자의 평균 (1+2)/2=1.5, 3+4/2=3.5 를 구하먄
    //  (1+2+3+4)/4 = (1.5, 3.5)/2 인 것을 알 수 있다.
    //  이때 집합의 평균은 인자의 가장 작은값보다 항상 크기 때문에
    //  인자 4개의 평균은 인자 2개의 평균보다 항상 작다.
    //  따라서, 4개이상의 평균은 구하지 않는다. 
	for (let i = 1; i < 3; i++) {
        copy[i] = [];
        // 해당 부분에서 중첩 반복문을 사용해 문제를 해결했지만
        // 직접 인자가 2개인경우와 3개인경우를 직접 구하여 해결할 수 있다.
		for (let j = 0; j < len - i; j++) {
            copy[i][j] = copy[i - 1][j + 1] + arr[j];

            const cal = copy[i][j] / (i + 1);
			  
			if(min > cal) {
				min = cal;
				index = j
			}else if(min === cal) 
                index > j &&(index = j)
		}
	}


	return index;
};

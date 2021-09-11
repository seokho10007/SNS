function solution(routes) {
    let c = -30001;

    return routes.sort((a,b) => a[1] - b[1]).reduce((a, el) => {
        if (c < el[0]) {            
            a++;
            c = el[1];
            
        }
        return a;
    }, 0);
    ;
}

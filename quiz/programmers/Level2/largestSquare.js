function solution(board){
    if (!board.some(v => v.includes(1))) return 0;
    
    var answer = 0;

   for (let i = 1; i < board.length; i++) {
       for (let j = 1; j < board[i].length; j++) {
           if (!board[i][j]) continue;
           board[i][j] = Math.min(board[i - 1][j - 1], board[i - 1][j], board[i][j - 1]) + 1;
           answer = Math.max(answer, board[i][j]);
       }
   }    
    
    return answer ? answer * answer : 1;
}

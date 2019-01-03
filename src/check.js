export default (board) => {
  var n = 3;
  var result = false;

  for (var i = 0; i < board.length; i++) {
    result = !!(i == 0 && board[i] === 1 && board[4] === 1 && board[8] === 1) || // Left diagonal
             !!(i == 2 && board[i] === 1 && board[4] === 1 && board[6] === 1) || // Right diagonal
             !!(board[i] === 1 && board[i+(n+1)] === 1 && board[i+(n+1)+(n+1)] === 1) || // Vertically Linear
             !!(board[i] === 1 && board[i+1] === 1 && board[i+1+1] === 1); // Horizontally Linear

    if (result) break;
  }

  return result;

  /* board.reduce((acc, curr) => {
   *   console.log(acc, curr)
   *   if (curr === 1) {
   *     return acc + 1
   *   }
   * }, 0) */
}

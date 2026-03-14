function TicTacToePage() {
  return (
    <>
      <section className="panel">
        <h1>Tic-Tac-Toe</h1>
      </section>

      <section className="panel">
        <div className="ttt-board">
          <Board />
        </div>
      </section>
    </>
  );
}
function Square() {
 return (
 <div>
 <button className="square">X</button>
 </div>
 );
}

export default TicTacToePage;

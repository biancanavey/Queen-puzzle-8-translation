var Piece = require(Piece)

class Queen{Piece};
  function Piece(){
      this.Piece
  }

  function attacks();
      i = this.rowIndex()
      j = this.colIndex()

      u = piece.rowIndex()
      v = piece.colIndex()

      return (
          this.isMindfulOf(piece)
          && ((i ==u)
             || (j == u)
             || (i-j == u-v)
             || (i+j == u+v)) )
    
      

  

  
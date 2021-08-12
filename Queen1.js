import Piece from "./Piece";

class Queen extends Piece {
  construtor(){
      super();
  }
attacks(piece){
      var i = self.rowIndex();
      var j = self.colIndex();

      var u = piece.rowIndex();
      var v = piece.colIndex();

      return (
          this.isMindfulOf(piece)
          && ((i ==u)
             || (j == u)
             || (i-j == u-v)
             || (i+j == u+v)) 
      )
      }
      }   
      

  

  
function board(containerSelector) {
    var chess = new Chess();
    chess.reset();
    var container = $(containerSelector);
    
    var w = $(document).width();
    var h = $(document).height();

    var cellSize = Math.floor((Math.min(w, h) * 0.93 / 8));
    var cellCount = 8;
    var boardSize = cellSize * cellCount;
    container.width(boardSize).height(boardSize);
    var cells = [];
    for (var i = 0; i < chess.SQUARES.length; i++) {
        var square = chess.SQUARES[i];
        var color = chess.square_color(square);
        var piece = chess.get(square);
        var cell = $('<div id="' + square + '" class="cell"></div>')
            .width(cellSize)
            .height(cellSize);
        container.append(cell.addClass(color));
        if (piece) {
            cell.append($('<div id="' + square + '" class="piece"></div>')
                .width(cellSize)
                .height(cellSize)
                .css('background-image', 'url(pieces/' + piece.type + piece.color + '.svg)'));
        }
        cells.push(cell[0]);
    }

    dragula(cells, {
         revertOnSpill: true
    });

    console.log(chess.ascii());
    console.log(chess.get('h3'));
}

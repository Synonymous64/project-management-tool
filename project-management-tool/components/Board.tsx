"use client";

import { useEffect } from "react";
import { DragDropContext, Droppable } from "react-beautiful-dnd";

const Board = () => {
  useEffect(() => {
    // getBoard();
  }, []);

  return (
    <DragDropContext>
      <Droppable droppableId="board" direction="horizontal" type="column">
        {(provided) => <div>{/* Rendering all the columns */}</div>}
      </Droppable>
    </DragDropContext>
  );
};

export default Board;

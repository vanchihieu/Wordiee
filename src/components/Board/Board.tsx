import React from "react";
import Square from "../Square/Square";
import './board.css'
import KeyBoard from "../Keyboard/KeyBoard";
interface IProps {
    board: string[];
}

const Board: React.FC<IProps> = (props) => {
    const { board } = props;
    return (
        <>
            <div className="board">
                {board.map((square, index) => {
                    return <>{<Square val={square} squareIdx={index}/>}</>;
                })}
            </div>
            <div className="keyboard">
                <KeyBoard/>
            </div>
        </>
    );
};

export default Board;

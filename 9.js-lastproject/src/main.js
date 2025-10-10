import "./style.css";
import { ChessPlayer } from "./models/ChessPlayer";
import { createHtml } from "./utils/htmlUtil";

const playerOne = new ChessPlayer("Sebastian", "Sweden", 1300);
const magnus = new ChessPlayer("Magnus Carlsen", "Norway", 2800);
const kasparov = new ChessPlayer("Kasparov", "Russia", 2500);

const players = [playerOne, magnus, kasparov];

createHtml(players);

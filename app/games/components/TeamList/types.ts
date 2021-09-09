import { PlayerProps } from "players/types";

export type Props = {
  players: PlayerProps[];
  removePlayer: (player: PlayerProps) => void;
}
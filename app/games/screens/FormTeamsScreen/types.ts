import { PlayerProps } from "players/types";

export type Props = {
  onGoBack: () => void,
  playersToSort: PlayerProps[];
}
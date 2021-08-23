import { PlayerProps } from "players/types";

export type Props = {
    player: PlayerProps
    index: number
    onDelete: () => void
    onSelect: () => void
    
}
import { useSelector } from 'react-redux';
import { SaturdayProps } from 'saturday/types';

const selectCurrentSaturday = () => useSelector<any, SaturdayProps>(({ saturday }) => saturday.data
    .find((day: SaturdayProps) => day.id === saturday.current))

export default selectCurrentSaturday;

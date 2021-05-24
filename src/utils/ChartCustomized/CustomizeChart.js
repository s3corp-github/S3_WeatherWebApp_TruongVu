import Moon from '../../assets/images/moon';
import Sun from '../../assets/images/sun'

export const CustomizeActiveDot = (props) => {
    const {cx, cy, value} = props;
    if(!value) return;
    if(value[1] > 0) {
        return (
            <Sun cx={cx} cy={cy}/>
        )
    }
    return (
        <Moon cx={cx} cy={cy + 10}/>
    )
    
}

export const CustomizedTooltip = ({ active, payload }) => {
    if (!active) return null
    return (
        <div className="customizedTooltip">
            <p className="customizedTooltip__text-sun">{`Hours : ${payload[1]?.payload?.hour}`}</p>
            <p className="customizedTooltip__text-tide">{`Tide : ${payload[0].value}m`}</p>
        </div>
    )
}
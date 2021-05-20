// import Sun from '../assets/sun1.png'

export const CustomizeSunDot = (props) => {
    console.log(props)
    const {cx, cy} = props;
    return (
        <img cx={cx} cy={cy} width={30} height={30} alt="sun" src='../assets/sun1.png'/>
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
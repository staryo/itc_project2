export default function HumanizedPercentage(number) {
    number = Math.floor(number.number * 100) / 100
    if (number > 0) {
        return (
            <span className="text-success px-1">(+{number}%)</span>
        )
    } else if (number < 0) {
        return (
            <span className="text-danger px-1">({number}%)</span>
        )
    } else {
        return (
            <span className="text-white px-1">({number}%)</span>
        )
    }
}
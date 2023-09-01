export default function highlightTextPart(string, substring) {
    const indexNumber = string.toLowerCase().indexOf(substring.toLowerCase())
    if (string.length < substring.length) return string
    if (indexNumber === -1) return string
    if (substring.length === 0) return string
    const firstPart = string.substring(0, indexNumber)
    const secondPart = string.substring(indexNumber, indexNumber + substring.length)
    const thirdPart = string.substring(indexNumber + substring.length, string.length)
    return (
        <>
            {firstPart}
            <mark className="p-0 m-0">
                {secondPart}
            </mark>
            {thirdPart}
        </>
    )
}
import Marquee from "react-fast-marquee";


function StockMarquee({}) {
    return (
        <>
            <div className="row">
                <div className="col">
                    <Marquee className="text-white">
                        I can be a React component, multiple React components, or just some text.
                    </Marquee>
                </div>
            </div>
        </>
    )
}

export default StockMarquee

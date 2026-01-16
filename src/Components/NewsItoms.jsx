
const NewsItoms = ({titel, description, src, url}) => {
    return (
        <div>
            <div className="card bg-dark text-light mb-3 py-2 px-2" style= {{maxWidth : "345px"}}>
                <img src={src} style={{height:"200px",width:"285px"}} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{titel}</h5>
                    <p className="card-text">{description}</p>
                    <a href={url} className="btn btn-primary">Read More</a>
                </div>
            </div>
        </div>
    )
}

export default NewsItoms

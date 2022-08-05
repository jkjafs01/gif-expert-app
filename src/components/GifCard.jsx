const GifItem = ({ title, url }) => {
    return (
        <div className="card" >
            <p >{title.length > 20 ? title.substring(0,20)+'...' : title   }</p>
            <img src={url} alt={title} width={200} height={120} />
        </div>
    )

}

export  {GifItem};
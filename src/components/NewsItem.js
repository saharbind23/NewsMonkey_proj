import React from 'react'

const NewsItem = (props)=> {
    let {title, description, imgeUrl, newsUrl, author, date} = props; 
    return (
        <div className="my-3">
            <div className="card">
                <img src={!imgeUrl?"https://www.hindustantimes.com/ht-img/img/2024/03/21/1600x900/ANI-20240321094-0_1711026255980_1711026276554.jpg":imgeUrl} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{title}<span className="badge bg-secondary">New</span></h5>
                    <p className="card-text">{description}</p>
                    <p className="card-text"><small className="text-body-secondary">By {!author?"Unknown": author} on {new Date(date).toGMTString()}</small></p>
                    <a rel="noreferrer" href={newsUrl} target="_blank" className="btn btn-sm btn-dark">Read More</a>
                </div>
            </div>
        </div>
    )
  
}

export default NewsItem

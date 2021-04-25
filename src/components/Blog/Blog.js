import React from 'react'
import Single from './Single'
import {Link} from 'react-router-dom'
const Blog = () => {
    return (
        
        <div>
        {/*// SubHeader //*/}
        <div className="ritekhana-subheader-view1" style={{backgroundImage:"url('/extra-images/subheader-bg.jpg')"}}>
            <span className="ritekhana-banner-transparent" />
            <div className="container">
            <div className="row">
                <div className="col-md-12">
                <h1>Blog Grid</h1>
                </div>
                <ul className="ritekhana-breadcrumb">
                <li><Link to="/">Home</Link></li>
                <li><i className="fa fa-angle-right" /> Blog List</li>
                </ul>
            </div>
            </div>
        </div>
        {/*// SubHeader //*/}
        {/*// Content //*/}
        <div className="ritekhana-main-content">
            {/*// Main Section //*/}
            <div className="ritekhana-main-section">
            <div className="container">
                <div className="ritekhana-row">
                <div className="ritekhana-column-12">
                    {/*// Blog Large //*/}
                    <div className="ritekhana-blog ritekhana-blog-grid">
                    <ul className="row">
                       <Single />
                       <Single />
                       <Single />
                       <Single />
                       <Single />
                       <Single />
                       <Single />
                       <Single />
                       <Single />
                       <Single />
                       <Single />
                       <Single />
                    </ul>
                    </div>
                    {/*// Blog Large //*/}
                    {/*// Pagination //*/}
                    <div className="ritekhana-pagination">
                    <ul>
                        <li><a href="#"><i className="fa fa-chevron-left" /></a></li>
                        <li><a href="#">1</a></li>
                        <li className="active"><a href="#">2</a></li>
                        <li><a href="#">3</a></li>
                        <li><a href="#">4</a></li>
                        <li><a href="#">5</a></li>
                        <li><a href="#"><i className="fa fa-chevron-right" /></a></li>
                    </ul>
                    </div>
                    {/*// Pagination //*/}
                </div>
                </div>
            </div>
            </div>
            {/*// Main Section //*/}
        </div>
        {/*// Content //*/}
        </div>

    )
}

export default Blog

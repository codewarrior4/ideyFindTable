import React from 'react'
import {Link} from 'react-router-dom'
const BlogDetails = () => {
    return (
        <div>
            <div className="ritekhana-subheader-view1"  style={{backgroundImage:"url('/extra-images/subheader-bg.jpg')"}}>
                <span className="ritekhana-banner-transparent" />
                <div className="container">
                <div className="row">
                    <div className="col-md-12">
                    <h1>Blog Detail</h1>
                    </div>
                    <ul className="ritekhana-breadcrumb">
                    <li><Link to="/">Home</Link></li>
                    <li><i className="fa fa-angle-right" /> Blog Detail</li>
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
                    <div className="ritekhana-column-9">
                        {/*// Blog Detail //*/}
                        <div className="ritekhana-blog-heading">
                        <h2>Floury Bakery is The Best Choice For Our Daily Hehy Meal</h2>
                        <ul className="ritekhana-blog-option">
                            <li>Date: <time dateTime="2008-02-14 20:00">21 Aug 2017</time></li>
                            <li>Posted By: <a href="404.html">John Doe</a></li>
                            <li>Comments: <a href="404.html">21</a></li>
                        </ul>
                        </div>
                        <figure className="ritekhana-blog-detail-thumb"><img src="/extra-images/blog-large-img1.jpg"  /></figure>
                        <div className="ritekhana-rich-editor">
                        <p>Aenean ultricies iaculis cursus. Mauris enim tellus, finibus in felis a, sollicitudin iaculis dolor. Donec sollicitudin ori id effi citur dapibus. Aliquam tempor sapien sed condimentum fringilla. In magna elit, ultrices a eros sit amet, iaculis he ndre- rit tellus. Vivamus dapibus libero porta leo mattis, vitae aliquet erat dictum. Quisque non dignissi nunc. In he ndrerit auctor dui sed feugiat. Vestibulum vitae dictum velit.</p>
                        <p>Aenean ultricies iaculis cursus. Mauris enim tellus, finibus in felis a, sollicitudin iaculis dolor. Donec sollicitudin ori id effi citur dapibus. Aliquam tempor sapien sed condimentum fringilla. In magna elit, ultrices a eros sit amet, iaculis he ndre- rit tellus. Vivamus dapibus libero porta leo mattis, vitae aliquet erat dictum. Quisque non dignissi nunc. In he ndrerit auctor dui sed feugiat. Vestibulum vitae dictum velit.</p>
                        <blockquote>
                            <i className="fa fa-quote-right" />
                            Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae id efficitur condimentum, dui nisl ullamcorper diam, at molestie nulla erat gna egestas tempor Lorem ipsum dolor sit.
                        </blockquote>
                        <p>Aenean ultricies iaculis cursus. Mauris enim tellus, finibus in felis a, sollicitudin iaculis dolor. Donec sollicitudin ori id effi citur dapibus. Aliquam tempor sapien sed condimentum fringilla. In magna elit, ultrices a eros sit amet, iaculis he ndre- rit tellus. Vivamus dapibus libero porta leo mattis, vitae aliquet erat dictum. Quisque non dignissi nunc. In he ndrerit auctor dui sed feugiat. Vestibulum vitae dictum velit.</p>
                        </div>
                        <div className="ritekhana-post-tags">
                        <div className="ritekhana-tags">
                            <span>Tags:</span>
                            <a href="404.html">Recipes Course</a>
                            <a href="404.html">WordPress</a>
                            <a href="404.html">Learn</a>
                            <a href="404.html">Food</a>
                        </div>
                        <a href="404.html">Share</a>
                        </div>
                        <div className="comments-area">
                        {/*// coments \\*/}
                        <h2 className="widget-heading">Comments</h2>
                        <ul className="comment-list">
                            <li>
                            <div className="thumb-list">
                                <figure><img  src="/extra-images/comment-img1.jpg" /></figure>
                                <div className="text-holder">
                                <a className="comment-reply-link" href="#">Reply <i className="fa fa-share" /></a>
                                <h6>Henry Garrick</h6>
                                <time className="post-date" dateTime="2008-02-14 20:00">November 11, 2017 </time>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed et elementum nulla, eu placerat feis. Eti dunt orci lacus, id varius dolor fermentum sit amet. Morbi consectetur ante odio, at vestibulum nib id. In porttitor nunc a.</p>
                                </div>
                            </div>
                           
                            {/* .children */}
                            </li>
                            {/* #comment-## */}
                            <li>
                            <div className="thumb-list">
                                <figure><img  src="/extra-images/comment-img3.jpg" /></figure>
                                <div className="text-holder">
                                <a className="comment-reply-link" href="#">Reply <i className="fa fa-share" /></a>
                                <h6>Ian Strauss</h6>
                                <time className="post-date" dateTime="2008-02-14 20:00">November 11, 2017 </time>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed et elementum nulla, eu placerat feis. Eti dunt orci lacus, id varius dolor fermentum sit amet. Morbi consectetur ante odio, at vestibulum nib id. In porttitor nunc a.</p>
                                </div>
                            </div>
                            <div className="thumb-list">
                                <figure><img  src="/extra-images/comment-img4.jpg" /></figure>
                                <div className="text-holder">
                                <a className="comment-reply-link" href="#">Reply <i className="fa fa-share" /></a>
                                <h6>Jill Dosan</h6>
                                <time className="post-date" dateTime="2008-02-14 20:00">November 11, 2017</time>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed et elementum nulla, eu placerat feis. Eti dunt orci lacus, id varius dolor fermentum sit amet. Morbi consectetur ante odio, at vestibulum nib id. In porttitor nunc a.</p>
                                </div>
                            </div>
                            </li>
                            {/* #comment-## */}
                        </ul>
                        {/*// coments \\*/}
                        {/*// comment-respond \\*/}
                        <div className="comment-respond">
                            <h2 className="widget-heading">Leave a Comments</h2>
                            <form>
                            <p>
                                <input type="text" defaultValue="Name"  />
                                <i className="fa fa-user" />
                            </p>
                            <p>
                                <input type="text" defaultValue="Website" />
                                <i className="fa fa-globe" />
                            </p>
                            <p className="education-full-form">
                                <textarea name="comment" placeholder="Message" className="commenttextarea" defaultValue={""} />
                                <i className="fa fa-comments" />
                            </p>
                            <p className="form-submit"><label><input defaultValue="Submit Now" type="submit" /></label> <input name="comment_post_ID" defaultValue={99} id="comment_post_ID" type="hidden" />
                            </p>
                            </form>
                        </div>
                        {/*// comment-respond \\*/}
                        </div>
                        {/*// Blog Detail //*/}
                    </div>
                    {/*// SideBaar //*/}
                    <aside className="ritekhana-column-3">
                        <div className="widget widget_popular_post">
                        <h2 className="widget-heading">Popular Post</h2>
                        <ul>
                            <li>
                            <h6><a href="blog0-detail.html">Sed vulputate elementum al iquam unc vel</a></h6>
                            <time dateTime="2008-02-14 20:00">21 August 2017</time>
                            </li>
                            <li>
                            <h6><a href="blog0-detail.html">Ut gravida nulla id ornare so dales. Aenean aliqu</a></h6>
                            <time dateTime="2008-02-14 20:00">31 December 2017</time>
                            </li>
                            <li>
                            <h6><a href="blog0-detail.html">Cras varius est vel massa ultr ic ies, ac rutrum urn</a></h6>
                            <time dateTime="2008-02-14 20:00">26 June 2018</time>
                            </li>
                            <li>
                            <h6><a href="blog0-detail.html">Donec eu porta velit. Nam at urna eu libero suscip</a></h6>
                            <time dateTime="2008-02-14 20:00">22 May 2018</time>
                            </li>
                        </ul>
                        </div>
                      
                    </aside>
                    {/*// SideBaar //*/}
                    </div>
                </div>
                </div>
                {/*// Main Section //*/}
            </div>
            {/*// Content //*/}
            </div>
    )
}

export default BlogDetails

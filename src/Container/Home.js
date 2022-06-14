import React from 'react'
import { useNavigate } from 'react-router-dom'

const Home = () => {
    const navigate = useNavigate();

    return (
        <>
            <section id="hero" className="d-flex align-items-center">
                <div className="container">
                    <h1>Welcome to Hospital</h1>
                    <h2>We are team of talented doctors making websites with React</h2>
                    <button onClick={() => navigate("/about")} className="btn-get-started scrollto border-0">Get Started</button>
                </div>
            </section>
            <main id="main">
                <section id="counts" className="counts">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-3 col-md-6">
                                <div className="count-box">
                                    <i className="fas fa-user-md" />
                                    <span>23</span>
                                    <p>Doctors</p>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 mt-5 mt-md-0">
                                <div className="count-box">
                                    <i className="far fa-hospital" />
                                    <span>18</span>
                                    <p>Departments</p>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 mt-5 mt-lg-0">
                                <div className="count-box">
                                    <i className="fas fa-heartbeat" />
                                    <span>980</span>
                                    <p>Patients</p>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 mt-5 mt-lg-0">
                                <div className="count-box">
                                    <i className="fas fa-award" />
                                    <span>12</span>
                                    <p>Awards</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section id="services" className="services">
                    <div className="container">
                        <div className="section-title">
                            <h2>Services</h2>
                            <p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p>
                        </div>
                        <div className="row">
                            <div className="col-lg-4 col-md-6 d-flex align-items-stretch">
                                <div className="icon-box">
                                    <div className="icon"><i className="fas fa-heartbeat" /></div>
                                    <h4>Lorem Ipsum</h4>
                                    <p>Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi</p>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4 mt-md-0">
                                <div className="icon-box">
                                    <div className="icon"><i className="fas fa-pills" /></div>
                                    <h4>Sed ut perspiciatis</h4>
                                    <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore</p>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4 mt-lg-0">
                                <div className="icon-box">
                                    <div className="icon"><i className="fas fa-hospital-user" /></div>
                                    <h4>Magni Dolores</h4>
                                    <p>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia</p>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4">
                                <div className="icon-box">
                                    <div className="icon"><i className="fas fa-dna" /></div>
                                    <h4>Nemo Enim</h4>
                                    <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis</p>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4">
                                <div className="icon-box">
                                    <div className="icon"><i className="fas fa-wheelchair" /></div>
                                    <h4>Dele cardo</h4>
                                    <p>Quis consequatur saepe eligendi voluptatem consequatur dolor consequuntur</p>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4">
                                <div className="icon-box">
                                    <div className="icon"><i className="fas fa-notes-medical" /></div>
                                    <h4>Divera don</h4>
                                    <p>Modi nostrum vel laborum. Porro fugit error sit minus sapiente sit aspernatur</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section id="testimonials" className="testimonials">
                    <div className="container">
                        <div className="section-title"><h2>Reviews</h2></div>
                        <div className="testimonials-slider swiper-container" data-aos="fade-up" data-aos-delay={100}>
                            <div className="swiper-wrapper">
                                <div className="swiper-slide">
                                    <div className="testimonial-wrap">
                                        <div className="testimonial-item">
                                            <img src="assets/img/testimonials/testimonials-1.jpg" className="testimonial-img" alt="" />
                                            <h3>Saul Goodman</h3>
                                            <h4>Ceo &amp; Founder</h4>
                                            <p>
                                                <i className="bx bxs-quote-alt-left quote-icon-left" />
                                                Proin iaculis purus consequat sem cure digni ssim donec porttitora entum suscipit rhoncus. Accusantium quam, ultricies eget id, aliquam eget nibh et. Maecen aliquam, risus at semper.
                                                <i className="bx bxs-quote-alt-right quote-icon-right" />
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="swiper-slide">
                                    <div className="testimonial-wrap">
                                        <div className="testimonial-item">
                                            <img src="assets/img/testimonials/testimonials-2.jpg" className="testimonial-img" alt="" />
                                            <h3>Sara Wilsson</h3>
                                            <h4>Designer</h4>
                                            <p>
                                                <i className="bx bxs-quote-alt-left quote-icon-left" />
                                                Export tempor illum tamen malis malis eram quae irure esse labore quem cillum quid cillum eram malis quorum velit fore eram velit sunt aliqua noster fugiat irure amet legam anim culpa.
                                                <i className="bx bxs-quote-alt-right quote-icon-right" />
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="swiper-slide">
                                    <div className="testimonial-wrap">
                                        <div className="testimonial-item">
                                            <img src="assets/img/testimonials/testimonials-3.jpg" className="testimonial-img" alt="" />
                                            <h3>Jena Karlis</h3>
                                            <h4>Store Owner</h4>
                                            <p>
                                                <i className="bx bxs-quote-alt-left quote-icon-left" />
                                                Enim nisi quem export duis labore cillum quae magna enim sint quorum nulla quem veniam duis minim tempor labore quem eram duis noster aute amet eram fore quis sint minim.
                                                <i className="bx bxs-quote-alt-right quote-icon-right" />
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="swiper-slide">
                                    <div className="testimonial-wrap">
                                        <div className="testimonial-item">
                                            <img src="assets/img/testimonials/testimonials-4.jpg" className="testimonial-img" alt="" />
                                            <h3>Matt Brandon</h3>
                                            <h4>Freelancer</h4>
                                            <p>
                                                <i className="bx bxs-quote-alt-left quote-icon-left" />
                                                Fugiat enim eram quae cillum dolore dolor amet nulla culpa multos export minim fugiat minim velit minim dolor enim duis veniam ipsum anim magna sunt elit fore quem dolore labore illum veniam.
                                                <i className="bx bxs-quote-alt-right quote-icon-right" />
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="swiper-slide">
                                    <div className="testimonial-wrap">
                                        <div className="testimonial-item">
                                            <img src="assets/img/testimonials/testimonials-5.jpg" className="testimonial-img" alt="" />
                                            <h3>John Larson</h3>
                                            <h4>Entrepreneur</h4>
                                            <p>
                                                <i className="bx bxs-quote-alt-left quote-icon-left" />
                                                Quis quorum aliqua sint quem legam fore sunt eram irure aliqua veniam tempor noster veniam enim culpa labore duis sunt culpa nulla illum cillum fugiat legam esse veniam culpa fore nisi cillum quid.
                                                <i className="bx bxs-quote-alt-right quote-icon-right" />
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="swiper-pagination" />
                        </div>
                    </div>
                </section>
                <section id="gallery" className="gallery">
                    <div className="container">
                        <div className="section-title">
                            <h2>Gallery</h2>
                            <p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p>
                        </div>
                    </div>
                    <div className="container-fluid">
                        <div className="row no-gutters">
                            <div className="col-lg-3 col-md-4">
                                <div className="gallery-item">
                                    <a href="assets/img/gallery/gallery-1.jpg" className="galelry-lightbox">
                                        <img src="assets/img/gallery/gallery-1.jpg" className="img-fluid" alt="" />
                                    </a>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-4">
                                <div className="gallery-item">
                                    <a href="assets/img/gallery/gallery-2.jpg" className="galelry-lightbox">
                                        <img src="assets/img/gallery/gallery-2.jpg" className="img-fluid" alt="" />
                                    </a>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-4">
                                <div className="gallery-item">
                                    <a href="assets/img/gallery/gallery-3.jpg" className="galelry-lightbox">
                                        <img src="assets/img/gallery/gallery-3.jpg" className="img-fluid" alt="" />
                                    </a>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-4">
                                <div className="gallery-item">
                                    <a href="assets/img/gallery/gallery-4.jpg" className="galelry-lightbox">
                                        <img src="assets/img/gallery/gallery-4.jpg" className="img-fluid" alt="" />
                                    </a>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-4">
                                <div className="gallery-item">
                                    <a href="assets/img/gallery/gallery-5.jpg" className="galelry-lightbox">
                                        <img src="assets/img/gallery/gallery-5.jpg" className="img-fluid" alt="" />
                                    </a>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-4">
                                <div className="gallery-item">
                                    <a href="assets/img/gallery/gallery-6.jpg" className="galelry-lightbox">
                                        <img src="assets/img/gallery/gallery-6.jpg" className="img-fluid" alt="" />
                                    </a>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-4">
                                <div className="gallery-item">
                                    <a href="assets/img/gallery/gallery-7.jpg" className="galelry-lightbox">
                                        <img src="assets/img/gallery/gallery-7.jpg" className="img-fluid" alt="" />
                                    </a>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-4">
                                <div className="gallery-item">
                                    <a href="assets/img/gallery/gallery-8.jpg" className="galelry-lightbox">
                                        <img src="assets/img/gallery/gallery-8.jpg" className="img-fluid" alt="" />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </>
    )
}

export default Home
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function Form() {
    return (
        <div className="gradient-background">
            <main className="text text-center">
                <section className="py-5 text-center container">
                    <div className="row py-lg-5">
                        <div className="col-lg-6 col-md-8 mx-auto">
                            <h1 className="fw-light">Start your Wellness Journey</h1>
                        </div>
                    </div>
                </section>
            </main>

            <div className="container col-xl-10 col-xxl-8 px-4 py-5">
                <div className="row align-items-center g-lg-5 py-5 text">
                    <div className="col-lg-7 text-center text-lg-start">
                        <h1 className="display-4 fw-bold lh-1 text-body-emphasis mb-3">Join our team</h1>
                        <p className="col-lg-10 fs-4">Sign Up to become a volunteer</p>
                    </div>

                    <div className="col-md-10 mx-auto col-lg-5">
                        <form className="p-4 p-md-5 border rounded-3 bg-body-tertiary">
                            <div className="form-floating mb-3">
                                <input type="text" className="form-control" id="nameInput" placeholder="Name" />
                                <label htmlFor="nameInput">Name</label>
                            </div>
                            <div className="form-floating mb-3">
                                <input type="text" className="form-control" id="phoneInput" placeholder="+880----------" />
                                <label htmlFor="phoneInput">Phone Number</label>
                            </div>
                            <div className="form-floating mb-3">
                                <input type="email" className="form-control" id="emailInput" placeholder="name@example.com" />
                                <label htmlFor="emailInput">Email address</label>
                            </div>
                            <div className="form-floating mb-3">
                                <input type="number" className="form-control" id="ageInput" placeholder="Age" />
                                <label htmlFor="ageInput">Age</label>
                            </div>

                            <button className="w-100 btn btn-lg btn-outline-secondary" type="submit">
                                Sign up
                            </button>
                            <hr className="my-4 text-colour" />
                            <small className="text-body-secondary">
                                By clicking Sign up, you agree to the terms of use.
                            </small>
                        </form>
                    </div>
                </div>
            </div>

            <div className="text position-relative overflow-hidden p-3 p-md-5 m-md-3 text-center">
                <a className="btn btn-outline-secondary text text-colour" href="https://sofiautilitarian.github.io/MindMender/">
                    Back to home
                </a>
            </div>

            <div className="container">
                <footer className="py-3 my-4">
                    <p className="text-center text-body-secondary text text-colour">© MindMender, 2024</p>
                </footer>
            </div>
        </div>
    );
}

export default Form;

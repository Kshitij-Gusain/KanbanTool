import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import LogoImage from './header.jpg';

var sectionStyle = {
   backgroundImage: `url(${LogoImage})`
}

class Landing extends Component {

    componentDidMount() {
        if (this.props.security.validToken) {
            this.props.history.push("/dashboard");
        }
    }


    render() {
        return (

            <div className="landing" style={sectionStyle}>
                <div className="light-overlay landing-inner text-white">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12 text-right">
                                <h1 className="display-3 mb-4">Kanban Tool</h1>
                                <p className="lead">
                                    Register before logging in!
                            </p>
                                <hr />
                                <Link className="btn btn-lg btn-dark mr-2" to="/register">
                                    Register
                                    </Link>
                                <Link className="btn btn-lg btn-info mr-2" to="/login">
                                    Login
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


        )
    }
}

Landing.propTypes = {
    security: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
    security: state.security
})

export default connect(mapStateToProps)(Landing);
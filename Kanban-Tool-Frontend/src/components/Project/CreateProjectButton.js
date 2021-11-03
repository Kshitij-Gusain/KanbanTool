import React from 'react'
import { Link } from 'react-router-dom';

const CreateProjectButton = function CreateProjectButton() {
    return (
        <React.Fragment>
            <Link to="/addProject" href="ProjectForm.html" className="btn btn-outline-info">
                Create Project
            </Link>
        </React.Fragment>
    )
}

export default CreateProjectButton;
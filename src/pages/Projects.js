import React from "react";
import { useState, useEffect } from "react";

const Projects = (props) => {

    // Create state to hold projects
    const [projects, setProjects] = useState(null);

    // Create function to make an API call
    const getProjectsData = async () => {
        // make API call and get response
        const response = await fetch(props.URL + "projects");
        // Turn response into a JavaScript object
        const data = await response.json();
        // Set the projects state to the data
        setProjects(data);
    };

    // Make an initial call for the data inside a useEffect, so it only happens once on component loading
    useEffect(() => getProjectsData(), []);

    // Define a function that will return the JSX needed once we get the data
    const loaded = () => {
        return projects.map((project) => (
            <div>
                <h1>{project.name}</h1>
                <img src={project.image} />
                <a href={project.git}>
                    <button>Github</button>
                </a>
                <a href={project.live}>
                    <button>live site</button>
                </a>
            </div>
        ));
    };

    return projects ? loaded() : <h1>Loading...</h1>
}

export default Projects;

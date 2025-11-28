// Get the container element where projects will be placed
const projectsContainer = document.getElementById('projects-container');

/**
 * Generates the HTML string for the tags of a project.
 * @param {string[]} tags - Array of technology tags (e.g., ["React", "Node.js"]).
 * @returns {string} The HTML string for the tags div.
 */
function createTagsHtml(tags) {
    // Map each tag string to a <span> element with the 'tag' class
    const tagsHtml = tags.map(tag => `<span class="tag">${tag}</span>`).join('');
    return `<div class="tags">${tagsHtml}</div>`;
}

/**
 * Generates the HTML string for the links of a project.
 * @param {string} repoLink - URL to the GitHub repository.
 * @param {string} demoLink - URL to the live demo/site, or '#'.
 * @returns {string} The HTML string for the links div.
 */
function createLinksHtml(repoLink, demoLink) {
    let links = `<a href="${repoLink}" target="_blank">View Repo</a>`;
    // Only add the Live Demo link if the demoLink is not '#'
    if (demoLink && demoLink !== '#') {
        links += `<a href="${demoLink}" target="_blank">Live Demo</a>`;
    }
    return `<div class="links">${links}</div>`;
}


/**
 * Renders all projects from the projectsData array into the HTML container.
 */
function renderProjects() {
    // Use .map() to create an array of HTML strings for each project card
    const projectsHtml = projectsData.map(project => {
        const tagsSection = createTagsHtml(project.tags);
        const linksSection = createLinksHtml(project.repoLink, project.demoLink);

        // Template literal to build the complete card structure
        return `
            <div class="project-card" data-id="${project.id}">
                <h3>${project.title}</h3>
                ${tagsSection}
                <p>${project.description}</p>
                ${linksSection}
            </div>
        `;
    }).join(''); // .join('') concatenates the array of strings into a single large string

    // Insert the generated HTML into the container
    projectsContainer.innerHTML = projectsHtml;
}

// Execute the function when the script loads
renderProjects();
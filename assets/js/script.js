
const projectsContainer = document.getElementById('projects-container');

function createTagsHtml(tags) {
    const tagsHtml = tags.map(tag => `<span class="tag">${tag}</span>`).join('');
    return `<div class="tags">${tagsHtml}</div>`;
}

function createLinksHtml(repoLink, demoLink) {
    let links = `<a href="${repoLink}" target="_blank">View Repo</a>`;
    // Only add the Live Demo link if the demoLink is not '#'
    if (demoLink && demoLink !== '#') {
        links += `<a href="${demoLink}" target="_blank">Live Demo</a>`;
    }
    return `<div class="links">${links}</div>`;
}

function renderProjects() {
    const projectsHtml = projectsData.map(project => {
        const tagsSection = createTagsHtml(project.tags);
        const linksSection = createLinksHtml(project.repoLink, project.demoLink);

        return `
            <div class="project-card" data-id="${project.id}">
                <h3>${project.title}</h3>
                ${tagsSection}
                <p>${project.description}</p>
                ${linksSection}
            </div>
        `;
    }).join(''); // .join('') concatenates the array of strings into a single large string

    projectsContainer.innerHTML = projectsHtml;
}

renderProjects();
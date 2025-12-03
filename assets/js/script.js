const projectsContainer = document.getElementById('projects-container');

function createTagsHtml(tags) {
    // Tailwind classes for tags
    const tagsHtml = tags.map(tag => 
        `<span class="inline-block bg-blue-100 text-blue-600 px-2 py-1 rounded text-xs font-bold mr-1 mb-1">${tag}</span>`
    ).join('');
    return `<div class="mb-2 flex flex-wrap">${tagsHtml}</div>`;
}

function createLinksHtml(repoLink, demoLink) {
    let links = `<a href="${repoLink}" target="_blank" class="text-indigo-500 font-bold mr-4 hover:underline">View Repo</a>`;
    if (demoLink && demoLink !== '#') {
        links += `<a href="${demoLink}" target="_blank" class="text-indigo-500 font-bold mr-4 hover:underline">Live Demo</a>`;
    }
    return `<div class="mt-auto">${links}</div>`;
}

function renderProjects() {
    const projectsHtml = projectsData.map(project => {
        const tagsSection = createTagsHtml(project.tags);
        const linksSection = createLinksHtml(project.repoLink, project.demoLink);

        return `
            <div class="bg-white p-5 rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-transform transform hover:-translate-y-1 flex flex-col" data-id="${project.id}">
                <h3 class="text-gray-600 text-xl font-bold mt-0">${project.title}</h3>
                ${tagsSection}
                <p class="text-gray-600 text-sm mb-4 flex-1">${project.description}</p>
                ${linksSection}
            </div>
        `;
    }).join('');

    projectsContainer.innerHTML = projectsHtml;
}

renderProjects();

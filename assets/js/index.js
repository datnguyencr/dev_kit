document.addEventListener('DOMContentLoaded', () => {

    const mobileAppsData = [
        {"id": "com.ssteam.yugioh_card_builder", "name": "Yugioh Card Builder"},
        {"id": "com.ssteam.sliding_puzzle", "name": "Sliding Puzzle"},

    ];


    // Function to create a single project card HTML
    function createProjectCard(project) {
        const isMobile = project.id; 
        const link = isMobile 
            ? `https://play.google.com/store/apps/details?id=${project.id}` 
            : project.url;

        return `
            <a href="${link}" target="_blank" class="project-card">
                <h4 class="project-name">${project.name}</h4>
            </a>
        `;
    }
    function handleScrollReveal() {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('active');
                }
            });
        }, { 
            threshold: 0.1, // Trigger when 10% of the element is visible
            rootMargin: '0px 0px -50px 0px' // Start slightly before hitting the bottom
        });

        // Observe all sections with the 'reveal' class
        document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
    }
    // Function to render projects to the DOM
    function renderProjects(data, containerId, countId) {
        const container = document.getElementById(containerId);
        const countElement = document.getElementById(countId);
        
        if (container) {
            container.innerHTML = data.map(createProjectCard).join('');
        }
        
        if (countElement) {
            countElement.textContent = data.length;
        }
    }

    renderProjects(mobileAppsData, 'mobile-apps-grid', 'mobile-count');
    handleScrollReveal(); 
});
// Main App — SPA Router & Global Logic (no ES modules)

class App {
    constructor() {
        this.currentView = null;
        this.init();
    }

    init() {
        renderHeader(document.getElementById('app-header'));
        createModal();

        window.addEventListener('hashchange', () => this.route());
        this.route();

        const searchInput = document.getElementById('search-input');
        searchInput.addEventListener('keydown', (e) => {
            if (e.key === 'Enter' && searchInput.value.trim()) {
                this.performSearch(searchInput.value.trim());
            }
        });

        document.getElementById('hamburger-btn')?.addEventListener('click', () => this.toggleSidebar());
        document.getElementById('sidebar-overlay')?.addEventListener('click', () => this.closeSidebar());
    }

    route() {
        const hash = window.location.hash || '#/';
        const path = hash.replace('#/', '').trim();

        if (path && path !== '') {
            this.currentView = path;
            renderDetail(path);
        } else {
            this.currentView = null;
            renderHome();
        }

        renderSidebar(document.getElementById('app-sidebar'), this.currentView);
        this.closeSidebar();
        window.scrollTo(0, 0);
    }

    async performSearch(query) {
        openModal();
        setModalContent(renderSearchLoading());
        try {
            const results = await pubmedAPI.search(query, 10);
            setModalContent(renderSearchResults(results, query));
        } catch (error) {
            setModalContent(renderSearchError());
        }
    }

    toggleSidebar() {
        if (window.innerWidth > 768) {
            document.body.classList.toggle('sidebar-collapsed');
        } else {
            document.getElementById('app-sidebar')?.classList.toggle('open');
            document.getElementById('sidebar-overlay')?.classList.toggle('visible');
        }
    }
    closeSidebar() {
        document.getElementById('app-sidebar')?.classList.remove('open');
        document.getElementById('sidebar-overlay')?.classList.remove('visible');
    }
}

document.addEventListener('DOMContentLoaded', () => new App());

// PubMed E-utilities API integration
const BASE_URL = 'https://eutils.ncbi.nlm.nih.gov/entrez/eutils';

const pubmedAPI = {
    searchUrl: `${BASE_URL}/esearch.fcgi`,
    summaryUrl: `${BASE_URL}/esummary.fcgi`,
    fetchUrl: `${BASE_URL}/efetch.fcgi`,

    async search(query, maxResults = 10) {
        const params = new URLSearchParams({
            db: 'pubmed',
            term: `${query} AND (congenital heart disease OR cardiology)`,
            retmax: maxResults,
            retmode: 'json',
            sort: 'relevance'
        });
        const response = await fetch(`${this.searchUrl}?${params}`);
        if (!response.ok) throw new Error('Error en la búsqueda');
        const data = await response.json();
        const ids = data.esearchresult?.idlist || [];
        if (ids.length === 0) return [];
        return await this.fetchSummaries(ids);
    },

    async fetchSummaries(ids) {
        const params = new URLSearchParams({
            db: 'pubmed',
            id: ids.join(','),
            retmode: 'json'
        });
        const response = await fetch(`${this.summaryUrl}?${params}`);
        if (!response.ok) throw new Error('Error al obtener resúmenes');
        const data = await response.json();
        const results = [];
        for (const id of ids) {
            const article = data.result?.[id];
            if (article) {
                results.push({
                    id, title: article.title || 'Sin título',
                    authors: (article.authors || []).map(a => a.name).join(', '),
                    journal: article.fulljournalname || article.source || '',
                    pubDate: article.pubdate || '',
                    url: `https://pubmed.ncbi.nlm.nih.gov/${id}/`
                });
            }
        }
        return results;
    }
};

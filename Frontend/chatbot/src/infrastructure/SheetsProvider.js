import fetch from 'node-fetch';
import { parse } from 'csv-parse/sync';

export class SheetsProvider {
    constructor(url) {
        this.url = url;
    }

    async loadData() {
        try {
            const response = await fetch(this.url);
            if (!response.ok) throw new Error('Failed to fetch sheet data');
            const csvText = await response.text();
            return parse(csvText, { columns: true, skip_empty_lines: true });
        } catch (error) {
            console.error('SheetsProvider Error:', error);
            return [];
        }
    }
}

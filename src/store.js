import { reactive } from 'vue';

const store = reactive({
  events: [],
  specials: [],
  suggestions: [],
  async fetchEvents() {
    try {
      const response = await fetch('/api/events');
      const data = await response.json();
      this.events = data;
      return data;
    } catch (error) {
      console.error('Failed to fetch events:', error);
    }
  },
  async fetchSpecials() {
    try {
      const response = await fetch('/api/specials');
      const data = await response.json();
      this.specials = data;
      return data;
    } catch (error) {
      console.error('Failed to fetch specials:', error);
    }
  },
  async fetchSuggestions() {
    try {
      const response = await fetch('/api/suggestions');
      const data = await response.json();
      this.suggestions = data;
      return data;
    } catch (error) {
      console.error('Failed to fetch suggestions:', error);
    }
  },
  async saveEvents() {
    try {
      await fetch('/api/events', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(this.events)
      });
    } catch (error) {
      console.error('Failed to save events:', error);
    }
  },
  async saveSpecials() {
    try {
      await fetch('/api/specials', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(this.specials)
      });
    } catch (error) {
      console.error('Failed to save specials:', error);
    }
  },
  async saveSuggestions() {
    try {
      await fetch('/api/suggestions', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(this.suggestions)
      });
    } catch (error) {
      console.error('Failed to save suggestions:', error);
    }
  },
  addEvent(event) {
    this.events.push(event);
    this.saveEvents();
  },
  updateEvent(index, event) {
    this.events[index] = event;
    this.saveEvents();
  },
  deleteEvent(index) {
    this.events.splice(index, 1);
    this.saveEvents();
  },
  addSpecial(special) {
    this.specials.push(special);
    this.saveSpecials();
  },
  updateSpecial(index, special) {
    this.specials[index] = special;
    this.saveSpecials();
  },
  deleteSpecial(index) {
    this.specials.splice(index, 1);
    this.saveSpecials();
  },
  addSuggestion(suggestion) {
    this.suggestions.push(suggestion);
    this.saveSuggestions();
  },
  updateSuggestion(index, suggestion) {
    this.suggestions[index] = suggestion;
    this.saveSuggestions();
  },
  deleteSuggestion(index) {
    this.suggestions.splice(index, 1);
    this.saveSuggestions();
  }
});

export default store;

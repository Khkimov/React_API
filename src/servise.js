export default class SwapiService {

  _api = 'https://swapi.dev/api';

  async getResource(url) {
    const response = await fetch(`${this._api}${url}`);

    if (!response.ok) {
      throw new Error(`Could not fetch ${url}` + 
      `, received ${response.status}`)
    }
    return await response.json();
  }

  async getAllPeople() {
    const response = await this.getResource(`/people/`);
    return response.results;
  }

  getPerson(id) {
    return this.getResource(`/people/${id}/`);
  }

  async getAllPlanets() {
    const response = await this.getResource(`/planets/`);
    return response.results;
  }

  getPlanet(id) {
    return this.getResource(`/planets/${id}/`);
  }
}

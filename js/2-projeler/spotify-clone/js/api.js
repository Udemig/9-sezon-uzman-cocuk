class API {
  // Kurucu Metot
  constructor() {
    this.baseURL = "https://shazam.p.rapidapi.com";
    this.options = {
      method: "GET",
      headers: {
        "x-rapidapi-key": "d558ced200msh83331b669df11fap19702ajsnb7449c54e37d",
        "x-rapidapi-host": "shazam.p.rapidapi.com",
      },
    };
  }

  async getPopular() {
    // api isteği at
    const response = await fetch(
      `${this.baseURL}/v2/search?term=cem%20karaca`,
      this.options,
    );

    // api'dan gelen json verisini js nesnesine çevir
    const data = await response.json();

    const formattedData = data.results.songs.data;

    return formattedData;
  }

  async searchMusic(query) {
    // Dışarıdan verilen arama parametresine göre api isteği at
    const response = await fetch(
      `${this.baseURL}/v2/search?term=${query}`,
      this.options,
    );

    // json verisini js'e çevir
    const data = await response.json();

    const formattedData = data.results.songs.data;

    return formattedData;
  }
}

export default API;

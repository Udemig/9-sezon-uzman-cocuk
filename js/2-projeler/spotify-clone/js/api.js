class API {
  // Kurucu Metot
  constructor() {
    this.baseURL = "https://shazam.p.rapidapi.com";
    this.options = {
      method: "GET",
      headers: {
        "x-rapidapi-key": "d558ced200msh83331b669df11fap19702ajsnb7449c54e37d",
        "x-rapidapi-host": "shazam.p.rapidapi.com",
        "Content-Type": "application/json",
      },
    };
  }

  getPopular() {
    const response = fetch(
      `${this.baseURL}/v2/search?term=cem%20karaca`,
      this.options,
    );

    console.log(response);

    const data = response.json();

    console.log("data", data);
  }
}

export default API;

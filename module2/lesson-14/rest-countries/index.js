const getCountryInfo = countryName => {
    axios
      .get(`https://restcountries.com/v2/name/${countryName}`)
      .then(response => {
        console.log('Response from API is: ', response);
        const countryDetail = response.data[0];
        console.log('a single country details: ', countryDetail);
        document.getElementById('country-name').textContent = countryDetail.name;
        document.getElementById('country-capital').textContent = countryDetail.capital;
        document.getElementById('country-flag').src = countryDetail.flag;
        document.getElementById('country-name-input').value = '';
      })
      .catch(err => {
        console.log(err)
        err.response.status === 404 ? alert(`The country ${countryName} doesn't exist.`) : alert('Server error! Sorry.');
    });
  };
   
  document.getElementById('get-country-btn').addEventListener('click', () => {
    const userInput = document.getElementById('country-name-input').value;
    getCountryInfo(userInput);
  });
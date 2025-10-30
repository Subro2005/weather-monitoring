function getWeather() {
      const city = document.getElementById('cityInput').value.trim();
      const resultDiv = document.getElementById('result');

      if (!city) {
        resultDiv.innerHTML = "<p>Please enter a city name!</p>";
        return;
      }

      // Generate fake weather data
      const fakeTemp = (Math.random() * 15 + 15).toFixed(1); // between 15°C and 30°C
      const conditions = ["Sunny", "Cloudy", "Rainy", "Windy", "Stormy", "Foggy"];
      const fakeCondition = conditions[Math.floor(Math.random() * conditions.length)];
      const fakeHumidity = Math.floor(Math.random() * 40 + 40); // 40–80%

      // Show the fake result
      resultDiv.innerHTML = `
        <p><strong>City:</strong> ${city}</p>
        <p><strong>Temperature:</strong> ${fakeTemp}°C</p>
        <p><strong>Condition:</strong> ${fakeCondition}</p>
        <p><strong>Humidity:</strong> ${fakeHumidity}%</p>
      `;
    }
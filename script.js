const apiKey = "EegjhAyGkIlJacI6ghQ5wcDmY7F7LY9Ik84Vlbpo"; // Replace with your NASA API key

fetch(`https://api.nasa.gov/planetary/apod?api_key=${apiKey}`)
  .then(response => response.json())
  .then(data => {
    document.getElementById("title").textContent = data.title;
    
    const apodImage = document.getElementById("apodImage");
    const description = document.getElementById("description");

    if (data.media_type === "image") {
      apodImage.src = data.url;
      apodImage.style.display = "block";
      description.textContent = data.explanation;
    } else {
      // Handle video case
      apodImage.style.display = "none";
      description.innerHTML = `
        <a href="${data.url}" target="_blank">Click here to watch today's NASA video</a>
        <br><br>${data.explanation}
      `;
    }
  })
  .catch(error => {
    console.error("Error fetching APOD:", error);
    document.getElementById("title").textContent = "Failed to load NASA data";
  });

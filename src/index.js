document.addEventListener("DOMContentLoaded", () => {
  const searchBox = document.querySelector("#search_div");
  const searchedWord = document.querySelector("#searched_word_div");
  const phonetics = document.querySelector("#phonetics_div");
  const defination = document.querySelector("#defination_div");
  const synonym = document.querySelector("#synonym_div");

  searchBox.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
      const word = searchBox.value;
      console.log("word:", word);
      fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`)
        .then((response) => {
          console.log(response.status);
          return response.json();
        })
        .then((data) => {
          defination.innerHTML = "";
          
          data.forEach((element) => {
            searchedWord.innerHTML = `<p class="word_title">Word</p><p class="word">${element.word}</p>`;
            phonetics.innerHTML = `<p class="phonetic_title">Phonetic</p><p class="phonetics">${element.phonetics[1].text}</p>`;

            //retrieve part of speech
            element.meanings.forEach((meaning, index)=>{
              defination.innerHTML += `
              <h3>${meaning.partOfSpeech}</h3>`;
              
              let definationHTML = "<ol>"; //create an ordered list of definitions
              
              //retrieve the defination
              meaning.definitions.forEach((def, index)=>{
                definationHTML += `<li>${def.definition}</li>`;
              });
              definationHTML += "</ol>";
              defination.innerHTML += definationHTML; //add the ordered list of definitions to the div
              defination.innerHTML += "<div class='divider'></div>";

              console.log("DEF: ",meaning);
            });
            console.log("ELEM", element);
          });
        })
        .catch((error) => console.log(error));
    }
  });
});

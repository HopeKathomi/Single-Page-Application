function fetchWord(word) {
  return fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`)
    .then(async (response) => response.json())
    .catch(error=>console.log("Error: ", error));
}

function getPhonetics(object) {
  return object.phonetics[1].text;
   
}

function getAudio(object){
  return object.phonetics[0].audio;
  
}

function getPartOfSpeech(meanings) {
  let html = "<div class='divider'></div>";

  meanings.forEach((meaning) => {
    html += `<h3>${meaning.partOfSpeech}</h3>`;
    html += getDefinitions(meaning.definitions);
    html += getSynonym(meaning.synonyms);
    html += "<div class='divider'></div>";
  });

  return html;
}

function getDefinitions(definitions) {
  let html = "<ol>";
  definitions.forEach((def) => {
    html += `<li>${def.definition}</li>`;
  });
  html += "</ol>";
  return html;
}

function getExamples(){

}

function getSynonym(synonym){
  let html =""
  console.log("SYNONYM: ",synonym);
  
  if(synonym.length > 0){
    html += "<p class='synonyms_title'>Synonyms</p>"
    synonym.forEach((synonym) => {
      html += `<p class='synonyms'>${synonym}</p>`;
    });
  }
  return html;
}

function render(object, searchedWord, phonetics, audio, defination ) {
  console.log("ELEMENT: ", object);
  searchedWord.innerHTML = `<p class="word_title">Word</p><p class="word">${object.word}</p>`;
  phonetics.innerHTML = `<p class="phonetic_title">Phonetic</p><p class="phonetics">${getPhonetics(object)}</p>`;
  audio.innerHTML = "<button class='audio_button'>Play pronunciation</button>";
  defination.innerHTML = getPartOfSpeech(object.meanings);
}

document.addEventListener("DOMContentLoaded", () => {
    const searchInput= document.querySelector("#search_div");
    const searchedWord = document.querySelector("#searched_word_div");
    const phonetics = document.querySelector("#phonetics_div");
    const audio = document.querySelector("#audio_div");
    const defination = document.querySelector("#defination_div");
    const synonym = document.querySelector("#synonym_div");
    

  searchInput.addEventListener("keydown", (event) => {
    if (event.key !== "Enter") return;

    const word = searchInput.value.trim();
    if (!word) return;

    fetchWord(word).then((data) => {
      render(data[0], searchedWord, phonetics, audio, defination);
      audio.addEventListener("click",()=>{
        const audioLink = getAudio(data[0]);
        if (audioLink){
          const audio = new Audio(audioLink);
          audio.play();
        } else{
          console.log("audio not found")
        }
      })
    })    
  });

  
});
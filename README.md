````markdown
# 📖 Hoople Dictionary

A simple, responsive dictionary web application built with **HTML**, **CSS**, and **Vanilla JavaScript**. The application allows users to search for English words and displays their definitions, phonetics, pronunciation audio, examples, and synonyms using the **Free Dictionary API**.

---

## ✨ Features

- 🔍 Search for English words
- 📖 Display word definitions
- 🗣️ View phonetic pronunciation
- 🔊 Play pronunciation audio
- 📚 Display parts of speech
- 💡 Show usage examples (when available)
- 🤝 Display synonyms
- ⚡ Fast and lightweight (Vanilla JavaScript)

---

## 🛠️ Technologies Used

- HTML5
- CSS3
- JavaScript (ES6)
- Fetch API
- Free Dictionary API

---

## 📂 Project Structure

```text
.
├── index.html
├── README.md
├── src/
│   └── index.js
└── styles/
    └── index.css
```

---

## 🚀 Getting Started

### Prerequisites

You only need a modern web browser.

### Installation

1. Clone the repository.

```bash
git clone https://github.com/HopeKathomi/Single-Page-Application.git
```

2. Navigate to the project directory.

```bash
cd Single-Page-Application
```

3. Open the project using **Live Server** in VS Code or any local web server.

---

## 🎮 Usage

1. Enter an English word in the search box.
2. Press **Enter**.
3. View:
   - Word
   - Phonetic spelling
   - Pronunciation button
   - Parts of speech
   - Definitions
   - Example sentences
   - Synonyms
4. Click **Play Pronunciation** to hear the word.

---

## ⚙️ How It Works

The application performs the following steps:

1. Listens for the **Enter** key.
2. Sends a request to the Dictionary API using the Fetch API.
3. Receives the JSON response.
4. Extracts:
   - Word
   - Phonetics
   - Audio
   - Meanings
   - Definitions
   - Examples
   - Synonyms
5. Dynamically renders the information on the page.

---

## 📋 Main Functions

### `fetchWord(word)`

Fetches dictionary data from the API.

### `getPhonetics(object)`

Returns the phonetic pronunciation.

### `getAudio(object)`

Returns the pronunciation audio URL.

### `getPartOfSpeech(meanings)`

Generates the HTML for each part of speech.

### `getDefinitions(definitions)`

Creates an ordered list of definitions.

### `getExamples(definition)`

Displays example sentences if available.

### `getSynonym(synonyms)`

Displays synonyms for a meaning.

### `render(...)`

Updates the UI with the fetched data.

---

## 🌐 API

This project uses the **Free Dictionary API**.

Example endpoint:

```text
https://api.dictionaryapi.dev/api/v2/entries/en/hello
```

Example response:

```json
[
  {
    "word": "hello",
    "phonetics": [],
    "meanings": []
  }
]
```

---

## 📸 Screenshots

```text

screenshots/
├── home.png
├── results.png
└── pronunciation.png
```

---

## 🚧 Known Limitations

- Some words do not have pronunciation audio.
- Some entries do not include example sentences.
- Some words have no synonyms.
- The application depends on the availability of the Free Dictionary API.
- Temporary CORS issues may occur if the API service is unavailable.

---

## 🔮 Future Improvements

- [ ] Dark mode
- [ ] Search history
- [ ] Favorite words
- [ ] Antonyms
- [ ] Word origin
- [ ] Loading spinner
- [ ] Mobile-first responsive design
- [ ] Audio playback controls
- [ ] Recent searches

---

## 👨‍💻 Author

**Hope Kathomi**

---

## 📄 License

This project is licensed under the MIT License.
````

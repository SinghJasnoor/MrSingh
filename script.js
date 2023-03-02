// Days Calculator
const daysForm = document.querySelector('#days-calculator-form');
const daysResult = document.querySelector('#days-result');

daysForm.addEventListener('submit', (e) => {
  e.preventDefault();

  const startDate = new Date(e.target.elements['start-date'].value);
  const endDate = new Date(e.target.elements['end-date'].value);
  const days = Math.floor((endDate - startDate) / (1000 * 60 * 60 * 24));

  daysResult.innerHTML = `Total Days: ${days}`;
});

// Time Zone Converter
const timeZoneForm = document.querySelector('#time-zone-converter-form');
const timeZoneResult = document.querySelector('#time-zone-result');

timeZoneForm.addEventListener('submit', (e) => {
  e.preventDefault();

  const selectedTimeZone = e.target.elements['selected-time-zone'].value;
  const date = new Date(e.target.elements['date-time'].value);
  const utcOffset = date.getTimezoneOffset() / 60;
  const convertedDate = new Date(date.getTime() + utcOffset * 60 * 60 * 1000);

  timeZoneResult.innerHTML = `Date and Time in ${selectedTimeZone}: ${convertedDate.toLocaleString('en-US', { timeZone: selectedTimeZone })}`;
});

// Translator
const translatorForm = document.querySelector('#translator-form');
const translatedText = document.querySelector('#translated-text');

translatorForm.addEventListener('submit', async (e) => {
  e.preventDefault();

  const textToTranslate = e.target.elements['text-to-translate'].value;
  const selectedLanguage = e.target.elements['selected-language'].value;

  const response = await fetch(`https://api.mymemory.translated.net/get?q=${textToTranslate}&langpair=en|${selectedLanguage}`);
  const data = await response.json();

  translatedText.innerHTML = data.responseData.translatedText;
});

// Message Section
const messageSection = document.querySelector('#message-section');

messageSection.innerHTML = 'Thank You For Using This Tool, Hope it Helps!';

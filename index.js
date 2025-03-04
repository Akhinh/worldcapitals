import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;



let totalCorrect = 0;

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

let currentQuestion = {};

// GET home page
app.get("/", async (req, res) => {
  totalCorrect = 0;
  await nextQuestion();
  console.log(currentQuestion);
  res.render("index.ejs", { question: currentQuestion });
});

// POST a new post
app.post("/submit", (req, res) => {
  let answer = req.body.answer.trim();
  let isCorrect = false;
  if (currentQuestion.capital.toLowerCase() === answer.toLowerCase()) {
    totalCorrect++;
    console.log(totalCorrect);
    isCorrect = true;
  }

  nextQuestion();
  res.render("index.ejs", {
    question: currentQuestion,
    wasCorrect: isCorrect,
    totalScore: totalCorrect,
  });
});

async function nextQuestion() {
  const randomCountry = quiz[Math.floor(Math.random() * quiz.length)];

  currentQuestion = randomCountry;
}

let quiz = [
  { country: "Afghanistan", capital: "Kabul" },
  { country: "Aland Islands", capital: "Mariehamn" },
  { country: "Albania", capital: "Tirana" },
  { country: "Algeria", capital: "Algiers" },
  { country: "American Samoa", capital: "Pago Pago" },
  { country: "Andorra", capital: "Andorra la Vella" },
  { country: "Angola", capital: "Luanda" },
  { country: "Anguilla", capital: "The Valley" },
  { country: "Antarctica", capital: "" },
  { country: "Antigua And Barbuda", capital: "St. John's" },
  { country: "Argentina", capital: "Buenos Aires" },
  { country: "Armenia", capital: "Yerevan" },
  { country: "Aruba", capital: "Oranjestad" },
  { country: "Australia", capital: "Canberra" },
  { country: "Austria", capital: "Vienna" },
  { country: "Azerbaijan", capital: "Baku" },
  { country: "The Bahamas", capital: "Nassau" },
  { country: "Bahrain", capital: "Manama" },
  { country: "Bangladesh", capital: "Dhaka" },
  { country: "Barbados", capital: "Bridgetown" },
  { country: "Belarus", capital: "Minsk" },
  { country: "Belgium", capital: "Brussels" },
  { country: "Belize", capital: "Belmopan" },
  { country: "Benin", capital: "Porto-Novo" },
  { country: "Bermuda", capital: "Hamilton" },
  { country: "Bhutan", capital: "Thimphu" },
  { country: "Bolivia", capital: "Sucre" },
  { country: "Bosnia and Herzegovina", capital: "Sarajevo" },
  { country: "Botswana", capital: "Gaborone" },
  { country: "Brazil", capital: "Brasilia" },
  { country: "Brunei", capital: "Bandar Seri Begawan" },
  { country: "Bulgaria", capital: "Sofia" },
  { country: "Burkina Faso", capital: "Ouagadougou" },
  { country: "Burundi", capital: "Bujumbura" },
  { country: "Cambodia", capital: "Phnom Penh" },
  { country: "Cameroon", capital: "Yaounde" },
  { country: "Canada", capital: "Ottawa" },
  { country: "Cape Verde", capital: "Praia" },
  { country: "Central African Republic", capital: "Bangui" },
  { country: "Chad", capital: "N'Djamena" },
  { country: "Chile", capital: "Santiago" },
  { country: "China", capital: "Beijing" },
  { country: "Colombia", capital: "Bogotá" },
  { country: "Comoros", capital: "Moroni" },
  { country: "Congo", capital: "Brazzaville" },
  { country: "Democratic Republic of the Congo", capital: "Kinshasa" },
  { country: "Costa Rica", capital: "San Jose" },
  { country: "Côte d'Ivoire", capital: "Yamoussoukro" },
  { country: "Croatia", capital: "Zagreb" },
  { country: "Cuba", capital: "Havana" },
  { country: "Cyprus", capital: "Nicosia" },
  { country: "Czech Republic", capital: "Prague" },
  { country: "Denmark", capital: "Copenhagen" },
  { country: "Djibouti", capital: "Djibouti" },
  { country: "Dominica", capital: "Roseau" },
  { country: "Dominican Republic", capital: "Santo Domingo" },
  { country: "Ecuador", capital: "Quito" },
  { country: "Egypt", capital: "Cairo" },
  { country: "El Salvador", capital: "San Salvador" },
  { country: "Equatorial Guinea", capital: "Malabo" },
  { country: "Eritrea", capital: "Asmara" },
  { country: "Estonia", capital: "Tallinn" },
  { country: "Ethiopia", capital: "Addis Ababa" },
  { country: "Fiji", capital: "Suva" },
  { country: "Finland", capital: "Helsinki" },
  { country: "France", capital: "Paris" },
  { country: "Gabon", capital: "Libreville" },
  { country: "The Gambia", capital: "Banjul" },
  { country: "Georgia", capital: "Tbilisi" },
  { country: "Germany", capital: "Berlin" },
  { country: "Ghana", capital: "Accra" },
  { country: "Greece", capital: "Athens" },
  { country: "Grenada", capital: "St. George's" },
  { country: "Guatemala", capital: "Guatemala City" },
  { country: "Guinea", capital: "Conakry" },
  { country: "Guinea-Bissau", capital: "Bissau" },
  { country: "Guyana", capital: "Georgetown" },
  { country: "Haiti", capital: "Port-au-Prince" },
  { country: "Honduras", capital: "Tegucigalpa" },
  { country: "Hungary", capital: "Budapest" },
  { country: "Iceland", capital: "Reykjavik" },
  { country: "India", capital: "New Delhi" },
  { country: "Indonesia", capital: "Jakarta" },
  { country: "Iran", capital: "Tehran" },
  { country: "Iraq", capital: "Baghdad" },
  { country: "Ireland", capital: "Dublin" },
  { country: "Israel", capital: "Jerusalem" },
  { country: "Italy", capital: "Rome" },
  { country: "Jamaica", capital: "Kingston" },
  { country: "Japan", capital: "Tokyo" },
  { country: "Jordan", capital: "Amman" },
  { country: "Kazakhstan", capital: "Astana" },
  { country: "Kenya", capital: "Nairobi" },
  { country: "Kuwait", capital: "Kuwait City" },
  { country: "Kyrgyzstan", capital: "Bishkek" },
  { country: "Laos", capital: "Vientiane" },
  { country: "Latvia", capital: "Riga" },
  { country: "Lebanon", capital: "Beirut" },
  { country: "Lesotho", capital: "Maseru" },
  { country: "Liberia", capital: "Monrovia" },
  { country: "Libya", capital: "Tripoli" },
  { country: "Lithuania", capital: "Vilnius" },
  { country: "Luxembourg", capital: "Luxembourg" },
  { country: "Malaysia", capital: "Kuala Lumpur" },
  { country: "Maldives", capital: "Male" },
  { country: "Palestine", capital: "East Jerusalem" },
  { country: "United States", capital: "Washington, D.C." },
  { country: "United Kingdom", capital: "London" },
];


app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});


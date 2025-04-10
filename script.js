const teams = [
  //1
  {
    name: "Real Madrid",
    city: "Madrid",
    country: "Spain",
    topScorers: ["Ronaldo", "Benzema", "Hazard"],
    worldwideFansMillions: 798,
  },
  //2
  {
    name: "Barcelona",
    city: "Barcelona",
    country: "Spain",
    topScorers: ["Messi", "Suarez", "Puyol"],
    worldwideFansMillions: 738,
  },
  //3
  {
    name: "Manchester United",
    city: "Manchester",
    country: "England",
    topScorers: ["Cantona", "Rooney", "Ronaldo"],
    worldwideFansMillions: 755,
  },
  //4
  {
    name: "Manchester City",
    city: "Manchester",
    country: "England",
    topScorers: ["Sterling", "Aguero", "Haaland"],
    worldwideFansMillions: 537,
  },
  //5
  {
    name: "Brazil National Team",
    city: "Not applicable",
    country: "Brazil",
    topScorers: ["Ronaldinho", "Cafu", "Bebeto"],
    worldwideFansMillions: 950,
  },
  //6
  {
    name: "Argentina National Team",
    city: "Not applicable",
    country: "Argentina",
    topScorers: ["Messi", "Batistuta", "Maradona"],
    worldwideFansMillions: 888,
  },
  //7
  {
    name: "Atletico Madrid",
    city: "Madrid",
    country: "Spain",
    topScorers: ["Aragonés", "Griezmann", "Torez"],
    worldwideFansMillions: 400,
  },
];
async function addTeams() {
  const teamsCollection = collection(db, "teams");
  for (const team of teams) {
    try {
      await addDoc(teamsCollection, team);
      console.log(`Added ${team.name} successfully.`);
    } catch (e) {
      console.error(`Error adding ${team.name}: `, e);
    }
  }
}

addTeams();

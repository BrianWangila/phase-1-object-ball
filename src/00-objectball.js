function gameObject(object){
  return {
    home: {
      teamName: "Brooklyn Nets",
      colors: ["Black", "White"],
      players: {
        "Alan Anderson": {
          number: 0,
          shoe: 16,
          points: 22
        },
        "Reggies Evans" : {
          number: 30,
          shoe: 14,
          points: 12
        }
      }
    },
    away: "",
  }
}
console.log(gameObject())
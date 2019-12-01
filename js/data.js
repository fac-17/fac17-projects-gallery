console.log("data.js");

const data = {
  weeks: [
    // {
    //   week: "14-16",
    //   theme: "Tech For Better",
    //   projects: [
    //     {
    //       title: "UpSkillMe",
    //       img:
    //         "https://camo.githubusercontent.com/a1b879457e62d149e79cb7d96b314e9087b2bc95/68747470733a2f2f692e696d6775722e636f6d2f4d4470536b646b2e706e67",
    //       team: ["Andy", "Jack", "Tony", "Emmanuel"],
    //       github: "https://github.com/fac-17/UpSkillMe",
    //       description:
    //         "UpSkillMe was founded to provide young people with the opportunity to record, celebrate and gain maximum benefit from their achievements."
    //     },
    //     {
    //       title: "Generation Change",
    //       img:
    //         "https://camo.githubusercontent.com/c8e0ff2d670b22408802a8f0cdefd9b5e07dbd8d/68747470733a2f2f692e696d6775722e636f6d2f4b4739364333422e6a7067",
    //       team: ["Gigi", "Christine", "Sam", "Georgia"],
    //       github: "https://github.com/fac-17/Generation-Change",
    //       description:
    //         "A website that allows educators (teachers, scout leaders and anyone that works or volunteers with young adults) to find local social action projects for their young people."
    //     },
    //     {
    //       title: "My Body Back",
    //       img:
    //         "https://camo.githubusercontent.com/aaba1067da6b5933715e09d85a8de74dc36d6a29/68747470733a2f2f692e696d6775722e636f6d2f41474e4e6c74532e706e67",
    //       team: ["Sarah", "Francesca", "Gregor", "Martha"],
    //       github: "https://github.com/fac-17/My-Body-Back",
    //       description:
    //         "The app aims to provide support for people with experience of sexual assault. The app will encourage more people to go for a routince cervical screening (smear test)."
    //     },
    //     {
    //       title: "Autsera",
    //       img:
    //         "https://camo.githubusercontent.com/2a9d11d1232074bd3cee98ef6f3681a6deba0ef0/68747470733a2f2f692e696d6775722e636f6d2f4f5335617179472e706e67",
    //       team: ["Jan", "Reuben", "Leonie", "Victor"],
    //       github: "https://github.com/fac-17/Autsera",
    //       description:
    //         "An interactive game that makes social communication training for children with Autism effective, accessible, affordable and fun."
    //     }
    //   ]
    // },
    // {
    //   week: 13,
    //   theme: "ReactJS",
    //   projects: [
    //     {
    //       title: "Kool Kwiz",
    //       img:
    //         "https://user-images.githubusercontent.com/45820111/65767759-bc8ee900-e126-11e9-849f-f03e7667d4ff.png",
    //       team: ["Martha", "Georgia"],
    //       github: "https://github.com/fac-17/ReactWeek-Martha-Georgia",
    //       description:
    //         "A quiz game for kool kids where you can score points in your favourite category"
    //     },
    //     {
    //       title: "Guess the name",
    //       img: "assets/w13-names.png",
    //       team: ["Tony", "Andy"],
    //       github: "https://github.com/fac-17/tony-andy",
    //       description:
    //         "How good are you at remembering your GitHub buddies' names?"
    //     },
    //     {
    //       title: "Flee your followers",
    //       img: "assets/w13-flee.png",
    //       team: ["Leonie", "Jan"],
    //       github: "https://github.com/fac-17/leonie-jan-app",
    //       description: "A game where your aim is to flee your GitHub followers"
    //     },
    //     {
    //       title: "Sketchy Friends",
    //       img: "assets/w13-sketchy.png",
    //       team: ["Victor", "Gigi"],
    //       github: "https://github.com/fac-17/recatweek",
    //       description:
    //         "Search for my friends by GitHub username and try to draw them on a canvas"
    //     },
    //     {
    //       title: "Hula Heaven",
    //       img: "assets/w13-hula.png",
    //       team: ["Gregor", "Jack"],
    //       github: "https://github.com/fac-17/JackGreg",
    //       description:
    //         "A game for hula hoop lovers, see how well you can score!"
    //     },
    //     {
    //       title: "Face Name Game",
    //       img: "assets/w13-space4.png",
    //       team: ["Sam", "Reuben"],
    //       github: "https://github.com/fac-17/face-name-game",
    //       description: "The best face and name learning game ... EVER!"
    //     },
    //     {
    //       title: "Truth or Dare",
    //       img: "assets/w13-truth-or-dare.png",
    //       team: ["Christine", "Sarah", "Emmanuel"],
    //       github: "https://github.com/fac-17/SEFC",
    //       description:
    //         "The game app takes inspiration from the infamous Truth or Dare game. "
    //     }
    //   ]
    // },
    // {
    //   week: "10-12",
    //   theme: "Student Projects",
    //   projects: [
    //     {
    //       title: "Food Miles",
    //       img:
    //         "https://camo.githubusercontent.com/cddd190bc6c9499325016f61844e7105edafdb4b/68747470733a2f2f6d656469612e67697068792e636f6d2f6d656469612f7961786349484f354f675034592f67697068792e676966",
    //       team: ["Jack", "Jan", "Gigi", "Andy"],
    //       github: "https://github.com/fac-17/FFFF",
    //       description:
    //         "As a user, I need an easy way to find out how local my shopping list is by comparing supermarkets and where they source their food from."
    //     },
    //     {
    //       title: "NomNom",
    //       img:
    //         "https://camo.githubusercontent.com/3279d81da6412c5ba5a1ea261bb78fb564ac4eff/68747470733a2f2f692e696d6775722e636f6d2f536156343179522e706e67",
    //       team: ["Francesca", "Tony", "Martha", "Victor"],
    //       github: "https://github.com/fac-17/NomNom",
    //       description:
    //         "Build a planning meal app that suggest a week-long meal plans with common ingredients and provides healthy options in order to reduce food waste."
    //     },
    //     {
    //       title: "Meet me in the middle",
    //       img:
    //         "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4NCjwhLS0gR2VuZXJhdG9yOiBB%0D%0AZG9iZSBJbGx1c3RyYXRvciAxNi4wLjAsIFNWRyBFeHBvcnQgUGx1Zy1JbiAuIFNWRyBWZXJzaW9u%0D%0AOiA2LjAwIEJ1aWxkIDApICAtLT4NCjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBT%0D%0AVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzEx%0D%0ALmR0ZCI+DQo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkNhbHF1ZV8xIiB4bWxucz0iaHR0cDovL3d3%0D%0Ady53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hs%0D%0AaW5rIiB4PSIwcHgiIHk9IjBweCINCgkgd2lkdGg9IjExOC42cHgiIGhlaWdodD0iMTQxLjQxN3B4%0D%0AIiB2aWV3Qm94PSIwIDAgMTE4LjYgMTQxLjQxNyIgZW5hYmxlLWJhY2tncm91bmQ9Im5ldyAwIDAg%0D%0AMTE4LjYgMTQxLjQxNyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+DQo8Zz4NCgk8cGF0aCBmaWxsPSIj%0D%0ARkZGRkZGIiBzdHJva2U9IiMwMDAwMDAiIHN0cm9rZS13aWR0aD0iNCIgc3Ryb2tlLW1pdGVybGlt%0D%0AaXQ9IjEwIiBkPSJNNTkuMywyNC44MTdjLTMxLjY0NiwwLTU3LjMsMjUuNjU0LTU3LjMsNTcuMw0K%0D%0ACQljMCwzMS42NDYsMjUuNjU0LDU3LjMsNTcuMyw1Ny4zczU3LjI5OS0yNS42NTMsNTcuMjk5LTU3%0D%0ALjNDMTE2LjYsNTAuNDcyLDkwLjk0NiwyNC44MTcsNTkuMywyNC44MTd6IE01OS4zLDEyNi43NTEN%0D%0ACgkJYy0yNC42NSwwLTQ0LjYzMy0xOS45ODMtNDQuNjMzLTQ0LjYzNFMzNC42NSwzNy40ODQsNTku%0D%0AMywzNy40ODRjMjQuNjUxLDAsNDQuNjMzLDE5Ljk4Miw0NC42MzMsNDQuNjMzDQoJCVM4My45NTEs%0D%0AMTI2Ljc1MSw1OS4zLDEyNi43NTF6Ii8+DQoJPGNpcmNsZSBmaWxsPSJub25lIiBzdHJva2U9IiMw%0D%0AMDAwMDAiIHN0cm9rZS13aWR0aD0iNCIgc3Ryb2tlLW1pdGVybGltaXQ9IjEwIiBjeD0iNTkuMyIg%0D%0AY3k9IjEyLjc0MyIgcj0iMTAuNzQ0Ii8+DQoJPHBhdGggZD0iTTYzLjA5NCwyNC44MTdoLTcuNTg3%0D%0Adi05Ljg1NGMwLTEuMDcsMC44NjgtMS45MzgsMS45MzgtMS45MzhoMy43MTJjMS4wNywwLDEuOTM4%0D%0ALDAuODY3LDEuOTM4LDEuOTM4VjI0LjgxN3oiLz4NCgk8bGluZSBzdHJva2U9IiMwMDAwMDAiIHN0%0D%0Acm9rZS13aWR0aD0iNCIgc3Ryb2tlLW1pdGVybGltaXQ9IjEwIiB4MT0iNTkuMyIgeTE9IjM3LjQ4%0D%0ANCIgeDI9IjU5LjMiIHkyPSI0Ni44MTciLz4NCgk8bGluZSBzdHJva2U9IiMwMDAwMDAiIHN0cm9r%0D%0AZS13aWR0aD0iNCIgc3Ryb2tlLW1pdGVybGltaXQ9IjEwIiB4MT0iMjcuNzQiIHkxPSI1MC41NTci%0D%0AIHgyPSIzNC4zMzkiIHkyPSI1Ny4xNTYiLz4NCgk8bGluZSBzdHJva2U9IiMwMDAwMDAiIHN0cm9r%0D%0AZS13aWR0aD0iNCIgc3Ryb2tlLW1pdGVybGltaXQ9IjEwIiB4MT0iMTQuNjY3IiB5MT0iODIuMTE3%0D%0AIiB4Mj0iMjQiIHkyPSI4Mi4xMTciLz4NCgk8bGluZSBmaWxsPSJub25lIiBzdHJva2U9IiMwMDAw%0D%0AMDAiIHN0cm9rZS13aWR0aD0iNCIgc3Ryb2tlLW1pdGVybGltaXQ9IjEwIiB4MT0iMjcuNzQiIHkx%0D%0APSIxMTMuNjc4IiB4Mj0iMzQuMzM5IiB5Mj0iMTA3LjA3OCIvPg0KCTxsaW5lIHN0cm9rZT0iIzAw%0D%0AMDAwMCIgc3Ryb2tlLXdpZHRoPSI0IiBzdHJva2UtbWl0ZXJsaW1pdD0iMTAiIHgxPSI1OS4zIiB5%0D%0AMT0iMTI2Ljc1MSIgeDI9IjU5LjMiIHkyPSIxMTcuNDE3Ii8+DQoJPGxpbmUgc3Ryb2tlPSIjMDAw%0D%0AMDAwIiBzdHJva2Utd2lkdGg9IjQiIHN0cm9rZS1taXRlcmxpbWl0PSIxMCIgeDE9IjkwLjg2MSIg%0D%0AeTE9IjExMy42NzgiIHgyPSI4NC4yNjIiIHkyPSIxMDcuMDc4Ii8+DQoJPGxpbmUgc3Ryb2tlPSIj%0D%0AMDAwMDAwIiBzdHJva2Utd2lkdGg9IjQiIHN0cm9rZS1taXRlcmxpbWl0PSIxMCIgeDE9IjEwMy45%0D%0AMzQiIHkxPSI4Mi4xMTciIHgyPSI5NC42IiB5Mj0iODIuMTE3Ii8+DQoJPGxpbmUgZmlsbD0ibm9u%0D%0AZSIgc3Ryb2tlPSIjMDAwMDAwIiBzdHJva2Utd2lkdGg9IjQiIHN0cm9rZS1taXRlcmxpbWl0PSIx%0D%0AMCIgeDE9IjkwLjg2MSIgeTE9IjUwLjU1NyIgeDI9Ijg0LjI2MiIgeTI9IjU3LjE1NiIvPg0KCTxn%0D%0APg0KCQk8cG9seWdvbiBwb2ludHM9IjU5LjMsNTIuMTIxIDUxLjc0LDgyLjExNyA1OS4zLDExMi4x%0D%0AMTMgNjYuODYsODIuMTE3IAkJIi8+DQoJCTxwb2x5Z29uIHBvaW50cz0iODAuNTExLDYwLjkwNyA1%0D%0AMy45NTUsNzYuNzcxIDM4LjA5LDEwMy4zMjcgNjQuNjQ2LDg3LjQ2MyAJCSIvPg0KCQk8cG9seWdv%0D%0AbiBwb2ludHM9Ijg5LjI5Niw4Mi4xMTcgNTkuMyw3NC41NTggMjkuMzA1LDgyLjExNyA1OS4zLDg5%0D%0ALjY3OCAJCSIvPg0KCQk8cG9seWdvbiBwb2ludHM9IjgwLjUxMSwxMDMuMzI3IDY0LjY0Niw3Ni43%0D%0ANzEgMzguMDksNjAuOTA3IDUzLjk1NSw4Ny40NjMgCQkiLz4NCgk8L2c+DQoJPHBvbHlnb24gZmls%0D%0AbD0iI0ZGRUU0QyIgc3Ryb2tlPSIjMDAwMDAwIiBzdHJva2Utd2lkdGg9IjQiIHN0cm9rZS1taXRl%0D%0AcmxpbWl0PSIxMCIgcG9pbnRzPSI4My44MDEsNTcuNjE3IDUxLjc0LDc0LjU1OCANCgkJMzQuOCwx%0D%0AMDYuNjE3IDY2Ljg2LDg5LjY3OCAJIi8+DQoJPGNpcmNsZSBmaWxsPSIjRkZFRTRDIiBzdHJva2U9%0D%0AIiMwMDAwMDAiIHN0cm9rZS13aWR0aD0iNCIgc3Ryb2tlLW1pdGVybGltaXQ9IjEwIiBjeD0iNTku%0D%0AMyIgY3k9IjgyLjExNyIgcj0iOS4wMzEiLz4NCjwvZz4NCjwvc3ZnPg0K",
    //       team: ["Georgia", "Reuben", "Sarah", "Leonie"],
    //       github: "https://github.com/fac-17/Where-Should-We-Meet",
    //       description:
    //         "Hi! wave Welcome to Meet Me In The Middle - the web app that takes your round_pushpin location, takes your friend's round_pushpinlocation, and finds you a venue classical_building to meet at in the middle!"
    //     },
    //     {
    //       title: "PlantbaseMe",
    //       img:
    //         "https://github.com/fac-17/Plantbase-Me/blob/master/public/assets/Figma.png?raw=true",
    //       team: ["Sam", "Christine", "Gregor", "Emmanuel", "Colette"],
    //       github: "https://github.com/fac-17/Plantbase-Me",
    //       description:
    //         "Our app idea lets a user search for a non-vegan dish that they might be craving, and shows them a good alternative."
    //     }
    //   ]
    // },
    // {
    //   week: 8,
    //   theme: "ExpressJS & HandlebarsJS",
    //   projects: [
    //     {
    //       title: "Amazing, Adorable Animal Adoption Agency",
    //       img:
    //         "https://camo.githubusercontent.com/e8c6b092cd530156eaf0d6a6819a62db52d5d2ec/68747470733a2f2f692e696d6775722e636f6d2f464c6a53674f762e706e67",
    //       team: ["Francesca", "Jack", "Andy", "Gregor"],
    //       github: "https://github.com/fac-17/CFLM",
    //       description: "Build a server-rendered full-stack app"
    //     },
    //     {
    //       title: "Pearls of Wisdom",
    //       img:
    //         "https://camo.githubusercontent.com/86d6cd5523b35781bb8440f801d6f56b8a9bc15e/68747470733a2f2f692e696d6775722e636f6d2f785a336d4852732e706e67",
    //       team: ["Reuben", "Gigi", "Leonie", "Emmanuel"],
    //       github: "https://github.com/fac-17/BGIP",
    //       description:
    //         "Pearls of Wisdom is a quote taking app that allows users to log quotes and add them to a category"
    //     },
    //     {
    //       title: "Tarot Lady",
    //       img:
    //         "https://camo.githubusercontent.com/2bb706c3e2811be5650186cd5094cf00ae7cef25/68747470733a2f2f692e696d6775722e636f6d2f344c335a6f6b642e706e67",
    //       team: ["Georgia", "Jan", "Christine", "Victor"],
    //       github: "https://github.com/fac-17/DENK",
    //       description:
    //         "User visits a page and chooses his card, clicking on it. User is then transferred to a tarot reading side and can see the card and the description."
    //     },
    //     {
    //       title: "Fun FACts",
    //       img: "assets/w8-funfacts.png",
    //       team: ["Tony", "Sam", "Colette", "Sarah", "Martha"],
    //       github: "https://github.com/fac-17/JOHAS-Fun-FAC-ts",
    //       description: "Guess some fun FACts about FAC 17"
    //     }
    //   ]
    // },
    // {
    //   week: 7,
    //   theme: "Authentication",
    //   projects: [
    //     {
    //       title: "BugBears continued",
    //       img:
    //         "https://github.com/fac-17/Week7-Bugbears-continued/blob/master/public/bugbear-bear.png?raw=true",
    //       team: ["Martha", "Emmanuel", "Christine", "Andy"],
    //       github: "https://github.com/fac-17/Week7-Bugbears-continued",
    //       description: "An app to post about things that bug you"
    //     },
    //     {
    //       title: "LANGS",
    //       img: "https://i.imgur.com/ptPwdaX.jpg",
    //       team: ["Gigi", "Georgia", "Sarah", "Gregor", "Sam"],
    //       github: "https://github.com/fac-17/week-7-langs",
    //       description: "Login form with 2 fields - username and password"
    //     },
    //     {
    //       title: "SaVaGe Creator",
    //       img:
    //         "https://camo.githubusercontent.com/5c55e29e0749fdd0fb3ac6625e7a31ce14abc73e/68747470733a2f2f692e696d6775722e636f6d2f765167663370482e6a7067",
    //       team: ["Colette", "Leonie", "Jan", "Francesca"],
    //       github: "https://github.com/fac-17/SaVaGe",
    //       description: "SaVaGe Artwork Creator by Bumpy and The Midwives"
    //     },
    //     {
    //       title: "Final FACtasy",
    //       img:
    //         "https://camo.githubusercontent.com/51e55d26e251f2ac5c79f8751d34272256a0c642/68747470733a2f2f692e696d6775722e636f6d2f39574e597557562e6a7067",
    //       team: ["Reuben", "Jack", "Victor", "Tony"],
    //       github: "https://github.com/fac-17/Week6-DFIO",
    //       description:
    //         "A fantasy game where you purchase items to battle other users!"
    //     }
    //   ]
    // },
    // {
    //   week: 6,
    //   theme: "PostgreSQL",
    //   projects: [
    //     {
    //       title: "Final FACtasy",
    //       img:
    //         "https://camo.githubusercontent.com/51e55d26e251f2ac5c79f8751d34272256a0c642/68747470733a2f2f692e696d6775722e636f6d2f39574e597557562e6a7067",
    //       team: ["Reuben", "Jack", "Victor", "Tony"],
    //       github: "https://github.com/fac-17/Week6-DFIO",
    //       description:
    //         "A fantasy game where you purchase items to battle other users!"
    //     },
    //     {
    //       title: "BugBears",
    //       img:
    //         "https://camo.githubusercontent.com/87b68c36b5d9f4e031331dda13d9f851be050889/68747470733a2f2f692e696d6775722e636f6d2f6b354c4c374b6d2e706e67",
    //       team: ["Martha", "Emmanuel", "Christine", "Andy"],
    //       github: "https://github.com/fac-17/Week-6-BHKM-",
    //       description: "An app to post about things that bug you"
    //     },
    //     {
    //       title: "The Glash of The Glans",
    //       img: "https://i.imgur.com/ptPwdaX.jpg",
    //       team: ["Gigi", "Georgia", "Sarah", "Gregor"],
    //       github: "https://github.com/fac-17/week-6-glan",
    //       description:
    //         "A brave warrior enters their name and some personality traits and is returned the name of the glan they belong to. "
    //     },
    //     {
    //       title: "SaVaGe Creator",
    //       img:
    //         "https://camo.githubusercontent.com/5c55e29e0749fdd0fb3ac6625e7a31ce14abc73e/68747470733a2f2f692e696d6775722e636f6d2f765167663370482e6a7067",
    //       team: ["Colette", "Leonie", "Jan", "Francesca"],
    //       github: "https://github.com/fac-17/SaVaGe",
    //       description: "SaVaGe Artwork Creator by Bumpy and The Midwives"
    //     }
    //   ]
    // },
    {
      week: 5,
      theme: "NodeJS 2/2",
      projects: [
        {
          title: "What's the Weather?",
          img:
            "",
          team: ["Alex", "Maria", "Reda", "Renata"],
          github: "https://github.com/fac18/week5-EIJO-weatherAPI",
          description: "Discover the weather of any city in the world"
        },
        {
          title: "CryptoWatch",
          img:
            "",
          team: ["Gillian", "Jamie", "Judith", "Pat"],
          github: "https://github.com/fac18/week5-famk-backend-api",
          description:
            "Keep tabs on your favourite cryptocurrencies"
        },
        {
          title: "Weather App",
          img:
            "",
          team: ["Beth", "Nikke", "Reggie", "Roshan"],
          github: "https://github.com/fac18/week5-bcln-backend-api",
          description:
            "A weather checker site for weather and temperature"
        },
        {
          title: "Should I Go Outside?",
          img:
            "",
          team: ["Ayub", "Dan", "Kin", "Rosa"],
          github: "https://github.com/fac18/week-5-DARK-server-Api",
          description: "Should you go outside today? A crucial question"
        }
      ]
    },
    {
      week: 4,
      theme: "NodeJS 1/2",
      projects: [
        {
          title: "WTF: Where's The Food?",
          img: "",
          team: ["Jamie", "Kin", "Reda", "Roshan"],
          github: "",
          description:
            "Explore the national dish of any country using our autocomplete widget"
        },
        {
          title: "",
          img: "",
          team: [],
          github: "",
          description:
            ""
        },
        {
          title: "",
          img: "",
          team: [],
          github: "",
          description: ""
        },
        {
          title: "UK Heritage autocomplete",
          img: "assets/wk4-heritage.png",
          team: ["Alex", "Dan", "Judith", "Nikke"],
          github: "https://github.com/fac18/week4-gmno-autocomplete",
          description: "A UK world heritage sites autocomplete widget site"
        }
      ]
    },
    {
      week: 3,
      theme: "API",
      projects: [
        {
          title: "P(u)RRR",
          img: "assets/wk3-purrr.png",
          team: ["Pat", "Renata", "Rosa", "Roshan"],
          github: "https://github.com/fac18/week3-gmno-prrr-api",
          description: "Unleash your inner cat, take our quiz"
        },
        {
          title: "BDay Time Machine",
          img: "assets/wk3-bdaytime.png",
          team: ["Alex", "Dan", "Judith", "Nikke"],
          github: "https://github.com/fac18/week3-DFJL-bday-time-machine",
          description: "Go back to the day of your birth and discover the cultural touchstones"
        },
        {
          title: "Trial by Trivia",
          img: "assets/wk3-tbt.png",
          team: ["Beth", "Gillian", "Ayub", "Maria"],
          github: "https://github.com/fac18/week3-ABEH-trialbytrivia",
          description: "Try our tremendous trivia game"
        },
        {
          title: "Gifsthesia",
          img: "assets/wk3-gifsthesia.png",
          team: ["Jamie", "Kin", "Reda", "Roshan"],
          github: "https://github.com/fac18/week3-cikp-gifsthesia",
          description: "When we hear lyrics, we see GIFs. Can you decipher the songs from the UK top 50?"
        }
      ]
    },
    {
      week: 2,
      theme: "Testing: TDD",
      projects: [
        {
          title: "Dodo Todo",
          img: "assets/wk2-dodotodo.png",
          alt: "image of Dodo ToDo App",
          team: ["Beth", "Dan", "Pat", "Reda"],
          github: "https://github.com/fac18/week2-BDIM-fiasco",
          description: "Make your to-dos extinct with Dodo Todo"
        },
        {
          title: "Bear.Tings.To.Do",
          img: "assets/wk2-sbs.png",
          alt: "image of Bear Tings To Do App",
          team: ["Alex", "Gillian", "Kin", "Reggie"],
          github: "https://github.com/fac18/week2-ajnp-sbs-todolist",
          description: "A to-do app for bears"
        },
        {
          title: "To-Do App",
          img: "assets/wk2-cefg-todo.png",
          alt: "image of CEFG To-Do App",
          team: ["Judith", "Maria", "Rosa", "Roshan"],
          github: "https://github.com/fac18/week2-CEFG-To-do",
          description: "A serene to-do app"
        },
        {
          title: "KHOL To-Do",
          img: "assets/wk2-khol-todo.png",
          alt: "image of KHOL To-Do App",
          team: ["Ayub", "Jamie", "Nikke", "Renata"],
          github: "https://github.com/fac18/week-2-khol-todoapp",
          description: "A f.r.i.e.n.d-ly to-do app"
        }
      ]
    },
    {
      week: 1,
      theme: "Github Workflow",
      projects: [
        {
          title: "HuSSH",
          img: "assets/wk1-hussh.png",
          alt: "image of Hushh website",
          team: ["Judith", "Maria", "Rosa", "Roshan"],
          github: "https://github.com/fac18/hussh",
          description: "A webpage for a fictional Cybersecurity agency"
        },
        {
          title: "Dynamyk",
          img: "assets/wk1-dynamyk.png",
          alt: "image of Dynamyk website",
          team: ["Beth", "Dan", "Pat", "Reda"],
          github: "https://github.com/fac18/week1-BDIM-dynamyk-site",
          description: "Want to build a beautiful product to change the world? Check out our site!"
        },
        {
          title: "Screaming Bear Solutions",
          img: "assets/wk1-sbs.png",
          alt: "image of SBS website",
          team: ["Alex", "Gillian", "Kin", "Reggie"],
          github: "https://github.com/fac18/screaming-bear-solutions",
          description: "A website that displays the ethos of our growlingly great team"
        },
        {
          title: "KHOL",
          img: "assets/wk1-khol.png",
          alt: "image of KHOL website",
          team: ["Ayub", "Jamie", "Nikke", "Renata"],
          github: "https://github.com/fac18/week-1-khol",
          description: "A website for a f.r.i.e.n.d-ly web development agency"
        }
      ]
    }
  ],
  people: [
    {
      name: "Alex",
      handle: "AlexandraOM",
      img: "https://avatars0.githubusercontent.com/u/44403718?s=460&v=4"
    },
    {
      name: "Ayub",
      handle: "Ayub3"
    },
    {
      name: "Beth",
      handle: "bethanyios",
      img: "https://avatars1.githubusercontent.com/u/36175966?s=96&v=4"
    },
    {
      name: "Dan",
      handle: "plasticneuron",
      img: "https://avatars3.githubusercontent.com/u/29084012?s=96&v=4"
    },
    {
      name: "Gillian",
      handle: "yeo-yeo",
      img: "https://avatars1.githubusercontent.com/u/28454190?s=96&v=4"
    },
    {
      name: "Jamie",
      handle: "jc2820",
      img: "https://avatars2.githubusercontent.com/u/48565047?s=96&v=4"
    },
    {
      name: "Judith",
      handle: "jdy3"
    },
    {
      name: "Kin",
      handle: "kin-au"    
    },
    {
      name: "Maria",
      handle: "marialani"    
    },
    {
      name: "Nikke",
      handle: "nikkesan",
      img: "https://avatars3.githubusercontent.com/u/52974746?s=96&v=4"
    },
    {
      name: "Pat",
      handle: "pat-cki"
    },
    {
      name: "Reda",
      handle: "redahaq",
      img: "https://avatars3.githubusercontent.com/u/39345463?s=96&v=4"
    },
    {
      name: "Reggie",
      handle: "ReginaldJbeili"
    },
    {
      name: "Renata",
      handle: "renatajarmova",
      img: "https://avatars2.githubusercontent.com/u/41273801?s=96&v=4"
    },
    {
      name: "Rosa",
      handle: "rosalie-baxter"
    },
    {
      name: "Roshan",
      handle: "roshlarosh",
      img: "https://avatars1.githubusercontent.com/u/25162746?s=96&v=4"
    }
  ]
};

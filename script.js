const movieDictionary = [
    
    {
      id: 1,
      title: "Avengers: Endgame (2019)",
      rating: "⭐ 8.4",
      availbleOn: "Hotstar",
      genre: "Action",
      duration: "152min",
      imgUrl:
        "https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_UX67_CR0,0,67,98_AL_.jpg",
      movieUrl:
        "https://www.hotstar.com/in/movies/avengers-endgame/1260013556?utm_source=search&utm_medium=Aw&utm_campaign=00_mindshareindia2-Disney%2B-VIP-Shows-BMM_SVOD_Shw&utm_term=%2Bavengers%20%2Bendgame"
    },
    {
      id: 2,
      title: "The Mountain II (2016)",
      rating: "⭐ 8.8",
      availbleOn: "Amazon Prime",
      genre: "Action",
      duration: "152min",
      imgUrl:
        "https://m.media-amazon.com/images/M/MV5BN2I2NGMzMTItNWI4YS00MWRiLTliZTEtNzhjODE3NDcyZjQwXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_UY98_CR3,0,67,98_AL_.jpg",
      movieUrl:
        "https://www.amazon.com/Mountain-II-Caglar-Ertugrul/dp/B074T599M8"
    },
    {
      id: 3,
      title: "The Dark Knight (2008)",
      rating: "⭐ 9.0",
      availbleOn: "Amazon Prime",
      genre: "Action",
      duration: "152min",
      imgUrl:
        "https://m.media-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_UX67_CR0,0,67,98_AL_.jpg",
      movieUrl:
        "https://www.primevideo.com/detail/amzn1.dv.gti.c4b2f313-10cd-7644-696f-f1327ac44dba?ref=dvm_tt_wbr_pvs_piv&tag=imdbtag_tt_wbr_pvs_piv_in-21"
    },
    {
      id: 4,
      title: "Inception (2010)",
      rating: "⭐ 8.8",
      availbleOn: "Amazon Prime",
      genre: "Thriller",
      duration: "148min",
      imgUrl:
        "https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_UX67_CR0,0,67,98_AL_.jpg",
      movieUrl:
        "https://www.primevideo.com/detail/amzn1.dv.gti.4eb1c578-2d81-f757-917d-e4c16fbbfebe?ref=dvm_tt_wbr_pvs_piv&tag=imdbtag_tt_wbr_pvs_piv_in-21"
    },
    {
      id: 5,
      title: "Evaru (2019)",
      rating: "⭐ 8.2",
      availbleOn: "Amazon Prime",
      genre: "Thriller",
      duration: "118min",
      imgUrl:
        "https://m.media-amazon.com/images/M/MV5BYmNjMTE0ZjctYTc5MS00M2NmLThmNmItYmFlYWY1MmYzZWE4XkEyXkFqcGdeQXVyNDUyMzYyNDc@._V1_UY98_CR1,0,67,98_AL_.jpg",
      movieUrl:
        "https://www.primevideo.com/detail/amzn1.dv.gti.d4b68018-f280-9e5f-b929-6f79fc20944e?ref=dvm_tt_wbr_pvs_piv&tag=imdbtag_tt_wbr_pvs_piv_in-21"
    },

    {
      id: 6,
      title: "Vikram Vedha (2017)",
      rating: "⭐ 8.5",
      availbleOn: "Hotstar",
      genre: "Thriller",
      duration: "130min",
      imgUrl:
        "https://m.media-amazon.com/images/M/MV5BY2FiMTFmMzMtZDI2ZC00NDQyLWExYTUtOWNmZWM1ZDg5YjVjXkEyXkFqcGdeQXVyODIwMDI1NjM@._V1_UX67_CR0,0,67,98_AL_.jpg",
      movieUrl: "https://www.hotstar.com/in/movies/vikram-vedha/1000216088"
    },
    {
      id: 7,
      title: " The Matrix (1999)",
      rating: "⭐ 8.7",
      availbleOn: "Amazon Prime",
      genre: "Sci-Fi",
      duration: "136min",
      imgUrl:
        "https://m.media-amazon.com/images/M/MV5BNzQzOTk3OTAtNDQ0Zi00ZTVkLWI0MTEtMDllZjNkYzNjNTc4L2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_UX67_CR0,0,67,98_AL_.jpg",
      movieUrl:
        "https://www.primevideo.com/detail/amzn1.dv.gti.7eb1fb0b-a20f-7738-4bfb-c194cbd01942?ref=dvm_tt_wbr_pvs_piv&tag=imdbtag_tt_wbr_pvs_piv_in-21"
    },
    {
      id: 8,
      title: "Interstellar (2014)",
      rating: "⭐ 8.6",
      availbleOn: "Amazon Prime",
      genre: "Sci-Fi",
      duration: "169min",
      imgUrl:
        "https://m.media-amazon.com/images/M/MV5BZjdkOTU3MDktN2IxOS00OGEyLWFmMjktY2FiMmZkNWIyODZiXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_UX67_CR0,0,67,98_AL_.jpg",
      movieUrl:
        "https://www.primevideo.com/detail/amzn1.dv.gti.34b17cec-bc76-719d-001b-38f5c7cabde9?ref=dvm_tt_wbr_pvs_piv&tag=imdbtag_tt_wbr_pvs_piv_in-21"
    },
    {
      id: 9,
      title: "Mad Max: Fury Road (2015)",
      rating: "⭐ 8.1",
      availbleOn: "Amazon Prime",
      genre: "Sci-Fi",
      duration: "120min",
      imgUrl:
        "https://m.media-amazon.com/images/M/MV5BN2EwM2I5OWMtMGQyMi00Zjg1LWJkNTctZTdjYTA4OGUwZjMyXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_UX67_CR0,0,67,98_AL_.jpg",
      movieUrl:
        "https://www.primevideo.com/detail/amzn1.dv.gti.12b1c5a7-e664-7465-afbc-74d5411c4a9b?ref=dvm_tt_wbr_pvs_piv&tag=imdbtag_tt_wbr_pvs_piv_in-21"
    },
    {
      id: 10,
      title: "Chhichhore (2019)",
      rating: "⭐ 8.2",
      availbleOn: "Hotstar",
      genre: "Comedy",
      duration: "143min",
      imgUrl:
        "https://m.media-amazon.com/images/M/MV5BYjg2ZDI2YTYtN2EwYi00YWI5LTgyMWQtMWFkYmE3NmJkOGVhXkEyXkFqcGdeQXVyODE5NzE3OTE@._V1_UY98_CR0,0,67,98_AL_.jpg",
      movieUrl: "https://www.hotstar.com/in/movies/chhichhore/1260012713"
    },
    {
      id: 11,
      title: "Once Upon a Time..In Hollywood (2019)",
      rating: "⭐ 7.6",
      availbleOn: "Amazon Prime",
      genre: "Comedy",
      duration: "161min",
      imgUrl:
        "https://m.media-amazon.com/images/M/MV5BOTg4ZTNkZmUtMzNlZi00YmFjLTk1MmUtNWQwNTM0YjcyNTNkXkEyXkFqcGdeQXVyNjg2NjQwMDQ@._V1_UX67_CR0,0,67,98_AL_.jpg",
      movieUrl:
        "https://www.primevideo.com/detail/amzn1.dv.gti.2ab75432-96a8-3f8a-e623-ead336d992f8?ref=dvm_tt_wbr_pvs_piv&tag=imdbtag_tt_wbr_pvs_piv_in-21"
    },
    {
      id: 12,
      title: "Pokemon Detective Pikachu (2019)",
      rating: "⭐ 7.6",
      availbleOn: "Amazon Prime",
      genre: "Comedy",
      duration: "104min",
      imgUrl:
        "https://m.media-amazon.com/images/M/MV5BNDU4Mzc3NzE5NV5BMl5BanBnXkFtZTgwMzE1NzI1NzM@._V1_UX67_CR0,0,67,98_AL_.jpg",
      movieUrl:
        "https://www.primevideo.com/detail/amzn1.dv.gti.d4b8aa91-208d-b878-6fe9-6d9028d7fca2?ref=dvm_tt_wbr_pvs_piv&tag=imdbtag_tt_wbr_pvs_piv_in-21"
    }
  ];
const btns = document.querySelectorAll('.btn');
const container = document.getElementById('container');

btns.forEach(btn=>{
  btn.addEventListener('click',()=>{
      let moviesData = movieDictionary.filter(obj=>obj.genre===btn.getAttribute('data-name'));
  let data = '';
  moviesData.forEach(obj=>{
      data+=`<div class="card">
      <img src="${obj.imgUrl}">
      <div class="details">
          <p class="title">${obj.title}</p>
          <p>${obj.rating}</p>
          <p>Available on: ${obj.availbleOn}</p>
          <a href="${obj.movieUrl}">Watch Now</a>
      </div>
  </div>`
  })
  container.innerHTML = data;
  })
})
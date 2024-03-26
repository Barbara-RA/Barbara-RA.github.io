window.addEventListener('load', () => {    

  const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3ZTJmNmZkYWU3ZThlOWM0NDAyNGMzZTk0OTNhNmI5MiIsInN1YiI6IjY1ZmI3ZTA4MDQ3MzNmMDE3ZGU3MjE2NSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.-EHiUqrN9UYX17omikzC7w81GQ1GBk3j1Is2kpHQ92w'
      }
    };
    
  var language = 'pt-br';
  var page = 1;

  // Requisição para obter a lista de filmes populares
  fetch(`https://api.themoviedb.org/3/movie/popular?language=${language}&page=${page}`, options)
      .then(response => response.json())
      .then(filmes => {
          // Requisição para obter a lista de gêneros
          fetch(`https://api.themoviedb.org/3/genre/movie/list?language=${language}`, options)
              .then(response => response.json())
              .then(genresData => {
                  // mapa de IDs de gêneros para seus nomes correspondentes
                  const genreMap = new Map();
                  genresData.genres.forEach(genre => {
                    genreMap.set(genre.id, genre.name);
                  });
                  // Exibir os títulos e gêneros dos filmes
                  exibirTitulos(filmes.results, genreMap);
              })
              .catch(err => console.error(err));
      })
      .catch(err => console.error(err));
});

function exibirTitulos(filmes, genreMap){
  filmes.forEach(filme =>{
      var boxfilme = document.createElement('div');
      var tituloFilme= document.createElement('h2');
      var capaFilme = document.createElement('img');
      var generoFilme = document.createElement('p');
      var dataLancamento = document.createElement('p');
      var overview = document.createElement('p');
      var url ="https://image.tmdb.org/t/p/w500";
      capaFilme.setAttribute("src",`${url}${filme.poster_path}` );
      tituloFilme.textContent = filme.title;
      
      // Mapeando os IDs dos gêneros para seus nomes correspondentes
      const genreNames = filme.genre_ids.map(genreId => genreMap.get(genreId));
      generoFilme.textContent = "Gêneros: " + genreNames.join(', '); // Junta os nomes dos gêneros separados por vírgula
      
      dataLancamento.textContent = "Data de Lançamento: " + filme.release_date;
      overview.textContent = "Resumo: " + filme.overview;

      boxfilme.appendChild(tituloFilme);
      boxfilme.appendChild(capaFilme);
      boxfilme.appendChild(generoFilme);
      boxfilme.appendChild(dataLancamento);
      boxfilme.appendChild(overview);
      document.getElementById("boxFilmes").appendChild(boxfilme);
  });   
}
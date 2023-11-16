var listaFilmes = ['https://upload.wikimedia.org/wikipedia/pt/thumb/1/1b/Schoolrockposter.jpg/210px-Schoolrockposter.jpg', 
                   'https://media.fstatic.com/DjhdaLmpvfJaleMFTvM2aN1-zq8=/322x478/smart/filters:format(webp)/media/movies/covers/2016/08/chegada_2-1.jpg', 
                   'https://musicart.xboxlive.com/7/94fc5000-0000-0000-0000-000000000002/504/image.jpg', 
                   'https://upload.wikimedia.org/wikipedia/pt/7/76/10_Things_I_Hate_About_You.jpg', 
                   'https://upload.wikimedia.org/wikipedia/pt/c/c1/The_Matrix_Poster.jpg'];

var listaNomesFilmes = ['Escola de Rock', 'A Chegada', 'Homem-Aranha no AranhaVerso', '10 coisas que Eu Odeio em Você', 'Matrix'];

var indice = 0;

while (indice < listaFilmes.length) {
  if (listaFilmes[indice].endsWith(".jpg")) {
    document.write("<img src=" + listaFilmes[indice] + ">");
    document.write("<p>" + listaNomesFilmes[indice] + "</p>");
  }
  indice++;
}

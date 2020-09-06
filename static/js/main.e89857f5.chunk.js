(this["webpackJsonpmovie-react-app"]=this["webpackJsonpmovie-react-app"]||[]).push([[0],{27:function(e,a,t){e.exports=t(58)},32:function(e,a,t){},33:function(e,a,t){},34:function(e,a,t){},57:function(e,a,t){},58:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),c=t(25),i=t.n(c),o=(t(32),t(33),t(11)),m=t(1),l=t(7);var s=function(e){var a=e.setMenu,t=[{title:"Now Playing",url:"/movie/now_playing"},{title:"Trending",url:"/trending/movie/day"},{title:"Popular",url:"/movie/popular"},{title:"Top Rated",url:"/movie/top_rated"},{title:"Upcoming",url:"/movie/upcoming"},{title:"Discover",url:"/discover/movie"}],c=function(e){var n=document.querySelectorAll(".menu");n.forEach((function(e){return e.classList.remove("menuActive")})),n[e].classList.add("menuActive"),a(t[e].url)};return Object(n.useEffect)((function(){c(0)}),[]),r.a.createElement("div",{className:"menus"},r.a.createElement("div",{className:"appTitle"},"MovieApp"),t.map((function(e,a){return r.a.createElement("div",{onClick:function(){return c(a)},className:"menu",key:"menu"+a},r.a.createElement("div",{className:"title"},e.title))})))},u=(t(34),[28,12,16,35,80,99,18,10751,14,36,27,10402,9648,10749,878,10770,53,10752,37]),v=["Action","Adventure","Animation","Comedy","Crime","Documentary","Drama","Family","Fantasy","History","Horror","Music","Mystery","Romance","Science Fiction","TV Movie","Thriller","War","Western"];var d=function(e){var a=Object(n.useState)(""),t=Object(l.a)(a,2),r=t[0],c=t[1];return Object(n.useEffect)((function(){var a="";e.map((function(e){u.includes(e)&&(a+=", "+v[u.indexOf(e)])})),c(a)}),[r]),r.substr(1)};var p=function(e){var a=e.details;return r.a.createElement("div",{className:"movieCard"},r.a.createElement("div",{className:"vote_average"},a.vote_average),r.a.createElement("div",{className:"posterImg"},r.a.createElement("img",{src:"https://image.tmdb.org/t/p/w500/"+a.poster_path,alt:"poster"})),r.a.createElement("div",{className:"content"},r.a.createElement("div",{className:"title"},a.original_title),r.a.createElement("div",{className:"genres"},d(a.genre_ids))))},E=t(10),f=t.n(E);var g=function(e){var a=Object(n.useState)([]),t=Object(l.a)(a,2),r=t[0],c=t[1];Object(n.useEffect)((function(){i()}),[e]);var i=function(){var a="https://api.themoviedb.org/3"+e+"?api_key=85b891d38491973c0dff31bd631036b3";f.a.get(a).then((function(e){c(e.data.results)})).catch((function(e){console.log(e)}))};return{movieList:r}};var N=function(e){var a=e.url,t=g(a).movieList;return r.a.createElement("div",{className:"moviesList"},"undefined"!==t&&t.map((function(e,a){return r.a.createElement(o.b,{to:"/movie-react-app/movie/"+e.id,key:"movieCard"+a},r.a.createElement(p,{details:e}))})))};var h=function(){var e=Object(n.useState)("/movie/now_playing"),a=Object(l.a)(e,2),t=a[0],c=a[1];return Object(n.useEffect)((function(){}),[t]),r.a.createElement("div",{className:"HomePage"},r.a.createElement("div",{className:"pages sideBar"},r.a.createElement(s,{setMenu:c})),r.a.createElement("div",{className:"pages homeMovieBar"},r.a.createElement(N,{url:t})))};t(57);var b=function(e){var a=Object(n.useState)(""),t=Object(l.a)(a,2),r=t[0],c=t[1];Object(n.useEffect)((function(){i()}),[e]);var i=function(){var a="https://api.themoviedb.org/3/movie/"+e+"?api_key=85b891d38491973c0dff31bd631036b3";f.a.get(a).then((function(e){c(e.data)})).catch((function(e){console.log(e)}))};return{eachMovie:r}};var _=function(e){var a=e.movieId,t=b(a).eachMovie;return Object(n.useEffect)((function(){window.scrollTo(0,0)}),[t]),r.a.createElement("div",{className:"selectdMovie"},""!==t&&r.a.createElement("div",null,r.a.createElement("div",{className:"eachMBackImg"},r.a.createElement("img",{src:"https://image.tmdb.org/t/p/w500/"+t.backdrop_path})),r.a.createElement("div",{className:"posterAndInfo"},r.a.createElement("div",{className:"poster"},r.a.createElement("div",{className:"img"},r.a.createElement("img",{src:"https://image.tmdb.org/t/p/w500/"+t.poster_path}))),r.a.createElement("div",{className:"info"},r.a.createElement("div",{className:"Title"},t.original_title),r.a.createElement("div",{className:"YearAndGenre"},r.a.createElement("div",{className:"Year"},t.release_date),r.a.createElement("div",{className:"Genre"},t.genres.map((function(e,a){return e.name+(a!==t.genres.length-1?" / ":"")})))),r.a.createElement("div",{className:"Rating"},t.vote_average),r.a.createElement("div",{className:"TimeAndLang"},r.a.createElement("div",{className:"Time"},t.runtime," "),r.a.createElement("div",{className:"Lang"},t.spoken_languages.map((function(e,a){return e.name+(a!==t.spoken_languages.length-1?" , ":"")})))),r.a.createElement("div",{className:"ProductionCompany"},r.a.createElement("div",{className:"title"},"Production Companies"),t.production_companies.map((function(e,a){return e.name+(a!==t.production_companies.length-1?" / ":"")}))),r.a.createElement("div",{className:"ProductionCountry"},r.a.createElement("div",{className:"title"},"Production Countries"),t.production_countries.map((function(e,a){return e.name+(a!==t.production_countries.length-1?" / ":"")}))))),r.a.createElement("div",{className:"overview"},r.a.createElement("div",{className:"title"},"Overview"),r.a.createElement("div",{className:"content"},t.overview))))};var y=function(e){return r.a.createElement("div",{className:"eachMovie"},r.a.createElement(_,{movieId:e.match.params.id}),r.a.createElement("div",{className:"similarMovies"},r.a.createElement("div",{className:"similarMovieTitle"},"Similar Movies"),r.a.createElement(N,{url:"/movie/"+e.match.params.id+"/similar"})))};var w=function(){return r.a.createElement("div",{className:"App"},r.a.createElement(o.a,null,r.a.createElement(m.c,null,r.a.createElement(m.a,{exact:!0,path:"/movie-react-app/",component:h}),r.a.createElement(m.a,{path:"/movie-react-app/movie/:id",component:y}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(w,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[27,1,2]]]);
//# sourceMappingURL=main.e89857f5.chunk.js.map
let movies = [
    {
        name: "Avengers Endgame",
        poster: "https://mir-s3-cdn-cf.behance.net/project_modules/hd/be030e77758917.5c911d5121625.png",
        rating: 8.7,
        language: "english",
        description: "With the help of remaining allies, Avengers assemble once more",
        teaser: "Images_Videos/Avengers - Official Trailer.mp4"
    },
    {
        name:"Baahubali: The Beginning",
        poster:"https://c8.alamy.com/comp/2JE359T/prabhas-poster-baahubali-the-beginning-2015-2JE359T.jpg",
        rating:8.1,
        language: "telugu",
        description:"In the kingdom of mahismathi, shivudu falls in love with a young warrior woman.",
        teaser:"Images_Videos/Baahubali - The Beginning _Trailer.mp4"
    },
    {
        name:"Jersey",
        poster:"https://moviegalleri.net/wp-content/gallery/jersey-movie-posters-hd/jersey-movie-posters-hd-nani-shraddha-srinath-1195ba9.jpg",
        rating:9.2,
        language: "telugu",
        description:"Jersey is about a cricketer who quits cricket initially but decides to revive his career.",
        teaser:"Images_Videos/JERSEY.mp4"
    },
    {
        name:"Ala Vaikunthapurramuloo",
        poster:"https://i0.wp.com/www.socialnews.xyz/wp-content/uploads/2019/12/25/Ala-Vaikunthapurramuloo-Christmas-Poster-Still-.jpg?fit=1800%2C2550&quality=80&zoom=1&ssl=1",
        rating:7.8,
        language: "telugu",
        description:"The narrative revolves around Bantu (Allu Arjun), a skilled middle-class man who is despised",
        teaser:"Images_Videos/Ala Vaikunthapurramuloo_Teaser.mp4"
    },
    {
        name:"Maharshi",
        poster:"https://i0.wp.com/www.socialnews.xyz/wp-content/uploads/2019/05/08/Maharashi-Releasing-Today-Poster-1.jpg?fit=1536%2C2048&quality=80&zoom=1&ssl=1",
        rating:9.0,
        language: "telugu",
        description:"Rishi, a millionaire businessman, returns to his homeland, where he becomes the champion of poor and downtrodden ",
        teaser:"Images_Videos/Maharshi_Teaser.mp4"
    },
    {
        name:"Inception",   
        poster:"https://m.media-amazon.com/images/M/MV5BMjExMjkwNTQ0Nl5BMl5BanBnXkFtZTcwNTY0OTk1Mw@@._V1_.jpg",
        rating:9.1,
        language: "english",
        description:'The film stars Leonardo DiCaprio as a professional thief who steals information by infiltrating the subconscious of his targets. ',
        teaser:"Images_Videos/Inception.mp4"
    },
    {
        name:"fast and furious",
        poster:"https://m.media-amazon.com/images/I/61qTEPIUzML.jpg",
        rating:8.8,
        language: "english",
        description:'Fast & Furious (also known as The Fast and the Furious) is a media franchise centered on a series of action .',
        teaser:"Images_Videos/Fast & Furious 9.mp4"
    },
    {
        name:"Jawan",
        poster:"https://www.91-cdn.com/hub/wp-content/uploads/2023/10/Jawan.png",
        rating:9.5,
        language:"hindi",
        description:'Jawan is a powerful film that explores themes such as womens empowerment, the struggles of soldiers and farmers in India, relationships and responsibilities, and corruption. Set against a corrupt Indian system, the film follows a soldier who confronts the militarys corruption.',
        teaser:"Images_Videos/JAWAN.mp4"
    },
    {
        name:"RRR",
        poster:"https://stat5.bollywoodhungama.in/wp-content/uploads/2022/04/RRR-8-322x402.jpg",
        rating:7.0,
        language: "telugu",
        description:'RRR is a fictitious story about real events, focusing in on the colonialism of India at the hands of the British..',
        teaser:"Images_Videos/RRR_trailer.mp4"
    },
    {
        name:"KGF",
        poster:"https://static-koimoi.akamaized.net/wp-content/new-galleries/2018/12/kgf-chapter-1-movie-review-yashs-journey-from-style-to-stale-1.jpg",
        rating:8.5,
        language: "kanada",
        description:'In the film, Rocky, a high-ranking mercenary, working for a prominent gold mafia in Bombay.', 
        teaser:"Images_Videos/KGF.mp4"

    },
    {
        name:"puspha:the rule",
        poster:"https://i0.wp.com/telugubullet.com/wp-content/uploads/2020/04/Pushpa-Movie-Poster-1.jpg",
        rating:7.9,
        language: "telugu",
        description:'The movie all about smugling the red sandlewood.in this movie the main lead is allu',
        teaser:"Images_Videos/Pushpa 2 - The Rule.mp4"
    },
    {
        name:"jailer",
        poster:"https://i0.wp.com/moviegalleri.net/wp-content/uploads/2022/08/Rajinikanth-Jailer-Movie-First-Look-Poster-HD.jpg?resize=983%2C1536&ssl=1",
        rating:8.8,
        language: "tamil",
        description:'Muthuvel Pandian A Retired Jailer Who is leading happier life with his family.',
        teaser:"Images_Videos/Jailer.mp4"
    } 
];

function searchMovie(){
    let movieName = document.getElementById("search").value;
    // console.log(movieName);
    // movies.filter(function(movies){
    //     if (movies["name"] === movieName) ;

    // });

    if(movieName!==""){
        let result = movies.filter(function(movie){
            return movie.name.toUpperCase().includes(movieName.toUpperCase());
        });
       displayMovies(result);
        }
        else{
            displayMovies(movies);
        }
   
} 



let selectedLanguage = "all";

function filterByLanguage() {
    selectedLanguage = document.getElementById("language").value;
    searchMovie();
}

function searchMovie() {
    let movieName = document.getElementById("search").value;

    let result;
    if (movieName !== "") {
        result = movies.filter(function (movie) {
            return (
                movie.name.toUpperCase().includes(movieName.toUpperCase()) &&
                (selectedLanguage === "all" || movie.language === selectedLanguage)
            );
        });
    } else {
        result = movies.filter(function (movie) {
            return selectedLanguage === "all" || movie.language === selectedLanguage;
        });
    }

    displayMovies(result);
}

function toggleWishlist() {
    const wishlistSection = document.getElementById("wishlistSection");
    wishlistSection.style.display = (wishlistSection.style.display === "none" || wishlistSection.style.display === "") ? "block" : "none";
}

function addToWishlist(movieIndex) {
    wishlist.push(movies[movieIndex]);
    displayWishlist();
}

function displayWishlist() {
    const wishlistMoviesDiv = document.getElementById("wishlistMovies");
    wishlistMoviesDiv.innerHTML = "";

    wishlist.forEach((movie, index) => {
        wishlistMoviesDiv.innerHTML += `
            <div class="wishlist-movie">
                <img src="${movie.poster}" alt="${movie.name}">
                <p>${movie.name}</p>
            </div>
        `;
    });
}


function displayMovies(data){
    // let movieDIV = document.createElement("div");
    // movieDIV.classList.add("movie"); 

    // let overlayDIV = document.createElement("div");
    // overlayDIV.classList.add('overlay');

    // movieDIV.appendChild(overlayDIV);
    // console.log(movieDIV);

    document.getElementById("movies").innerHTML="";

    let htmlString = ``;
    for (let i =0;i<data.length;i++){
        htmlString=htmlString+`
        <div class="movie">
        <div class="overlay">
            <div class="video">
            <video controls >
            <source src="${data[i].teaser}" type="video/mp4"/>
            </video>
            </div>
            <div class="details">
               <h1>${data[i].name}</h1>
                <h2>IMDB : ${data[i].rating}</h2>
                <p>${data[i].description}</p>
            </div>
        </div>
        <img class="poster" src="${data[i].poster}" alt="poster">
    </div>
     `;
    }

    document.getElementById("movies").innerHTML = htmlString;
}
displayMovies(movies);
        // Movie database organized by mood and language
        const movieDatabase = {
            happy: [
                { title: "The Intouchables", year: 2011, language: "english", poster: "The Intouchables.jpeg", description: "A heartwarming comedy-drama about the unlikely friendship between a wealthy quadriplegic and his caregiver." },
                { title: "Sing Street", year: 2016, language: "english", poster: "Sing Street.jpeg", description: "A boy starting a band to impress a girl in 1980s Dublin, filled with great music and charm." },
                { title: "Little Miss Sunshine", year: 2006, language: "english", poster: "Little Miss Sunshine.jpg", description: "A dysfunctional family's cross-country road trip to a beauty pageant becomes a journey of self-discovery." },
                { title: "School of Rock", year: 2003, language: "english", poster: "School of Rock.jpeg", description: "A failed rock star poses as a substitute teacher and turns his class into a rock band." },
                { title: "3 Idiots", year: 2009, language: "hindi", poster: "3 Idiots.jpeg", description: "Two friends search for their long lost companion who inspired them to think differently, even as the rest of the world called them 'idiots'." },
                { title: "Chennai Express", year: 2013, language: "hindi", poster: "Chennai Express.jpeg", description: "A man traveling to scatter his father's ashes finds himself on a journey filled with love and adventure." },
                { title: "F2: Fun and Frustration", year: 2019, language: "telugu", poster: "F2.jpeg", description: "A comedy about two men who are frustrated with their wives' behavior and decide to teach them a lesson." },
                { title: "Maharshi", year: 2019, language: "telugu", poster: "Maharshi.jpeg", description: "A successful businessman returns to India and gets involved in helping farmers save their lands." },
                { title: "Comali", year: 2019, language: "tamil", poster: "Comali.jpeg", description: "A man who wakes up from a coma after 16 years tries to adapt to modern life with humorous results." },
                { title: "Kathi", year: 2014, language: "tamil", poster: "Kathi.jpeg", description: "A reformed criminal takes on a corrupt businessman who has harmed many people in society." }
            ],
            sad: [
                { title: "The Pursuit of Happyness", year: 2006, language: "english", poster: "The Pursuit of Happyness.jpg", description: "A struggling salesman takes custody of his son as he's poised to begin a life-changing professional career." },
                { title: "Manchester by the Sea", year: 2016, language: "english", poster: "Manchester by the Sea.jpeg", description: "A depressed uncle is asked to take care of his teenage nephew after the boy's father dies." },
                { title: "Marriage Story", year: 2019, language: "english", poster: "Marriage Story.jpeg", description: "A stage director and his actor wife struggle through a grueling, coast-to-coast divorce." },
                { title: "Blue Valentine", year: 2010, language: "english", poster: "Blue Valentine.jpeg", description: "The relationship of a contemporary married couple, charting their evolution over a span of years." },
                { title: "Taare Zameen Par", year: 2007, language: "hindi", poster: "Taare Zameen Par.jpeg", description: "A teacher helps a young boy with dyslexia overcome his disability and pursue his dreams." },
                { title: "My Name Is Khan", year: 2010, language: "hindi", poster: "My Name Is Khan.jpeg", description: "An Indian Muslim man with Asperger's syndrome takes a challenge to speak to the President of the United States." },
                { title: "Jersey", year: 2019, language: "telugu", poster: "Jersey.jpeg", description: "A failed cricketer decides to return to cricket in his late thirties driven by the desire to represent his son." },
                { title: "Mahanati", year: 2018, language: "telugu", poster: "Mahanati.jpeg", description: "The life story of legendary South Indian actress Savitri, from her rise to stardom to her tragic downfall." },
                { title: "96", year: 2018, language: "tamil", poster: "96.jpeg", description: "Two high school sweethearts meet at a reunion after 22 years and reminisce about their past." },
                { title: "Vaaranam Aayiram", year: 2008, language: "tamil", poster: "Vaaranam Aayiram.jpeg", description: "A grieving son recounts the story of his father's life and how it influenced his own journey." }
            ],
            excited: [
                { title: "Mad Max Fury Road", year: 2015, language: "english", poster: "Mad Max Fury Road.jpeg", description: "In a post-apocalyptic wasteland, a woman rebels against a tyrannical ruler with the help of a group of female prisoners." },
                { title: "Mission: Impossible - Fallout", year: 2018, language: "english", poster: "Mission Impossible - Fallout.jpg", description: "Ethan Hunt and his team race against time after a mission gone wrong." },
                { title: "Baby Driver", year: 2017, language: "english", poster: "Baby Driver.jpeg", description: "A talented getaway driver relies on the beat of his personal soundtrack to be the best." },
                { title: "Spider-Man: Into the Spider-Verse", year: 2018, language: "english", poster: "Spider-Man Into the Spider-Verse.jpeg", description: "Teen Miles Morales becomes Spider-Man and joins other Spider-People from various dimensions." },
                { title: "War", year: 2019, language: "hindi", poster: "War.jpeg", description: "An Indian soldier is assigned to eliminate his former mentor who has gone rogue." },
                { title: "Dhoom 3", year: 2013, language: "hindi", poster: "Dhoom 3.jpeg", description: "A circus owner seeks revenge against a bank that caused his father's suicide." },
                { title: "Saaho", year: 2019, language: "telugu", poster: "Saaho.jpeg", description: "An undercover cop becomes embroiled in a major crime syndicate's feuds." },
                { title: "Baahubali The Beginning", year: 2015, language: "telugu", poster: "Baahubali The Beginning.jpeg", description: "A young man embarks on a journey to avenge his father's death and reclaim his kingdom." },
                { title: "Sarkar", year: 2018, language: "tamil", poster: "Sarkar.jpeg", description: "A corporate businessman returns to India to vote but finds someone has already voted in his name." },
                { title: "Mersal", year: 2017, language: "tamil", poster: "Mersal.jpeg", description: "A magician and a doctor take revenge on the medical mafia for their family's tragic past." }
            ],
            relaxed: [
                { title: "The Secret Life of Walter Mitty", year: 2013, language: "english", poster: "The Secret Life of Walter Mitty.jpeg", description: "When his job along with that of his co-worker are threatened, Walter takes action." },
                { title: "Chef", year: 2014, language: "english", poster: "chef.jpg", description: "A chef who loses his restaurant job starts up a food truck to reclaim his creative freedom." },
                { title: "About Time", year: 2013, language: "english", poster: "About Time.jpeg", description: "A young man with the ability to time travel tries to change his past to improve his future." },
                { title: "The Grand Budapest Hotel", year: 2014, language: "english", poster: "The Grand Budapest Hotel.jpeg", description: "A concierge works at a famous European hotel and takes a lobby boy under his wing." },
                { title: "Zindagi Na Milegi Dobara", year: 2011, language: "hindi", poster: "Zindagi Na Milegi Dobara.jpeg", description: "Three friends decide to turn their fantasy vacation into reality on a trip across Spain." },
                { title: "Karwaan", year: 2018, language: "hindi", poster: "karwaan.jpg", description: "Two strangers and a girl embark on a road trip with a corpse after a mix-up at the hospital." },
                { title: "Mahanubhavudu", year: 2017, language: "telugu", poster: "mahanubhavudu.jpg", description: "A man with OCD falls in love with a village girl and follows her to her hometown." },
                { title: "Sammohanam", year: 2018, language: "telugu", poster: "sammohanam.jpg", description: "A children's book illustrator who dislikes the film industry falls for an actress." },
                { title: "Oh My Kadavule", year: 2020, language: "tamil", poster: "Oh My Kadavule.jpeg", description: "A man gets a second chance to save his marriage when he discovers it's arranged by God." },
                { title: "Kaathale Kaathale", year: 2021, language: "tamil", poster: "Kaathale Kaathale.jpeg", description: "A feel-good story about love, friendship, and finding purpose in life." }
            ],
            romantic: [
                { title: "The Notebook", year: 2004, language: "english", poster: "The Notebook.jpeg", description: "A poor yet passionate young man falls in love with a rich young woman, giving her a sense of freedom." },
                { title: "La La Land", year: 2016, language: "english", poster: "La La Land.jpeg", description: "A jazz pianist falls for an aspiring actress in Los Angeles as they both pursue their dreams." },
                { title: "Eternal Sunshine of the Spotless Mind", year: 2004, language: "english", poster: "Eternal Sunshine of the Spotless Mind.jpeg", description: "A couple undergoes a medical procedure to erase each other from their memories." },
                { title: "Before Sunrise", year: 1995, language: "english", poster: "Before Sunrise.jpeg", description: "A young man and woman meet on a train and spend one night together in Vienna." },
                { title: "Jab We Met", year: 2007, language: "hindi", poster: "Jab We Met.jpeg", description: "A depressed businessman meets a carefree girl who changes his perspective on life." },
                { title: "Yeh Jawaani Hai Deewani", year: 2013, language: "hindi", poster: "Yeh Jawaani Hai Deewani.jpeg", description: "A commitment-phobic career woman must choose between her boyfriend and her career." },
                { title: "Fidaa", year: 2017, language: "telugu", poster: "fidaa.jpg", description: "An NRI falls in love with a village belle when he visits India for his brother's wedding." },
                { title: "Geetha Govindam", year: 2018, language: "telugu", poster: "Geetha Govindam.jpeg", description: "A young lecturer falls for a girl who mistakes him for a pervert on their first meeting." },
                { title: "Vinnaithaandi Varuvaayaa", year: 2010, language: "tamil", poster: "Vinnaithaandi Varuvaayaa.jpeg", description: "An aspiring filmmaker falls in love with a girl who wants to become a dancer." },
                { title: "OK Kanmani", year: 2015, language: "tamil", poster: "OK Kanmani.jpeg", description: "Two young people in a live-in relationship deal with the concept of marriage." }
            ],
            scared: [
                { title: "Get Out", year: 2017, language: "english", poster: "Get Out.jpeg", description: "A young African-American visits his white girlfriend's parents for the weekend, where his simmering uneasiness gives way to a nightmare." },
                { title: "The Silence of the Lambs", year: 1991, language: "english", poster: "The Silence of the Lambs.jpeg", description: "A young FBI cadet must receive the help of an incarcerated and manipulative cannibal killer." },
                { title: "Hereditary", year: 2018, language: "english", poster: "hereditary.jpg", description: "A grieving family is haunted by tragic and disturbing occurrences." },
                { title: "The Shining", year: 1980, language: "english", poster: "The Shining.jpeg", description: "A family heads to an isolated hotel for the winter where an evil presence influences the father into violence." },
                { title: "Stree", year: 2018, language: "hindi", poster: "stree.jpg", description: "In a small town, an evil spirit abducts men in the night. Based on the urban legend of Nale Ba." },
                { title: "Bhoot", year: 2003, language: "hindi", poster: "bhoot.jpg", description: "A couple moves into a flat that's haunted by a previous tenant's spirit." },
                { title: "Gruham", year: 2017, language: "telugu", poster: "gruham.jpg", description: "A neurosurgeon's life takes a turn when he has to operate on a young girl with paranormal powers." },
                { title: "Arundhati", year: 2009, language: "telugu", poster: "arundhati.jpg", description: "A young woman must embrace her ancestor's powers to defeat an evil sorcerer." },
                { title: "Pizza", year: 2012, language: "tamil", poster: "pizza.jpg", description: "A pizza delivery boy gets trapped in a house where he encounters supernatural events." },
                { title: "Demonte Colony", year: 2015, language: "tamil", poster: "Demonte Colony.jpeg", description: "Four friends decide to spend a night at a haunted colony and face terrifying consequences." }
            ],
            thriller: [
                { title: "Prisoners", year: 2013, language: "english", poster: "prisoners.jpg", description: "When his daughter and her friend go missing, a father takes matters into his own hands as the police pursue multiple leads." },
                { title: "Gone Girl", year: 2014, language: "english", poster: "Gone Girl.jpeg", description: "With his wife's disappearance becoming the focus of an intense media circus, a man sees the spotlight turned on him when it's suspected that he may not be innocent." },
                { title: "Nightcrawler", year: 2014, language: "english", poster: "nightcrawler.jpg", description: "A driven young man stumbles upon the underground world of L.A. freelance crime journalism." },
                { title: "Shutter Island", year: 2010, language: "english", poster: "Shutter Island.jpeg", description: "In 1954, a U.S. Marshal investigates the disappearance of a murderer who escaped from a hospital for the criminally insane." },
                { title: "Drishyam", year: 2015, language: "hindi", poster: "drishyam.jpg", description: "A man goes to extreme lengths to save his family from the dark side of the law after they commit an unexpected crime." },
                { title: "Andhadhun", year: 2018, language: "hindi", poster: "andhadhun.jpg", description: "A series of mysterious events change the life of a blind pianist who now must report a crime that he witnessed." },
                { title: "Kshanam", year: 2016, language: "telugu", poster: "kshanam.jpg", description: "A man returns to India to help his ex-girlfriend find her missing daughter, only to discover a complex conspiracy." },
                { title: "HIT The First Case", year: 2020, language: "telugu", poster: "HIT The First Case.jpeg", description: "A cop with a traumatic past takes on the case of a missing woman while dealing with his own demons." },
                { title: "Ratsasan", year: 2018, language: "tamil", poster: "ratsasan.jpg", description: "A police officer is on the trail of a serial killer who targets schoolgirls." },
                { title: "Visaranai", year: 2015, language: "tamil", poster: "visaranai.jpg", description: "Four immigrants get wrongfully accused of a crime and become pawns in a game of corruption and power." }
            ],
            horror: [
                { title: "The Witch", year: 2015, language: "english", poster: "The Witch.jpeg", description: "A family in 1630s New England is torn apart by the forces of witchcraft, black magic, and possession." },
                { title: "It Follows", year: 2014, language: "english", poster: "It Follows.jpeg", description: "A young woman is followed by an unknown supernatural force after a sexual encounter." },
                { title: "The Babadook", year: 2014, language: "english", poster: "The Babadook.jpeg", description: "A single mother and her child fall into a deep well of paranoia when an eerie children's book titled 'Mister Babadook' manifests in their home." },
                { title: "Hereditary", year: 2018, language: "english", poster: "hereditary.jpg", description: "A grieving family is haunted by tragic and disturbing occurrences following the death of their secretive grandmother." },
                { title: "Tumbbad", year: 2018, language: "hindi", poster: "tumbbad.jpg", description: "A mythological story about a goddess who created the entire universe and a man who built a temple for her." },
                { title: "Pari", year: 2018, language: "hindi", poster: "pari.jpg", description: "A man tries to help a woman who has escaped from a cult that intends to use her to bring back Satan's son." },
                { title: "Avunu", year: 2012, language: "telugu", poster: "avunu.jpg", description: "A newly married couple moves into a house where the wife feels an unseen presence watching her." },
                { title: "Raju Gari Gadhi", year: 2015, language: "telugu", poster: "Raju Gari Gadhi.jpeg", description: "A group of youngsters visits a haunted resort for a reality show and encounters supernatural events." },
                { title: "Maya", year: 2015, language: "tamil", poster: "maya.jpg", description: "A single mother and aspiring actress is connected to the mysterious deaths at a film studio." },
                { title: "Pisaasu", year: 2014, language: "tamil", poster: "pisaasu.jpg", description: "A man is haunted by the ghost of a woman whose life he failed to save in a road accident." }
            ],
            thoughtful: [
                { title: "Interstellar", year: 2014, language: "english", poster: "interstellar.jpg", description: "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival." },
                { title: "Inception", year: 2010, language: "english", poster: "inception.jpg", description: "A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea." },
                { title: "The Tree of Life", year: 2011, language: "english", poster: "The Tree of Life.jpeg", description: "The story of a family in Waco, Texas in 1956, exploring the meaning of existence." },
                { title: "Cloud Atlas", year: 2012, language: "english", poster: "Cloud Atlas.jpeg", description: "An exploration of how the actions of individual lives impact one another in the past, present and future." },
                { title: "Ship of Theseus", year: 2012, language: "hindi", poster: "Ship of Theseus.jpeg", description: "Three stories about a photographer, a monk, and a stockbroker that explore identity, justice, beauty, and meaning." },
                { title: "Masaan", year: 2015, language: "hindi", poster: "masaan.jpg", description: "Four lives intersect along the Ganges river: a low-caste boy in a hopeless love, a daughter ridden with guilt, a father with a loss, and a spirited child." },
                { title: "Co Kancharapalem", year: 2018, language: "telugu", poster: "Co Kancharapalem.jpeg", description: "Four love stories across age groups and how societal pressures and prejudices impact them." },
                { title: "Rangasthalam", year: 2018, language: "telugu", poster: "rangasthalam.jpg", description: "A hearing-impaired man confronts a corrupt system in his village." },
                { title: "Super Deluxe", year: 2019, language: "tamil", poster: "Super Deluxe.jpeg", description: "An anthology film exploring the interconnected stories of various characters dealing with morality, identity, and fate." },
                { title: "Aruvi", year: 2017, language: "tamil", poster: "aruvi.jpg", description: "A social drama about a young woman's journey through societal pressures, consumer culture, and a desire for rebellion." }
            ],
            nostalgic: [
                { title: "The Breakfast Club", year: 1985, language: "english", poster: "The Breakfast Club.jpeg", description: "Five high school students meet in Saturday detention and discover how they have a lot more in common than they thought." },
                { title: "Stand By Me", year: 1986, language: "english", poster: "Stand By Me.jpeg", description: "After learning of the death of a boy, four friends set out to find his body, experiencing a journey of self-discovery." },
                { title: "Forrest Gump", year: 1994, language: "english", poster: "Forrest Gump.jpeg", description: "The story of a man with a low IQ who accomplished great things in his life and was present during significant historic events." },
                { title: "Dead Poets Society", year: 1989, language: "english", poster: "Dead Poets Society.jpeg", description: "An English teacher inspires his students through poetry and seizing the day." },
                { title: "Dil Chahta Hai", year: 2001, language: "hindi", poster: "Dil Chahta Hai.jpeg", description: "Three inseparable childhood friends whose friendship is tested after they grow up and follow different paths." },
                { title: "Lakshya", year: 2004, language: "hindi", poster: "lakshya.jpg", description: "An aimless youth finds purpose when he joins the Indian Army and matures into a battlefield hero." },
                { title: "Bommarillu", year: 2006, language: "telugu", poster: "bommarillu.jpg", description: "A young man struggles to escape his overprotective father and find his own identity." },
                { title: "Godavari", year: 2006, language: "telugu", poster: "godavari.jpg", description: "A journey along the Godavari river becomes a metaphor for the journey of life for a group of passengers." },
                { title: "Autograph", year: 2004, language: "tamil", poster: "autograph.jpg", description: "A man revisits his past by inviting all the important people from his life to his wedding." },
                { title: "Vaaranam Aayiram", year: 2008, language: "tamil", poster: "Vaaranam Aayiram.jpeg", description: "A son reminisces about his father's life and the influence it had on shaping his own journey." }
            ]

        };
        
        // Language translations
        const translations = {
            en: {
                "tagline": "Find the perfect movie for your mood",
                "happy": "Happy",
                "sad": "Sad",
                "excited": "Excited",
                "relaxed": "Relaxed",
                "romantic": "Romantic",
                "scared": "Scared",
                "thriller": "Thriller",
                "horror": "Horror",
                "thoughtful": "Thoughtful",
                "nostalgic": "Nostalgic",
                "movie-language": "Movie Language",
                "all-languages": "All Languages",
                "english": "English",
                "hindi": "Hindi",
                "telugu": "Telugu",
                "tamil": "Tamil",
                "movies-for": "Movies for when you're feeling:",
                "no-results": "No movies found matching your mood and language selection. Try changing your filters.",
                "copyright": "© 2025 MoodFlix - Your personal mood-based movie recommender"
            },
            es: {
                "tagline": "Encuentra la película perfecta para tu estado de ánimo",
                "happy": "Feliz",
                "sad": "Triste",
                "excited": "Emocionado",
                "relaxed": "Relajado",
                "romantic": "Romántico",
                "scared": "Asustado",
                "thriller": "Suspense",
                "horror": "Terror",
                "thoughtful": "Reflexivo",
                "nostalgic": "Nostálgico",
                "movie-language": "Idioma de la Película",
                "all-languages": "Todos los Idiomas",
                "english": "Inglés",
                "hindi": "Hindi",
                "telugu": "Telugu",
                "tamil": "Tamil",
                "movies-for": "Películas para cuando te sientes:",
                "no-results": "No se encontraron películas que coincidan con tu estado de ánimo y selección de idioma. Intenta cambiar tus filtros.",
                "copyright": "© 2025 MoodFlix - Tu recomendador personal de películas basado en el estado de ánimo"
            },
            fr: {
                "tagline": "Trouvez le film parfait pour votre humeur",
                "happy": "Heureux",
                "sad": "Triste",
                "excited": "Excité",
                "relaxed": "Détendu",
                "romantic": "Romantique",
                "scared": "Effrayé",
                "thriller": "Suspense",
                "horror": "Horreur",
                "thoughtful": "Réfléchi",
                "nostalgic": "Nostalgique",
                "movie-language": "Langue du Film",
                "all-languages": "Toutes les Langues",
                "english": "Anglais",
                "hindi": "Hindi",
                "telugu": "Telugu",
                "tamil": "Tamil",
                "movies-for": "Films pour quand vous vous sentez:",
                "no-results": "Aucun film trouvé correspondant à votre humeur et à votre sélection de langue. Essayez de modifier vos filtres.",
                "copyright": "© 2025 MoodFlix - Votre recommandeur personnel de films basé sur l'humeur"
            },
            de: {
                "tagline": "Finden Sie den perfekten Film für Ihre Stimmung",
                "happy": "Glücklich",
                "sad": "Traurig",
                "excited": "Aufgeregt",
                "relaxed": "Entspannt",
                "romantic": "Romantisch",
                "scared": "Ängstlich",
                "thriller": "Thriller",
                "horror": "Horror",
                "thoughtful": "Nachdenklich",
                "nostalgic": "Nostalgisch",
                "movie-language": "Filmsprache",
                "all-languages": "Alle Sprachen",
                "english": "Englisch",
                "hindi": "Hindi",
                "telugu": "Telugu",
                "tamil": "Tamil",
                "movies-for": "Filme für wenn Sie sich fühlen:",
                "no-results": "Keine Filme gefunden, die Ihrer Stimmung und Sprachauswahl entsprechen. Versuchen Sie, Ihre Filter zu ändern.",
                "copyright": "© 2025 MoodFlix - Ihr persönlicher stimmungsbasierter Filmempfehler"
            },
            jp: {
                "tagline": "あなたの気分に合った完璧な映画を見つけましょう",
                "happy": "幸せ",
                "sad": "悲しい",
                "excited": "ワクワク",
                "relaxed": "リラックス",
                "romantic": "ロマンチック",
                "scared": "怖い",
                "thriller": "スリラー",
                "horror": "ホラー",
                "thoughtful": "思慮深い",
                "nostalgic": "懐かしい",
                "movie-language": "映画の言語",
                "all-languages": "すべての言語",
                "english": "英語",
                "hindi": "ヒンディー語",
                "telugu": "テルグ語",
                "tamil": "タミル語",
                "movies-for": "あなたが感じている時のための映画:",
                "no-results": "あなたの気分と言語の選択に一致する映画が見つかりませんでした。フィルターを変更してみてください。",
                "copyright": "© 2025 MoodFlix - あなたの気分に基づいた個人的な映画レコメンダー"
            }
        };
        
        // DOM elements
        const moodButtons = document.querySelectorAll('.mood-btn');
        const languageFilters = document.querySelectorAll('.movie-language-filter');
        const languageButtons = document.querySelectorAll('.language-btn');
        const resultsContainer = document.getElementById('results');
        const movieGrid = document.getElementById('movie-grid');
        const selectedMoodText = document.getElementById('selected-mood');
        const noResultsMessage = document.getElementById('no-results');
        
        // Current selections
        let currentMood = '';
        let currentLanguage = 'all';
        let currentUILanguage = 'en';
        
        // Apply translations
        function applyTranslations(lang) {
            currentUILanguage = lang;
            document.querySelectorAll('[data-i18n]').forEach(element => {
                const key = element.getAttribute('data-i18n');
                if (translations[lang][key]) {
                    element.textContent = translations[lang][key];
                }
            });
            
            // Handle dynamic translations
            if (currentMood && selectedMoodText) {
                const moodKey = currentMood;
                selectedMoodText.textContent = translations[lang][moodKey] || moodKey;
            }
        }
        
        // Render movies
        function renderMovies(mood, language) {
            // Clear current movies
            movieGrid.innerHTML = '';
            
            if (!movieDatabase[mood]) {
                noResultsMessage.style.display = 'block';
                return;
            }
            
            // Filter movies by language if needed
            let movies = movieDatabase[mood];
            if (language !== 'all') {
                movies = movies.filter(movie => movie.language === language);
            }
            
            // Check if we have any results
            if (movies.length === 0) {
                noResultsMessage.style.display = 'block';
                return;
            }
            
            noResultsMessage.style.display = 'none';
            
            // Render each movie
            movies.forEach(movie => {
                const movieCard = document.createElement('div');
                movieCard.className = 'movie-card';
                
                const languageTag = document.createElement('div');
                languageTag.className = 'movie-language-tag';
                languageTag.textContent = movie.language.charAt(0).toUpperCase() + movie.language.slice(1);
                
                const poster = document.createElement('div');
                poster.className = 'movie-poster';
                
                if (movie.poster) {
                    // You would replace this with actual image loading logic
                    poster.innerHTML = `<img src="./movieimages/${movie.poster}" alt="${movie.title} poster" />`;
                } else {
                    poster.textContent = 'No Poster Available';
                }

                
                const info = document.createElement('div');
                info.className = 'movie-info';
                
                const title = document.createElement('div');
                title.className = 'movie-title';
                title.textContent = movie.title;
                
                const year = document.createElement('div');
                year.className = 'movie-year';
                year.textContent = movie.year;
                
                const desc = document.createElement('div');
                desc.className = 'movie-desc';
                desc.textContent = movie.description;
                
                info.appendChild(title);
                info.appendChild(year);
                info.appendChild(desc);
                
                movieCard.appendChild(languageTag);
                movieCard.appendChild(poster);
                movieCard.appendChild(info);
                
                movieGrid.appendChild(movieCard);
            });
        }
        
        // Handle mood selection
        moodButtons.forEach(button => {
            button.addEventListener('click', function() {
                // Remove active class from all buttons
                moodButtons.forEach(btn => btn.classList.remove('active'));
                
                // Add active class to the clicked button
                this.classList.add('active');
                
                // Get the mood from the data attribute
                currentMood = this.getAttribute('data-mood');
                
                // Update the selected mood text
                if (selectedMoodText) {
                    const moodKey = currentMood;
                    selectedMoodText.textContent = translations[currentUILanguage][moodKey] || moodKey;
                }
                
                // Show the results container
                resultsContainer.style.display = 'block';
                
                // Render movies for the selected mood and language
                renderMovies(currentMood, currentLanguage);
            });
        });
        
        // Handle language filter
        languageFilters.forEach(filter => {
            filter.addEventListener('click', function() {
                // Remove active class from all filters
                languageFilters.forEach(f => f.classList.remove('active'));
                
                // Add active class to the clicked filter
                this.classList.add('active');
                
                // Get the language from the data attribute
                currentLanguage = this.getAttribute('data-language');
                
                // Only render if we have a mood selected
                if (currentMood) {
                    renderMovies(currentMood, currentLanguage);
                }
            });
        });
        
        // Handle UI language change
        languageButtons.forEach(button => {
            button.addEventListener('click', function() {
                // Remove active class from all language buttons
                languageButtons.forEach(btn => btn.classList.remove('active'));
                
                // Add active class to the clicked button
                this.classList.add('active');
                
                // Get the language from the data attribute
                const lang = this.getAttribute('data-lang');
                
                // Apply translations
                applyTranslations(lang);
            });
        });
        
        // Initial setup - select "happy" mood by default
        document.querySelector('.mood-btn[data-mood="happy"]').click();
        
        // Apply initial translations
        applyTranslations('en');
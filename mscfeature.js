document.addEventListener('DOMContentLoaded', function() {
    const currentTimeElement = document.getElementById('currentTime');
    const durationElement = document.getElementById('duration');
    const playPauseBtn = document.getElementById('playPauseBtn');
    const playPauseIcon = document.getElementById('iconcito1');
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    const audioPlayer = document.getElementById('audioPlayer');
    const shuffleIcon = document.getElementById('shuffleIcon');
    const progressBar = document.getElementById('progressBar');
    const songTitleElement = document.getElementById('songTitle');
    const artistTitleElement = document.getElementById('artistTitle');
    const albumElement = document.getElementById('album');
    const lyricse = document.getElementById('lyrics');

    let originalPlaylist = [
        {
            src: 'mscs/imnotokayipromise.mp3',
            title: 'Im Not Okay',
            artist: 'My Chemical Romance',
            artwork: 'https://akamai.sscdn.co/uploadfile/letras/albuns/3/0/a/3/933501595945932.jpg',
            lyric:''
        },
        {
            src: 'mscs/- Jovem Dionisio - Pontos de Exclamação.mp3',
            title: 'Pontos de Exclamação',
            artist: 'Jovem Dionísio',
            artwork: 'https://www.musicasmaistocadas.mus.br/wp-content/uploads/2020/03/Pontos-de-Exclama%C3%A7%C3%A3o-Jovem-Dionisio-1.png',
            lyric:'Eu sei o que você vai dizer Quando a foto aparecer Vai curtir e vai sentir Que o destino fez nos conhecer Agarre e não largue essa mão Se nos der sorte, vai levar a São João Toda noite eu quero que você Diga que a vida foi feita pra viver Doí o peito Só de olhar o jeito que tu posa Saudades, pontos de exclamação Você está maravilhosa Foto aprumada, respeitosa Pede sempre: Por favor Mas todo dia implora foda Fora dessa linha de amor Agarre e não largue essa mão Se nos der sorte, vai levar a São João Toda noite eu quero que você Diga que a vida foi feita pra viver Dói o peito Só de olhar o jeito que tu posa Saudades, pontos de exclamação Você está maravilhosa Lá, lá-lá, lá-lá Lá-lá, lá-lá Lá, lá-lá, lá-lá Lá-lá, lá-lá Lá, lá-lá, lá-lá Lá-lá, lá-lá Lá, lá-lá, lá-lá Lá-lá, lá-lá'
        },
        {
            src: 'mscs/CHIHIRO.mp3',
            title: 'CHIHIRO',
            artist: 'Billie Eilish',
            artwork: 'https://th.bing.com/th/id/OIP.Xxh1XJf16NzMbID_RXSyRgHaHa?rs=1&pid=ImgDetMain',
            lyric:''
        },
        {
            src: 'mscs/tu tem jeito de quem gosta - jovem dionísio..mp3',
            title: 'Tu tem jeito de quem gosta',
            artist: 'Jovem Dionísio',
            artwork: 'https://th.bing.com/th/id/OIP.0wrS5MrQ40cJwfNpjEwLMgHaHa?rs=1&pid=ImgDetMain',
            lyric:''
        },
        {
            src: 'mscs/Congratulations (feat. Bilal).mp3',
            title: 'Congratulations',
            artist: 'Mac Miller',
            artwork: 'https://i.scdn.co/image/ab67616d0000b2732e92f776279eaf45d14a33fd',
            lyric:''
        },
        {
            src: 'mscs/Odetari x Marluxiam - SCORPIO.mp3',
            title: 'SCORPIO',
            artist: 'Odetari',
            artwork: 'https://th.bing.com/th/id/OIP.4v_N0N38zMBfBEaUZPg3mQHaHa?rs=1&pid=ImgDetMain',
            lyric:'I love your ghos-ghos-ghost, ghos-ghost I love your ghos-ghos-ghost, ghos-ghost Strangle you, but its fine, that shit stick around Slam the door, blew us out Got a different sound Yeah, Scorpio, Scorpio, Scorpio, Scorpio, Scorpio Scorpio, Scorpio, Scorpio, Scorpio (Yeah) Scorpio (Yeah), Scorpio (Yeah), Scorpio (Yeah), Scorpio (Yeah) Scorpio (Yeah), Scorpio (Yeah), Scorpio (Yeah) Scorp, scorp Made it through to ya Set me up, I took it, yeah I got motivation to write it now I got her ready to ride it now, she dont know what my sign is Told her, "I dont care, I didnt even know that that exists", yeah Told her so, told her so Its Scorpio, Scorpio, Scorpio, Scorpio, Scorpio Scorpio, Scorpio, Scorpio, Scorpio (Yeah) Scorpio (Yeah), Scorpio (Yeah), Scorpio (Yeah), Scorpio (Yeah) Scorpio (Yeah), Scorpio (Yeah) Even though she told me, yeah Im feeling on the mend, yeah Just goin wreakin havoc all over the planet Scorpio, Scorpio, Scorpio, Scorpio, Scorpio, Scorpio Scorpio went everywhere Scorpio inside my head Scorpion is waking now, scorpion is waking now Scorpio, scorpio, scorpi-scorpi-scorpio Scorpio is in my mind, Scorpio is in my head Scorpio is in my mind, Scorpio is in my head Told her, I told her, I told her, I told her now I told her that they follow you, yeah They told me that they follow you Scorpion is in my mind, scorpion is coming through Scorpio, Scorpio Scorpio, Scorpio, Scorpio, Scorpio, Scorpio, Scorpio, Scorpio (Yeah) Scorpio (Yeah), Scorpio (Yeah), Scorpio (Yeah), Scorpio (Yeah) Scorp, hit the scorp Hit the scorp, hit the scorp Hit the scorp, hit the scorp Hit the scorp, hit the scorp Ooh, na-na-na Ooh, na-na'
        },
        {
            src: 'mscs/Camille, Hans Zimmer - Turnaround (Reprise).mp3',
            title: 'Turnaround (Reprise)',
            artist: 'Hans Zimmer, Camille',
            artwork: 'https://th.bing.com/th/id/R.a084ab4ffe58ab05ef3e358c80ea228e?rik=TopYQkqjPlfCcA&pid=ImgRaw&r=0',
            lyric:''
        },
        {
            src: 'mscs/Me and Your Mama.mp3',
            title: 'Me and Your Mama',
            artist: 'Childish Gambino',
            artwork: 'https://i1.sndcdn.com/artworks-gs9e4YVpeYrE-0-t500x500.jpg',
            lyric:''
        },
        {
            src: 'mscs/Marina Lima - Não Sei Dançar Todas As Canções de Amor HD.mp3',
            title: 'Não Sei Dançar',
            artist: 'Marina Lima',
            artwork: 'https://2.bp.blogspot.com/-2WUemI2A1K4/W-qpG7AZXnI/AAAAAAAAIPs/ahMKrAzCeDs_U-54gPCoeAEC2TWKzFcuwCLcBGAs/s1600/41zFvqUXR9L.jpg',
            lyric:''
        },
        {
            src: 'mscs/mirage.mp3',
            title: 'Mirage',
            artist: 'Orion Sun',
            artwork: 'https://i1.sndcdn.com/artworks-000231712119-0n7ay3-t500x500.jpg',
            lyric:''
        }
    ];

    let playlist = [...originalPlaylist];
    let playedSongs = [];
    let currentTrackIndex = 0;
    let shuffle = false;

    function formatTime(seconds) {
        const minutes = Math.floor(seconds / 60);
        const secs = Math.floor(seconds % 60);
        return `${minutes}:${secs < 10 ? '0' : ''}${secs}`;
    }

    function loadTrack(index) {
        const track = playlist[index];
        audioPlayer.src = track.src;
        songTitleElement.textContent = track.title;
        artistTitleElement.textContent = track.artist;
        albumElement.src = track.artwork;
        progressBar.value = 0;
        playPauseIcon.src = 'imgs/pause_24dp_000000_FILL0_wght600_GRAD0_opsz48.png';
        lyricse.textContent = track.lyric || 'Ainda não temos a letra dessa :(';
    }

    function playPauseTrack() {
        if (audioPlayer.paused) {
            audioPlayer.play();
            playPauseIcon.src = 'imgs/pause_24dp_000000_FILL0_wght600_GRAD0_opsz48.png';
        } else {
            audioPlayer.pause();
            playPauseIcon.src = 'imgs/play_arrow_24dp_000000_FILL0_wght600_GRAD0_opsz24.png';
        }
    }

    function playNextTrack() {
        if (shuffle) {
            if (playedSongs.length === playlist.length) {
                playedSongs = [];
                playlist = [...originalPlaylist].sort(() => Math.random() - 0.5); 
            }
            let nextTrackIndex;
            do {
                nextTrackIndex = Math.floor(Math.random() * playlist.length);
            } while (playedSongs.includes(nextTrackIndex));
            playedSongs.push(nextTrackIndex);
            currentTrackIndex = nextTrackIndex;
        } else {
            currentTrackIndex = (currentTrackIndex + 1) % playlist.length;
        }
        loadTrack(currentTrackIndex);
    }

    function playPreviousTrack() {
        currentTrackIndex = (currentTrackIndex - 1 + playlist.length) % playlist.length;
        loadTrack(currentTrackIndex);
    }

    function shufflePlaylist() {
        shuffle = !shuffle;
        shuffleIcon.src = shuffle ? 'imgs/shuffle_24dp_EA3323_FILL0_wght400_GRAD200_opsz24.png' : 'imgs/shuffle_24dp_000000_FILL0_wght400_GRAD200_opsz24.png'; 
        if (shuffle) {
            playlist = [...originalPlaylist].sort(() => Math.random() - 0.5);
            playedSongs = [];
        } else {
            playlist = [...originalPlaylist]; 
        }
        currentTrackIndex = 0; 
        loadTrack(currentTrackIndex); 
    }

    function addSong(event) {
        event.preventDefault();
        const title = document.getElementById('title').value;
        const artist = document.getElementById('artist').value;
        const mp3 = document.getElementById('mp3').value;
        const artwork = document.getElementById('artwork').value;
        const lyrics = document.getElementById('lyrics').value;

        playlist.push({
            src: mp3,
            title: title,
            artist: artist,
            artwork: artwork || 'https://via.placeholder.com/150',
            lyric: lyrics || ''
        });

        updatePlaylistView();
        document.getElementById('songForm').reset();
    }

    function updatePlaylistView() {
        const playlistContainer = document.getElementById('playlistContainer');
        playlistContainer.innerHTML = '';
        playlist.forEach((track, index) => {
            const trackElement = document.createElement('div');
            trackElement.classList.add('track');
            trackElement.innerHTML = `
                <img src="${track.artwork}" alt="${track.title}" width="50">
                <div>
                    <h3>${track.title}</h3>
                    <p>${track.artist}</p>
                </div>
            `;
            playlistContainer.appendChild(trackElement);
        });
    }

    playPauseBtn.addEventListener('click', playPauseTrack);
    nextBtn.addEventListener('click', playNextTrack);
    prevBtn.addEventListener('click', playPreviousTrack);
    shuffleBtn.addEventListener('click', shufflePlaylist);
    audioPlayer.addEventListener('timeupdate', function() {
        const percentage = (audioPlayer.currentTime / audioPlayer.duration) * 100;
        progressBar.value = percentage;
        currentTimeElement.textContent = formatTime(audioPlayer.currentTime);
        durationElement.textContent = formatTime(audioPlayer.duration - audioPlayer.currentTime);
    });

    progressBar.addEventListener('input', function() {
        const newTime = (progressBar.value / 100) * audioPlayer.duration;
        audioPlayer.currentTime = newTime;
    });
    
    audioPlayer.addEventListener('ended', playNextTrack);
    document.getElementById('songForm').addEventListener('submit', addSong);
    loadTrack(currentTrackIndex);

});
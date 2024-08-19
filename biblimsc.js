// script.js

document.addEventListener('DOMContentLoaded', function() {
    const playPauseBtn = document.getElementById('playPauseBtn');
    const playPauseIcon = document.getElementById('iconcito1');
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    const audioPlayer = document.getElementById('audioPlayer');
    const progressBar = document.getElementById('progressBar');
    const songTitleElement = document.getElementById('songTitle');
    const artistTitleElement = document.getElementById('artistTitle');
    const artistArtElement = document.getElementById('artistArt');

    // Playlist
    const playlist = [
        {
            src: 'mscs/imnotokayipromise.mp3',
            title: 'Im Not Okay',
            artist: 'My Chemical Romance',
            artwork: 'https://akamai.sscdn.co/uploadfile/letras/albuns/3/0/a/3/933501595945932.jpg'
        },
        {
            src: 'mscs/- Jovem Dionisio - Pontos de Exclamação.mp3',
            title: 'Pontos de Exclamação',
            artist: 'Jovem Dionísio',
            artwork: 'https://www.musicasmaistocadas.mus.br/wp-content/uploads/2020/03/Pontos-de-Exclama%C3%A7%C3%A3o-Jovem-Dionisio-1.png'
        },
        {
            src: 'mscs/CHIHIRO.mp3',
            title: 'CHIHIRO',
            artist: 'Billie Eilish',
            artwork: 'https://th.bing.com/th/id/OIP.Xxh1XJf16NzMbID_RXSyRgHaHa?rs=1&pid=ImgDetMain'
        },
        {
            src: 'mscs/tu tem jeito de quem gosta - jovem dionísio..mp3',
            title: 'Tu tem jeito de quem gosta',
            artist: 'Jovem Dionísio',
            artwork: 'https://th.bing.com/th/id/OIP.0wrS5MrQ40cJwfNpjEwLMgHaHa?rs=1&pid=ImgDetMain'
        },
        {
            src: 'mscs/Congratulations (feat. Bilal).mp3',
            title: 'Congratulations',
            artist: 'Mac Miller',
            artwork: 'https://i.scdn.co/image/ab67616d0000b2732e92f776279eaf45d14a33fd'
        },
        {
            src: 'mscs/Odetari x Marluxiam - SCORPIO.mp3',
            title: 'SCORPIO',
            artist: 'Odetari',
            artwork: 'https://th.bing.com/th/id/OIP.4v_N0N38zMBfBEaUZPg3mQHaHa?rs=1&pid=ImgDetMain'
        },
        {
            src: 'mscs/Camille, Hans Zimmer - Turnaround (Reprise).mp3',
            title: 'Turnaround (Reprise)',
            artist: 'Hans Zimmer, Camille',
            artwork: 'https://th.bing.com/th/id/R.a084ab4ffe58ab05ef3e358c80ea228e?rik=TopYQkqjPlfCcA&pid=ImgRaw&r=0'
        },
        {
            src: 'mscs/Me and Your Mama.mp3',
            title: 'Me and Your Mama',
            artist: 'Childish Gambino',
            artwork: 'https://i1.sndcdn.com/artworks-gs9e4YVpeYrE-0-t500x500.jpg'
        },
        {
            src: 'mscs/Marina Lima - Não Sei Dançar Todas As Canções de Amor HD.mp3',
            title: 'Não Sei Dançar',
            artist: 'Marina Lima',
            artwork: 'https://2.bp.blogspot.com/-2WUemI2A1K4/W-qpG7AZXnI/AAAAAAAAIPs/ahMKrAzCeDs_U-54gPCoeAEC2TWKzFcuwCLcBGAs/s1600/41zFvqUXR9L.jpg'
        },
        {
            src: 'mscs/mirage.mp3',
            title: 'Mirage',
            artist: 'Orion Sun',
            artwork: 'https://th.bing.com/th/id/R.a084ab4ffe58ab05ef3e358c80ea228e?rik=TopYQkqjPlfCcA&pid=ImgRaw&r=0'
        }
    ];

    let currentTrackIndex = 0;

    function loadTrack(index) {
        const track = playlist[index];
        audioPlayer.src = track.src;
        songTitleElement.textContent = track.title;
        artistTitleElement.textContent = track.artist;
        artistArtElement.src = track.artwork;
        playPauseIcon.src = 'imgs/pause_24dp_000000_FILL0_wght600_GRAD0_opsz48.png';
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
        currentTrackIndex = (currentTrackIndex + 1) % playlist.length;
        loadTrack(currentTrackIndex);
    }

    function playPreviousTrack() {
        currentTrackIndex = (currentTrackIndex - 1 + playlist.length) % playlist.length;
        loadTrack(currentTrackIndex);
    }

    playPauseBtn.addEventListener('click', playPauseTrack);
    nextBtn.addEventListener('click', playNextTrack);
    prevBtn.addEventListener('click', playPreviousTrack);

    audioPlayer.addEventListener('timeupdate', function() {
        const percentage = (audioPlayer.currentTime / audioPlayer.duration) * 100;
        progressBar.value = percentage;
    });

    progressBar.addEventListener('input', function() {
        const newTime = (progressBar.value / 100) * audioPlayer.duration;
        audioPlayer.currentTime = newTime;
    });

    audioPlayer.addEventListener('ended', playNextTrack);

    // Load the first track on page load
    loadTrack(currentTrackIndex);
});
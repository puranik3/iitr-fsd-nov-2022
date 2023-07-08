// all useful DOM manipulation
const now_playing = document.querySelector( '.now-playing' );
const track_art = document.querySelector( '.track-art' );
const track_name = document.querySelector( '.track-name' );
const track_artist = document.querySelector( '.track-artist' );

const playpause_track = document.querySelector( '.playpause-track' );
const playpause_button = document.querySelector( '#playpause-button' );
const prev_track = document.querySelector( '.prev-track' );
const next_track = document.querySelector( '.next-track' );

const curr_time = document.querySelector( '.current-time' );
const total_duration = document.querySelector( '.total-duration' );
const seek_slider = document.querySelector( '.seek_slider' );

const volume_slider = document.querySelector( '.volume_slider' );

// List of tracks that have to be played
const track_list = [
    {
        name: "Demo1",
        artist: "Broke For Free",
        image: "https://picsum.photos/640/360",
        path: "songs/sample1.mp3",
    },
    {
        name: "Every Morning",
        artist: "Anton Vlasov",
        image: "https://picsum.photos/320/180",
        path: "songs/every-morning-18304.mp3",
    },
    {
        name: "Relax and Sleep",
        artist: "Anton Vlasov",
        image: "https://picsum.photos/480/270",
        path: "songs/relax-and-sleep-18565.mp3",
    },
    {
        name: "Uplifting Day",
        artist: "Lesfm",
        image: "https://picsum.photos/240/180",
        path: "songs/uplifting-day-15583.mp3",
    },
];

let track_index = 0;
let isPlaying = false;
let intervalId;

// create an audio element
const audio = document.createElement( 'audio' );

function loadTrack() {
    clearInterval( intervalId );

    const track = track_list[track_index];

    // audio.setAttribute( 'src', value )
    audio.src = track.path;
    audio.load();

    // UI updates
    now_playing.textContent = 'PLAYING ' + ( track_index + 1 ) + ' of ' + track_list.length;
    track_art.style.backgroundImage = "url(" + track.image + ")";
    track_name.textContent = track.name;
    track_artist.textContent = track.artist;

    intervalId = setInterval( seekUpdate, 1000 );

    random_bg_color();
}

loadTrack();

function playPauseTrack() {
    if(isPlaying) {
        pauseTrack();
    } else {
        playTrack();
    }
}

function pauseTrack() {
    audio.pause();
    isPlaying = false;
    
    // playpause_track.innerHTML = '<i class="fa fa-play-circle fa-5x"></i>';
    
    playpause_button.classList.toggle( 'fa-play-circle' );
    playpause_button.classList.toggle( 'fa-pause-circle' );
}

function playTrack() {
    audio.play();
    isPlaying = true;
    
    playpause_button.classList.toggle( 'fa-play-circle' );
    playpause_button.classList.toggle( 'fa-pause-circle' );
}

function seekUpdate() {
    const currentTime = audio.currentTime;
    const duration = audio.duration;

    // update seek slider
    const seekPosition = currentTime / duration * 100;
    seek_slider.value = seekPosition;

    // calculate currentTime, duration in mm:ss
    let minutes, seconds;
    minutes = Math.floor( currentTime / 60 );
    seconds = Math.floor( currentTime - ( minutes * 60 ) );
    const currentTimeDisplay = minutes + ':' + seconds;

    minutes = Math.floor( duration / 60 );
    seconds = Math.floor( duration - ( minutes * 60 ) );
    const durationTimeDisplay = minutes + ':' + seconds;

    // update current time
    curr_time.textContent = currentTimeDisplay;

    // update total duration
    total_duration.textContent = durationTimeDisplay;
}

function prevTrack() {
    track_index = ( track_index - 1 ) % track_list.length;
    loadTrack();
    playTrack();
}

function nextTrack() {
    track_index = ( track_index + 1 ) % track_list.length;
    loadTrack();
    playTrack();
}

function randomTrack() {
    track_index = Math.floor(Math.random() * track_list.length);
    loadTrack();
    playTrack();
}

function setVolume( /*event*/ ) {
    audio.volume = volume_slider.value / 100;
}

function seekTo() {
    audio.currentTime = seek_slider.value / 100 * audio.duration
}

// Set up a random background color
function random_bg_color() {
    let red = Math.floor( Math.random() * ( 256 - 64 ) ) + 64;
    let green = Math.floor( Math.random() * ( 256 - 64 ) ) + 64;
    let blue = Math.floor( Math.random() * ( 256 - 64 ) ) + 64;

    let color = `rgb( ${red}, ${green}, ${blue} )`;
    document.body.style.backgroundColor = color;
}

playpause_track.addEventListener( 'click', playPauseTrack );
prev_track.addEventListener( 'click', prevTrack );
next_track.addEventListener( 'click', nextTrack );
audio.addEventListener( 'ended', randomTrack );
volume_slider.addEventListener( 'input', setVolume );
seek_slider.addEventListener( 'input', seekTo );

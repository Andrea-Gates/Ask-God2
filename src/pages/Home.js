import Sound from "../assets/sound.wav";

function Home() {
  const playSound = () => {
    const audio = new Audio(Sound);
    audio.play();
  };

  return (
    <div className="App">
      <header className="App-header">
        <button onClick={playSound}>TITLE PAGE HERE</button>
      </header>
    </div>
  );
}

export default Home;

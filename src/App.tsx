import Button from "./components/button.tsx";
import ProgressBar from "./components/progress-bar.tsx";
import Time from "./components/time.tsx";
import Title from "./components/title.tsx";
import Author from "./components/author.tsx";
import Photo from "./components/photo.tsx";
import {useRef} from "react";
import {FastForwardIcon, Play, Pause, Rewind} from "lucide-react";
import manoelImg from "./assets/manoel-gomes_1_76952 (1).jpg";
import manoelMusic from "./assets/CANETA AZUL.mp3";
import {advance, rewind, secToMin} from "./services.ts";
import {useMusic} from "./use-music.ts";

function App() {
    const ref = useRef<HTMLAudioElement | null>(null);
    const { togglePlay, state, handlePlaying } = useMusic(ref);

    return (
        <>
            <main className="w-screen max-w-sm p-10 sm:p-6 bg-primay rounded-lg flex flex-col gap-4 transition-all duration-500">
                <audio
                    ref={ref}
                    src={manoelMusic}
                    onTimeUpdate={handlePlaying}
                    onEnded={togglePlay}
                />
                <div className="flex gap-6 items-center transition-all duration-500 sm:flex-row flex-col">
                    <Photo url={manoelImg}/>
                    <div>
                        <Title text="Caneta Azul"/>
                        <Author text="Manoel Gomes"/>
                    </div>
                </div>
                <div className="flex gap-12 m-auto">
                    <Button onClick={() => rewind(ref)}>
                        <Rewind/>
                    </Button>
                    <Button onClick={() => togglePlay()}>
                        {state.play ? <Pause/> : <Play/>}
                    </Button>
                    <Button onClick={() => advance(ref)}>
                        <FastForwardIcon/>
                    </Button>
                </div>
                <div className="w-full">
                    <ProgressBar
                        max={ref.current?.duration.toString() || "0"}
                        value={state.currentTime.toString()}
                    />
                    <div className="w-full flex justify-between">
                        <Time text={secToMin(ref.current?.currentTime || 0)}/>
                        <Time text={secToMin(ref.current?.duration || 0)}/>
                    </div>
                </div>
            </main>
        </>
    );
}

export default App;

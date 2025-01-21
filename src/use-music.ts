import {ChangeEvent, MutableRefObject, useEffect, useState} from "react";

export function useMusic(ref: MutableRefObject<HTMLAudioElement | null>) {
    const [state, setState] = useState({
        play: false,
        duration: 0,
        currentTime: 0,
    });

    useEffect(() => {
        if(!ref.current) throw new Error("Referencia nao informada.");
        state.play ? ref.current?.play() : ref.current?.pause();
    }, [state.play]);

    function togglePlay() {
        setState({...state, play: !state.play});
    }

    function handlePlaying(event: ChangeEvent<HTMLAudioElement>) {
        setState({
            ...state,
            currentTime: event.target.currentTime,
        });
    }

    return {
        state,
        togglePlay,
        handlePlaying,
    }
}
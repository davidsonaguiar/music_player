import {MutableRefObject} from "react";

export function advance(ref: MutableRefObject<HTMLAudioElement | null>) {
    if (ref.current && ref.current.currentTime < ref.current.duration) {
        ref.current.currentTime = Math.min(ref.current.currentTime + 3, ref.current.duration);
    }
}

export function rewind(ref: MutableRefObject<HTMLAudioElement | null>) {
    const rewindMax = 0;
    if (ref.current && ref.current.currentTime > rewindMax) {
        ref.current.currentTime = Math.max(ref.current.currentTime - 3, rewindMax);
    }
}

export function secToMin(time: number): string {
    const minutes = Math.floor(time / 60);
    const seconds = time - minutes * 60;
    return `${minutes}:${seconds.toFixed(0).padStart(2, "0")}`;
}
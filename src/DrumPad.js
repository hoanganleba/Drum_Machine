import React, { useState, useEffect } from 'react'

function DrumPad(props) {
    const [audio, setAudio] = useState('')
    useEffect(() => {
        document.addEventListener('keydown', handleKeyDown)
        window.focus()
        return () => {
            document.removeEventListener('keydown', handleKeyDown)
        }
    })
    function handleKeyDown(e) {
        if (e.keyCode === props.letter.charCodeAt()) {
            audio.play()
            audio.currentTime = 0
            props.handleDisplay(props.id)
        }
    }

    function handleClick() {
        audio.play();
        audio.currentTime = 0;
        props.handleDisplay(props.id)
    }
    return (
        <div className="drum-pad"
            id={props.id}
            onClick={handleClick.bind(this)}>
            <p>{props.letter}</p>
            <audio className="clip"
                id={props.letter}
                src={props.src}
                ref={ref => setAudio(ref)}>
            </audio>
        </div>
    )
}
export default DrumPad
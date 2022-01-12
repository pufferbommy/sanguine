import React, { useRef, useEffect, useState } from 'react'
import ReactAudioPlayer from 'react-audio-player'
import { Audio } from 'react-loader-spinner'

const Card = ({ title, imgUrl, soundUrl, defaultVolume, imageFix }) => {
  const [isPlaying, setIsPlaying] = useState(false)
  const [soundVolume, setSoundVolume] = useState(defaultVolume || 0.5)
  const soundPlayer = useRef()
  useEffect(() => {
    if (isPlaying) {
      soundPlayer.current.audioEl.current.play()
    } else {
      soundPlayer.current.audioEl.current.pause()
    }
  }, [isPlaying])

  return (
    <>
      <ReactAudioPlayer
        title={title}
        ref={soundPlayer}
        loop={true}
        src={soundUrl}
        volume={Number(soundVolume)}
      />
      <div
        onClick={() => setIsPlaying(!isPlaying)}
        name="player"
        className="relative overflow-hidden group cursor-pointer select-none rounded-2xl w-auto h-36 md:h-40 lg:h-48 shadow-xl dark:shadow-none"
      >
        <h1 className="absolute text-shadow-xl z-10 text-white text-lg md:text-2xl top-2 left-2">
          {title}
        </h1>
        <img
          className={`rounded-2xl ${
            imageFix ? '' : 'h-full'
          } group-hover:scale-110 w-full transition object-cover object-center`}
          draggable={false}
          src={imgUrl}
          alt={title}
        />
        {isPlaying && (
          <>
            <div className="hidden md:block absolute bottom-2 z-10 left-4">
              <input
                className="w-28 lg:w-auto"
                value={soundVolume}
                onChange={(e) => setSoundVolume(e.target.value)}
                type="range"
                min={0}
                step={0.01}
                max={1}
                name=""
                id=""
              />
            </div>
            <div className="absolute -bottom-4 z-10 right-4">
              <Audio heigth="25" width="25" color="white" arialLabel="loading" />
            </div>
          </>
        )}
      </div>
    </>
  )
}

export default Card

import React, { useRef, useEffect, useState } from 'react'
import ReactAudioPlayer from 'react-audio-player'
import { Audio } from 'react-loader-spinner'

const Card = ({ title, imgUrl, soundUrl, defaultVolume }) => {
  const [isPlaying, setIsPlaying] = useState(false)
  const [soundVolume, setSoundVolume] = useState(defaultVolume || 0.5)
  const [isOverSlider, setIsOverSlider] = useState(false)
  const soundPlayer = useRef()
  const sliderRef = useRef()
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
        onClick={() => !isOverSlider && setIsPlaying(!isPlaying)}
        name="player"
        className={`${
          isPlaying ? 'border-pink-300' : 'border-transparent'
        } relative border-2 transition-all overflow-hidden group cursor-pointer select-none rounded-2xl w-full h-36 md:h-40 lg:h-48 shadow-xl hover:shadow-2xl dark:shadow-none`}
      >
        <h1 className="absolute text-shadow-xl z-10 text-white text-lg md:text-2xl top-2 left-2">
          {title}
        </h1>
        <img
          className={`rounded-2xl h-full ${
            isPlaying && 'scale-110'
          } group-hover:scale-110 w-full transition object-cover object-center`}
          draggable={false}
          src={imgUrl}
          alt={title}
        />
        {isPlaying && (
          <>
            <div className="hidden md:block absolute bottom-8 text-sm px-1.5 rounded shadow-2xl bg-gray-100 text-zinc-900 z-10 left-4">
              {Math.floor(soundVolume * 100)}
            </div>
            <div className="hidden md:block absolute bottom-2 z-10 left-4">
              <input
                className="w-28 lg:w-auto hover:cursor-grab active:cursor-grabbing "
                value={soundVolume}
                ref={sliderRef}
                onMouseOut={() => setIsOverSlider(false)}
                onMouseOver={() => setIsOverSlider(true)}
                onChange={(e) => {
                  setSoundVolume(e.target.value)
                }}
                type="range"
                min={0}
                step={0.01}
                max={1}
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

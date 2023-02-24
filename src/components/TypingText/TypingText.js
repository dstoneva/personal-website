import Typewriter from 'typewriter-effect'

function TypingText({ strings, loop }) {
  return (
    <Typewriter
      options={{
        strings: strings,
        autoStart: true,
        loop: loop,
        deleteSpeed: 50,
      }}
    />
  )
}

export default TypingText

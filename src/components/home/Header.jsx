import { useTypewriter, Typewriter } from 'react-simple-typewriter'
import { useState } from 'react'

const Header = () => {
    const [isDone, setIsDone] = useState(false)

    const [name] = useTypewriter({
        words: ['Diego Cadenas'],
        loop: 1,
        onLoopDone: () => setIsDone(true),
    })

    
    return ( 
        <div className='h-full flex flex-col justify-between'>
                <div className='relative h-1/2'>
                    <h1 className="absolute bottom-0 left-0 right-0 text-center text-4xl mb-2">
                        {name}
                    </h1>
                </div>
                { isDone && (
                <div className='relative h-1/2'>
                    <p className="absolute inset-0 text-center text-2xl">
                        <span> </span>{ <Typewriter 
                    words={['Web developer', 'Backend', 'Frontend','Full stack']}
                    loop={0}
                    cursor
                    cursorStyle='|'
                    typeSpeed={70}
                    deleteSpeed={50}
                /> }
                    </p>
                </div>
                )}
           
        </div>
    );
}
export default Header;
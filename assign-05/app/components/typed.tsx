// components/TypedComponent.js
import { useEffect, useRef } from 'react';
import Typed from 'typed.js';

const TypedComponent = () => {
    const el = useRef(null);

    useEffect(() => {
        const typed = new Typed(el.current, {
            strings: ['Welcome to my Tech world.',
                 'I am a web developer.'],
            typeSpeed: 50,
            backSpeed: 50,
            loop: true,
        });

        return () => {
            typed.destroy();
        };
    }, []);

    return <span className="typed-span" ref={el}>
        <span></span>
    </span>;
};

export default TypedComponent;

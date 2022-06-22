import React, {
    useState,
    useEffect
} from 'react';

export default function BlinkyRender () {
    const [value, setValue] = useState(0);

    useEffect(() => {
        if (value === 0) {
            setValue(10 + Math.random() * 200);
        }
    }, [value]);

    console.log('render', value);

    return (
        <div onClick={() => setValue(0)}>
            value: {value}
        </div>
    );
};

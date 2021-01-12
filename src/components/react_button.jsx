import React, { memo, useState } from 'react';
import ReactiveButton from 'reactive-button';

/**https://arifszn.github.io/reactive-button/ */

const ReactButton = memo((props) => {
    const [state, setState] = useState('idle');

    const onClickHandler = () => {
        setState('loading');
        setTimeout(() => {
          setState('success');
    }, 1000);
    
    props.onClick();
    }

    return (<ReactiveButton onClick={onClickHandler} 
        buttonState={state}
        color={props.color}
        idleText={props.idleText}
        loadingText={'Loading'}
        successText={'Success'}
        errorText={'Error'}
        type={'button'}
        className={'class1 class2'}
        style={{ borderRadius: '5px' }}
        outline={false} //boolean
        shadow={props.shadow} //boolean
        rounded={false} //boolean
        size={'normal'} //tiny, small, normal, large
        block={props.block} //boolean
        messageDuration={2000}
        disabled={props.disabled}
        buttonRef={null}
        width={props.width}
        height={props.height}
        animation={props.animation}//boolean
        />);
});

export default ReactButton;
import axios from 'axios'
import React, { useState } from 'react';

export function UrlFunc() {

    const [urlText, setUrl] = useState('https://catfact.ninja/fact');
    const [response, setResponse] = useState('');
    const [errorStr, setErrorStr] = useState('');
    const [color, setColor] = useState('');
    const handleUpdateUrl = (event: React.ChangeEvent<HTMLInputElement>) => {
        setUrl(event.target.value);
    }

    const handleButtonClick = async () => {
        try {
            const apiResponse = await axios.get(urlText);
            setResponse(JSON.stringify(apiResponse.data, null, 2));
            setColor('black');
            console.log(apiResponse.data);
        } catch (error) {
            setErrorStr(JSON.stringify(error));
            setColor('red');
            setResponse(JSON.stringify(error));
            console.log(`Ошибка: ${error}`);
        }
    };

    return <div>
        <p><b>Компонент функция</b> </p>
        <input type="text" value={urlText} onInput={handleUpdateUrl} />
        <button onClick={handleButtonClick}>Отправить</button>
        <div style={{ color: color }}>{response}</div>
    </div>
}


//<button onClick={this.handleButtonClick}>Отправить</button>
//       <div style={{ color: this.state.color }}>{this.state.response}</div>
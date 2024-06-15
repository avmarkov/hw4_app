# Домашняя работа № 4
####  Создать проект с create-react-app;
Создал:
```ts
npx create-react-app hw4_app --template typescript
```
#### Добавить элемент input принимающий URL. URL может быть любым адресом API, возвращающим JSON (например, https://catfact.ninja/fact)
Добавил
#### Рядом с Input добавить кнопку c текстом "Отправить". При нажатии на кнопку осуществляется вызов API из п.2 при помощи библиотеки axios. Реализоваnm два варианта компоненты:компонент класс, и компонент-функция

Компонент-класс:

```ts
import { Component } from "react";
import axios from 'axios';

interface UrlProps {
    urlText: string;
    response: string;
    errorStr: string;
    color: string;
}
export class UrlClass extends Component<{}, UrlProps> {
    constructor(props: {}) {
        super(props);
        this.state = { urlText: "https://catfact.ninja/fact", response: "", errorStr: "", color: 'black' };
    }


    handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        this.setState({ urlText: event.target.value });
    };

    handleButtonClick = async () => {
        try {
            const apiResponse = await axios.get(this.state.urlText);
            this.setState({ response: JSON.stringify(apiResponse.data, null, 2) });
            this.setState({ color: 'black' });
            console.log(this.state.response);
        } catch (error) {
            this.setState({ errorStr: JSON.stringify(error) });
            this.setState({ color: 'red' });
            this.setState({ response: this.state.errorStr });
            console.log(`Ошибка: ${this.state.errorStr}`);
        }
    };


    render() {
        return < div>
            <p><b> Компонент класс</b></p>
            <input type="text" value={this.state.urlText} onInput={this.handleInputChange} />
            <button onClick={this.handleButtonClick}>Отправить</button>
            <div style={{ color: this.state.color }}>{this.state.response}</div>
        </div>
    };
}
```

Компонент-функция:

```ts
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

```

#### Результат:

<image src="images/res.png" alt="result">

#### Обработка ошибочных запросов

<image src="images/err.png" alt="result">



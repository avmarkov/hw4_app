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
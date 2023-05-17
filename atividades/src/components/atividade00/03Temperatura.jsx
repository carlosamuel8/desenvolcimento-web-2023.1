import './atividade00.css';

const Temperatura = ({ Tcelsius, Tfahrenheit, Tkelvin }) => {
    const celsiusParaFahrenheit = (c) => (9 * c/5) + 32;

    const fahrenheitParaCelsius = (f) => ((f - 32)/9) * 5;

    const kelvin = (k) => {
        return {
            celsius: k - 273.15,
            fahrenheit: ((k - 273.15) * 9/5) + 32,
        };
    };

    return (
        <div className="container">
            <div className="painel_temp">
                <h1>Painel de conversão de temperatura</h1>
                <div>
                    <h2>{Tcelsius}° celsius para Fahrenheit: {celsiusParaFahrenheit(Tcelsius).toFixed(2)}</h2>
                    <h2>{Tfahrenheit}° fahrenheit para Celsius: {fahrenheitParaCelsius(Tfahrenheit).toFixed(2)}</h2>
                    <h2>{Tkelvin}° kelvin para Celsius: {kelvin(Tkelvin).celsius.toFixed(2)}</h2>
                    <h2>{Tkelvin}° Kelvin para Fahrenheit: {kelvin(Tkelvin).fahrenheit.toFixed(2)}</h2>
                </div>
            </div>
        </div>
    );
}

export default Temperatura;
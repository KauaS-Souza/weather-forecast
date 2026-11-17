import * as S from './style';

export function WeatherCard({ cityData }){
    const { name, main, weather } = cityData;
    const iconUrl = `https://openweathermap.org/img/wn/${weather[0].icon}@2x.png`

    return(
        <S.CardArticle>

            <h3>{name}</h3>

            <S.IconWrapper>

                <S.WeatherIcon src={iconUrl} alt={`Ícone do clima para ${name}`} />

            </S.IconWrapper>
            
            <S.Temperature>

                {Math.round(main.temp)}°C

            </S.Temperature>

            <S.Description>

                {weather[0].description}

            </S.Description>

        </S.CardArticle>
    )
}
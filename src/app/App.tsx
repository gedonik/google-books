import React from 'react';
import MainPage from '../pages/mainPage/MainPage';

const App: React.FC = () => {
    return (
        <div className="app">
            <h1 className="visually-hidden">Тестовое приложение google-books.</h1>
            <MainPage />
        </div>
    )
}

export default App;

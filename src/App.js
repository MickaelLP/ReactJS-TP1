import React from 'react';
import Card from './components/Card';

function App() {
  const hello = () => {
    alert('hello');
  };
  return (
    <div className="app">
      <header className="app__header header">
        <h1 className="header__title">Introduction to React</h1>
      </header>
      <main className="app__main">
        <div className="cards">
          <Card title="Titre 1" onClickCard={hello}>
            <div>
              <p>Un paragraphe qu'il est beau</p>
            </div>
          </Card>
          <Card title="Titre 2">
            <div>
              <p>Un paragraphe qu'il est beau</p>
            </div>
          </Card>
          <Card title="Titre 3">
            <div>
              <p>Un paragraphe qu'il est beau</p>
            </div>
          </Card>
          <Card title="Titre 4">
            <div>
              <p>Un paragraphe qu'il est beau</p>
            </div>
          </Card>
        </div>
      </main>

      <footer className="app__footer footer">footer</footer>
    </div>
  );
}

export default App;

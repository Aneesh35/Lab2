import Header from './Components/Header';
import Footer from './Components/Footer';

const App = () => {
  return (
    <div style={{ textAlign: 'center' }}>
      <Header title="React Props Demo" />
      <main>
        <h2>Welcome to the React Props Example!</h2>
        <p>This demonstrates passing props from parent to child components.</p>
        <button className="button">Click Me</button>
      </main>
      <Footer copyright="© 2025 MyReactApp. All rights reserved." />
    </div>
  );
};

export default App;
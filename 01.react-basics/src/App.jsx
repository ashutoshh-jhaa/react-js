import "./App.css";

function App() {
  return (
    <>
      <h1>React Installation Guide</h1>
      <ol>
        <li>
          <strong>Install Node.js:</strong> Download from
          <a
            href="https://nodejs.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            {" "}
            here
          </a>
          . Then verify installation using:
          <pre>
            <code>node -v && npm -v</code>
          </pre>
        </li>
        <li>
          <strong>Create a React App:</strong>
          <pre>
            <code>npm create vite@latest </code>
          </pre>
          or (alternative method)
          <pre>
            <code>npx create-react-app my-react-app</code>
          </pre>
        </li>
        <li>
          <strong>Navigate & Install Dependencies:</strong>
          <pre>
            <code>cd my-react-app && npm install</code>
          </pre>
        </li>
        <li>
          <strong>Start the Development Server:</strong>
          <pre>
            <code>npm run dev </code>
          </pre>
        </li>
      </ol>
    </>
  );
}

export default App;

import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hasError: false,
      error: null,
    };
  }

  static getDerivedStateFromError(error) {
    return {
      hasError: true,
      error,
    };
  }

  componentDidCatch(error, errorInfo) {
    console.error("APP RUNTIME ERROR:", error);
    console.error("COMPONENT STACK:", errorInfo?.componentStack);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div
          style={{
            minHeight: "100vh",
            padding: "24px",
            background: "#f7f3ea",
            color: "#171717",
            fontFamily: "monospace",
            boxSizing: "border-box",
          }}
        >
          <h1 style={{ color: "#c62828" }}>
            App Runtime Error
          </h1>

          <p>
            React app එක render වෙද්දී error එකක් වෙලා තියෙනවා.
          </p>

          <pre
            style={{
              whiteSpace: "pre-wrap",
              wordBreak: "break-word",
              background: "#fff",
              padding: "16px",
              borderRadius: "12px",
              border: "1px solid #ddd",
              overflowX: "auto",
            }}
          >
            {String(this.state.error?.stack || this.state.error)}
          </pre>
        </div>
      );
    }

    return this.props.children;
  }
}

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ErrorBoundary>
      <App />
    </ErrorBoundary>
  </React.StrictMode>
);

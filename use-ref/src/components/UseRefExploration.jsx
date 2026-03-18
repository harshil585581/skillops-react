import React, { useState, useRef, useEffect } from "react";
import "./UseRefExploration.css";

const UseRefExploration = () => {
  // 1. DOM Access Example
  const inputRef = useRef(null);
  const handleFocus = () => {
    inputRef.current.focus();
  };

  // 2. Mutable Value (Render Count) Example
  const [count, setCount] = useState(0);
  const renderCount = useRef(0);

  useEffect(() => {
    renderCount.current = renderCount.current + 1;
  });

  // 3. Previous State Tracking Example
  const prevCountRef = useRef();
  useEffect(() => {
    prevCountRef.current = count;
  }, [count]);
  const prevCount = prevCountRef.current;

  return (
    <div className="exploration-container">
      <h2 className="exploration-header">`useRef()` Hook Experiments</h2>

      {/* Experiment 1: DOM Access */}
      <section className="exploration-section">
        <h3 className="exploration-sub-header">1. Accessing the DOM</h3>
        <p>Use `useRef` to focus an input.</p>
        <div className="exploration-control-group">
          <input
            ref={inputRef}
            type="text"
            placeholder="Type something..."
            className="exploration-input"
          />
          <button onClick={handleFocus} className="exploration-button">
            Focus Input
          </button>
        </div>
      </section>

      {/* Experiment 2: Mutable Value */}
      <section className="exploration-section">
        <h3 className="exploration-sub-header">2. Persistent Mutable Value</h3>
        <p>
          This component has rendered{" "}
          <span className="exploration-highlight">{renderCount.current}</span>{" "}
          times.
        </p>
        <p>
          (Updating `renderCount.current` does not trigger a re-render itself!)
        </p>
        <button
          onClick={() => setCount((c) => c + 1)}
          className="exploration-button exploration-button-secondary"
        >
          Trigger Re-render (Count: {count})
        </button>
      </section>

      {/* Experiment 3: Previous State */}
      <section className="exploration-section">
        <h3 className="exploration-sub-header">3. Tracking Previous State</h3>
        <p>Using `useRef` to remember the value from the last render.</p>
        <div className="exploration-stats">
          <div className="stat-item">
            Current Count:{" "}
            <span className="exploration-highlight">{count}</span>
          </div>
          <div className="stat-item">
            Previous Count:{" "}
            <span className="exploration-highlight">
              {prevCount !== undefined ? prevCount : "N/A"}
            </span>
          </div>
        </div>
      </section>
    </div>
  );
};

export default UseRefExploration;

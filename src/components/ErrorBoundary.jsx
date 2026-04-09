import { Component } from 'react';

export default class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { error: null };
  }
  static getDerivedStateFromError(error) {
    return { error };
  }
  render() {
    if (this.state.error) {
      return (
        <div style={{
          minHeight: '100vh', display: 'flex', alignItems: 'center',
          justifyContent: 'center', background: '#060b18', color: '#e2e8f0',
          fontFamily: 'monospace', flexDirection: 'column', gap: '1rem', padding: '2rem',
          textAlign: 'center'
        }}>
          <div style={{ fontSize: '2rem' }}>⚠️</div>
          <h2 style={{ color: '#00d4ff' }}>Something went wrong</h2>
          <p style={{ color: '#94a3b8', maxWidth: 400 }}>{this.state.error.message}</p>
          <button onClick={() => window.location.reload()}
            style={{
              background: '#00d4ff', color: '#060b18', border: 'none',
              padding: '.75rem 2rem', borderRadius: 8, cursor: 'pointer',
              fontWeight: 700, fontFamily: 'monospace'
            }}>
            Reload Page
          </button>
        </div>
      );
    }
    return this.props.children;
  }
}

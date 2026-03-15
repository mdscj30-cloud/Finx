import React from 'react';
import { AlertCircle, RefreshCw } from 'lucide-react';
import { Button } from '@/components/ui/button';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null, errorInfo: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    console.error('[Global Error Boundary Caught]:', error, errorInfo);
    // In a real app, send to error reporting service like Sentry here
  }

  handleReset = () => {
    this.setState({ hasError: false, error: null, errorInfo: null });
    window.location.reload();
  };

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen bg-slate-50 flex items-center justify-center p-4">
          <div className="bg-white p-8 rounded-2xl shadow-xl max-w-md w-full text-center border border-slate-200">
            <div className="w-16 h-16 bg-red-100 text-red-600 rounded-full flex items-center justify-center mx-auto mb-6">
              <AlertCircle size={32} />
            </div>
            <h1 className="text-2xl font-bold text-slate-900 mb-2">Oops! Something went wrong.</h1>
            <p className="text-slate-600 mb-6">
              We encountered an unexpected error. Our team has been notified.
            </p>
            {import.meta.env.DEV && (
              <div className="bg-slate-100 p-4 rounded text-left text-xs text-slate-800 overflow-auto mb-6 max-h-40">
                <p className="font-mono font-bold text-red-600 mb-2">{this.state.error?.toString()}</p>
              </div>
            )}
            <Button onClick={this.handleReset} className="w-full bg-blue-600 hover:bg-blue-700">
              <RefreshCw className="w-4 h-4 mr-2" />
              Try Again
            </Button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
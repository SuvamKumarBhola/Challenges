import React from 'react';

class ErrorBoundary extends React.Component{
    constructor(props){
        super(props);
        this.state = {hasError: false, error: null }
    }

    static getDerivedStateFromError(error){
        return {hasError: true, error: error}
    }

    componentDidCatch(error, errorInfo){
        console.log(error, errorInfo);
    }

    handleReset(){
        this.setState({hasError: false, error: null})
    };

    render(){
        if (this.state.hasError) {
            return (
                <div style={{
                    padding: '20px',
                    border: '2px solid red',
                    backgroundColor: '#ffe6e6',
                    borderRadius: '8px',
                    textAlign: 'center'
                }}>
                    <h2>⚠️ Something went wrong.</h2>
                    <details style={{ whiteSpace: 'pre-wrap', margin: '10px 0', textAlign: 'left' }}>
                        {this.state.error && this.state.error.toString()}
                    </details>

                    <button
                        onClick={this.handleReset}
                        style={{ padding: '8px 16px', cursor: 'pointer' }}
                    >
                        Try Again
                    </button>
                </div>
            );
        }
        return this.props.children;
    }
};
export default ErrorBoundary;
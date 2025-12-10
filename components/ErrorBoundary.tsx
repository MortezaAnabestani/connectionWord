
import React, { ErrorInfo, ReactNode, Component } from "react";
import { RotateCcw, AlertTriangle, Copy, ChevronDown, ChevronUp, Eraser } from "lucide-react";
import { storage } from "../services/storage";

interface Props {
  children?: ReactNode;
}

interface State {
  hasError: boolean;
  error: Error | null;
  showDetails: boolean;
}

export class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      hasError: false,
      error: null,
      showDetails: false
    };
  }

  static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error, showDetails: false };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error("Uncaught error:", error, errorInfo);
  }

  copyError = () => {
    if (this.state.error) {
      const text = `Error: ${this.state.error.name}\nMessage: ${this.state.error.message}\nStack: ${this.state.error.stack}`;
      if (navigator.clipboard) {
        navigator.clipboard.writeText(text);
        alert('کد خطا کپی شد!');
      }
    }
  };

  softReset = () => {
     // Clears potentially corrupted transient data but keeps progress
     storage.removeItem('persian_connections_daily'); 
     window.location.reload();
  };

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen bg-slate-900 flex flex-col items-center justify-center p-6 text-center font-sans" dir="rtl">
          <div className="bg-white p-8 rounded-[2rem] shadow-2xl max-w-md w-full flex flex-col items-center gap-5 animate-pop border-4 border-red-100">
            <div className="bg-red-50 p-6 rounded-full text-red-500 shadow-inner mb-2 animate-bounce">
              <AlertTriangle size={48} strokeWidth={2.5} />
            </div>
            
            <h1 className="text-3xl font-black text-slate-800">خطای غیرمنتظره</h1>
            <p className="text-slate-500 font-bold text-sm leading-relaxed max-w-xs">
              متأسفانه مشکلی در اجرای بازی پیش آمد. نگران نباشید، اطلاعات شما محفوظ است.
            </p>

            <button 
              onClick={() => this.setState((s) => ({ showDetails: !s.showDetails }))}
              className="flex items-center gap-1 text-xs text-blue-500 font-bold hover:text-blue-700 transition-colors bg-blue-50 px-3 py-1 rounded-lg"
            >
              {this.state.showDetails ? 'مخفی کردن' : 'نمایش جزئیات فنی'}
              {this.state.showDetails ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
            </button>

            {this.state.showDetails && (
              <div className="bg-slate-100 p-4 rounded-xl w-full text-[10px] text-left font-mono overflow-auto max-h-40 text-slate-600 shadow-inner relative group border border-slate-200">
                <button 
                  onClick={this.copyError}
                  className="absolute top-2 right-2 p-1.5 bg-white rounded-lg hover:bg-slate-50 text-slate-500 transition-colors shadow-sm"
                  title="کپی"
                >
                  <Copy size={14} />
                </button>
                <pre className="whitespace-pre-wrap">{this.state.error?.stack}</pre>
              </div>
            )}

            <div className="flex flex-col gap-3 w-full mt-4">
               <button
                onClick={() => window.location.reload()}
                className="w-full bg-slate-900 text-white py-4 rounded-2xl font-black text-lg flex items-center justify-center gap-2 hover:bg-black transition-all shadow-xl shadow-slate-900/20 active:scale-95"
              >
                <RotateCcw size={20} />
                تلاش مجدد
              </button>
              
              <button
                onClick={this.softReset}
                className="w-full bg-orange-50 text-orange-600 py-3 rounded-2xl font-bold text-sm flex items-center justify-center gap-2 hover:bg-orange-100 transition-colors border border-orange-100"
              >
                <Eraser size={16} />
                بازنشانی حافظه موقت (Soft Reset)
              </button>
            </div>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

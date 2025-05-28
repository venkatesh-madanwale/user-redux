import React, { useState } from 'react';
import SignUp from './features/auth/SignUp';
import SignIn from './features/auth/SignIn';

const App: React.FC = () => {
  const [tab, settab] = useState<'signin' | 'signup'>('signin');

  return (
    <div>

      <nav style={{ display: 'flex', justifyContent: 'center', gap: '1rem', padding: '1rem', backgroundColor: '#f0f0f0' }}>
        <button onClick={() => settab('signin')}>Sign In</button>
        <button onClick={() => settab('signup')}>Sign Up</button>
      </nav>

      <main style={{ padding: '2rem' }}>
        {tab === 'signin' ? <SignIn /> : <SignUp />}
      </main>
    </div>
  );
};

export default App;

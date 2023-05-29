import React from 'react';

import { Blog, Features, Possibility, Footer, Header, GPT3 } from './containers';
import { CTA, Brand, NAV } from './components';

const App = () => {
  return (
    <div className="App">
      <div className="gradient_bg">
        <NAV />
        <Header />
      </div>
      <Brand />
      <GPT3 />
      <Features />
      <Possibility />
      <CTA />
      <Blog />
      <Footer />
    </div>
  )
}

export default App

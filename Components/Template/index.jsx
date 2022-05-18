import React from 'react';
import Books from '../Books';
import Footer from '../Footer';
import Header from '../Header';

function Template({ children }) {
  return (
    <div>
      <Header/>
      <main className='container'>
        <div className='card'>
        <Books />
        </div>
        <div className='content'>{children}</div>
      </main>
      <Footer/>
    </div>
  )
}

export default Template;
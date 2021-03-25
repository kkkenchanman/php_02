import React, { useEffect, useState } from 'react';
import ReactDOM from "react-dom";
import Article from './Article';
import Form from './Form.js'

const App = () => {

    return (
      <section>
        <h1>aaaaaaaaaaa</h1>
        <div>
          <Form />
        </div>
        <div>
            <ul>
              <Article/>
            </ul>
        </div>
      </section>
    );
}

export default App;

if (document.getElementById('app')) {
    ReactDOM.render(<App />, document.getElementById('app'));
}

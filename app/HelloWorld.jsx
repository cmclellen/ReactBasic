import React from 'react';
import RepositoryList from './repository-list';

class HelloWorld extends React.Component {
  render() {
    return (
      <div>
        <h2>open sauce</h2>
        <RepositoryList />
      </div>
    );
  }
}

export default HelloWorld

import React from 'react';
import Repo from './repo'
import {reposForUser} from './api';

export default class RespositoryList extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
      repos: []
    };
  }

  componentDidMount() {
    reposForUser('jackfranklin').then(repos=>{
      this.setState({repos: repos});
    });
  }

  render() {
    var repos = this.state.repos.map((repo) => {
      return <li key={repo.id}><Repo raw={repo} /></li>;
    });
    return <ul>{repos}</ul>;
  }
}
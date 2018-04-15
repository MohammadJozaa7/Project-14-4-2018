import React from 'react';
//<h4> Repo List Component </h4>
const RepoList = (props) => (
  <div>
    There are {props.repos.length} informations.
  </div>
)

export default RepoList;
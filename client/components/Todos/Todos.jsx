import React, { useEffect, useState } from 'react';

import Loading from '../Loading/Loading';

const Todos = ({ isLoading, taskList }) => {
  return (
    <div>
      {isLoading && <Loading />}
      <ul>
        { taskList }
      </ul>
    </div>
  )
}

export default Todos;
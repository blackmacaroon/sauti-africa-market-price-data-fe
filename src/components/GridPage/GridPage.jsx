import React from 'react'

import Grid from '../Grid'
import Protected from '../Protected'
import Loading from '../Loading'

import useGetToken from '../../hooks/useGetToken'

const GridPage = props => {
  const [token, loading] = useGetToken()

  return (
    <div className="next-steps my-5">
      {
        !!token === false || loading
          ? <Loading grid={true} />
          : token && !!token === true
            ? <Grid token={token} />
            : <Protected />
      }
    </div>
  )
}

export default GridPage

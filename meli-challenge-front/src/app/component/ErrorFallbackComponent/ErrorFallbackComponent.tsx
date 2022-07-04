import React, { VFC } from 'react'
import { FallbackProps } from 'react-error-boundary'

const ErrorFallbackComponent: VFC<FallbackProps> = ({ error }) => {
  return (
    <>
      <div className='mt-4'>
        <p className='fs-3'>{error.name}</p>
        <p className='fs-5' style={{ whiteSpace: 'pre' }}>{error.message}</p>
        <pre style={{ fontFamily: 'monospace' }}>{error.stack?.replace(error.message, '')}</pre>
      </div>
    </>
  )
}

export default ErrorFallbackComponent;

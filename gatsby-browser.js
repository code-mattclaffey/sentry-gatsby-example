import React from 'react'
import ErrorBoundaryContainer from './src/components/error-boundary'

export const wrapPageElement = ({ element }) => (
  <ErrorBoundaryContainer>
    {element}
  </ErrorBoundaryContainer>
)

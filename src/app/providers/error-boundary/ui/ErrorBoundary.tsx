import React, { ErrorInfo, PropsWithChildren } from 'react'
import { PageError } from 'widgets/page-error'

interface ErrorBoundaryState {
  hasError: boolean
}
export class ErrorBoundary extends React.Component<
  PropsWithChildren,
  ErrorBoundaryState
> {
  constructor(props: PropsWithChildren) {
    super(props)
    this.state = { hasError: false }
  }

  static getDerivedStateFromError(error: Error) {
    return { hasError: true }
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error(error, errorInfo)
  }

  render() {
    if (this.state.hasError) {
      return <PageError />
    }

    return this.props.children
  }
}

import React from 'react'

interface PageHeaderProps {
  title: string
}

export default function PageHeader({ title }: PageHeaderProps): React.JSX.Element {
  return (
    <div className="mb-6">
      <h1 className="text-2xl font-semibold text-primary-dark">{title}</h1>
    </div>
  )
} 
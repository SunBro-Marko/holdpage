import React from 'react'

export default function AbstractComponent({ variants, type }) {
  const Component = variants[type]
  return <Component />
}

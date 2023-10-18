import React from 'react'

const BoxWrap = ({ children, className='' }:
  { children: React.ReactNode, className?: string }) => (
  <div
    className={'shadow p-2 border-2 border-slate-200 m-1 bg-white rounded-md '
      + className}
  >
    {children}
  </div>
)

export default BoxWrap
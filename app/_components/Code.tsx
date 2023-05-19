import React from 'react';

type CodeProps = {
    children: React.ReactNode
}

function Code({ children }: CodeProps) {
  return (
    <code className="px-2 py-1 text-sm border rounded border-steal-500">
        {children}
    </code>
  )
}

export default Code

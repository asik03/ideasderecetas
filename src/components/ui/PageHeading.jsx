import React from 'react'

function PageHeading({ title }) {
  return (
    <div className="pb-5 mt-4 border-accent self-center text-center">
      <h1 className="leading-6">{title}</h1>
    </div>
  )
}

export default PageHeading

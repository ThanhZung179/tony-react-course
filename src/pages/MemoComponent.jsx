import React, { memo } from 'react'

const MemoComponent = ({ title, releaseDate, handleUpdateMovie }) => {
  console.log("MemoComponent render")
  return (
    <div>
      MemoComponent
      <br />
      Title: {title} <br />
      ReleaseDate: {releaseDate} <br />
      <button 
        type="button"
        onClick={handleUpdateMovie}
      >
          Change Movie
        </button>
    </div>
  )
}

// function customEqual(prevProps, nextProps) {
//   // console.log('customEqual: ', {prevProps, nextProps})
//   return prevProps.releaseDate === nextProps.releaseDate;
// }

// export default memo(MemoComponent, customEqual)
export default memo(MemoComponent)
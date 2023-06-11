import React from 'react'

// hooks
import useReszieScreen from '../hooks/useReszieScreen';

function CustomHook() {
  const { onSmalll } = useReszieScreen();
  return (
    <div>
      CustomHook
      <div
        style={{
          width: 100,
          height: 100,
          backgroundColor: onSmalll ? 'blue' : 'red'
        }}
      >
        {onSmalll ? "small" : "large"}
      </div>


    </div>
  )
}

export default CustomHook

// 1. call api
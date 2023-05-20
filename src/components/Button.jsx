/* eslint-disable react/prop-types */

function Button({ text = 'Click', handleClick }) {
  // first render : count = 0 
  // next render: count = 0
  return (
    <>
      <button 
        type="button"
        onClick={handleClick}
      >
        {text}
      </button>
    </>
  )
}

export default Button
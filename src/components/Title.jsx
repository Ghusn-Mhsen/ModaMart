// eslint-disable-next-line react/prop-types
const Title = ({ text1, text2 }) => {
  return (
    <div className='inline-flex gap-2 items-center'>
      <p className='text-gray-500'>
        {text1}
        <span className='text-gray-700 font-medium'> {text2}</span>
        <p className='w-8 sm:w-12 h-[1px] sm:h-[2px] placeholder-gray-700'></p>
      </p>
    </div>
  )
}

export default Title

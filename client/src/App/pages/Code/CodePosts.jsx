import React, { useEffect, useState } from 'react'
import CodePost from './CodePost'
import { filter } from '../../../redux/reducers/code'
import { useDispatch, useSelector } from 'react-redux'

const CodePosts = ({ filters }) => {

  const { filteredCodes: codes, isFetching, error } = useSelector(state => state.code)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(filter(filters.posts))
  }, [filters])

  return (
    <div className='w-full flex flex-col gap-[1rem] ' >

      {
        codes.map((post, index) => (
          <CodePost key={index} post={post} />
        ))
      }

    </div>
  )
}

export default CodePosts
import { NextPage } from 'next'
import React, { ReactElement } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment } from '../../slices/counterSlice'
import type {RootState} from '../../store'

type UserPageWithLayout = NextPage<Props> & {
    getLayout: (page: ReactElement) => ReactElement;
}
type Props = {
    pageID: string
}

const PageOne: UserPageWithLayout = ({pageID}) => {
  const count = useSelector((state: RootState) => state.counter.value)
  const dispatch = useDispatch();
  return (
    <>
    <div>Value of counter{count} </div>
    <button onClick={() => dispatch(increment())}>Increase</button>
    <button onClick={() => dispatch(decrement())}>Decrease</button>

    </>
  )
}
export default PageOne

PageOne.getLayout =  (page: ReactElement) => {
    return(
        <>
        <h1>PageOne Custom layout</h1>
        <>{page}</>
        </>
    )
}
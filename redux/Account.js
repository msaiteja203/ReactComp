import React from 'react'
import { useSelector } from 'react-redux'

function Account() {

   let data = useSelector(
        (state) => {
            return state;
        }
    )
  return (
    <div className='container' >
        <h2>Account Details</h2>
      <table className='table table-botdered w-50'>
      <thead>
            <tr>
                <th>Balance</th>
                <th>mobile No</th>
                <th>UserName</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <th>{data.balance}</th>
                <th>{data.fullName}</th>
                <th>{data.mobile}</th>
            </tr>
        </tbody>
      </table>
    </div>
  )
}

export default Account
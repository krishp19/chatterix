/* eslint-disable no-unused-vars */
import React from 'react'
import GenderCheckBox from './GenderCheckBox'

const SignUp = () => {
  return (
    <div className='flex flex-col items-center justify-center min-w-96 mx-auto'>
        <div className='w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0'>
            <h1 className='text-3xl font-semibold text-center text-gray-300 mb-5'>
                SignUp <span className='text-blue-600 ml-2'>Chatterix</span></h1>
        
        <form action="">
            <div>
                <label className='label p-2'>
					<span className='text-base label-text'>Full Name</span>
				</label>
                <input type="text" placeholder="Jhon Doe" className="w-full input input-bordered  h-10" />
            </div>

            <div>
                <label className='label p-2'>
					<span className='text-base label-text'>Username</span>
				</label>
                <input type="text" placeholder="jhondoe" className="w-full input input-bordered  h-10" />
            </div>

            <div>
                <label className='label p-2'>
					<span className='text-base label-text'>Password</span>
				</label>
                <input type="password" placeholder='Enter Password' className="w-full input input-bordered  h-10" />
            </div>

            <div>
                <label className='label p-2'>
					<span className='text-base label-text'>Confirm Password</span>
				</label>
                <input type="password" placeholder='Confirm Password' className="w-full input input-bordered  h-10" />
            </div>

            <GenderCheckBox/> 

            <a className="text-sm  hove:text-blue-500  mt-4 inline-block" href="#">
                Already have an account? <span className="text-blue-600 hover:underline">Login</span>
            </a>

            <div>
                <button className='btn bt-block btn-sm  border border-slate-700'> SignUp </button>
            </div>

        </form>
        
        </div>
    </div>
  )
}

export default SignUp

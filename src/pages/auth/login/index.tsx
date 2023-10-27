import {useForm, SubmitHandler} from 'react-hook-form'
import {login} from '../../../services/auth'
import {LoginBannerContainer} from '../../../components/auth/login/login-banner'
import {LoginFormContainer} from '../../../components/auth/login/auth-container'

export const LoginForm = () => {
  type Inputs = {
    username: string
    password: string
    exampleRequired: string
  }
  const onInvalid = (errors: any) => console.error(errors)

  const {
    register,
    handleSubmit,
    formState: {errors},
  } = useForm<Inputs>()

  const onSubmit: SubmitHandler<Inputs> = async (values) => {
    try {
      const data = await login(values)
      console.log(data)
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <form onSubmit={handleSubmit(onSubmit, onInvalid)} className='mt-8'>
      <p className='text-sm'>Email Address</p>
      <input
        {...register('username', {required: true})}
        placeholder='example@domain.com'
        type='email'
        className='border border-1 border-gray-200 text-sm w-full py-3 rounded-2xl my-2 focus:ring-transparent focus:border-sky-900'
      />
      <div className='flex justify-between items-center mt-4'>
        <p className='text-sm'>Password</p>
        <span className='text-sky-800 text-xs mr-2 hover:cursor-pointer'>Forgot Password?</span>
      </div>
      <input
        {...register('password')}
        type='password'
        className='border border-1 border-gray-200 text-sm w-full py-3 rounded-2xl my-2 focus:ring-transparent focus:border-sky-900'
      />
      <div className='mt-2 flex items-center'>
        <input type='checkbox' className='rounded-md border border-gray-400 mr-2 focus:ring-0' />
        <span className='text-sky-800 text-xs mr-2'>I agree to the terms and policy.</span>
      </div>
      <input
        type='submit'
        value='login'
        ///cursor-hover made a bug for submitting: no hover | no submission (BUG)
        className='py-4 mt-8 bg-sky-900 text-white text-center w-full text-sm rounded-2xl cursor-pointer'
      />

      <p className='text-sky-800 text-xs mr-2 mt-3'>
        Create an account?
        <span className='mx-1 text-sky-500 hover:cursor-pointer'>Sign in</span>{' '}
      </p>
      <p className='text-gray-400 text-xs mr-2 mt-7 text-center'>{`${new Date().getFullYear()} Captain Hook, All right Reserved.`}</p>
    </form>
  )
}

const Login = () => {
  return (
    <div className='p-0 md:p-10 md:bg-gray-100'>
      <div className='container mx-auto flex w-100 p-10 rounded-3xl bg-white md:drop-shadow-2xl'>
        <LoginFormContainer />
        <LoginBannerContainer />
      </div>
    </div>
  )
}
export default Login

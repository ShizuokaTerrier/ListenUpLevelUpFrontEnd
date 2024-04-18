function Login() {
  return (
    <>
      <form action=''>
        <label>Username</label>
        <input placeholder='username' className='input' type='text' />
        <label>Password</label>
        <input placeholder='password' className='input' type='password' />
        <div className='container'>
          <button type='submit'>Login</button>
          <button>Go Back</button>
        </div>
      </form>
    </>
  );
}

export default Login;

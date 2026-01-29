import React from 'react'

const Signup = () => {
  return (
    <div className='container'>
        <div className="row justify-content-center mt-5">
            <div className="col-md-6">
                <form action="" method="post">
                    <h2>Signup</h2>
                    <div className="mb-3">
                        <label htmlFor="username" className="foorm-llaabel">Username</label>
                        <input type="text" name="username" id="username" className="form-control" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="email" className="foorm-llaabel">Email</label>
                        <input type="email" name="email" id="email" className="form-control" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="password" className="foorm-llaabel">Password</label>
                        <input type="password" name="password" id="password" className="form-control" />
                    </div>
                    <button type="submit" className="btn btn-primary">Signup</button>
                </form>
            </div>
        </div>
    </div>
  )
}

export default Signup

'use client'

import { useState, useEffect } from "react"
import "./login.css"
import { useAuth } from "../AuthContext"
import { useRouter } from "next/navigation"
import { useNotification } from "../NotificationContext"

const Login = () => {
  const [credentials, setCredentials] = useState({
    username: "",
    password: "",
  })
  const { login, isAuthenticated } = useAuth()
  const { addNotification } = useNotification()
  const router = useRouter()

  const handleChange = (e) => {
    const { name, value } = e.target
    setCredentials({ ...credentials, [name]: value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const success = await login(credentials)
    if (success) {
      router.push("/portal-8f3c2a")
      addNotification("Login Successfull", "success", 3000)
    } else {
      addNotification("Invalid Credentials", "error", 3000)
    }
  }

  useEffect(() => {
    if (isAuthenticated) {
      router.push("/portal-8f3c2a")
    }
  }, [isAuthenticated, router])
  
  return (
    <>
      <section
        className="vh-100 d-flex justify-content-center align-items-center"
        id="login-container"
      >
        <div className="h-100">
          <div className="row d-flex align-items-center justify-content-center h-100 w-100">
            <div className="col-md-8 col-lg-7 col-xl-6">
              <img src="/assets/image 26.png" className="img-fluid" alt="Phone image" />
            </div>
            <div className="col-md-7 col-lg-5 col-xl-5 offset-xl-1">
              <h1 className="text-center mb-3">Welcome Back</h1>
              <h6 className="text-center mb-3">
                Welcome to Ragini Nursing Bureau
              </h6>
              <form onSubmit={handleSubmit}>
                <div data-mdb-input-init className="form-outline mb-4">
                  <input
                    type="username"
                    name="username"
                    placeholder="Enter your email"
                    id="form1Example13"
                    className="form-control form-control-lg"
                    value={credentials.username}
                    onChange={handleChange}
                  />
                </div>

                <div data-mdb-input-init className="form-outline mb-4">
                  <input
                    type="password"
                    name="password"
                    placeholder="Enter your password"
                    id="form1Example23"
                    className="form-control form-control-lg"
                    value={credentials.password}
                    onChange={handleChange}
                  />
                </div>

                <div className="d-flex justify-content-around align-items-center mb-4">
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      value=""
                      id="form1Example3"
                      defaultChecked
                    />
                    <label className="form-check-label" htmlFor="form1Example3">
                      {" "}
                      Remember me{" "}
                    </label>
                  </div>
                  <a href="#!">Forgot password?</a>
                </div>

                <button
                  type="submit"
                  data-mdb-button-init
                  data-mdb-ripple-init
                  className=" btn-primary btn-lg btn-block"
                >
                  Sign in
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Login




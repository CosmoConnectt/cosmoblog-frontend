import { SignUp } from "@clerk/clerk-react"

const RegisterPage = () => {
  return (
    <div className="flex items-center justify-center h-[calc(120vh-60px)]">
      <SignUp signInUrl="/loginpage"/>
    </div>
  )
}

export default RegisterPage
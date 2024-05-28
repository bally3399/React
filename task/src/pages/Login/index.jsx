import PageTemplate from "../../component/pageTemplate";
import image from "../../asset/login.png"
const Login =() =>{
    return (
        <>
            <PageTemplate image={image} headerName={"Welcome Back!"} message={"Log in to your Dashboard"} buttonText={"Login"} input1={"username"} input2={"password"} text={"Don’t have an Account?"} textInput={"sign up"}/>
        </>
    )
}
export default Login;
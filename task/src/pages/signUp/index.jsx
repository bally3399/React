import PageTemplate from "../../component/pageTemplate";
import image from "../../asset/login.png"
const SignUp =() =>{
    return (
        <>
            <PageTemplate image={image} headerName={"Welcome!"} message={"Log in to your Dashboard"} buttonText={"Sign up"} input1={"username"} input2={"password"} text={"Already have an account"} textInput={"Login"}/>
        </>
    )
}
export default SignUp;
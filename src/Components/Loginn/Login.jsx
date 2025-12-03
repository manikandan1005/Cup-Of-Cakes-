import './Login.scss';
function Login (){
    return(
        <div className="form">
            <form action="">
                <label htmlFor="userName">User name<span>*</span></label>
                <input type="text" name='userName' />

                <label htmlFor="passWord">pass word<span>*</span></label>
                <input type="number" name='passWord' />
                <div className="">
                    <button className="btn btn-primary">Login</button>
                </div>
            </form>
        </div>
    );
    
}
export default Login;
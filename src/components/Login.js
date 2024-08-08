import React from 'react'

const Login = () => {
  return (
    <div class="fbc_login_main">
        <div class="fbc_auth_login_box">
            <div class="fbc_login_wrapper">
                <div class="fbc_login_inner">
                    <h3>Welcome Back! <img src="/images/welcome.png" /></h3>
                    <p>To keep connected with us please login with
                        your registered email and password.</p>
                </div>

                <form class="fbc_auth_input_wrapper" id="login_form">
                    <div class="fbc_auth_input">
                        <label class="fbc_main_label">Email Address</label>
                        <div class="fbc_auth_input_item">
                            <input class="fbc_custom_input" type="email" name="email" id="email" placeholder="Email Here..." required />
                            <svg width="18" height="14" viewBox="0 0 18 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M15.75 0H1.75C0.7875 0 0.00874999 0.7875 0.00874999 1.75L0 12.25C0 13.2125 0.7875 14 1.75 14H15.75C16.7125 14 17.5 13.2125 17.5 12.25V1.75C17.5 0.7875 16.7125 0 15.75 0ZM15.75 3.5L8.75 7.875L1.75 3.5V1.75L8.75 6.125L15.75 1.75V3.5Z" fill="#A6AEC8"/>
                            </svg>
                        </div>
                      
                    </div>
                    <div class="fbc_auth_input">
                        <label class="fbc_main_label">Password</label>
                        <div class="fbc_auth_input_item">
                            <input class="fbc_custom_input" type="password" name="password" id="password" placeholder="Password Here..." />
                            <svg width="16" height="20" viewBox="0 0 16 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M12.7603 7.5H4.01025V6.25C4.01025 4.18213 5.69238 2.5 7.76025 2.5C9.82813 2.5 11.5103 4.18213 11.5103 6.25H14.0103C14.0103 2.80395 11.2063 0 7.76025 0C4.3142 0 1.51025 2.80395 1.51025 6.25V7.84768C0.766616 8.28125 0.260254 9.0786 0.260254 10V17.5C0.260254 18.8788 1.38147 20 2.76025 20H12.7603C14.139 20 15.2603 18.8788 15.2603 17.5V10C15.2603 8.62121 14.139 7.5 12.7603 7.5ZM9.01025 14.5134V16.25H6.51025V14.5134C6.12924 14.1702 5.88525 13.6781 5.88525 13.125C5.88525 12.0895 6.72472 11.25 7.76025 11.25C8.79579 11.25 9.63525 12.0895 9.63525 13.125C9.63525 13.6781 9.39127 14.1702 9.01025 14.5134Z" fill="#A6AEC8"/>
                            </svg>
                        </div>
                   
                    </div>
                    <div class="fbc_remember">
                        <div class="fbc_checkbox">
                            <input class="custem_checkbox" id="fbc_remember" type="checkbox" />
                            <label for="fbc_remember">Keep me logged In</label>
                        </div>
                        <div class="fbc_forgot_pass">
                            <a href="forgot-password.html">Forgot password?</a>
                        </div>                            
                    </div>
                    <div class="fbc_form_btn">
                        <button type="submit" class="fbc_btn">
                            Login
                        </button>
                    </div>
        
                </form>
                <div class="auth-boy-img">
                    <img src="/images/auth-boy.png" />
                </div>
            </div>
            <div class="fbc_letf_auth_bg">
                <div class="fbc_letf_auth">
                    <img src="/images/login-clip.png" alt="login-clip" />
                    <a href="login.html" class="fbc_letf_auth_footer">
                        <img src="/images/logo.png" />
                    </a>
                </div>
            </div>
        
        </div>
    </div>
  )
}

export default Login

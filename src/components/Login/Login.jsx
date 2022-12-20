import React from "react";
import { Field, reduxForm } from "redux-form";
import style from "./Login.module.css";
import { required } from "../../utils/validators/validators";
import { Input } from "../common/preloader/FormsControls/FormsControls";

const LoginForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <Field
          placeholder={"login"}
          validate={[required]}
          name={"login"}
          component={Input}
        />
      </div>
      <div>
        <Field
          placeholder={"password"}
          validate={[required]}
          name={"password"}
          component={Input}
        />
      </div>
      <div>
        <Field
          component={Input}
          name={"rememberMe"}
          type={"checkbox"}
          validate={[required]}
        />
        remember me
      </div>
      <div>
        <button>Login</button>
      </div>
    </form>
  );
};
const LoginReduxForm = reduxForm({ form: "login" })(LoginForm);

const Login = (props) => {
  const onSubmit = (formData) => {
    console.log(formData);
  };
  return (
    <div className={style.login}>
      <h1 className={style.loginName}>Login</h1>
      <LoginReduxForm onSubmit={onSubmit} />
    </div>
  );
};
export default Login;

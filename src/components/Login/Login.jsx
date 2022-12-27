import React from "react";
import { connect } from "react-redux";
import { reduxForm } from "redux-form";
import { Navigate } from "react-router-dom";

import { login } from "../../redux/auth-reduce";
import { required } from "../../utils/validators/validators";
import { Input } from "../common/preloader/FormsControls/FormsControls";
import { createField } from "../common/preloader/FormsControls/FormsControls";
import style from "../common/preloader/FormsControls/FormsControls.module.css";

const LoginForm = ({ handleSubmit, error }) => {
  return (
    <form onSubmit={handleSubmit}>
      {createField("Email", [required], "email", Input)}
      {createField("password", [required], "password", Input, {
        type: "password",
      })}
      {createField(
        null,
        [],
        "rememberMe",
        Input,
        {
          type: "checkbox",
        },
        "remember me"
      )}

      {/* <Field
          placeholder={"Email"}
          validate={[required]}
          name={"email"}
          component={Input}
        /> */}

      {/* <div>
        <Field
          placeholder={"password"}
          validate={[required]}
          name={"password"}
          component={Input}
          type={"password"}
        />
      </div> */}
      {/* <div>
        <Field
          component={Input}
          name={"rememberMe"}
          type={"checkbox"}
          validate={[required]}
        />
        remember me
      </div> */}
      {error && <div className={style.formSummareError}>{error}</div>}
      <div>
        <button>Login</button>
      </div>
    </form>
  );
};
const LoginReduxForm = reduxForm({ form: "login" })(LoginForm);

const Login = (props) => {
  const onSubmit = (formData) => {
    props.login(formData.email, formData.password, formData.rememberMe);
  };
  if (props.isAuth) {
    return <Navigate to={"/profile"} />;
  }
  return (
    <div>
      <h1>Login</h1>
      <LoginReduxForm onSubmit={onSubmit} />
    </div>
  );
};

const mapStateToProps = (state) => ({
  isAuth: state.auth.isAuth,
});
export default connect(mapStateToProps, { login })(Login);

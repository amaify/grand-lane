import {
  loginPending,
  loginSuccess,
  loginError,
  signupSuccess,
  clearError,
} from "../actions/authAction";
import { paymentPage } from "../actions/paymentAction";

export function loginHandler(email, password, ownProps, optionsRoute) {
  return (dispatch) => {
    dispatch(loginPending());
    const graphqlQuery = {
      query: `
                 {
                   login(email: "${email}", password: "${password}"){
                     token
                     userId
                     email
                     firstName
                     lastName
                   }
                 }
                `,
    };

    fetch("https://grand-lane.herokuapp.com/graphql", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(graphqlQuery),
    })
      .then((response) => response.json())
      .then((resData) => {
        if (resData.errors && resData.errors[0].status === 422) {
          throw new Error("User does not exist");
        }

        if (resData.errors) {
          throw new Error("Username or Password is Incorrect");
        }

        dispatch(loginSuccess(resData));
        localStorage.setItem("token", resData.data.login.token);
        localStorage.setItem("userId", resData.data.login.userId);
        localStorage.setItem("email", resData.data.login.email);
        localStorage.setItem("firstName", resData.data.login.firstName);
        localStorage.setItem("lastName", resData.data.login.lastName);

        if (optionsRoute) {
          dispatch(paymentPage());
          return ownProps.history.push("/reservation/options");
        }

        ownProps.history.push("/");
        dispatch(paymentPage());

        const remainingMilliseconds = 60 * 60 * 1000;
        const expiryDate = new Date(
          new Date().getTime() + remainingMilliseconds
        );
        localStorage.setItem("expiryDate", expiryDate.toISOString());
        this.setAutoLogout(remainingMilliseconds);
      })
      .catch((err) => {
        dispatch(loginError(err));
      });
  };
}

export function signupHandler(firstName, lastName, email, password, ownProps) {
  return (dispatch) => {
    dispatch(loginPending());
    const graphqlQuery = {
      query: `
            mutation {
              createUser(userInput: {firstName: "${firstName}", lastName: "${lastName}", email: "${email}", password: "${password}"}){
                firstName
                lastName
              }
            }
        `,
    };

    fetch("https://grand-lane.herokuapp.com/graphql", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(graphqlQuery),
    })
      .then((response) => response.json())
      .then((resData) => {
        if (resData.errors && resData.errors[0].status === 422) {
          throw new Error("E-mail address already taken");
        }

        if (resData.errors) {
          throw new Error("User creation failed.");
        }
        // this.setState({
        //   isAuth: false,
        //   authLoading: false,
        //   showModal: false,
        // });
        dispatch(signupSuccess());
        ownProps.history.push("/login");
        // this.props.history.replace("/login");
      })
      .catch((err) => {
        // this.setState({
        //   authLoading: false,
        //   error: err,
        //   showModal: false,
        // });
        dispatch(loginError(err));
      });
  };
}

export function clearErrors() {
  return (dispatch) => dispatch(clearError());
}

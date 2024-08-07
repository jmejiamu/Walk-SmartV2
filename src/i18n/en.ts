const en = {
  registerScreen: {
    title: `Hey,👋${"\n"}Welcome to WalkSmart`,
    subTitle: "Create your account",
    inputName: "Name",
    inputEmail: "Email",
    inputPassword: "Password",
    footerText: "Do you have an account?",
    signIn: "Sign in",
    button: "Sign Up",
  },
  loginScreen: {
    title: `Hey,👋${"\n"}Welcome back`,
    subTitle: "Sign in to your account",
    inputEmail: "Email",
    inputPassword: "Password",
    footerText: "Don't have an account?",
    signUp: "Sign Up",
    button: "Sign In",
  },
  homeScreen: {
    addEventSheet: {
      title: "Event's title",
      subTitle: "Event's Description",
      inputEventTitle: "Reading group",
      inputEventDescription: "Javascript books",
      submitButton: "Add Event",
      cancelButton: "Cancel",
    },
  },
};

export default en;
export type Translations = typeof en;

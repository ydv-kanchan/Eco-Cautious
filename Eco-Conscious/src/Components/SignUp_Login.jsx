import React from "react";

const SignUp_Login = () => {
  const styles = {
    container: {
      display: "flex",
      height: "100vh",
    },
    box: {
      flex: 1,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    },
    loginBox: {
      backgroundColor: "#ffffff",
      padding: "60px 80px",
      boxShadow: "2px 0 10px rgba(0, 0, 0, 0.1)",
      // borderRadius: "10px",
      textAlign: "center",
    },
    signupBox: {
      backgroundImage:
        'url("https://th.bing.com/th/id/OIP.R6RJRL-qjPMgAizSTVRwowHaG2?w=535&h=495&rs=1&pid=ImgDetMain")', // Replace with your image URL
      backgroundSize: "cover",
      backgroundPosition: "center",
      color: "white",
      // borderRadius: "10px",
      padding: "60px",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      position: "relative",
    },
    overlay: {
      position: "absolute",
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: "rgba(0, 0, 0, 0.5)",
    },
    signupContent: {
      textAlign: "center",
      zIndex: 2,
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
    },
    inputGroup: {
      marginBottom: "15px",
    },
    label: {
      display: "block",
      marginBottom: "10px",
      fontSize: "14px",
      color: "#333",
    },
    input: {
      width: "100%",
      padding: "10px",
      borderRadius: "0px",
      border: "none",
      borderBottom: "1px solid #ccc",
      fontSize: "16px",
      backgroundColor: "transparent",
    },
    button: {
      backgroundColor: "#c49b63",
      color: "white",
      padding: "15px 30px",
      border: "none",
      cursor: "pointer",
      fontSize: "18px",
      borderRadius: "30px",
      marginBottom: "15px",
    },
    heading: {
      fontSize: "35px",
      fontWeight: "500",
      marginBottom: "20px",
      // textAlign: "center", // Center the heading
    },
    paragraph: {
      fontSize: "20px",
      fontWeight: "400",
      marginBottom: "40px",
    },
    buttonSignUp: {
      backgroundColor: "transparent",
      color: "white",
      padding: "15px 30px",
      border: "2px solid white",
      cursor: "pointer",
      fontSize: "18px",
      borderRadius: "30px",
      marginBottom: "20px",
      textAlign: "center", // Center the button
    },
  };

  return (
    <div style={styles.container}>
      <div style={{ ...styles.box, ...styles.loginBox }}>
        <div>
          <h2 style={styles.heading}>Welcome back:)</h2>
          <form>
            <div style={styles.inputGroup}>
              <label htmlFor="email" style={styles.label}>
                EMAIL
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                style={styles.input}
              />
            </div>
            <div style={styles.inputGroup}>
              <label htmlFor="password" style={styles.label}>
                PASSWORD
              </label>
              <input
                type="password"
                id="password"
                name="password"
                required
                style={styles.input}
              />
            </div>
            <button type="submit" style={styles.button}>
              SIGN IN
            </button>
          </form>
        </div>
      </div>
      <div style={{ ...styles.box, ...styles.signupBox }}>
        <div style={styles.overlay}></div>
        <div style={styles.signupContent}>
          <h1 style={styles.heading}>New here?</h1>
          <p style={styles.paragraph}>
            New to our eco-friendly store? <br></br>Sign up and start making
            sustainable choices!
          </p>
          <button style={styles.buttonSignUp}>SIGN UP</button>
        </div>
      </div>
    </div>
  );
};

export default SignUp_Login;

import PropTypes from 'prop-types'

// conditional rendering

function UserGreeting (props) {

    const welcomeMessage = <h2 className="welcome-message">
                            Welcome {props.username}
                            </h2> 

    const loginPrompt = <h2 className="login-prompt">
                        Please Log in to Continue
                        </h2>
    return (props.isLoggedIn ? welcomeMessage : loginPrompt);

    }

    UserGreeting.proptypes = {
        isLoggeIn: PropTypes.bool,
        username: PropTypes.string,
    }

    UserGreeting.defaultProps = {
        isLoggenIn: false,
        username: "Guest",
    }

export default UserGreeting
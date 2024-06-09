// propTypes = a mechanism that ensures that the passed value is of the correct datatype. 
// age: PropTypes.number


// props = read-only propersties that are shared between components. A parent component can send data to a child component <Component key = value />
import Proptypes from 'prop-types'
function Student (props) {

    return (
        <div className="student">
            <p>Name: {props.name}</p>
            <p>Age: {props.age}</p>
            <p>Student: {props.isStudent ? "Yes" : "No"}</p>

        </div>
    );

}
// propTypes

Student.propTypes = {
    name: Proptypes.string,
    age: Proptypes.number,
    isStudent: Proptypes.bool
}

Student.defaultProps = {
    name: "Guest",
    age: 0,
    isStudent: false
}

export default Student

// return (
//     <>
//     <Student name="Spongebob" age={30} isStudent={true}/>
//     <Student name="Patrick" age={42} isStudent={false}/>
//     <Student name="Squidward" age={50} isStudent={false}/>
//     <Student name="Sandy" age={27} isStudent={true}/>
//     <Student  />
//     </>
//   );
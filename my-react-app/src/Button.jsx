// Module - move file to another folder so make it clear and easy to find
// External - the basic one/ classic style 
// Inline Styling

function Button () {

    const styles = {

            backgroundColor: "black",
            border: "1px solid black",
            color: " white",
            padding: "10px 20px",
            borderRadius: "5px",
            cursor:" pointer",
    }

    return (
        <button style = {styles}> Click me</button>

    );
}

export default Button
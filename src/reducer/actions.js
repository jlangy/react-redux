const ADD = "ADD";

const addMessage = (message) =>{
    return {
        type: ADD,
        message: message
    }
}

export default addMessage;

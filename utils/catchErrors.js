function catchErrors(error, displayError) {
    let errorMsg;
    if(error.response) {
        // error.response is provided in the error object the request was made and the server responed with a status code that is not in the range of 2XX
        errorMsg = error.response.data;
        console.log("Error response", errorMsg)

        // For Cloudinary image uploads
        if(error.response.data.error) {
            errorMsg = error.response.data.error.message;
        }
    }else if (error.request) {
        // The request was made but no response was recieved.
        console.log("Error request", errorMsg)
    } else {
        // something else happened in making the request that triggered an error 
        errorMsg = error.message;
        console.log("Error message", errorMsg)
    }
    displayError(errorMsg);
}

export default catchErrors;
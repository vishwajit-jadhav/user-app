//Form validations for add user 
export  const addUserValidation = {
    name: {
        required: "Name is Required",
        pattern:{
            value:/^[A-Za-z\s]*$/,
            message:"Only aplhabetes are allowed"
        }

    },
    email: {
        required: "Email is Required",
        pattern: {
            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
            message: "Invalid email address",
        },
    },
    address: {
        required: "City is Required"
    }
}
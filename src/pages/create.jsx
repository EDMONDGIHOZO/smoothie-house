import React, {useState} from 'react';
import supabase from "../config/supabase";

function CreateSmoothie() {
    const [formData, setFormData] = useState({
        title: '',
        rating: 0,
        method: ''
    })
    const [formError, setFormError] = useState(null)
    const [success, setSuccess] = useState(false)

    const handleOnChange = (value, name) => {
        setFormData({...formData, [name]: value});
    }

    const validate = () => {
        if (!formData.title || !formData.method || !formData.rating) {
            setFormError("please fill the form")
            return false
        }
        return true
    }


    const handleSubmit = async (e) => {
        e.preventDefault()
        if (validate()) {
            const {data, error} = await supabase
                .from('smoothies')
                .insert([formData])

          if (error) {
              setFormError(error.message)
          }
          if (data) {
              setSuccess(true)
              setFormError(null)
          }
        }
    }

    return (
        <div className="page">
            {success && (
                <div className="bg-green-200 text-2xl text-green-600 text-center p-4 rounded my-6">
                    Saved Successfully!
                </div>
            )}
            <form onSubmit={(e) => handleSubmit(e)} className="form">
                <input type="text" placeholder="add title" onChange={(e) => handleOnChange(e.target.value, "title")}/>
                <input type="text" placeholder="add method" onChange={(e) => handleOnChange(e.target.value, "method")}/>
                <input type="number" name="rating" id="rating"
                       onChange={(e) => handleOnChange(e.target.value, "rating")}/>
                <button type="submit">CREATE</button>
                {formError && (
                    <strong>{formError}</strong>
                )}
            </form>
        </div>
    )
}

export default CreateSmoothie;
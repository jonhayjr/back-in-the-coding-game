import {useState} from 'react'

const NameInput = () => {
    const [formData, setFormData] = useState(
        {
            fullName: '',
            age: '',
            email: ''
        });
    const [formSubmitted, setFormSubmitted] = useState(false);

    const handleChange = (e) => {
        setFormSubmitted(false);
        const {name, value} = e.target;
        setFormData({...formData, [name]: value})
    }
    
    const handleSubmit = (e) => {
        e.preventDefault();
        setFormSubmitted(true);
        resetForm();
    }

    const resetForm = () => {
        setFormData(
            {
                fullName: '',
                age: '',
                email: ''
            }
        )
    }

  return (
    <div className='name-section'>
        {!formSubmitted && <p>Please enter your information below.</p>}
        {formSubmitted && 
            <div className="form-paragraph">
                <p>Full Name: {formData.fullName}</p>
                <p>Age: {formData.age}</p>
                <p>Email: {formData.email}</p>
            </div>
        }
        <form onSubmit={(e) => {handleSubmit(e)}}>
            <div className="input-group">
                <label htmlFor="fullName">Full Name:</label>
                <input id="fullName" type="text" name="fullName" onChange={(e) => {handleChange(e)}}/>
            </div>
            <div className="input-group">
                <label htmlFor="age">Age:</label>
                <input id="age" type="int" name="age" onChange={(e) => {handleChange(e)}}/>
            </div>
            <div className="input-group">
                <label htmlFor="email">Email:</label>
                <input id="email" type="email" name="email" onChange={(e) => {handleChange(e)}}/>
            </div>
            <div className="btn-group">
                <button type="submit" className="btn-submit">Submit</button>
                <button type="reset" className="btn-submit" onClick={resetForm}>Reset</button>
            </div>
        </form>
    </div>
  )
}

export default NameInput
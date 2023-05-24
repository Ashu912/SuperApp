import Wallpaper from '../../Assets/Wallpaper.png'
import { useState, useEffect } from 'react'
import '../../CSS/Signup.css'
const Signup = () => {
    const initialValue = { username:"", name:"", email:"", mobile:"" ,check:""};
    const [registerValues, setregisterValues] = useState(initialValue);
    const [errorsValues, setErrorsValues] = useState({});
    const [isSubmit, setIsSubmit] = useState(false);
    const [isChecked, setIsChecked] = useState(false);
    const [name, setName]=useState("")
    const [username, setUserName]=useState("")
    const [email, setEmail]=useState("")
    const [mobile, setMobile]=useState("")

    


    const handleChange = (e) => {
        const { name, value } = e.target;
        if (name === 'name') {
            setName(value);
          } else if (name === 'username') {
            setUserName(value);
          } else if (name === 'mobile') {
            setMobile(value);
          } else if (name === 'email') {
            setEmail(value);
          }
        setregisterValues({ ...registerValues, [name]: value });
       
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setErrorsValues(validate(registerValues));
      
    };
    const handleCheckboxChange = () => {
        setIsChecked(!isChecked);
        setErrorsValues('');
       
      };
    

    useEffect(() => {
       
        if (Object.keys(errorsValues).length === 0 && isSubmit) {
            console.log(registerValues);
        }
         console.log(errorsValues);
    }, [errorsValues]);
     

    const handle=()=>{
        localStorage.setItem("name",name)
        localStorage.setItem("email",email)
        localStorage.setItem("username",username)
        localStorage.setItem("mobile",mobile)
    }

    const validate = (values) => {
        const errors = {};
        const regex =   /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
        if (!values.username) {
            errors.username = "Username is Required";
        }
        
        if (!values.email) {
            errors.email = " Eamil is Required";
        }else if (!regex.test(values.email)) {
            errors.email = " Email is Incorrect";
        }
        if (!values.mobile) {
            errors.mobile = "Mobile number is Required";
        }
        if (!values.name) {
            errors.name = "Name is Required";
        }   if (!isChecked) {
            errors.check = 'Please check the checkbox';
          }
        
         
        return errors;
       
      
    };

    return (
        <div className="conatiner">

            <div className="LeftSide" >
                <img src={Wallpaper} alt="Walpaper" />
                <p>Discover new things on<br></br> Superapp</p>
            </div>
            <div className="RightSide">
                
                 <p className="Super" >Super app</p>
                <p className="Acount">Create your new acount</p>
                <form onSubmit={handleSubmit}>
                <input className="name" type="text" name="name" placeholder="Name" value={registerValues.name}  onChange={handleChange} />
                {errorsValues.name && <p style={{marginLeft:'28%',color:"red",fontSize:'25px',lineHeight:'1px'}}>{errorsValues.name}</p>}
                <input className="userName" type="text" name="username" placeholder="UserName" value={registerValues.username} onChange={handleChange} />
                {errorsValues.username && <p style={{marginLeft:'28%',color:"red",fontSize:'25px',lineHeight:'1px'}}>{errorsValues.username}</p>}
                <input className="email" type="email" name="email" placeholder="Email" value={registerValues.email} onChange={handleChange} />
                {errorsValues.email && <p style={{marginLeft:'28%',color:"red",fontSize:'25px',lineHeight:'1px'}}>{errorsValues.email}</p>}
                <input className="mobile" type="number" name="mobile" placeholder="Mobile" value={registerValues.mobile} onChange={handleChange} />
                {errorsValues.mobile && <p style={{marginLeft:'28%',color:"red",fontSize:'25px',lineHeight:'1px'}}>{errorsValues.mobile}</p>}
                <div className="Check_Share">
                    <input type="checkbox"  name='check'  checked={isChecked} onChange={handleCheckboxChange}/>
                    
                    <p >Share my registration data with Superapp</p>
                   
                </div>
                {errorsValues.check && <p style={{marginLeft:'28%',marginTop:'0px' ,color:"red",fontSize:'25px'}}>{errorsValues.check}</p>}

                <button className="btn" onClick={handle}>SIGN UP</button>
               
                </form>
                <p className="TandC">By clicking on Sign up. you agree to Superapp <span>Terms and <br></br>Conditions of Use</span></p>
                <p className="Privacy">To learn more about how Superapp collects, uses, shares and <br></br> protects your personal data please head Superapp <span> Privacy <br></br>Policy </span></p>
            </div>
        </div>
    )
}

export default Signup
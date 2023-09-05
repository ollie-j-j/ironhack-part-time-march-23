import { Link } from "react-router-dom"
import { useState, useContext } from "react";
import axios from "axios";
import { AuthContext } from "../context/auth.context";
import avatarImage from '../assets/default-avatar.png';

const HomePage = props => {
    const [showUpload, setShowUpload] = useState(false);
    // const [image, setImage] = useState("");
    const [imageUpload, setImageUpload] = useState({});
    const { user, setUser, isLoggedIn, logOutUser } = useContext(AuthContext);
    

    const handleFileUpload = (e) => {
        // console.log("The file to be uploaded is: ", e.target.files[0]);
        const uploadData = new FormData();
        uploadData.append("image", e.target.files[0]);
        setImageUpload(uploadData)

        // Previous example without imageUpload
        // const uploadData = new FormData();
        // uploadData.append("image", e.target.files[0]);
        // axios.post(`${process.env.REACT_APP_API_URL}/api/upload`, uploadData)
        //   .then(response => {
        //     // console.log("response is: ", response);
        //     // response carries "fileUrl" which we can use to update the state
        //     setTest(uploadData)
        //     setImage(response.data.image);
        //   })
        //   .catch(err => console.log("Error while uploading the file: ", err));
      };

      const handleSubmit = async (e) => {
        e.preventDefault();
        const responseCloudinaryUpload = await axios.post(`${process.env.REACT_APP_API_URL}/api/upload`, imageUpload)
        const responseUserUpdate = await axios.put(`${process.env.REACT_APP_API_URL}/api/users`, {...user, image: responseCloudinaryUpload.data.image})
       
        setUser(responseUserUpdate.data.updatedUser)
        setShowUpload(false)
            // .then((response)=> {
            //     setUser(response.data.updatedUser); // updating the state with the image that was uploaded
            //     setImage("")
            // })
            // .catch(err => console.error(err))
      }
  return (
<div className="homePageContainer">
    <div className="ovalBackground">
        {isLoggedIn && <div style={{ width: 'inherit'}}>  
            <h1>Profile</h1>
            <p className="field">Username</p>
            <p>{user?.username}</p>
          
            <p className="field">Campus</p>
            <p>{user?.campus}</p>
         
            <p className="field">Course</p>
            <p>{user?.campus}</p>
         
            <button className="logOutButton" onClick={logOutUser}>Log out</button>
        </div>}
        {!isLoggedIn && <div>
                <h1>IronProfile</h1>
                <p>Today we will create an app with some cool style!</p>
                <div className="signinContainer">
                    <Link to={'/signup'}><button>Signup</button></Link>
                    <Link to={'/login'}><button>Login</button></Link>
                </div>
            </div>}

        {isLoggedIn && 
            (<div className="homeRightSection">
                <div>
                    {user && 
                    user.image ? 
                    <img src={user.image} alt={"profile_image"} style={{width: '50px', height: '50px', borderRadius: '75%'}} /> :
                    <img src={avatarImage} alt={"profile_image"} style={{width: '50px', height: '50px', borderRadius: '75%'}} />
                    }
                    {!showUpload &&
                    <button onClick={()=> setShowUpload(!showUpload)}>Edit Photo</button>
                    }
                </div> 
                <div>
                {showUpload && 
                        (<form onSubmit={handleSubmit} className="updateImageForm">
                            <input type="file" onChange={(e) => handleFileUpload(e)} />
                            <button className="cancelEditButton" onClick={()=> setShowUpload(!showUpload)}>Cancel Edit</button>
                            <button type="submit">Save new profile image</button>
                            </form>)
                    }
                </div> 
            </div>)
        }
    </div>
</div>
  )
}

export default HomePage
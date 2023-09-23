import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { Toaster, toast } from "react-hot-toast";
import { Instance } from "../../api/instance";
const initialState = {
  userName: "",
  image: "",
  role: "",
  id: "",
  email: "",
  isLogin: true,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUserName: (initialState, action) => {
      initialState.userName = action.payload;
    },
    setImage: (initialState, action) => {
      initialState.image = action.payload;
    },
    setRole: (initialState, action) => {
      initialState.role = action.payload;
    },
    setId: (initialState, action) => {
      initialState.id = action.payload;
    },
    setEmail: (initialState, action) => {
      initialState.email = action.payload;
    },
    setIsLogin: (initialState, action) => {
      initialState.isLogin = action.payload;
    },
    setIstoken: (initialState, action) => {
      initialState.istokenjwtexpiry = action.payload;
    },
  },
});

export const onLoginAsync = (email, password) => async (dispatch) => {
  try {
    const hasSymbol = email.indexOf("@");
    const hasDot = email.indexOf(".");

    if (!email || !password) {
      return toast.error("tidak boleh kosong");
    } else if (hasSymbol === -1 || hasDot === -1) {
      return toast.error("Format email tidak valid. Mohon masukkan alamat email yang benar.");
    } else if (password.length < 6) {
      return toast.error("The password must be at least 6 characters long");
    }

    // const uppercasePassword = password && password[0] === password[0].toUpperCase();
    // if (!uppercasePassword) return alert("password harus membiliki huruf uppercase");

    // const checkUser = await axios.post(`http://localhost:4000/users/login`, {
    //   email: email,
    //   password: password,
    // });

    const checkUser = await Instance().post(`users/login`, {
      email: email,
      password: password,
    });

    console.log(checkUser);
    if (checkUser.data.isError) return toast.error(`${checkUser.data.message}`);
    console.log(checkUser.data.tokenLogin);
    setTimeout(() => {
      localStorage.setItem("tokenLogin", checkUser.data.tokenLogin);
      dispatch(setUserName(checkUser.data.data.name));
      dispatch(setImage(checkUser.data.data.image));
      dispatch(setRole(checkUser.data.data.role));
      dispatch(setId(checkUser.data.data.id));
      dispatch(setEmail(checkUser.data.data.email));
      dispatch(setIsLogin(false));
    }, 2000);

    toast.success(`Welcome Back ${checkUser.data.data.name}`);
  } catch (error) {
    console.log(error);
    // if (error.response.data.isError) return toast.error(`${error.response.data.message}`);
  }
};

export const onLogout = () => async (dispatch) => {
  try {
    localStorage.removeItem("tokenLogin");
    dispatch(setImage(""));
    dispatch(setRole(""));
    dispatch(setUserName(""));
    dispatch(setId(""));
    dispatch(setIsLogin(false));
  } catch (error) {
    console.log(error);
  }
};

export const onCheckislogin = () => async (dispatch) => {
  try {
    const token = localStorage.getItem("tokenLogin");
    console.log(token);
    // const verif = await axios.get(`http://localhost:4000/users/verify/${token}`);
    const verif = await Instance(token).get(`users/verify`);
    console.log(verif);
    setTimeout(() => {
      dispatch(setUserName(verif.data.data.name));
      dispatch(setImage(verif.data.data.image));
      dispatch(setRole(verif.data.data.role));
      dispatch(setId(verif.data.data.id));
      dispatch(setEmail(verif.data.data.email));
      dispatch(setIsLogin(false));
    }, 2000);
  } catch (error) {
    if (error.response.data.isError && localStorage.getItem("tokenLogin")) {
      localStorage.removeItem("tokenLogin");
      toast.error("your account is expired");
    } else {
      console.log(error);
    }
    console.log(error);
  }
};

export const onUpdatePassword =
  (token, oldPassword, newPassword, conPassword) => async (dispatch) => {
    try {
      const checklOldPassword = await Instance(token, oldPassword, newPassword, conPassword).get(
        `users/changepass`
      );
      console.log(checklOldPassword.data);
      toast.success(checklOldPassword.data.message);
    } catch (error) {
      if (error.response.data.isError) {
        console.log(error.response.data.message);
        toast.error(error.response.data.message);
      } else {
        console.log(error);
      }
    }
  };

export const { setUserName, setImage, setRole, setId, setEmail, setIsLogin } = userSlice.actions;
export default userSlice.reducer;

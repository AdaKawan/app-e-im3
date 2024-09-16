"use client"

import { useAuthControllerLoginMutation } from "@/lib/redux/services/api/ApiEiM3Slice";
import { Label, TextInput, Checkbox, Button, Card, Alert, Spinner } from "flowbite-react";
import { useEffect, useState } from "react";
import { HiInformationCircle } from 'react-icons/hi'
import { RootState, useAppDispatch } from "@/lib/redux/store";
import { user } from "@/lib/redux/features/users/usersSlice";
import { Convert } from "@/types/GetMeResponse";
import { useRouter } from "next/navigation";
import Cookies from "js-cookie";
import axios from "axios";
import { useSelector } from "react-redux";
import { setIsLogin } from "@/lib/redux/features/isLogin/isLogin";
import { setCookie, getCookie } from 'cookies-next';
import ToastNotification from "@/components/ToastNotification";

export default function Home() {
  const [login, { isLoading: isLoadingLogin, error, data }] = useAuthControllerLoginMutation();
  const [isLoading, setIsLoading] = useState(false);
  const dispatch = useAppDispatch();
  const isLogin = useSelector((state: RootState) => state.isLogin.isLogin)
  const router = useRouter();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [showToast, setShowToast] = useState(false);
  const [toastMessage, setToastMessage] = useState('');
  const [toastType, setToastType] = useState<'success' | 'error' | 'warning'>('error');

  useEffect(() => {
    const refreshToken = getCookie('clientRefreshToken')
    const rememberMeCookie = getCookie('rememberMe')
    if(isLogin) {
      setIsLoading(true)
      axios.post('https://api-e-im3.vercel.app/auth/autologin', {}, {
        headers: {
          'authorization': `Bearer ${refreshToken}`
        },
        withCredentials: true
      })
      .then(response => {
        const getMeResponse = Convert.toGetMeResponse(JSON.stringify(response.data))

        const expirationDate = new Date();
        expirationDate.setDate(expirationDate.getDate() + 7);

        if(rememberMeCookie === 'true') {
          setCookie('clientRefreshToken', getMeResponse.data.refresh_token, {
            secure: true,
            sameSite: 'none',
            expires: new Date(expirationDate),
            // maxAge: 7 * 24 * 60 * 60
          })
          setCookie('refreshToken', getMeResponse.data.refresh_token, {
            secure: true,
            sameSite: 'none',
            expires: new Date(expirationDate),
            // maxAge: 7 * 24 * 60 * 60
          })
        } else {
          setCookie('clientRefreshToken', getMeResponse.data.refresh_token, {
            secure: true,
            sameSite: 'none',
          })
          setCookie('refreshToken', getMeResponse.data.refresh_token, {
            secure: true,
            sameSite: 'none',
          })
        }
        
        if(getMeResponse.data.role === 'admin') {
          router.push("/admin")
        } else if (getMeResponse.data.role === 'guru') {
          router.push("/guru")
        } else if (getMeResponse.data.role === 'siswa') {
          router.push("/siswa")
        } else {
          setErrorMessage("Role tidak dikenali")
        }
      })
      .catch(err => {
      })
      .finally(() => {
        setIsLoading(false)
      })
      return;
    }
    
    if(rememberMeCookie === 'true') {
      setIsLoading(true)
      axios.post('https://api-e-im3.vercel.app/auth/autologin', {}, {
        headers: {
          'authorization': `Bearer ${refreshToken}`
        },
        withCredentials: true
      })
      .then(response => {
        const getMeResponse = Convert.toGetMeResponse(JSON.stringify(response.data))

        const expirationDate = new Date();
        expirationDate.setDate(expirationDate.getDate() + 7);

        if(rememberMeCookie === 'true') {
          setCookie('clientRefreshToken', getMeResponse.data.refresh_token, {
            secure: true,
            sameSite: 'none',
            expires: new Date(expirationDate),
            // maxAge: 7 * 24 * 60 * 60
          })
          setCookie('refreshToken', getMeResponse.data.refresh_token, {
            secure: true,
            sameSite: 'none',
            expires: new Date(expirationDate),
            // maxAge: 7 * 24 * 60 * 60
          })
        } else {
          setCookie('clientRefreshToken', getMeResponse.data.refresh_token, {
            secure: true,
            sameSite: 'none',
          })
          setCookie('refreshToken', getMeResponse.data.refresh_token, {
            secure: true,
            sameSite: 'none',
          })
        }
        
        if(getMeResponse.data.role === 'admin') {
          router.push("/admin")
        } else if (getMeResponse.data.role === 'guru') {
          router.push("/guru")
        } else if (getMeResponse.data.role === 'siswa') {
          router.push("/siswa")
        } else {
          setErrorMessage("Role tidak dikenali")
        }
      })
      .catch(err => {
        setToastMessage('Gagal auto login');
        setToastType('error');
        setShowToast(true);
      })
      .finally(() => {
        setIsLoading(false)
      })
    }
  }, [router])

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    try {
      const response = await login({ loginDto: { username, password, rememberMe } }).unwrap();
      const getMe = Convert.toGetMeResponse(JSON.stringify(response))
      const expirationDate = new Date();
      expirationDate.setDate(expirationDate.getDate() + 7);
      setCookie('rememberMe', `${rememberMe}`, {
        secure: true,
        sameSite: 'none',
      })
      if(rememberMe) {
        setCookie('clientRefreshToken', getMe.data.refresh_token, {
          secure: true,
          sameSite: 'none',
          expires: new Date(expirationDate),
          // maxAge: 7 * 24 * 60 * 60
        })
        setCookie('refreshToken', getMe.data.refresh_token, {
          secure: true,
          sameSite: 'none',
          expires: new Date(expirationDate),
          // maxAge: 7 * 24 * 60 * 60
        })
      } else {
        setCookie('clientRefreshToken', getMe.data.refresh_token, {
          secure: true,
          sameSite: 'none',
        })
        setCookie('refreshToken', getMe.data.refresh_token, {
          secure: true,
          sameSite: 'none',
        })
      }
      dispatch(user(getMe.data))
      setToastMessage('Login successful');
      setToastType('success');
      setShowToast(true);
      if(getMe.data.role === 'admin') {
        router.push("/admin")
      } else if (getMe.data.role === 'guru') {
        router.push("/guru")
      } else if (getMe.data.role === 'siswa') {
        router.push("/siswa")
      } else {
        setErrorMessage("Role tidak dikenali")
      }
      dispatch(setIsLogin(true))
    } catch (err) {
      let errorMessage = 'Failed to logout';
      if (err && typeof err === 'object' && 'data' in err) {
        const errorData = err as { data: { message: string } };
        errorMessage = `Error: ${errorData.data.message}`;
      }
      setErrorMessage(`Error: ${errorMessage}`)
      setToastMessage(`Error: ${errorMessage}`);
      setToastType('error');
      setShowToast(true);
    }
  };

  return (
    <div className="flex-grow flex justify-center items-center pt-10">
      {isLoading ? 
       <Spinner size="xl" /> :
       <Card className="w-full max-w-lg">
        <form className="flex max-w-md flex-col gap-4" onSubmit={handleSubmit}>
          <h1 className="text-center font-bold text-2xl">Selamat Datang</h1>
          <h2 className="text-center font-bold">Silahkan masukkan username dan password anda</h2>
          <div>
            <div className="mb-2 block">
              <Label htmlFor="username" value="Username" />
            </div>
            <TextInput
              id="username"
              type="text"
              placeholder="usereim3"
              required
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div>
            <div className="mb-2 block">
              <Label htmlFor="password" value="Password" />
            </div>
            <TextInput
              id="password"
              type="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="flex items-center gap-2">
            <Checkbox
              id="remember"
              checked={rememberMe}
              onChange={(e) => setRememberMe(e.target.checked)}
            />
            <Label htmlFor="remember">Remember me</Label>
          </div>
          <Button type="submit">
            {isLoadingLogin ? 
            <>
              <Spinner/>
              <span className="pl-3">Tunggu...</span>
            </>
            : 'Login'}
          </Button>
        </form>
      </Card>
      }
      {showToast && (
        <div className="fixed bottom-4 right-4">
          <ToastNotification
            message={toastMessage}
            type={toastType}
            onClose={() => setShowToast(false)}
          />
        </div>
      )}
    </div>
  );
}

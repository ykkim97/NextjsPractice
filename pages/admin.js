import axios from "axios";
import { useRouter } from "next/router";
import { useEffect } from "react"

export default function Admin() {
    const router = useRouter();
    
    function checkLogin() {
        axios.get('/api/isLogin')
            .then((res) => {
                if (res.status === 200 && res.data.name) {
                    // 로그인 됨
                } else {
                    // 로그인 안됨
                    router.push('/login')
                }
            })
    }

    useEffect(() => {
        checkLogin();
    }, [])

    return <>
        admin
    </>
}
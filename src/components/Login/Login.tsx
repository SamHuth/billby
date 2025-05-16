import { Auth } from "@supabase/auth-ui-react"
import { ThemeSupa } from "@supabase/auth-ui-shared";
import type { SupabaseClient } from "@supabase/supabase-js";

const Login = ({supabase}:{ supabase: SupabaseClient }) => {

    return(
        <div className="grid place-items-center h-screen">
            <div className="max-w-sm mx-auto w-full p-4 py-6 border shadow border-gray-200 rounded">
                <Auth supabaseClient={supabase} appearance={{ theme: ThemeSupa }} providers={[]} showLinks={false}/>
            </div>
        </div>
    )
}

export default Login
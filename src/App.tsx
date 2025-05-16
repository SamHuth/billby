import { useEffect, useState } from "react";
import { createClient, type Session } from "@supabase/supabase-js";
import Login from "./components/Login/Login";
import Billby from "./components/Billby/Billby";

import dayjs from 'dayjs';
import advancedFormat from 'dayjs/plugin/advancedFormat'

dayjs.extend(advancedFormat);

const supabase = createClient(import.meta.env.VITE_SUPABASE_URL, import.meta.env.VITE_SUPABASE_ANON_KEY);

function App() {

  const [session, setSession] = useState<Session | null>(null)

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session)
    })
    const { data: { subscription }, } = supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session)
    })
    
    return () => subscription.unsubscribe()
  }, [])
  
  if (!session) {
    return <Login supabase={supabase} />
  } else {
    return (<Billby />)
  }

}

export default App;
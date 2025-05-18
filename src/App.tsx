import { useEffect, useState } from "react";
import { createClient, type Session } from "@supabase/supabase-js";
import Login from "./components/Login/Login";
import Billby from "./components/Billby/Billby";

import dayjs from 'dayjs';
import advancedFormat from 'dayjs/plugin/advancedFormat'

dayjs.extend(advancedFormat);

const supabase = createClient(import.meta.env.VITE_SUPABASE_URL, import.meta.env.VITE_SUPABASE_ANON_KEY);

function App() {

  const [loadingSession, setLoadingSession] = useState<boolean>(true)
  const [session, setSession] = useState<Session | null>(null)

  useEffect(() => {
    
    // Check Supabase Session
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session)
      setLoadingSession(false)
    })
    
    // Check Supabase Session Subscription
    const { data: { subscription }, } = supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session)
      setLoadingSession(false)
    })
    
    return () => subscription.unsubscribe()
  }, [])
  
  if(loadingSession){
    return <p>Loading</p>
  } else {
    if (!session) {
      return <Login supabase={supabase} />
    } else {
      return (<Billby supabase={supabase} />)
    }
  }


}

export default App;
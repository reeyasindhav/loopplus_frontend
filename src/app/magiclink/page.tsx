// 'use client'

// import { useState } from 'react'
// import { supabase } from '@/lib/supabaseClient'

// export default function SignupPage() {
//     const [email, setEmail] = useState('')
//     const [loading, setLoading] = useState(false)
//     const [sent, setSent] = useState(false)
//     const [error, setError] = useState<string | null>(null)

//     const sendMagicLink = async () => {
//         setLoading(true)
//         setError(null)

//         const { error } = await supabase.auth.signInWithOtp({
//             email,
//             options: {
//                 emailRedirectTo: `${window.location.origin}/onboarding`,
//             },
//         })

//         if (error) {
//             setError(error.message)
//         } else {
//             setSent(true)
//         }

//         setLoading(false)
//     }

//     return (
//         <div style={{ maxWidth: 400, margin: '100px auto' }}>
//             <h1>Start with your email</h1>

//             {sent ? (
//                 <p>✅ Check your email for the login link.</p>
//             ) : (
//                 <>
//                     <input
//                         type="email"
//                         placeholder="you@university.edu"
//                         value={email}
//                         onChange={(e) => setEmail(e.target.value)}
//                         style={{ width: '100%', padding: 8, marginBottom: 12 }}
//                     />

//                     <button
//                         onClick={sendMagicLink}
//                         disabled={loading || !email}
//                         style={{ width: '100%', padding: 10 }}
//                     >
//                         {loading ? 'Sending…' : 'Send magic link'}
//                     </button>

//                     {error && <p style={{ color: 'red' }}>{error}</p>}
//                 </>
//             )}
//         </div>
//     )
// }
export default function MagicLinkPage() {
    return (
        <div>
            <h1>Magic Link</h1>
        </div>
    );
}

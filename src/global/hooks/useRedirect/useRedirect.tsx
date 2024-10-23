'use client'

import { useRouter } from 'next/navigation'

export default function useRedirect() {
  const redirect = useRouter().push
  return redirect
}
export { useRedirect }

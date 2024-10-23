'use client'

import { useEffect } from 'react'
import useRedirect from '@global-hooks/useRedirect'

export default function PageNotFound() {
    const redirect = useRedirect()
    useEffect(() => redirect('/'))
    return null
}

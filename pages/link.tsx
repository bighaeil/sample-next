import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect } from "react";

function LinkSample() {
    const router = useRouter()

    const onSubmit = () => {
        router.push('/ssr')

        router.push({
            pathname: '/ssg',
            query: {ketword: 'hello'},
        })
    }

    const onClickReload = () => {
        router.reload()
    }

    const onClickBack = () => {
        router.back()
    }

    useEffect(() => {
        router.events.on('routeChangeStart', (url, {shallow}) => {
            console.log('routeChangeStart', url);
        })

        router.events.on('routeChangeComplete', (url, {shallow}) => {
            console.log('routeChangeComplete', url);
        })
    }, [])

    return (
        <div style={{display: 'grid', gridTemplateColumns: '1fr', gap: '12px'}}>
            <Link href="/ssg" legacyBehavior>
                <a>Go To SSG</a>
            </Link>
            <Link href="/ssg?keyword=next" legacyBehavior>
                <a>Go To SSG with keyword "next"</a>
            </Link>
            <Link
                href={{
                    pathname: '/ssg',
                    query: {keyword: 'hello'},
                }} legacyBehavior>
                    <a>GO TO SSG with keyword "hello"</a>
            </Link>
            <Link href="/ssg">
                <button>Jump to SSG page</button>
            </Link>
            <button onClick={onSubmit}>onSubmit</button>
            <button onClick={onClickReload}>onClickReload</button>
            <button onClick={onClickBack}>onClickBack</button>
        </div>
    )
}

export default LinkSample
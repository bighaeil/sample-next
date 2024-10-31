import { NextPage, GetStaticProps } from "next";
import Head from "next/head";

const EnvSample: NextPage = (props) => {
    // 서버 사이드에서 그릴 때는 'test1'라 표시되고, 클라이언트 사이드에서 다시 그릴 때는 undefined 로 표시된다.
    console.log('process.env.TEST', process.env.TEST);
    // 'test2'라 표시된다.
    console.log('process.env.NEXT_PUBLIC_TEST', process.env.NEXT_PUBLIC_TEST);
    
    return (
        <div>
            <Head>
                <title>Create Next App</title>
                <link ref="icon" href="/favicon.ico" />
            </Head>
            <main>
                {/* <p>{process.env.TEST}</p> */}
                <p>{process.env.NEXT_PUBLIC_TEST}</p>
            </main>
        </div>
    )
}

export const getStaticProps: GetStaticProps = async (context) => {
    console.log('process.env.TEST', process.env.TEST);
    console.log('process.env.NEXT_PUBLIC_TEST', process.env.NEXT_PUBLIC_TEST);

    return {
        props: {

        },
    }
}

export default EnvSample
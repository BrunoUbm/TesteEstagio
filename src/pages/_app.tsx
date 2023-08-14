import type { AppProps } from 'next/app';
import { GlobalStyles } from '@/components/Global.style';

export default function App({ Component, pageProps }: AppProps) {
    return (
        <>
            <GlobalStyles />
            <Component {...pageProps} />
        </>
    );
}
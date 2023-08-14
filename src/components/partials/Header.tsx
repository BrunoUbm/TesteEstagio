import Link from 'next/link';
import * as STL from '@/components/partials/partialStyles/Header.style'

export default function Header() {
    return(
        <STL.Header>
            <STL.Logo>
                Logo
            </STL.Logo>
            <STL.ContainerNav>
                <STL.Nav>
                    <STL.Routers>
                        <STL.Router>
                            <Link href="/">
                                <STL.Link>CNPJ</STL.Link>
                            </Link>
                        </STL.Router>
                        <STL.Router>
                            <Link href="/cotacoes">
                                <STL.Link>Cotações</STL.Link>
                            </Link>
                        </STL.Router>
                    </STL.Routers>
                </STL.Nav>
            </STL.ContainerNav>

        </STL.Header>
    )
}
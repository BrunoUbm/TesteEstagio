import axios from 'axios';
import { useState } from 'react';
import * as STL from '@/components/body/bodyStyles/Cotacao.style';

interface CotacaoResults {
    compra: string;
    venda: string;
    variacao: string;
    porcentagemDeVar: string;
    maximo: string;
    minimo: string;
}

export default function ConsultingCotacao() {
    const [cotacao, setCoin] = useState('');
    const [results, setResults] = useState<CotacaoResults | null>(null);

    function fetchCotacao() {
        const url = `https://economia.awesomeapi.com.br/last/${cotacao}`;
        axios.get(url)
            .then((res) => {
            const firstCurrencyPair = Object.keys(res.data)[0];
            const data = res.data[firstCurrencyPair];
            const cotacaoResults: CotacaoResults = {
                compra: data.bid,
                venda: data.ask,
                variacao: data.varBid,
                porcentagemDeVar: data.pctChange,
                maximo: data.high,
                minimo: data.low,
            };
            setResults(cotacaoResults);
            })
            .catch(() => {
                alert('Moeda inválida! Tente novamente')
                setResults(null);
            });
    }

    function onChange(event: any) {
            const { value } = event.target;
            setCoin(value);
    }

    return (
    <STL.body>
        <STL.search>
            <STL.Type>Consultar Cotações</STL.Type>
                <STL.form>
                    <STL.Inp type="text" placeholder="Digite a moeda..." onChange={onChange} />
                    <STL.Btn onClick={fetchCotacao}>Consultar</STL.Btn>
                </STL.form>
        </STL.search>

        {results && (
        <STL.main>
            <STL.Section>
                <STL.Result>
                    <STL.Span>Compra: </STL.Span>
                    R${results.compra.replace('.', ',')}
                </STL.Result>
                <STL.Result>
                    <STL.Span>Venda: </STL.Span>
                    R${results.venda.replace('.', ',')}
                </STL.Result>
            </STL.Section>

            <STL.Section>
                <STL.Result>
                    <STL.Span>Variação: </STL.Span>
                    {results.variacao}
                </STL.Result>
                <STL.Result>
                    <STL.Span>% de Variação: </STL.Span>
                    {results.porcentagemDeVar}%
                </STL.Result>
            </STL.Section>

            <STL.Section> 
                <STL.Result>
                    <STL.Span>Mínimo: </STL.Span>
                    R${results.minimo.replace('.', ',')}
                </STL.Result>
                <STL.Result>
                    <STL.Span>Máximo: </STL.Span>
                    R${results.maximo.replace('.', ',')}
                </STL.Result>
            </STL.Section>
        </STL.main>
      )}
    </STL.body>
  );
}

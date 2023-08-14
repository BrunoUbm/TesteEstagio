import axios from "axios";
import { useState } from 'react';
import * as STL from '@/components/body/bodyStyles/Cnpj.style'

interface CnpjMember{
    nome: string;
    cpf: string;
    entrada: string,
    idade: string,
    cargo: string
}

interface CnpjResults{
    empresa: string,
    fundacao: string,
    situacao: string,
    atualizacao: string,
    naturezaId: number,
    natureza: string,
    capitalS: string,
    atividade: string,
    endereco: {
        pais: string,
        cidade: string,
        rua: string,
        numero: string,
        bairro: string,
        estado: string,
        cep: string,
    },
    membros: CnpjMember[]
    
}

export default function ConsultingCnpj(){
    const [ cnpj, setCnpj] = useState('')
    const [results, setResults] = useState<CnpjResults | null>(null);
        
    function Teste () {            
        const url: string = `https://api.cnpja.com/office/${cnpj}`
        const key: string = '4177b229-59d6-46d0-82a5-da01d3110380-15715b59-6fc8-4f07-83a2-452d59ceab39'
        const headers = {
            'Authorization': key,
        };
    
        axios.get(url, { headers })
        .then((res) => {
            return res.data
        }) 
        .then((data) => {
            console.log(data);

            const members: CnpjMember[] = data.company.members.map((a: any) => {
                return{
                    nome: a.person,
                    cpf: a.person,
                    entrada: a.since,
                    idade: a.person,
                    cargo: a.role
                }
            })
            
            console.log(members);
            
                
            const cotacaoResults: CnpjResults = {
                empresa: data.company.name,
                fundacao: data.founded,
                situacao: data.statusDate,
                atualizacao: data.updated,
                naturezaId: data.company.nature.id,
                natureza: data.company.nature.text,
                capitalS: data.company.equity,
                atividade: data.mainActivity.text,
                endereco: {
                    pais: data.address.country.name,
                    cidade: data.address.city,
                    numero: data.address.number,
                    rua: data.address.street,
                    bairro: data.address.district,
                    estado: data.address.state,
                    cep: data.address.zip,
                },
                membros: members
            };
            setResults(cotacaoResults);
        
        })

        .catch(() => {
            alert('CNPJ inválido! Tente novamente')
        })

    }    

    function onChange(a: any): void{ 
        let { value } = a.target
        setCnpj(value)
    }



    return(
        <STL.Body>
            <STL.Form>
                <STL.Type>
                    Consultar CNPJ
                </STL.Type>
                <STL.Main>
                    <STL.Inp type="text" placeholder="Digite o Cnpj..." onChange={onChange}/>
                    <STL.Btn onClick={Teste}>Consultar</STL.Btn>
                </STL.Main>

            </STL.Form>
            {results && (
                <STL.main>
                    <STL.Infos>
                        <STL.About>
                            <STL.Empresa>{results.empresa}</STL.Empresa>
                            <STL.att><STL.padding></STL.padding>Atualizado: {results.atualizacao.replace('T', ' ').replace('Z', ' ').replace(' ', ', ')}</STL.att>
                            
                            <STL.geral>
                                <STL.HdrGeral>
                                    <STL.GeralName>Fundação</STL.GeralName>
                                    <STL.GeralName>Data da situação</STL.GeralName>
                                </STL.HdrGeral>
                                <tr>
                                    <STL.txtGeral>{results.fundacao}</STL.txtGeral>
                                    <STL.txtGeral>{results.situacao}</STL.txtGeral>
                                </tr>
                            </STL.geral>

                            <STL.geral>
                                <STL.HdrGeral>
                                    <STL.GeralName>Atividade Econômica Principal</STL.GeralName>
                                </STL.HdrGeral>
                                <tr>
                                    <STL.txtGeral>{results.atividade}</STL.txtGeral>
                                </tr>
                            </STL.geral>

                            <STL.geral>
                                <STL.HdrGeral>
                                    <STL.GeralName>Capital Social</STL.GeralName>
                                    <STL.GeralName>Natureza Jurídica</STL.GeralName>
                                </STL.HdrGeral>
                                <tr>
                                    <STL.txtGeral>{results.capitalS}</STL.txtGeral>
                                    <STL.txtGeral>{results.naturezaId} - {results.natureza}</STL.txtGeral>
                                </tr>
                            </STL.geral>

                        </STL.About>


                        <STL.Address>
                            <STL.geral>
                                <STL.HdrGeral>
                                    <STL.GeralName>Cidade</STL.GeralName>
                                    <STL.GeralName>Bairro</STL.GeralName>
                                </STL.HdrGeral>
                                <tr>
                                    <STL.txtGeral>{results.endereco.cidade}</STL.txtGeral>
                                    <STL.txtGeral>{results.endereco.bairro}</STL.txtGeral>
                                </tr>
                            </STL.geral>
                            <STL.geral>
                                <STL.HdrGeral>
                                    <STL.GeralName>Rua</STL.GeralName>
                                </STL.HdrGeral>
                                <tr>
                                    <STL.txtGeral>{results.endereco.rua} - {results.endereco.numero}</STL.txtGeral>                                </tr>
                            </STL.geral>
                            <STL.geral>
                                <STL.HdrGeral>
                                    <STL.GeralName>Estado</STL.GeralName>
                                    <STL.GeralName>CEP</STL.GeralName>
                                    <STL.GeralName>País</STL.GeralName>
                                </STL.HdrGeral>
                                <tr>
                                    <STL.txtGeral>{results.endereco.estado}</STL.txtGeral>
                                    <STL.txtGeral>{results.endereco.cep}</STL.txtGeral>
                                    <STL.txtGeral>{results.endereco.pais}</STL.txtGeral>
                                </tr>
                            </STL.geral>
                        </STL.Address>
                    </STL.Infos>

                    <STL.Socios>
                        <STL.Table>
                            <STL.HdrTable>
                                <STL.HrdName>Nome</STL.HrdName>
                                <STL.HrdName>Data de entrada</STL.HrdName>
                                <STL.HrdName>CPF</STL.HrdName>
                                <STL.HrdName>Idade</STL.HrdName>
                                <STL.HrdName>Cargo</STL.HrdName>
                            </STL.HdrTable>
                            {results.membros.map((mb: any, i) => (
                            <tr key={i}>
                                <STL.td>{mb.nome.name}</STL.td>
                                <STL.td>{mb.entrada}</STL.td>
                                <STL.td>{mb.cpf.taxId}</STL.td>
                                <STL.td>{mb.idade.age}</STL.td>
                                <STL.td>{mb.cargo.text}</STL.td>
                            </tr>
                            ))}
                        </STL.Table>
                    </STL.Socios>
                </STL.main>

            )}
        </STL.Body>
    )
}

    

   

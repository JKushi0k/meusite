import { useEffect, useState } from "react"

import {
    Column,
    Container,
    ListText,
    Row,
    Wrapper,
    ListTitle,
    ListItem
} from "./style"

const metasEsquerda = [100, 200, 300, 400, 500]
const metasDireita = [600, 700, 800, 900, 1000]

const metas = [...metasEsquerda, ...metasDireita]

const Lista = () => {
    const [inscritos, setInscritos] = useState<number | null>(null)
    useEffect(() => {
        const fetchInscritos = async () => {
            const res = await fetch('/api/youtube');
            const data = await res.json();
            setInscritos(Number(data.subscriberCount));
        };

        fetchInscritos();
    }, [])

    const getStatus = (meta: number, index: number, array: number[]) => {
        if (inscritos === null) return 'futura'; 

        if (inscritos >= meta) return 'atingida';

        const todasAnterioresAtingidas = array
            .slice(0, index)
            .every((m) => inscritos >= m);

        if (todasAnterioresAtingidas) return 'atual';

        return 'futura';
    }
    
    return(
        <>
            <Wrapper>
                <Container>
                    <Row>
                        <ListTitle>Metas do Canal</ListTitle>
                    </Row>

                    <Row>
                        <Column>
                            <ul>
                                {metasEsquerda.map((meta, index) => (
                                    <ListItem key={meta} $status={getStatus(meta, metas.indexOf(meta), metas)}>
                                    {meta} Inscritos
                                    </ListItem>
                                ))}
                            </ul>
                        </Column>
                        
                        <Column>
                            <ul>
                                {metasDireita.map((meta, index) => (
                                    <ListItem key={meta} $status={getStatus(meta, metas.indexOf(meta), metas)}>
                                    {meta} Inscritos
                                    </ListItem>
                                ))}
                            </ul>
                        </Column>
                    </Row>

                    <Row>
                        {inscritos !== null ? (
                            <ListText>Total de inscritos: {inscritos}</ListText>
                        ) : (
                            <p>Carregando...</p>
                        )}
                    </Row>
                </Container>
            </Wrapper>
        </>
    )
}

export { Lista }
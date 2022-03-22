import React from 'react';
import styled from 'styled-components';
import CardGrande from './components/CardGrande/CardGrande';
import ImagemButton from './components/ImagemButton/ImagemButton';
import minhaFoto from './img/1958236(2).jpg';
import CardPequeno from './components/CardPequeno/CardPequeno';
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  *{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }
`
const AppLayout = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 30px;
`
const PageSecCont = styled.div`
  width: 40vw;
  margin: 10px 0;
`
const PageSecH2 = styled.h2`
  text-align: center;
  margin-bottom: 20px;
  display: flex;
  justify-content: center;
`
function App() {
  return (
    <AppLayout>
      <GlobalStyle/>

      <PageSecCont>
        <PageSecH2>Dados pessoais</PageSecH2>
        <CardGrande 
          imagem={minhaFoto} 
          nome="Alex Maiolino Kalawatis" 
          descricao="Oi, eu sou o Alex Maiolino Kalawatis. Sou um dos alunos da Labenu. Adoro tecnologia e suas peculiaridades, programar está virando paixão e cada vez mais me interesso pelo assunto."
        />
        <ImagemButton 
          imagem="https://cdn-icons-png.flaticon.com/512/929/929750.png" 
          texto="Ver mais"
        />
      </PageSecCont>
      <PageSecCont>
        <CardPequeno
          imagem="https://i.pinimg.com/564x/c4/4b/55/c44b558d5072246d510dad9fbb0b2869.jpg"
          tipo="Email: "
          conteudo=" alexkalawatis@hotmail.com"
        />
        <CardPequeno
          imagem="https://w7.pngwing.com/pngs/30/177/png-transparent-ip-address-computer-icons-encapsulated-postscript-address-miscellaneous-logo-video-player.png"
          tipo="Endereço: "
          conteudo=" Rua Silveira, 324, Dev - Labenu. l337"
        />
      </PageSecCont>

      <PageSecCont>
        <PageSecH2>Experiências profissionais</PageSecH2>
        <CardGrande 
          imagem="https://s3.amazonaws.com/future4.com.br/static/headf4-c492117ca2373dc85ca81bf715b3dc2a.png" 
          nome="Labenu" 
          descricao="Aluno em formação da Labenu !" 
        />
        <CardGrande 
          imagem="http://www.lem.civ.puc-rio.br/wp-content/uploads/2017/03/LOGO_header.png" 
          nome="LEM PUC-Rio" 
          descricao="Estagiario no laboratório de estruturas e materiais, instrumentação e analise de resultados." 
        />
      </PageSecCont>

      <PageSecCont>
        <PageSecH2>Minhas redes sociais</PageSecH2>
        <ImagemButton 
          imagem="https://d2v9ipibika81v.cloudfront.net/uploads/sites/261/2017/01/facebook-logo-3.png" 
          texto="Facebook" 
        />        

        <ImagemButton 
          imagem="https://logodownload.org/wp-content/uploads/2014/09/twitter-logo-1-1.png" 
          texto="Twitter" 
        />        
      </PageSecCont>
    </AppLayout>
  );
}

export default App;

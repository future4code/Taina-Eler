import React from 'react';
import './App.css';
import CardGrande from './components/CardGrande/CardGrande';
import ImagemButton from './components/ImagemButton/ImagemButton';
import Perfil from './components/imgs/perfil.jpg';
import Cefet from './components/imgs/cefet.png';
import Labenu from './components/imgs/labenu.jpg';
import Email from './components/imgs/email.jpg';
import Localizacao from './components/imgs/localizacao.jpg';
import CardEndereco from './components/CardEndereco/CardEndereco';
// import styled from "styled-components";

function App() {
  return (
    <div className="App">
      <div className="page-section-container">
        <h2>Dados pessoais</h2>
        <CardGrande 
          imagem={Perfil}
          nome="Tainá Aparecida Soares Eler" 
          descricao="Me chamo Tainá, sou natural de Bom Jardim, cidade localizada na região Serrana do Rio de Janeiro. Gosto de subir as pequenas
          montanhas, que ficam perto da minha casa, para observar o nascer no Sol."
        />
        
        <ImagemButton 
          imagem="https://image.flaticon.com/icons/png/512/117/117472.png" 
          texto="Ver mais"
        />
      </div>

      <div className="page-section-container">
        <CardEndereco 
          imagem={Email}
          nome="Email:"
          endereco="tainasoares10eler@gmail.com"
        />

        <CardEndereco 
          imagem={Localizacao}
          nome="Localização:"
          endereco="Rua Manoel Gonçalves T. Neves / Bom Jardim"
        />
      </div>

      <div className="page-section-container">
        <h2>Experiências profissionais</h2>
        <CardGrande 
          imagem={Cefet}
          nome="Bacharelado em Engenharia Elétrica" 
          descricao="Graduada em 2021 em engenharia elétrica, com enfâse em Sistemas de Potência." 
        />
        
        <CardGrande 
          imagem={Labenu}
          nome="Web Full Stack" 
          descricao="Cursando na modalidade integral o curso de desenvolvimento web da Labenu." 
        />
      </div>

      <div className="page-section-container">
        <h2>Minhas redes sociais</h2>
        <ImagemButton 
          imagem="https://d2v9ipibika81v.cloudfront.net/uploads/sites/261/2017/01/facebook-logo-3.png" 
          texto="Facebook" 
        />        

        <ImagemButton 
          imagem="https://logodownload.org/wp-content/uploads/2014/09/twitter-logo-1-1.png" 
          texto="Twitter" 
        />        
      </div>
    </div>
  );
}

export default App;

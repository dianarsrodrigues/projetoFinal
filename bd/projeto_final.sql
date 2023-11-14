-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Tempo de geração: 14-Nov-2023 às 13:08
-- Versão do servidor: 10.4.28-MariaDB
-- versão do PHP: 8.2.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Banco de dados: `projeto_final`
--

-- --------------------------------------------------------

--
-- Estrutura da tabela `login`
--

CREATE TABLE `login` (
  `username` varchar(100) NOT NULL,
  `password` text NOT NULL,
  `created_at` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

--
-- Extraindo dados da tabela `login`
--

INSERT INTO `login` (`username`, `password`, `created_at`) VALUES
('diana', '$2b$10$bIJvqX3qUCeAZ8YVc4DLD.m8x3u3.SLpPgqYuOBC7So3oAsVPouSu', '2023-11-04 14:37:29');

-- --------------------------------------------------------

--
-- Estrutura da tabela `post`
--

CREATE TABLE `post` (
  `id` int(11) NOT NULL,
  `created_at` datetime NOT NULL,
  `edited_at` datetime DEFAULT NULL,
  `delete_at` datetime DEFAULT NULL,
  `title` varchar(200) NOT NULL,
  `text` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

--
-- Extraindo dados da tabela `post`
--

INSERT INTO `post` (`id`, `created_at`, `edited_at`, `delete_at`, `title`, `text`) VALUES
(73, '2023-11-10 23:06:45', '2023-11-10 23:07:17', NULL, 'Desenvolvimentos Mais Recentes em Inteligência Artificial', '<p>Nos últimos anos, os desenvolvimentos em inteligência artificial (IA) têm sido notáveis, com avanços significativos em várias áreas. Algoritmos de aprendizado profundo, como redes neurais convolucionais e recorrentes, aprimoraram a capacidade dos sistemas de IA em reconhecer padrões complexos em grandes conjuntos de dados. Isso tem levado a avanços substanciais em uma variedade de aplicações práticas.</p><p class=\"ql-align-center\"><img src=\"http://localhost:3000/images/5hber1iu4uk.jpeg\" alt=\"Image 0\"></p><p><br></p><p>Em setores como saúde, a IA tem sido empregada para diagnósticos médicos mais precisos, análise de imagens médicas e descoberta de medicamentos. Além disso, assistentes virtuais baseados em IA, como Siri, Alexa e Google Assistant, tornaram-se uma parte integrante da vida cotidiana, simplificando tarefas e fornecendo informações úteis aos usuários.</p><p><br></p><p>Outro domínio em que a IA está deixando uma marca significativa é a indústria automotiva, com o desenvolvimento de carros autônomos. Algoritmos avançados capacitam esses veículos a interpretar o ambiente ao seu redor, tomar decisões em tempo real e melhorar a segurança nas estradas.</p><p><br></p><p><img src=\"http://localhost:3000/images/a2ov7dht4p6.jpeg\" alt=\"Image 1\"></p><p><br></p><p>Em pesquisa científica, a IA está sendo aplicada para analisar grandes conjuntos de dados, acelerando a descoberta de padrões e insights em campos como genômica, física de partículas e astronomia. Essa capacidade de processar informações em escala está levando a avanços significativos em várias disciplinas.</p>'),
(74, '2023-11-10 23:10:59', '2023-11-10 23:18:22', NULL, 'Blockchain e Seu Impacto em Diversas Indústrias', '<p>A tecnologia blockchain, inicialmente concebida como o protocolo subjacente para criptomoedas, tem transcendido seu <strong>papel original </strong>e está deixando uma marca significativa em diversas indústrias. Sua principal característica, a descentralização, e a capacidade de criar registros imutáveis têm aplicações amplas e impactantes.</p><p>No setor financeiro, a blockchain está sendo adotada para transações seguras e transparentes. Contratos inteligentes, que são códigos autoexecutáveis armazenados na blockchain, estão revolucionando a maneira como os contratos são gerenciados, eliminando intermediários e garantindo a execução automática de acordos.</p><p>Além disso, a cadeia de suprimentos está sendo transformada pela blockchain, proporcionando uma visibilidade sem precedentes aos participantes. A autenticação de produtos, principalmente em setores como farmacêutico e alimentício, tornou-se mais eficaz com o uso da tecnologia blockchain para rastrear a procedência e garantir a autenticidade.</p>'),
(75, '2023-11-10 23:15:31', '2023-11-10 23:20:22', NULL, 'O Futuro da Realidade Virtual e Aumentada', '<p>O futuro da realidade virtual (RV) e aumentada (RA) está se desdobrando diante de nós, à medida que tecnologias avançadas continuam a impulsionar inovações nessas áreas. O desenvolvimento de hardware mais avançado e software interativo está permitindo experiências mais envolventes e integradas ao nosso cotidiano.</p><p><br></p><p><img src=\"http://localhost:3000/images/xqouayw2ua.jpeg\" alt=\"Image 0\"></p><p><br></p><p>Na medicina, a RV está sendo utilizada para treinamento de cirurgiões em ambientes simulados, proporcionando uma prática mais segura e eficiente. A simulação de procedimentos médicos complexos permite que profissionais de saúde aprimorem suas habilidades sem riscos para os pacientes.</p><p><br></p><p>A RA, por outro lado, está transformando o varejo e a forma como interagimos com o ambiente ao nosso redor. Aplicações de compra com RA proporcionam experiências personalizadas, permitindo que os consumidores visualizem produtos em seus próprios espaços antes de fazer uma compra.</p><p><br></p><p>Ambas as tecnologias estão convergindo para criar mundos digitais mais integrados à nossa realidade cotidiana. Em entretenimento, jogos de RV oferecem experiências imersivas, enquanto aplicativos de RA enriquecem a interação com o mundo físico, sobrepondo informações digitais ao ambiente real.</p>'),
(76, '2023-11-10 23:17:06', NULL, NULL, '5G e Seu Papel na Conectividade Global', '<p>O 5G, a quinta geração de tecnologia de comunicação móvel, está desempenhando um papel fundamental na transformação da conectividade global. Sua implementação tem proporcionado velocidades de dados notavelmente altas, menor latência e maior capacidade de conexão de dispositivos simultaneamente.</p><p>Essa tecnologia está impulsionando a Internet das Coisas (IoT), onde dispositivos conectados se comunicam entre si para coletar e compartilhar dados em tempo real. Nas cidades inteligentes, sensores e dispositivos IoT impulsionados pelo 5G estão melhorando a eficiência operacional, a segurança pública e a qualidade de vida dos cidadãos.</p><p>O 5G também está catalisando uma evolução nas redes móveis, oferecendo uma experiência mais rápida e confiável para os usuários. Streaming de vídeo em alta definição, jogos online sem lag e comunicação em tempo real são apenas algumas das melhorias que os consumidores podem esperar com a implementação generalizada do 5G.</p><p>Além disso, a tecnologia 5G está impactando setores como saúde, educação e manufatura. Cirurgias remotas com latência mínima, educação a distância mais eficaz e manufatura com automação avançada são exemplos de como o 5G está moldando o futuro em diversas áreas.</p>'),
(77, '2023-11-10 23:29:48', NULL, NULL, 'Cibersegurança em um Mundo Digital', '<p>A cibersegurança tornou-se uma preocupação crítica em um mundo cada vez mais digitalizado, com ameaças cibernéticas tornando-se mais sofisticadas e generalizadas. Em resposta a esses desafios, abordagens inovadoras estão sendo adotadas para proteger dados, redes e sistemas contra ataques maliciosos.</p><p><br></p><p>A inteligência artificial (IA) e a aprendizagem de máquina (ML) emergiram como armas poderosas na defesa cibernética. Essas tecnologias capacitam os sistemas a analisar grandes conjuntos de dados em tempo real, identificando padrões e comportamentos suspeitos que podem indicar atividades maliciosas.</p><p><br></p><p>A automação desempenha um papel crucial na resposta a incidentes de segurança. Respostas automáticas a ameaças identificadas, juntamente com a capacidade de isolar áreas comprometidas de uma rede, contribuem para uma cibersegurança mais ágil e eficaz.</p><p><br></p><p><img class=\"image-post\" src=\"http://localhost:3000/images/c7uza7qnk1b.jpeg\" alt=\"Image 0\"/></p><p><br></p><p>A proteção de dados confidenciais e a privacidade do usuário tornaram-se prioridades centrais. Tecnologias como criptografia avançada e autenticação multifator estão sendo implantadas para garantir que apenas usuários autorizados tenham acesso a informações sensíveis.</p><p><br></p><p>Além disso, a conscientização do usuário e a educação em cibersegurança são componentes essenciais na defesa contra ameaças. Com a crescente interconexão de dispositivos e sistemas, a segurança cibernética continuará sendo uma área de foco crítico para empresas, governos e usuários individuais.</p>'),
(78, '2023-11-13 17:26:08', '2023-11-13 17:27:39', NULL, 'Tendências em Computação em Nuvem', '<p>A computação em nuvem tem desempenhado um papel transformador na forma como as organizações gerenciam e fornecem serviços de TI. À medida que a tecnologia continua a evoluir, várias tendências estão moldando o futuro da computação em nuvem e suas aplicações em diversos setores.</p><p><br></p><p>Uma tendência significativa é a ascensão da computação em nuvem de borda, onde o processamento de dados ocorre mais próximo do local onde é necessário. Isso é particularmente crucial para aplicações que exigem baixa latência, como veículos autônomos e dispositivos IoT.</p><p><br></p><p>Outra tendência é a computação quântica em nuvem, que busca utilizar os princípios da mecânica quântica para realizar cálculos muito mais rapidamente do que os computadores tradicionais. Embora a computação quântica ainda esteja em estágios iniciais, ela tem o potencial de revolucionar a resolução de problemas complexos em áreas como criptografia, simulações e otimizações.</p><p><br></p><p>A segurança na nuvem é uma preocupação constante, e as soluções de segurança baseadas em inteligência artificial e aprendizado de máquina estão se tornando essenciais para proteger dados e aplicativos na nuvem. A automação também desempenha um papel vital na detecção e resposta a ameaças em tempo real.</p><p><br></p><p>Além disso, a computação em nuvem híbrida, que combina recursos locais com serviços em nuvem, continua a ganhar popularidade, oferecendo flexibilidade e escalabilidade. Essa abordagem permite que as organizações otimizem o desempenho e atendam às demandas variáveis de carga de trabalho.</p><p><br></p><p>A inovação na entrega de serviços em nuvem também está ocorrendo por meio de contêineres e orquestração, como Kubernetes. Isso simplifica o desenvolvimento, a implantação e a escalabilidade de aplicativos, tornando a computação em nuvem mais eficiente e ágil.</p>'),
(79, '2023-11-13 17:43:20', '2023-11-13 17:44:05', '2023-11-13 17:44:11', 'aaaaaaaaaaaaaaaaaaaa', '<p>aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa.</p><p>ddddaaaaaaaaaaaaa</p><p>a</p><p><br></p><p>a</p><p>a</p><p>a</p><p>a</p><p>a</p><p>a</p><p><strong>a</strong></p><p>a</p><p><u>a</u></p><p>a</p><ol><li>accccc<span class=\"ql-size-large\">ccccccccccccc</span></li><li><span class=\"ql-size-large\">c</span></li><li><span class=\"ql-size-large\">c</span></li><li><span class=\"ql-size-large\">c</span></li><li><span class=\"ql-size-large\">c</span></li></ol><p>a</p><p>a</p><p>a</p><p>a</p><p>a</p><p>a</p><p>a</p><p>a</p><p><br></p><p><img src=\"http://localhost:3000/images/htk4p7jd5l.jpeg\" alt=\"Image 0\"></p><p><br></p><p><br></p><p>s</p><p>s</p><p>s</p><p>s</p>'),
(80, '2023-11-14 09:09:51', NULL, '2023-11-14 10:02:23', 'aaaaaa', '<p>aaaaaaaaaaaaaaa</p><p>a</p><p>a</p><p><img class=\"image-post\" src=\"http://localhost:3000/images/40xvq1qrnvi.jpeg\" alt=\"Image 0\"/></p>');

--
-- Índices para tabelas despejadas
--

--
-- Índices para tabela `login`
--
ALTER TABLE `login`
  ADD PRIMARY KEY (`username`);

--
-- Índices para tabela `post`
--
ALTER TABLE `post`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT de tabelas despejadas
--

--
-- AUTO_INCREMENT de tabela `post`
--
ALTER TABLE `post`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=81;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

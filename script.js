const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
  {
    enunciado:
      "Você assume a chefia da Usina Nuclear de Chernobyl em um dia de testes de segurança. O reator de Urânio-235 entra em superaquecimento devido a uma falha no sistema de refrigeração por água. Qual o seu primeiro procedimento técnico?",
    alternativas: [
      {
        texto:
          "Inserir barras de controle de Grafite para tentar desacelerar a reação de fissão nuclear imediatamente.",
        afirmacao:
          "Sua decisão de inserir barras de grafite causou um pico temporário de reatividade antes de desacelerar, revelando a importância do controle estequiométrico e cinético das reações nucleares.",
      },
      {
        texto:
          "Injetar imediatamente grande quantidade de água boricada para absorver os nêutrons em excesso.",
        afirmacao:
          "Ao utilizar o Boro como moderador de nêutrons, você conseguiu conter o pico inicial da reação em cadeia com embasamento em física e química nuclear.",
      },
    ],
  },
  {
    enunciado:
      "Uma das seções do reator sofre uma fissura, liberando gases contendo isótopos radioativos como Iodo-131 e Césio-137. Como você protege a equipe e a população vizinha da contaminação primária por Iodo radioativo?",
    alternativas: [
      {
        texto:
          "Distribuir pastilhas de Iodeto de Potássio (KI) não radioativo para saturação prévia da glândula tireoide.",
        afirmacao:
          "Ao prescrever Iodeto de Potássio, você evitou que a tireoide absorvesse o isótopo radioativo Iodo-131 por acúmulo biológico.",
      },
      {
        texto:
          "Instalar purificadores com filtros de carvão ativado sem aplicação de tratamento químico profilático.",
        afirmacao:
          "Embora os filtros tenham retido parte dos gases, a falta de proteção biológica direta expôs a população à absorção de Iodo radioativo no organismo.",
      },
    ],
  },
  {
    enunciado:
      "Com o reator contido, é necessário construir uma estrutura de contenção (Sarcófago) sobre os escombros para conter a radiação gama de alta energia. Qual material de blindagem você escolhe no projeto?",
    alternativas: [
      {
        texto:
          "Camadas densas de Chumbo combinadas com estruturas pesadas de Concreto armado.",
        afirmacao:
          "A escolha de Chumbo e Concreto provou ser eficaz, pois materiais de alta densidade atenuam adequadamente as ondas de radiação gama.",
      },
      {
        texto:
          "Ligas de Alumínio e Aço Inoxidável leve para agilizar a construção da estrutura.",
        afirmacao:
          "O uso de materiais com baixa densidade eletrônica permitiu o vazamento contínuo de radiação gama, exigindo reforços estruturais posteriores.",
      },
    ],
  },
  {
    enunciado:
      "A água usada no resfriamento emergencial do reator acumulou alto teor de isótopos solúveis de Césio-137 e Estrôncio-90. Como tratar essa água antes de qualquer descarte ou armazenamento?",
    alternativas: [
      {
        texto:
          "Utilizar resinas de troca iônica e zeólitas para filtrar e fixar os íons radioativos.",
        afirmacao:
          "O processo de troca iônica reteve com sucesso os íons Césio e Estrôncio, permitindo o isolamento do rejeito líquido de forma química segura.",
      },
      {
        texto:
          "Realizar um processo simples de fervura e destilação para evaporar a água e liberar o vapor na atmosfera.",
        afirmacao:
          "A evaporação espalhou isótopos radioativos pela atmosfera através do vapor contaminado, gerando chuva ácida e radioativa na região.",
      },
    ],
  },
  {
    enunciado:
      "Para a destinação final do lixo atômico sólido de alta atividade e longo tempo de meia-vida (como o Plutônio-239), qual estratégia de armazenamento longo prazo é adotada?",
    alternativas: [
      {
        texto:
          "Encapsulamento em matrizes vítreas (vitrificação) e sepultamento em repositórios geológicos profundos.",
        afirmacao:
          "A vitrificação em repositórios geológicos isolou os actinídeos de longa meia-vida da biosfera por milênios.",
      },
      {
        texto:
          "Armazenamento em tambores metálicos simples dispostos em galpões de superfície monitorados.",
        afirmacao:
          "Os tambores sofreram corrosão química ao longo das décadas, exigindo gastos contínuos de contenção por parte do Estado.",
      },
    ],
  },
];

let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
  if (atual >= perguntas.length) {
    mostraResultado();
    return;
  }
  perguntaAtual = perguntas[atual];
  caixaPerguntas.textContent = perguntaAtual.enunciado;
  caixaAlternativas.textContent = "";
  mostraAlternativas();
}

function mostraAlternativas() {
  for (const alternativa of perguntaAtual.alternativas) {
    const botaoAlternativas = document.createElement("button");
    botaoAlternativas.textContent = alternativa.texto;
    botaoAlternativas.addEventListener("click", () =>
      respostaSelecionada(alternativa)
    );
    caixaAlternativas.appendChild(botaoAlternativas);
  }
}

function respostaSelecionada(opcaoSelecionada) {
  const afirmacoes = opcaoSelecionada.afirmacao;
  if (Array.isArray(afirmacoes)) {
    historiaFinal += afirmacoes.join(" ") + " ";
  } else {
    historiaFinal += afirmacoes + " ";
  }
  atual++;
  mostraPergunta();
}

function mostraResultado() {
  caixaPerguntas.textContent = "RELATÓRIO DE DEBRIEFING NUCLEAR (Anos depois...):";
  textoResultado.textContent = historiaFinal;
  caixaAlternativas.textContent = "";
}

mostraPergunta();
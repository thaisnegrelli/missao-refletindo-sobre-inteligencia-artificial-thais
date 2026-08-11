const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "O último ano do Ensino Médio chegou! Na hora de fazer trabalhos escolares ou projetos, qual área desperta mais seu interesse?",
        alternativas: [
            {
                texto: "Analisar números, resolver problemas lógicos ou mexer com tecnologia.",
                afirmacao: "Você demonstra um forte raciocínio analítico e afinidade com Exatas e Tecnologia."
            },
            {
                texto: "Entender comportamento humano, história, artes ou criar textos.",
                afirmacao: "Sua sensibilidade crítica e comunicação apontam para o campo das Humanidades e Artes."
            }
        ]
    },
    {
        enunciado: "Em uma atividade prática de feira de ciências ou feira cultural da escola, qual papel você prefere assumir?",
        alternativas: [
            {
                texto: "Organizar os dados, cuidar da estrutura física ou programar/montar os equipamentos.",
                afirmacao: "Gosta de estruturar processos e ver soluções práticas sendo aplicadas."
            },
            {
                texto: "Apresentar o projeto para o público, conversar com os visitantes e mediar debates.",
                afirmacao: "Sua facilidade em se expressar e lidar com pessoas é um diferencial marcante."
            }
        ]
    },
    {
        enunciado: "Pensando no seu futuro ambiente de trabalho no pós-3º ano, o que mais te atrai?",
        alternativas: [
            {
                texto: "Ambientes dinâmicos de inovação, laboratórios ou escritórios de planejamento.",
                afirmacao: "Busca carreiras voltadas para pesquisa, desenvolvimento técnico ou gestão estratégica."
            },
            {
                texto: "Hospitais, clínicas, ONGs, salas de aula ou contato direto com a comunidade.",
                afirmacao: "Possui vocação para ajudar o próximo, promovendo bem-estar, saúde ou educação."
            }
        ]
    },
    {
        enunciado: "Diante de um problema complexo durante o ano letivo, qual costuma ser a sua reação rápida?",
        alternativas: [
            {
                texto: "Procurar padrões, usar lógica e buscar ferramentas digitais ou estatísticas.",
                afirmacao: "Sabe manter a objetividade e usar recursos técnicos para superar obstáculos."
            },
            {
                texto: "Reunir o grupo, ouvir diferentes opiniões e encontrar uma solução empática.",
                afirmacao: "Tem um perfil colaborativo, focado na mediação de conflitos e trabalho em equipe."
            }
        ]
    },
    {
        enunciado: "O Vestibular/ENEM está chegando. Qual tipo de impacto você gostaria de gerar com a sua futura profissão?",
        alternativas: [
            {
                texto: "Criar novas tecnologias, otimizar sistemas ou construir infraestruturas para o mundo.",
                afirmacao: "Seu foco está em transformar a sociedade através da inovação e eficiência técnica."
            },
            {
                texto: "Impactar vidas diretamente, defender direitos ou cuidar da saúde física e mental das pessoas.",
                afirmacao: "Seu propósito se alinha com o cuidado, justiça e desenvolvimento humano social."
            }
        ]
    }
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

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "Resultado do seu Perfil Vocacional:";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();
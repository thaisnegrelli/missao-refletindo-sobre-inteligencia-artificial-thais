:root {
    --cor-fundo: #0b2545;        /* Azul escuro */
    --cor-principal: #134074;    /* Azul médio */
    --cor-secundaria: #8da9c4;   /* Azul claro */
    --cor-destaque: #ffc857;     /* Amarelo */
    --cor-texto: #eeefc8;        /* Amarelo bem claro / creme para contraste */
    --cor-hover: #e0a938;        /* Amarelo escuro para hover */
}

body {
    background-color: var(--cor-fundo);
    color: var(--cor-texto);
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    margin: 0;
    padding: 20px;
    box-sizing: border-box;
}

.caixa-principal {
    background-color: var(--cor-principal);
    width: 100%;
    max-width: 650px;
    text-align: center;
    padding: 30px;
    border-radius: 12px;
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.3);
    border: 2px solid var(--cor-destaque);
}

h1 {
    color: var(--cor-destaque);
    margin-bottom: 25px;
    font-size: 1.8rem;
}

.caixa-perguntas {
    font-size: 1.2rem;
    margin-bottom: 20px;
    line-height: 1.5;
}

.caixa-alternativas {
    display: flex;
    flex-direction: column;
    gap: 12px;
}

button {
    background-color: var(--cor-secundaria);
    color: #0b2545;
    border: none;
    border-radius: 8px;
    padding: 14px 20px;
    font-size: 1rem;
    font-weight: bold;
    cursor: pointer;
    transition: all 0.3s ease;
}

button:hover {
    background-color: var(--cor-destaque);
    color: #000000;
    transform: translateY(-2px);
}

.caixa-resultado {
    margin-top: 20px;
    font-size: 1.1rem;
    line-height: 1.6;
}
// Keyword detection mappings for intelligent navigation
// Based on requirements.md keyword triggers (without human attendant feature)

export const keywords = {
    // Courses related
    curso: 'cursos',
    cursos: 'cursos',
    formacao: 'cursos',
    formação: 'cursos',
    capacitacao: 'cursos',
    capacitação: 'cursos',
    aula: 'cursos',
    aulas: 'cursos',

    // Enrollment
    inscrever: 'cursos_inscrever',
    inscricao: 'cursos_inscrever',
    inscrição: 'cursos_inscrever',
    matricula: 'cursos_inscrever',
    matrícula: 'cursos_inscrever',

    // Gov.br
    'gov.br': 'cursos_govbr',
    govbr: 'cursos_govbr',
    senha: 'govbr_senha',
    login: 'cursos_govbr',
    conta: 'cursos_govbr',

    // Certificates
    certificado: 'cursos_certificados',
    certificados: 'cursos_certificados',
    diploma: 'cursos_certificados',

    // MEI
    mei: 'mei',
    microempreendedor: 'mei',
    cnpj: 'mei',
    empreendedor: 'mei',

    // MEI proposals
    proposta: 'mei_enviar',
    propostas: 'mei_enviar',
    orcamento: 'mei_enviar',
    orçamento: 'mei_enviar',

    // Payment
    pagamento: 'mei_pagamento',
    pagar: 'mei_pagamento',
    'nota fiscal': 'mei_pagamento',

    // Cancel
    cancelar: 'cursos_cancelar',
    desistir: 'cursos_cancelar',

    // Navigation
    menu: 'welcome',
    inicio: 'welcome',
    início: 'welcome',
    voltar: 'welcome',
    principal: 'welcome'
}

// Frustration detection keywords - now redirects to help message
export const frustrationKeywords = [
    'não entendi',
    'nao entendi',
    'complicado',
    'difícil',
    'dificil',
    'não funciona',
    'nao funciona',
    'não consigo',
    'nao consigo',
    'confuso',
    'perdido',
    'perdida'
]

// Special commands
export const specialCommands = {
    '/menu': 'welcome',
    '/cursos': 'cursos',
    '/mei': 'mei',
    '/ajuda': 'help'
}

export default keywords

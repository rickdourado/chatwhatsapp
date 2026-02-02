// Conversation tree structure for Oportunidades Cariocas chatbot
// Based on requirements.md documentation (without human attendant feature)

export const conversationTree = {
    welcome: {
        id: 'welcome',
        messages: [
            'Olá! 👋 Bem-vindo(a) ao Oportunidades Cariocas!',
            'Sou a assistente virtual e estou aqui para te ajudar com informações sobre cursos, formações e oportunidades para MEI.',
            'Como posso te ajudar hoje?'
        ],
        options: [
            { text: '1️⃣ Cursos e Formações', value: 'cursos' },
            { text: '2️⃣ Oportunidades para MEI', value: 'mei' }
        ]
    },

    // ========== CURSOS E FORMAÇÕES ==========
    cursos: {
        id: 'cursos',
        messages: ['📚 CURSOS E FORMAÇÕES\n\nEscolha o tema da sua dúvida:'],
        options: [
            { text: 'A. O que é a Plataforma Oportunidades Cariocas', value: 'cursos_sobre' },
            { text: 'B. Como faço para me inscrever', value: 'cursos_inscrever' },
            { text: 'C. Dúvidas sobre conta Gov.br', value: 'cursos_govbr' },
            { text: 'D. Acompanhar minha inscrição', value: 'cursos_acompanhar' },
            { text: 'E. Certificados', value: 'cursos_certificados' },
            { text: 'F. Cancelar ou alterar inscrição', value: 'cursos_cancelar' },
            { text: 'G. Outras dúvidas sobre cursos', value: 'cursos_outras' }
        ],
        footer: 'Digite "Menu" para voltar ao início.'
    },

    cursos_sobre: {
        id: 'cursos_sobre',
        messages: [
            '📋 SOBRE A PLATAFORMA\n\nO Oportunidades Cariocas é uma plataforma digital que reúne em um só lugar todas as informações e inscrições de:\n\n✅ Cursos\n✅ Oficinas\n✅ Palestras\n✅ Atividades educativas\n\nOferecidos pela Prefeitura do Rio e instituições parceiras.'
        ],
        options: [
            { text: '1. Quem pode se inscrever', value: 'cursos_quem_pode' },
            { text: '2. Como fazer a inscrição', value: 'cursos_inscrever' },
            { text: '3. Se os cursos são gratuitos', value: 'cursos_gratuitos' },
            { text: '4. Voltar ao menu anterior', value: 'cursos' }
        ]
    },

    cursos_quem_pode: {
        id: 'cursos_quem_pode',
        messages: [
            '👥 QUEM PODE SE INSCREVER\n\nQualquer pessoa que queira:\n✅ Aprender algo novo\n✅ Consolidar conhecimentos\n✅ Aperfeiçoar habilidades\n\nBasta atender aos requisitos de cada atividade, se houver.'
        ],
        options: [
            { text: '1. Ver como me inscrever', value: 'cursos_inscrever' },
            { text: '2. Criar conta Gov.br', value: 'govbr_criar' },
            { text: '3. Voltar ao menu anterior', value: 'cursos_sobre' }
        ]
    },

    cursos_gratuitos: {
        id: 'cursos_gratuitos',
        messages: [
            '💰 CUSTOS DOS CURSOS\n\nA maioria dos cursos é GRATUITA! 🎉\n\nMas alguns podem ter custo. Se houver, essa informação estará sempre destacada na descrição do próprio curso.'
        ],
        options: [
            { text: '1. Como encontrar só cursos gratuitos', value: 'cursos_filtrar_gratuitos' },
            { text: '2. Voltar ao menu anterior', value: 'cursos_sobre' },
            { text: '3. Outras dúvidas', value: 'cursos_outras' }
        ]
    },

    cursos_filtrar_gratuitos: {
        id: 'cursos_filtrar_gratuitos',
        messages: [
            'Para encontrar cursos gratuitos, acesse a plataforma Oportunidades Cariocas e verifique a descrição de cada curso. Os cursos gratuitos estarão claramente identificados.'
        ],
        options: [
            { text: '1. Como me inscrever', value: 'cursos_inscrever' },
            { text: '2. Voltar ao menu de cursos', value: 'cursos' },
            { text: '3. Menu principal', value: 'welcome' }
        ]
    },

    cursos_inscrever: {
        id: 'cursos_inscrever',
        messages: [
            '📝 COMO SE INSCREVER\n\nPara se inscrever nos cursos, você precisa:\n\n1️⃣ Ter uma conta Gov.br (é gratuita!)\n2️⃣ Acessar a plataforma Oportunidades Cariocas\n3️⃣ Escolher o curso desejado\n4️⃣ Solicitar a inscrição\n\n⚠️ IMPORTANTE: Após solicitar, aguarde a confirmação por e-mail ou telefone da unidade responsável. Mantenha seus dados de contato atualizados!'
        ],
        options: [
            { text: 'A. Como criar conta Gov.br', value: 'govbr_criar' },
            { text: 'B. Quem pode se inscrever', value: 'cursos_quem_pode' },
            { text: 'C. Posso me inscrever em vários cursos', value: 'cursos_multiplos' },
            { text: 'D. Voltar ao menu anterior', value: 'cursos' }
        ]
    },

    cursos_multiplos: {
        id: 'cursos_multiplos',
        messages: [
            '✅ SIM, VOCÊ PODE!\n\nVocê pode se inscrever em quantos cursos quiser ao mesmo tempo.\n\nBasta atender aos requisitos de cada atividade, se houver.'
        ],
        options: [
            { text: '1. Ver como me inscrever', value: 'cursos_inscrever' },
            { text: '2. Voltar ao menu anterior', value: 'cursos' },
            { text: '3. Outras dúvidas', value: 'cursos_outras' }
        ]
    },

    // Gov.br submenu
    cursos_govbr: {
        id: 'cursos_govbr',
        messages: ['🔐 CONTA GOV.BR\n\nEscolha sua dúvida:'],
        options: [
            { text: '1. O que é a conta Gov.br', value: 'govbr_oque' },
            { text: '2. Como criar minha conta', value: 'govbr_criar' },
            { text: '3. Esqueci minha senha', value: 'govbr_senha' },
            { text: '4. Ver tutoriais em vídeo', value: 'govbr_tutoriais' },
            { text: '5. Voltar ao menu anterior', value: 'cursos' }
        ]
    },

    govbr_oque: {
        id: 'govbr_oque',
        messages: [
            '🆔 O QUE É A CONTA GOV.BR\n\nA conta Gov.br é sua identidade digital para acessar de forma segura e prática os serviços digitais do governo.\n\n✅ Qualquer cidadão brasileiro ou estrangeiro com CPF pode criar\n✅ Garantia de segurança dos seus dados\n✅ Validação da sua identidade\n✅ Simplifica o processo de inscrição'
        ],
        options: [
            { text: '1. Como criar minha conta', value: 'govbr_criar' },
            { text: '2. Esqueci minha senha', value: 'govbr_senha' },
            { text: '3. Ver tutorial em vídeo', value: 'govbr_tutoriais' },
            { text: '4. Voltar', value: 'cursos_govbr' }
        ]
    },

    govbr_criar: {
        id: 'govbr_criar',
        messages: [
            '➕ COMO CRIAR SUA CONTA GOV.BR\n\nÉ rápido, fácil e gratuito!\n\n📱 Pelo site: acesse www.gov.br/governodigital\n📲 Pelo app: baixe "Gov.br" na loja do seu celular\n\nSiga as instruções e preencha os dados solicitados.\n\n🎥 TUTORIAL EM VÍDEO:\n"Saiba como criar uma conta GOV.BR [OFICIAL]"\n🔗 https://www.youtube.com/watch?v=qmqJqr3fN5w'
        ],
        options: [
            { text: '1. Sim, obrigado!', value: 'cursos' },
            { text: '2. Esqueci minha senha', value: 'govbr_senha' },
            { text: '3. Voltar', value: 'cursos_govbr' }
        ]
    },

    govbr_senha: {
        id: 'govbr_senha',
        messages: [
            '🔑 RECUPERAR SENHA GOV.BR\n\nVocê pode recuperar sua senha facilmente:\n\n1️⃣ Acesse o site ou app Gov.br\n2️⃣ Clique em "Esqueci minha senha"\n3️⃣ Escolha o método de recuperação:\n   • E-mail\n   • Celular\n   • Reconhecimento facial (depende do nível da conta)\n\n🎥 TUTORIAL EM VÍDEO:\n"Como recuperar a senha de sua conta GOV.BR? [OFICIAL]"\n🔗 https://www.youtube.com/watch?v=H5LC7saob7M&t=1s'
        ],
        options: [
            { text: '1. Sim, consegui recuperar!', value: 'cursos' },
            { text: '2. Voltar ao menu Gov.br', value: 'cursos_govbr' }
        ]
    },

    govbr_tutoriais: {
        id: 'govbr_tutoriais',
        messages: [
            '🎥 TUTORIAIS EM VÍDEO\n\n📹 Como criar conta Gov.br:\nhttps://www.youtube.com/watch?v=qmqJqr3fN5w\n\n📹 Como recuperar senha:\nhttps://www.youtube.com/watch?v=H5LC7saob7M&t=1s'
        ],
        options: [
            { text: '1. Consegui, obrigado!', value: 'cursos' },
            { text: '2. Voltar', value: 'cursos_govbr' }
        ]
    },

    cursos_acompanhar: {
        id: 'cursos_acompanhar',
        messages: [
            '🔍 ACOMPANHAR SUA INSCRIÇÃO\n\nApós solicitar a inscrição:\n\n⏳ Aguarde a confirmação por e-mail ou telefone da unidade responsável\n\n📧 Verifique sempre sua caixa de entrada (e spam!)\n📱 Mantenha seu telefone atualizado no cadastro\n\n❗ IMPORTANTE: Solicitar a inscrição NÃO significa que você já está apto para as aulas. É necessário aguardar a confirmação oficial.'
        ],
        options: [
            { text: '1. Quanto tempo demora a confirmação', value: 'cursos_prazo' },
            { text: '2. Como atualizar meus dados de contato', value: 'cursos_atualizar_dados' },
            { text: '3. Voltar ao menu anterior', value: 'cursos' }
        ]
    },

    cursos_prazo: {
        id: 'cursos_prazo',
        messages: [
            'O prazo varia conforme a unidade responsável. Você receberá confirmação por e-mail ou telefone.\n\nVerifique sua caixa de entrada regularmente, incluindo a pasta de spam.'
        ],
        options: [
            { text: '1. Como atualizar dados de contato', value: 'cursos_atualizar_dados' },
            { text: '2. Voltar ao menu anterior', value: 'cursos_acompanhar' },
            { text: '3. Menu principal', value: 'welcome' }
        ]
    },

    cursos_atualizar_dados: {
        id: 'cursos_atualizar_dados',
        messages: [
            'Para atualizar seus dados de contato, acesse a plataforma Oportunidades Cariocas com sua conta Gov.br e atualize suas informações no perfil.'
        ],
        options: [
            { text: '1. Como criar conta Gov.br', value: 'govbr_criar' },
            { text: '2. Voltar ao menu anterior', value: 'cursos_acompanhar' },
            { text: '3. Menu principal', value: 'welcome' }
        ]
    },

    cursos_certificados: {
        id: 'cursos_certificados',
        messages: [
            '🎓 CERTIFICADOS\n\nSim! Ao finalizar o curso, você terá direito a um certificado digital de participação ou conclusão.\n\n📍 ONDE ENCONTRAR:\n• Na plataforma Oportunidades Cariocas, aba "Certificados"\n• Por e-mail enviado pela unidade responsável'
        ],
        options: [
            { text: '1. Como me inscrever em cursos', value: 'cursos_inscrever' },
            { text: '2. Voltar ao menu anterior', value: 'cursos' },
            { text: '3. Ir ao menu principal', value: 'welcome' }
        ]
    },

    cursos_cancelar: {
        id: 'cursos_cancelar',
        messages: [
            '❌ CANCELAR INSCRIÇÃO\n\nPara cancelar sua inscrição:\n\n1️⃣ Acesse a plataforma Oportunidades Cariocas\n2️⃣ Vá até a página da atividade desejada\n3️⃣ Clique em "Cancelar inscrição"\n\nPronto! Sua inscrição será cancelada.'
        ],
        options: [
            { text: '1. Como me inscrever novamente', value: 'cursos_inscrever' },
            { text: '2. Voltar ao menu anterior', value: 'cursos' },
            { text: '3. Ver outras dúvidas sobre cursos', value: 'cursos_outras' }
        ]
    },

    cursos_outras: {
        id: 'cursos_outras',
        messages: ['❓ OUTRAS DÚVIDAS FREQUENTES'],
        options: [
            { text: '1. Posso me inscrever em mais de um curso?', value: 'cursos_multiplos' },
            { text: '2. Todos os cursos são gratuitos?', value: 'cursos_gratuitos' },
            { text: '3. Quem pode se inscrever?', value: 'cursos_quem_pode' },
            { text: '4. Voltar ao menu anterior', value: 'cursos' }
        ]
    },

    // ========== OPORTUNIDADES PARA MEI ==========
    mei: {
        id: 'mei',
        messages: ['💼 OPORTUNIDADES PARA MEI\n\nEscolha o tema da sua dúvida:'],
        options: [
            { text: 'A. O que é e quem pode participar', value: 'mei_sobre' },
            { text: 'B. Como ver as oportunidades disponíveis', value: 'mei_ver' },
            { text: 'C. Como enviar uma proposta', value: 'mei_enviar' },
            { text: 'D. Alterar ou acompanhar minha proposta', value: 'mei_alterar' },
            { text: 'E. Minha proposta foi selecionada, e agora?', value: 'mei_selecionada' },
            { text: 'F. Dúvidas sobre pagamento', value: 'mei_pagamento' },
            { text: 'G. Outras dúvidas sobre MEI', value: 'mei_outras' }
        ],
        footer: 'Digite "Menu" para voltar ao início.'
    },

    mei_sobre: {
        id: 'mei_sobre',
        messages: [
            '📋 SOBRE OPORTUNIDADES PARA MEI\n\nO Oportunidades Cariocas tem um espaço exclusivo onde a Prefeitura do Rio publica serviços que precisa contratar de Microempreendedores Individuais (MEIs).\n\n🎯 OBJETIVO: Impulsionar o empreendedorismo local conectando MEIs a oportunidades da Prefeitura.'
        ],
        options: [
            { text: '1. Quem pode participar', value: 'mei_quem_pode' },
            { text: '2. Como funciona', value: 'mei_como_funciona' },
            { text: '3. Como ver as oportunidades', value: 'mei_ver' },
            { text: '4. Voltar ao menu anterior', value: 'mei' }
        ]
    },

    mei_quem_pode: {
        id: 'mei_quem_pode',
        messages: [
            '✅ QUEM PODE PARTICIPAR\n\nVocê pode enviar propostas se:\n\n✔️ Tiver CNPJ de Microempreendedor Individual (MEI)\n✔️ Seu MEI estiver ATIVO\n✔️ Seu MEI estiver em SITUAÇÃO REGULAR\n\n🔐 Também precisa de conta Gov.br para se cadastrar.'
        ],
        options: [
            { text: '1. Como criar conta Gov.br', value: 'govbr_criar' },
            { text: '2. Verificar se meu MEI está regular', value: 'mei_verificar_regular' },
            { text: '3. Como enviar proposta', value: 'mei_enviar' },
            { text: '4. Voltar', value: 'mei_sobre' }
        ]
    },

    mei_verificar_regular: {
        id: 'mei_verificar_regular',
        messages: [
            'Para verificar se seu MEI está regular, você pode consultar no Portal do Empreendedor (www.gov.br/empresas-e-negocios/pt-br/empreendedor).\n\nLá você encontra todas as informações sobre regularidade e pendências do seu MEI.'
        ],
        options: [
            { text: '1. Como enviar proposta', value: 'mei_enviar' },
            { text: '2. Voltar ao menu MEI', value: 'mei' },
            { text: '3. Menu principal', value: 'welcome' }
        ]
    },

    mei_como_funciona: {
        id: 'mei_como_funciona',
        messages: [
            'A Prefeitura publica oportunidades de serviços que precisa contratar no Oportunidades Cariocas.\n\nVocê pode ver a lista de serviços disponíveis e escolher aqueles que te interessam para enviar sua proposta.'
        ],
        options: [
            { text: '1. Como ver oportunidades', value: 'mei_ver' },
            { text: '2. Como enviar proposta', value: 'mei_enviar' },
            { text: '3. Voltar', value: 'mei_sobre' }
        ]
    },

    mei_ver: {
        id: 'mei_ver',
        messages: [
            '🔎 COMO VER OPORTUNIDADES\n\nA Prefeitura publica as oportunidades de serviços no Oportunidades Cariocas.\n\n📋 COMO ACESSAR:\n1. Acesse a plataforma\n2. Navegue pela lista de serviços disponíveis\n3. Escolha aqueles que te interessam\n\nVocê pode ver todos os detalhes de cada oportunidade antes de enviar sua proposta.'
        ],
        options: [
            { text: '1. Como enviar proposta', value: 'mei_enviar' },
            { text: '2. Ver requisitos para participar', value: 'mei_quem_pode' },
            { text: '3. Voltar ao menu anterior', value: 'mei' }
        ]
    },

    mei_enviar: {
        id: 'mei_enviar',
        messages: [
            '📤 COMO ENVIAR SUA PROPOSTA\n\nPasso a passo:\n\n1️⃣ Escolha o serviço que te interessa\n2️⃣ Faça login na plataforma\n3️⃣ O sistema identifica automaticamente seu CNPJ MEI\n4️⃣ Confirme e atualize seus dados de contato (e-mail e telefone) ⚠️\n5️⃣ Informe:\n   • Valor total do serviço\n   • Prazo previsto para conclusão\n6️⃣ Revise tudo com atenção\n7️⃣ Clique em "Enviar proposta"\n\n⚠️ MUITO IMPORTANTE: Mantenha e-mail e telefone atualizados! É por eles que a Prefeitura entrará em contato se sua proposta for escolhida.'
        ],
        options: [
            { text: '1. Como criar conta Gov.br', value: 'govbr_criar' },
            { text: '2. Como alterar valor da proposta depois', value: 'mei_alterar' },
            { text: '3. Como acompanhar minha proposta', value: 'mei_acompanhar' },
            { text: '4. Voltar', value: 'mei' }
        ]
    },

    mei_alterar: {
        id: 'mei_alterar',
        messages: [
            '✏️ ALTERAR SUA PROPOSTA\n\nVocê pode mudar o valor enquanto o prazo de envio ainda estiver aberto!\n\nPASSO A PASSO:\n\n1️⃣ Faça login na sua conta\n2️⃣ Acesse "Minhas propostas" (canto superior direito)\n3️⃣ Encontre a proposta que quer alterar\n4️⃣ Clique no ícone de edição (lápis) ✏️\n5️⃣ Digite o novo valor\n6️⃣ Clique em "Editar proposta"\n\nPronto! Proposta alterada com sucesso. ✅'
        ],
        options: [
            { text: '1. E se minha proposta for selecionada?', value: 'mei_selecionada' },
            { text: '2. Como acompanhar propostas', value: 'mei_acompanhar' },
            { text: '3. Voltar ao menu anterior', value: 'mei' }
        ]
    },

    mei_acompanhar: {
        id: 'mei_acompanhar',
        messages: [
            'ACOMPANHAR PROPOSTAS:\n\n📧 Você receberá e-mail informando se foi selecionada ou não.\n💻 Acesse "Minhas Propostas" na plataforma para ver o status.'
        ],
        options: [
            { text: '1. E se minha proposta for selecionada?', value: 'mei_selecionada' },
            { text: '2. Como alterar proposta', value: 'mei_alterar' },
            { text: '3. Voltar ao menu anterior', value: 'mei' }
        ]
    },

    mei_selecionada: {
        id: 'mei_selecionada',
        messages: [
            '🎉 PROPOSTA SELECIONADA!\n\nParabéns! Se sua proposta for selecionada:\n\n📞 A unidade responsável entrará em contato pelos meios informados na proposta (e-mail e telefone).\n\n⚠️ Por isso é fundamental manter essas informações atualizadas!\n\n📋 Eles vão te orientar sobre os próximos passos.'
        ],
        options: [
            { text: '1. Informações sobre pagamento', value: 'mei_pagamento' },
            { text: '2. Como atualizar dados de contato', value: 'mei_atualizar_contato' },
            { text: '3. Voltar ao menu anterior', value: 'mei' }
        ]
    },

    mei_atualizar_contato: {
        id: 'mei_atualizar_contato',
        messages: [
            'Para atualizar seus dados de contato, acesse a plataforma Oportunidades Cariocas com sua conta Gov.br e atualize suas informações no perfil.'
        ],
        options: [
            { text: '1. Como criar conta Gov.br', value: 'govbr_criar' },
            { text: '2. Voltar ao menu MEI', value: 'mei' },
            { text: '3. Menu principal', value: 'welcome' }
        ]
    },

    mei_pagamento: {
        id: 'mei_pagamento',
        messages: [
            '💰 COMO FUNCIONA O PAGAMENTO\n\nApós prestar o serviço:\n\n1️⃣ Emita a nota fiscal para a Prefeitura do Rio ou para o órgão/unidade municipal indicado\n\n2️⃣ A forma e o prazo de pagamento estão na descrição da oportunidade\n\n⚠️ IMPORTANTE: Verifique sempre os detalhes na descrição de cada oportunidade específica.'
        ],
        options: [
            { text: '1. Como enviar proposta', value: 'mei_enviar' },
            { text: '2. Ver detalhes da minha oportunidade', value: 'mei_ver' },
            { text: '3. Voltar ao menu anterior', value: 'mei' }
        ]
    },

    mei_outras: {
        id: 'mei_outras',
        messages: ['❓ OUTRAS DÚVIDAS SOBRE MEI'],
        options: [
            { text: '1. Preciso pagar para participar?', value: 'mei_pagar' },
            { text: '2. Posso enviar várias propostas?', value: 'mei_varias' },
            { text: '3. Como sei se meu MEI está regular?', value: 'mei_verificar_regular' },
            { text: '4. Dúvidas sobre conta Gov.br', value: 'cursos_govbr' },
            { text: '5. Voltar ao menu anterior', value: 'mei' }
        ]
    },

    mei_pagar: {
        id: 'mei_pagar',
        messages: [
            'NÃO! 🎉\n\nParticipação é 100% GRATUITA.\n\nVocê não paga nada para ver oportunidades ou enviar propostas.'
        ],
        options: [
            { text: '1. Como enviar proposta', value: 'mei_enviar' },
            { text: '2. Voltar ao menu MEI', value: 'mei' },
            { text: '3. Menu principal', value: 'welcome' }
        ]
    },

    mei_varias: {
        id: 'mei_varias',
        messages: [
            '✅ SIM!\n\nVocê pode enviar propostas para quantas oportunidades quiser, desde que seu MEI atenda aos requisitos de cada uma.'
        ],
        options: [
            { text: '1. Como enviar proposta', value: 'mei_enviar' },
            { text: '2. Ver oportunidades', value: 'mei_ver' },
            { text: '3. Voltar ao menu MEI', value: 'mei' }
        ]
    },

    // ========== MENSAGENS ESPECIAIS ==========
    not_understood: {
        id: 'not_understood',
        messages: [
            '❌ Opção não reconhecida.\n\nPor favor, digite:\n• O número ou letra da opção desejada\n• Ou escreva sua dúvida que tentarei ajudar'
        ],
        options: [
            { text: 'Voltar ao menu principal', value: 'welcome' }
        ]
    }
}

export default conversationTree

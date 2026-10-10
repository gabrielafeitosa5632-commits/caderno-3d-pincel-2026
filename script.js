const chapters = [
  {
    name: "Abertura",
    label: "Como ler",
    spread: 0,
    context: "Conheça a lógica do caderno e use o sumário para escolher seu próprio percurso.",
  },
  {
    name: "O projeto",
    label: "Propósito",
    spread: 1,
    context: "Um percurso de formação cultural organizado em cinco etapas, do planejamento ao retorno à comunidade.",
  },
  {
    name: "Viçosa",
    label: "Rota e memória",
    spread: 2,
    context: "A rota prevista conecta Planaltina a quatro referências patrimoniais de Viçosa.",
  },
  {
    name: "Ciência",
    label: "Em circulação",
    spread: 3,
    context: "O SIMB, os projetos discentes e quatro lentes ajudam a transformar observação em comunicação científica.",
  },
  {
    name: "Territórios",
    label: "Saberes e sabores",
    spread: 4,
    context: "Tecnologia de alimentos e memória cotidiana aproximam Viçosa e Planaltina.",
  },
  {
    name: "Encontro",
    label: "De volta ao campus",
    spread: 5,
    context: "Oficina, mostra cultural e painel coletivo fazem as experiências retornarem à comunidade.",
  },
  {
    name: "Legado",
    label: "O que permanece",
    spread: 6,
    context: "Metas, avaliação, acessibilidade e créditos fecham o caderno sem encerrar a conversa.",
  },
];

const pages = [
  {
    chapter: 0,
    title: "Um caderno para colocar experiências em circulação",
    body: `
      <span class="state-chip factual">Da proposta</span>
      <h2 class="page-title">Este caderno é um <em>lugar de encontro.</em></h2>
      <p class="page-lead">Ciência, memória e diversidade aparecem aqui como partes do mesmo percurso educativo — vivido pelos estudantes e devolvido à comunidade.</p>
      <div class="quote-card">
        <blockquote>Uma experiência só termina quando encontra novas pessoas, perguntas e sentidos.</blockquote>
        <p>Ideia-curadora do protótipo · texto demonstrativo</p>
      </div>
      <div class="page-bottom">
        <p class="source-note">O conteúdo parte da proposta PINCEL 2026. Registros finais, imagens e depoimentos entram somente após realização e autorização.</p>
      </div>`,
    linear: `<p>O Caderno Digital reúne ciência, memória e diversidade como partes de um mesmo percurso educativo. Ele preserva as vivências dos estudantes e as socializa com a comunidade. Registros finais, imagens e depoimentos devem ser incluídos somente após realização e autorização.</p>`,
  },
  {
    chapter: 0,
    title: "Escolha por onde começar",
    body: `
      <span class="state-chip demo">Navegação demonstrativa</span>
      <h2 class="page-title">Um percurso, <em>sete capítulos.</em></h2>
      <p class="page-lead">Folheie em sequência ou salte diretamente para um tema.</p>
      <ol class="chapter-index">
        ${chapters.map((chapter, index) => `
          <li>
            <button type="button" data-go-spread="${chapter.spread}">
              <span class="index-no">${String(index + 1).padStart(2, "0")}</span>
              <span><b>${chapter.name}</b><small>${chapter.label}</small></span>
              <span class="index-arrow" aria-hidden="true">↗</span>
            </button>
          </li>`).join("")}
      </ol>
      <div class="page-bottom">
        <p class="source-note">No celular, cada lado do caderno aparece como uma página independente para manter a leitura confortável.</p>
      </div>`,
    linear: `<p>O caderno possui sete capítulos: Abertura; O projeto; Viçosa; Ciência; Territórios; Encontro; e Legado. A navegação pode ser sequencial ou direta pelo sumário.</p>`,
  },
  {
    chapter: 1,
    title: "Um percurso de formação cultural",
    body: `
      <span class="state-chip factual">Da proposta</span>
      <h2 class="page-title">Cultura como <em>pertencimento.</em></h2>
      <p class="page-lead">A proposta articula vivências culturais e científicas em Viçosa, produção colaborativa e ações presenciais no IFB Campus Planaltina.</p>
      <div class="paper-card tape tilt-left">
        <h3>Objetivo geral</h3>
        <p>Promover integração, pertencimento institucional e formação cultural, com participação da comunidade externa e atenção à inclusão e ao respeito às diferenças.</p>
      </div>
      <div class="stat-grid" aria-label="Pilares do projeto">
        <div class="stat-card"><strong>01</strong><span>Protagonismo estudantil</span></div>
        <div class="stat-card"><strong>02</strong><span>Educação patrimonial</span></div>
        <div class="stat-card"><strong>03</strong><span>Comunicação científica</span></div>
        <div class="stat-card"><strong>04</strong><span>Diversidade e acesso</span></div>
      </div>
      <div class="page-bottom"><p class="source-note">Síntese baseada no objetivo e na justificativa da proposta.</p></div>`,
    linear: `<p>A proposta articula vivências culturais e científicas em Viçosa, produção colaborativa de conteúdos e ações presenciais no IFB Campus Planaltina. Seu objetivo geral é promover integração, pertencimento institucional e formação cultural, com participação da comunidade externa e atenção à inclusão e ao respeito às diferenças.</p><ul><li>Protagonismo estudantil.</li><li>Educação patrimonial.</li><li>Comunicação científica.</li><li>Diversidade e acesso.</li></ul>`,
  },
  {
    chapter: 1,
    title: "O percurso em cinco atos",
    body: `
      <span class="state-chip factual">Plano de ação</span>
      <h2 class="page-title">Da preparação ao <em>encontro.</em></h2>
      <p class="page-lead">Cada etapa gera materiais e perguntas para a etapa seguinte.</p>
      <div class="timeline">
        <div class="timeline-item"><span class="timeline-dot"></span><div><h3>1 · Preparar</h3><p>Dois encontros, logística, formação e instrumentos de registro.</p></div></div>
        <div class="timeline-item"><span class="timeline-dot"></span><div><h3>2 · Vivenciar</h3><p>Patrimônio, universidade e comunicação científica em Viçosa.</p></div></div>
        <div class="timeline-item"><span class="timeline-dot"></span><div><h3>3 · Produzir</h3><p>Organizar registros e criar o caderno e seis conteúdos de divulgação.</p></div></div>
        <div class="timeline-item"><span class="timeline-dot"></span><div><h3>4 · Compartilhar</h3><p>Oficina participativa e mostra cultural gratuitas no campus.</p></div></div>
        <div class="timeline-item"><span class="timeline-dot"></span><div><h3>5 · Avaliar</h3><p>Reunir evidências e ouvir o público sobre acesso, aprendizagem e pertencimento.</p></div></div>
      </div>
      <div class="page-bottom"><p class="source-note">A viagem depende da vigência do projeto, da cobertura financeira e das autorizações necessárias.</p></div>`,
    linear: `<p>O plano de ação se organiza em cinco atos: preparar; vivenciar; produzir; compartilhar; e avaliar. A viagem depende da vigência do projeto, de cobertura financeira e das autorizações necessárias.</p>`,
  },
  {
    chapter: 2,
    title: "Duas cidades, muitas histórias",
    body: `
      <span class="state-chip planned">Rota prevista</span>
      <h2 class="page-title">Planaltina <em>↔</em> Viçosa</h2>
      <p class="page-lead">A viagem cria uma ponte: o que se observa em Viçosa retorna ao campus como conversa, imagem, narrativa e pergunta.</p>
      <div class="route-visual" role="img" aria-label="Representação ilustrativa da rota entre Planaltina, Distrito Federal, e Viçosa, Minas Gerais">
        <svg viewBox="0 0 500 260" aria-hidden="true">
          <path class="route-path" d="M90,196 C170,232 206,102 290,141 C351,169 368,74 422,61" />
          <circle cx="232" cy="132" r="5" fill="#e6b54f" />
          <circle cx="325" cy="132" r="4" fill="#e6b54f" />
        </svg>
        <div class="route-place planaltina"><span class="map-pin"><i></i></span><b>Planaltina · DF</b></div>
        <div class="route-place vicosa"><span class="map-pin"><i></i></span><b>Viçosa · MG</b></div>
      </div>
      <div class="route-caption">
        <span><b>11–13 nov. 2026</b><br />Período previsto, sujeito à compatibilidade do projeto.</span>
        <span><b>Ida e volta</b><br />A experiência retorna em duas ações no campus.</span>
      </div>
      <div class="page-bottom"><p class="source-note">Mapa conceitual, sem escala geográfica. A rota definitiva deve ser atualizada após confirmação logística.</p></div>`,
    linear: `<p>A rota prevista conecta o IFB Campus Planaltina a Viçosa, em Minas Gerais. A participação no SIMB e o percurso estão previstos para 11 a 13 de novembro de 2026, desde que sejam compatíveis com a vigência do projeto e a disponibilidade financeira. O mapa do protótipo é conceitual e não está em escala.</p>`,
  },
  {
    chapter: 2,
    title: "Quatro paradas, quatro formas de olhar",
    body: `
      <span class="state-chip planned">Locais a confirmar</span>
      <h2 class="page-title">Patrimônio se lê com <em>perguntas.</em></h2>
      <p class="page-lead">Cada parada prevista recebe uma ficha sobre memória, representação, acesso e comunicação.</p>
      <div class="hotspot-list">
        <button class="hotspot-card" type="button" data-detail="pilastras"><span>01</span><b>Quatro Pilastras</b><small>Abrir ficha ↗</small></button>
        <button class="hotspot-card" type="button" data-detail="matriz"><span>02</span><b>Igreja Matriz</b><small>Abrir ficha ↗</small></button>
        <button class="hotspot-card" type="button" data-detail="museus"><span>03</span><b>Museus da UFV</b><small>Abrir ficha ↗</small></button>
        <button class="hotspot-card" type="button" data-detail="arthur"><span>04</span><b>Casa Arthur Bernardes</b><small>Abrir ficha ↗</small></button>
      </div>
      <div class="paper-card tilt-right">
        <h3>Regra de cuidado</h3>
        <p>A visita ao patrimônio religioso terá abordagem histórica e cultural, com respeito à liberdade de crença e sem proselitismo.</p>
      </div>
      <div class="page-bottom"><p class="source-note">Funcionamento, segurança, acessibilidade, tempo e autorização definem o roteiro realizado.</p></div>`,
    linear: `<p>O roteiro busca contemplar quatro referências: Quatro Pilastras; Igreja Matriz de Santa Rita de Cássia; espaços museológicos da Universidade Federal de Viçosa; e Casa Arthur Bernardes. A definição final considera funcionamento, segurança, acessibilidade e tempo disponível. A visita ao patrimônio religioso terá abordagem histórica e cultural, sem proselitismo.</p>`,
  },
  {
    chapter: 3,
    title: "Ciência em circulação",
    body: `
      <span class="state-chip planned">Apresentação sujeita a aceite</span>
      <h2 class="page-title">Pesquisa que sai do laboratório para <em>conversar.</em></h2>
      <p class="page-lead">No VII SIMB, os estudantes poderão comunicar suas investigações e trocar conhecimentos com pesquisadores de outras instituições.</p>
      <div class="project-poster" aria-label="Cartaz conceitual do projeto de pesquisa em Agrotecnologia">
        <span class="poster-kicker">Projeto discente · Agrotecnologia</span>
        <h3>Quantificação automatizada da severidade de doenças foliares</h3>
        <div class="poster-foot"><span>Processamento digital de imagens</span><span>Em confirmação</span></div>
      </div>
      <button class="poster-button" type="button" data-detail="pesquisa">Conhecer o projeto <span aria-hidden="true">↗</span></button>
      <div class="page-bottom"><p class="source-note">O título integral e sua grafia devem ser revisados; apresentação somente após aceite da comissão do SIMB.</p></div>`,
    linear: `<p>No VII Simpósio Internacional de Microbiologia e Biotecnologia, os estudantes poderão comunicar suas investigações e dialogar com pesquisadores de outras instituições. O quadro da proposta contém um projeto no eixo de Agrotecnologia, sobre quantificação automatizada da severidade de doenças foliares por processamento digital de imagens. O título integral precisa de revisão e a apresentação depende do aceite da comissão do evento.</p>`,
  },
  {
    chapter: 3,
    title: "Quatro lentes de observação",
    body: `
      <span class="state-chip factual">Instrumento de campo</span>
      <h2 class="page-title">Observar também é <em>escolher uma lente.</em></h2>
      <p class="page-lead">As fichas ajudam a registrar o que um lugar comunica — e também seus silêncios.</p>
      <div class="lens-grid">
        <button class="lens-button" type="button" data-detail="memoria"><span class="lens-icon">◌</span><b>Memória</b><small>Que histórias o lugar preserva?</small></button>
        <button class="lens-button" type="button" data-detail="representacao"><span class="lens-icon">◐</span><b>Representação</b><small>Quem aparece e quem parece ausente?</small></button>
        <button class="lens-button" type="button" data-detail="acesso"><span class="lens-icon">↝</span><b>Acesso</b><small>Quais condições favorecem a participação?</small></button>
        <button class="lens-button" type="button" data-detail="comunicacao"><span class="lens-icon">✦</span><b>Comunicação</b><small>Como o conteúdo chega ao público?</small></button>
      </div>
      <div class="research-slots" aria-label="Projetos ainda não informados">
        <div class="research-slot"><i>2–5</i><span>Demais projetos discentes: conteúdo em preparação, sem títulos inventados.</span></div>
      </div>
      <div class="page-bottom"><p class="source-note">Mulheres na ciência, relações étnico-raciais e acessibilidade atravessam todas as lentes.</p></div>`,
    linear: `<p>As fichas de observação usam quatro lentes: memória; representação social; acesso e acessibilidade; e comunicação dos conteúdos. A reflexão inclui a participação de mulheres na ciência, relações étnico-raciais e condições de participação. Os projetos dos demais estudantes ainda não foram informados e não devem ser inventados.</p>`,
  },
  {
    chapter: 4,
    title: "Do laboratório à mesa",
    body: `
      <span class="state-chip planned">Atividade sujeita a confirmação</span>
      <h2 class="page-title">O que um sorvete ensina sobre <em>ciência e cultura?</em></h2>
      <p class="page-lead">A visita técnica prevista ao DTA/UFV conecta transformação de alimentos, prática científica e modos de comer.</p>
      <div class="process-wheel" aria-label="Diagrama conceitual do processo de produção de sorvete">
        <span class="process-label">Misturar</span>
        <span class="process-label">Resfriar</span>
        <span class="process-label">Texturizar</span>
        <span class="process-label">Compartilhar</span>
      </div>
      <button class="detail-button" type="button" data-detail="sorvete">Explorar o processo <span aria-hidden="true">↗</span></button>
      <div class="page-bottom"><p class="source-note">Visita orientada e demonstração dependem de programação previamente acordada e confirmação institucional.</p></div>`,
    linear: `<p>Está prevista uma visita técnica ao Departamento de Tecnologia de Alimentos da Universidade Federal de Viçosa, com possível demonstração da produção de sorvetes. A atividade deve relacionar transformação de alimentos, conhecimentos científicos e práticas culturais. Sua realização depende de programação e confirmação institucional.</p>`,
  },
  {
    chapter: 4,
    title: "Viçosa encontra Planaltina",
    body: `
      <span class="state-chip demo">Comparador conceitual</span>
      <h2 class="page-title">Diferentes territórios, <em>perguntas em comum.</em></h2>
      <p class="page-lead">O caderno não traz apenas Viçosa para Planaltina: ele usa a viagem para enxergar o território de origem com novos olhos.</p>
      <div class="comparison">
        <div class="place-card vicosa-card">
          <small>Viçosa · observar</small><h3>Referências visitadas</h3>
          <ul><li>Como o patrimônio é apresentado?</li><li>Que vozes aparecem na narrativa?</li><li>Quais barreiras existem?</li></ul>
        </div>
        <div class="compare-link" aria-hidden="true">↔</div>
        <div class="place-card planaltina-card">
          <small>Planaltina · relacionar</small><h3>Memórias locais</h3>
          <ul><li>Que lugares guardam nossas histórias?</li><li>Quem ajuda a mantê-las vivas?</li><li>Como podemos compartilhá-las?</li></ul>
        </div>
      </div>
      <div class="page-bottom"><p class="source-note">Perguntas demonstrativas baseadas no objetivo de relacionar as vivências às referências culturais de Planaltina.</p></div>`,
    linear: `<p>O projeto pretende relacionar as experiências em Viçosa às referências culturais de Planaltina. As perguntas de comparação incluem: como o patrimônio é apresentado; quais vozes aparecem; quais barreiras existem; quais lugares de Planaltina guardam memórias; e como essas histórias podem ser compartilhadas.</p>`,
  },
  {
    chapter: 5,
    title: "A experiência volta ao campus",
    body: `
      <span class="state-chip factual">Duas ações presenciais</span>
      <h2 class="page-title">Compartilhar para criar <em>novas vozes.</em></h2>
      <p class="page-lead">O retorno transforma registros em mediação cultural aberta à comunidade interna e externa.</p>
      <div class="action-stack">
        <div class="action-card"><span class="action-icon" aria-hidden="true">✦</span><div><h3>Oficina participativa</h3><p>Interpretação de imagens, discussão de memórias e construção coletiva de um painel sobre ciência, cultura e pertencimento.</p></div></div>
        <div class="action-card"><span class="action-icon" aria-hidden="true">▣</span><div><h3>Mostra cultural</h3><p>Fotografias, narrativas e materiais produzidos pela equipe e pelos participantes, com mediação entre Viçosa e Planaltina.</p></div></div>
      </div>
      <div class="paper-card tilt-left">
        <h3>Diversidade nas condições de participação</h3>
        <p>Linguagem clara, descrição de imagens, legendas, legibilidade e articulação com o NAPNE quando pertinente.</p>
      </div>
      <div class="page-bottom"><p class="source-note">As duas ações serão gratuitas e abertas, conforme calendário e capacidade dos espaços.</p></div>`,
    linear: `<p>Após a viagem estão previstas duas ações gratuitas no IFB Campus Planaltina. A oficina participativa propõe interpretação de imagens, discussão de memórias e construção coletiva de um painel. A mostra cultural apresenta fotografias, narrativas e materiais produzidos. As ações devem adotar linguagem clara, descrição de imagens, legendas e articulação com o NAPNE quando pertinente.</p>`,
  },
  {
    chapter: 5,
    title: "Painel coletivo",
    body: `
      <span class="state-chip demo">Interação local do protótipo</span>
      <h2 class="page-title">Que lugar faz você se sentir <em>parte?</em></h2>
      <p class="page-lead">Registre uma lembrança para imaginar como o painel da oficina pode funcionar.</p>
      <div class="sticky-wall" id="memoryWall">
        <div class="sticky-note">Que lugar de Planaltina guarda uma memória importante para você?<small>Pergunta-guia</small></div>
        <div class="sticky-note">Quem aparece — e quem não aparece — nas histórias que contamos?<small>Pergunta-guia</small></div>
        <div id="userMemoryNotes"></div>
      </div>
      <form class="memory-form" id="memoryForm">
        <label for="memoryInput">Minha memória ou lugar</label>
        <textarea id="memoryInput" maxlength="180" placeholder="Escreva uma frase curta…"></textarea>
        <div class="memory-meta">
          <small>Fica somente neste navegador. Não é enviado nem publicado.</small>
          <button class="add-memory-button" type="submit">Adicionar</button>
        </div>
      </form>
      <div class="page-bottom"><p class="source-note">Na versão pública, qualquer coleta exige consentimento, moderação, aviso de privacidade e opção de exclusão.</p></div>`,
    linear: `<p>O painel coletivo convida o público a registrar uma memória, um lugar ou uma experiência que fortaleça o sentimento de pertencimento. A interação deste protótipo fica somente no navegador e não envia nem publica dados. Uma versão pública exigiria consentimento, moderação, política de privacidade e opção de exclusão.</p>`,
  },
  {
    chapter: 6,
    title: "Metas que ajudam a enxergar o alcance",
    body: `
      <span class="state-chip factual">Metas do projeto</span>
      <h2 class="page-title">O impacto começa por <em>escutar.</em></h2>
      <p class="page-lead">Os números organizam o acompanhamento; as avaliações ajudam a compreender a qualidade da experiência.</p>
      <div class="metric-cloud">
        <div class="metric-pill featured"><strong>60+</strong><span>beneficiários presenciais distintos</span></div>
        <div class="metric-pill"><strong>06</strong><span>conteúdos de divulgação</span></div>
        <div class="metric-pill"><strong>04</strong><span>referências patrimoniais, conforme viabilidade</span></div>
        <div class="metric-pill"><strong>02</strong><span>ações presenciais no campus</span></div>
      </div>
      <div class="evaluation-list" aria-label="Dimensões de avaliação previstas">
        <div class="evaluation-item"><span>Clareza das atividades</span><i></i></div>
        <div class="evaluation-item"><span>Acessibilidade</span><i></i></div>
        <div class="evaluation-item"><span>Aprendizagem percebida</span><i></i></div>
        <div class="evaluation-item"><span>Sentimento de pertencimento</span><i></i></div>
      </div>
      <div class="page-bottom"><p class="source-note">Barras ilustrativas, sem resultados reais. O alcance digital será registrado separadamente e não substitui a participação presencial.</p></div>`,
    linear: `<p>As metas incluem pelo menos 60 beneficiários presenciais distintos, seis conteúdos de divulgação, quatro referências patrimoniais conforme viabilidade e duas ações no campus. A avaliação considera clareza, acessibilidade, aprendizagem percebida e sentimento de pertencimento. As barras do protótipo são ilustrativas e não representam resultados. O alcance digital deve ser registrado separadamente.</p>`,
  },
  {
    chapter: 6,
    title: "Um caderno vivo",
    body: `
      <span class="state-chip demo">Estrutura para completar</span>
      <h2 class="page-title">O fim da página não é o <em>fim do percurso.</em></h2>
      <p class="page-lead">Esta interface está pronta para receber registros autorizados, fontes completas, projetos aceitos e vozes da oficina.</p>
      <div class="credits-list">
        <div class="credit-row"><b>Conteúdo-base</b><span>Proposta de projeto PINCEL 2026.</span></div>
        <div class="credit-row"><b>Registros finais</b><span>Inserir fotografias, legendas, descrições e autorizações após as atividades.</span></div>
        <div class="credit-row"><b>Equipe</b><span>Confirmar composição, funções e consentimento antes da publicação.</span></div>
        <div class="credit-row"><b>Parcerias</b><span>Identificar o estado institucional correto antes de usar nomes e marcas.</span></div>
        <div class="credit-row"><b>Referências</b><span>Completar UNESCO (2001), Lei nº 11.892/2008 e IPHAN (2025).</span></div>
      </div>
      <div class="closing-mark" aria-hidden="true">em<br />circulação</div>
      <div class="page-bottom"><p class="source-note">Protótipo de interface: o efeito 3D é uma proposta visual, não um requisito descrito no projeto original.</p></div>`,
    linear: `<p>Esta interface foi preparada para receber registros autorizados, fontes completas, projetos aceitos e contribuições da oficina. Antes da publicação final, é necessário confirmar equipe e funções, autorizações de imagens e depoimentos, estado das parcerias e referências bibliográficas completas. O efeito tridimensional é uma proposta visual para o caderno e não um requisito do projeto original.</p>`,
  },
];

const detailData = {
  pilastras: {
    eyebrow: "Parada prevista · patrimônio",
    title: "Quatro Pilastras",
    icon: "ⅠⅤ",
    content: `<p>Referência prevista no percurso patrimonial. O registro final deve informar se a visita ocorreu, em qual data e sob quais condições de acesso.</p><ul><li>Que memória urbana este marco ajuda a preservar?</li><li>Como ele orienta a chegada à cidade?</li><li>Quem reconhece este lugar como parte de sua história?</li></ul>`,
  },
  matriz: {
    eyebrow: "Parada prevista · leitura cultural",
    title: "Igreja Matriz de Santa Rita de Cássia",
    icon: "⌂",
    content: `<p>A visita proposta tem finalidade histórica e cultural. A mediação deve respeitar a liberdade de crença e não incluir práticas de proselitismo.</p><ul><li>Que narrativas históricas o edifício comunica?</li><li>Como o espaço recebe diferentes públicos?</li><li>Quais recursos apoiam uma visita acessível?</li></ul>`,
  },
  museus: {
    eyebrow: "Parada prevista · universidade",
    title: "Espaços museológicos da UFV",
    icon: "◇",
    content: `<p>Os espaços a visitar dependem de funcionamento, autorização, segurança, acessibilidade e tempo disponível. O nome final de cada espaço deve ser registrado depois da confirmação.</p><ul><li>Como ciência e memória convivem na exposição?</li><li>Mulheres e pessoas negras aparecem nas narrativas?</li><li>As informações são claras para públicos diversos?</li></ul>`,
  },
  arthur: {
    eyebrow: "Parada prevista · memória política",
    title: "Casa Arthur Bernardes",
    icon: "⌁",
    content: `<p>Referência prevista no roteiro, sujeita a confirmação de acesso. O caderno final deve distinguir a contextualização histórica da celebração de personalidades.</p><ul><li>Como a casa transforma uma trajetória individual em memória pública?</li><li>Que outras vozes ajudam a compreender o período?</li><li>Quais limites e ausências podem ser discutidos?</li></ul>`,
  },
  pesquisa: {
    eyebrow: "Projeto discente · em confirmação",
    title: "Agrotecnologia e imagens digitais",
    icon: "⌗",
    content: `<p>A proposta registra um trabalho sobre desenvolvimento de aplicativo para quantificação automatizada, em tempo real, da severidade de doenças foliares por processamento digital de imagens.</p><ul><li>Eixo informado: Agrotecnologia.</li><li>A apresentação depende do aceite da comissão do SIMB.</li><li>O título integral contém uma grafia que precisa ser revisada antes de publicação.</li><li>Os demais projetos ainda não foram informados e não devem ser inventados.</li></ul>`,
  },
  memoria: {
    eyebrow: "Lente de observação",
    title: "Memória",
    icon: "◌",
    content: `<p>Observar memória é perguntar como um lugar seleciona, organiza e comunica o passado.</p><ul><li>Que histórias são preservadas?</li><li>Que objetos, imagens ou narrativas sustentam essas histórias?</li><li>Como elas se relacionam com as memórias dos visitantes?</li></ul>`,
  },
  representacao: {
    eyebrow: "Lente de observação",
    title: "Identidades e representação",
    icon: "◐",
    content: `<p>Esta lente chama atenção para quem tem presença, autoria e reconhecimento nas narrativas.</p><ul><li>Mulheres e pessoas negras aparecem como sujeitos da história?</li><li>Quais grupos parecem ausentes?</li><li>Como apresentar diversidade sem estereótipos?</li></ul>`,
  },
  acesso: {
    eyebrow: "Lente de observação",
    title: "Acesso e participação",
    icon: "↝",
    content: `<p>Acessibilidade envolve a entrada, a circulação, a compreensão do conteúdo e as condições de participação.</p><ul><li>Há barreiras físicas, comunicacionais ou atitudinais?</li><li>Quais apoios estão disponíveis?</li><li>O material oferece alternativas equivalentes?</li></ul>`,
  },
  comunicacao: {
    eyebrow: "Lente de observação",
    title: "Comunicação",
    icon: "✦",
    content: `<p>Comunicar não é apenas expor informação: é criar caminhos para que diferentes públicos construam sentido.</p><ul><li>A linguagem é clara?</li><li>Imagens possuem descrição e fonte?</li><li>Vídeos têm legenda e transcrição?</li></ul>`,
  },
  sorvete: {
    eyebrow: "Visita técnica prevista · DTA/UFV",
    title: "Tecnologia de alimentos e cultura",
    icon: "❉",
    content: `<p>A demonstração prevista de produção de sorvetes permite relacionar operações tecnológicas, transformações físico-químicas e práticas culturais ligadas à alimentação.</p><ul><li><b>Misturar:</b> ingredientes, formulação e escolhas culturais.</li><li><b>Resfriar:</b> temperatura, mudança de estado e segurança.</li><li><b>Texturizar:</b> estrutura, incorporação de ar e experiência sensorial.</li><li><b>Compartilhar:</b> alimentação como prática social.</li></ul><p>O conteúdo final só deve relatar a atividade se ela for confirmada e realizada.</p>`,
  },
};

const state = {
  opened: false,
  currentSpread: 0,
  mobileSide: 0,
  turning: false,
  visited: new Set(),
};

const elements = {
  body: document.body,
  homeLink: document.querySelector("#homeLink"),
  chapterList: document.querySelector("#chapterList"),
  railProgress: document.querySelector("#railProgress"),
  coverScene: document.querySelector("#coverScene"),
  openBookButton: document.querySelector("#openBookButton"),
  book: document.querySelector("#bookContent"),
  leftPage: document.querySelector("#leftPage"),
  rightPage: document.querySelector("#rightPage"),
  flipLeaf: document.querySelector("#flipLeaf"),
  controls: document.querySelector("#bookControls"),
  prev: document.querySelector("#prevButton"),
  next: document.querySelector("#nextButton"),
  pageProgress: document.querySelector("#pageProgress"),
  pageCounter: document.querySelector("#pageCounter"),
  pageTotal: document.querySelector("#pageTotal"),
  stageTitle: document.querySelector("#stageTitle"),
  chapterEyebrow: document.querySelector("#chapterEyebrow"),
  contextTitle: document.querySelector("#contextTitle"),
  contextText: document.querySelector("#contextText"),
  indexButton: document.querySelector("#indexButton"),
  indexDialog: document.querySelector("#indexDialog"),
  indexGrid: document.querySelector("#indexGrid"),
  detailDialog: document.querySelector("#detailDialog"),
  detailEyebrow: document.querySelector("#detailEyebrow"),
  detailTitle: document.querySelector("#detailTitle"),
  detailContent: document.querySelector("#detailContent"),
  linearButton: document.querySelector("#linearButton"),
  linearDialog: document.querySelector("#linearDialog"),
  linearContent: document.querySelector("#linearContent"),
  motionButton: document.querySelector("#motionButton"),
  contrastButton: document.querySelector("#contrastButton"),
  fontButton: document.querySelector("#fontButton"),
  liveRegion: document.querySelector("#liveRegion"),
  toast: document.querySelector("#toast"),
};

const mobileQuery = window.matchMedia("(max-width: 760px)");
const reducedMotionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");

function pageMarkup(page, index) {
  return `<div class="page-inner" data-page="${index + 1}">
    <div class="page-number">Página ${String(index + 1).padStart(2, "0")} · ${chapters[page.chapter].name}</div>
    ${page.body}
  </div>`;
}

function buildNavigation() {
  const coverItem = `<li><button class="chapter-link active" type="button" data-go-cover aria-current="page">
    <span class="chapter-num">00</span><span class="chapter-name">Capa</span>
  </button></li>`;
  const chapterItems = chapters.map((chapter, index) => `<li><button class="chapter-link" type="button" data-go-spread="${chapter.spread}">
    <span class="chapter-num">${String(index + 1).padStart(2, "0")}</span><span class="chapter-name">${chapter.name}</span>
  </button></li>`).join("");
  elements.chapterList.innerHTML = coverItem + chapterItems;

  elements.indexGrid.innerHTML = chapters.map((chapter, index) => `<button class="index-card" type="button" data-go-spread="${chapter.spread}">
    <span class="index-card-number">${String(index + 1).padStart(2, "0")}</span>
    <span><b>${chapter.name}</b><small>${chapter.context}</small></span>
    <span aria-hidden="true">→</span>
  </button>`).join("");

  elements.linearContent.innerHTML = pages.map((page, index) => `<section class="linear-section" aria-labelledby="linear-page-${index + 1}">
    <p>Página ${String(index + 1).padStart(2, "0")} · ${chapters[page.chapter].name}</p>
    <h3 id="linear-page-${index + 1}">${page.title}</h3>
    ${page.linear}
  </section>`).join("");
}

function renderSpread(index, options = {}) {
  state.currentSpread = Math.max(0, Math.min(index, chapters.length - 1));
  state.visited.add(state.currentSpread);
  const leftIndex = state.currentSpread * 2;
  const rightIndex = leftIndex + 1;
  elements.leftPage.innerHTML = pageMarkup(pages[leftIndex], leftIndex);
  elements.rightPage.innerHTML = pageMarkup(pages[rightIndex], rightIndex);
  updateMobileVisibility();
  updateChrome();
  hydrateMemoryWall();

  if (options.focus) {
    const target = mobileQuery.matches && state.mobileSide === 1 ? elements.rightPage : elements.leftPage;
    target.focus({ preventScroll: true });
  }
}

function updateMobileVisibility() {
  const mobile = mobileQuery.matches;
  elements.leftPage.classList.toggle("mobile-hidden", mobile && state.mobileSide === 1);
  elements.rightPage.classList.toggle("mobile-hidden", mobile && state.mobileSide === 0);
}

function updateChrome() {
  const chapter = chapters[state.currentSpread];
  elements.stageTitle.textContent = chapter.label;
  elements.chapterEyebrow.textContent = `Capítulo ${state.currentSpread + 1} de ${chapters.length}`;
  elements.contextTitle.textContent = chapter.name;
  elements.contextText.textContent = chapter.context;

  const currentPage = state.currentSpread * 2 + state.mobileSide + 1;
  const leftPage = state.currentSpread * 2 + 1;
  const rightPage = leftPage + 1;
  const progress = mobileQuery.matches
    ? (currentPage / pages.length) * 100
    : (rightPage / pages.length) * 100;

  elements.pageCounter.textContent = mobileQuery.matches
    ? String(currentPage).padStart(2, "0")
    : `${String(leftPage).padStart(2, "0")}–${String(rightPage).padStart(2, "0")}`;
  elements.pageTotal.textContent = `de ${pages.length} páginas`;
  elements.pageProgress.style.width = `${progress}%`;
  elements.railProgress.style.height = `${((state.currentSpread + 1) / chapters.length) * 100}%`;

  const atStart = state.currentSpread === 0 && (!mobileQuery.matches || state.mobileSide === 0);
  const atEnd = state.currentSpread === chapters.length - 1 && (!mobileQuery.matches || state.mobileSide === 1);
  elements.prev.disabled = atStart || state.turning;
  elements.next.disabled = atEnd || state.turning;

  document.querySelectorAll(".chapter-link").forEach((button, index) => {
    const isCover = index === 0;
    const spread = index - 1;
    button.classList.toggle("active", state.opened ? spread === state.currentSpread : isCover);
    button.classList.toggle("done", state.opened && !isCover && state.visited.has(spread) && spread !== state.currentSpread);
    if (state.opened ? spread === state.currentSpread : isCover) {
      button.setAttribute("aria-current", "page");
    } else {
      button.removeAttribute("aria-current");
    }
  });
}

function openBook(targetSpread = 0) {
  if (state.opened) {
    goToSpread(targetSpread);
    return;
  }
  state.opened = true;
  state.currentSpread = targetSpread;
  state.mobileSide = 0;
  elements.coverScene.classList.add("leaving");

  const delay = reducedMotionQuery.matches ? 0 : 330;
  window.setTimeout(() => {
    elements.coverScene.hidden = true;
    elements.book.hidden = false;
    elements.controls.hidden = false;
    renderSpread(targetSpread);
    elements.liveRegion.textContent = `Caderno aberto. Capítulo ${targetSpread + 1}: ${chapters[targetSpread].name}.`;
  }, delay);
}

function showCover() {
  if (state.turning) return;
  state.opened = false;
  elements.book.hidden = true;
  elements.controls.hidden = true;
  elements.coverScene.hidden = false;
  elements.coverScene.classList.remove("leaving");
  elements.stageTitle.textContent = "Abra para começar o percurso";
  elements.chapterEyebrow.textContent = "Caderno de campo digital";
  elements.contextTitle.textContent = "Comece pela capa";
  elements.contextText.textContent = "Este caderno transforma o percurso do projeto em uma experiência que pode ser folheada.";
  elements.railProgress.style.height = "0%";
  document.querySelectorAll(".chapter-link").forEach((button, index) => {
    button.classList.toggle("active", index === 0);
    button.classList.remove("done");
    if (index === 0) button.setAttribute("aria-current", "page");
    else button.removeAttribute("aria-current");
  });
  elements.openBookButton.focus({ preventScroll: true });
}

function goToSpread(target, direction) {
  const bounded = Math.max(0, Math.min(Number(target), chapters.length - 1));
  if (!state.opened) {
    openBook(bounded);
    return;
  }
  if (bounded === state.currentSpread || state.turning) return;

  const forward = direction ? direction === "next" : bounded > state.currentSpread;
  if (elements.body.classList.contains("flat-mode") || reducedMotionQuery.matches || mobileQuery.matches) {
    state.mobileSide = forward ? 0 : mobileQuery.matches ? 1 : 0;
    renderSpread(bounded, { focus: true });
    announcePage();
    return;
  }

  state.turning = true;
  updateChrome();
  const currentLeft = state.currentSpread * 2;
  const currentRight = currentLeft + 1;
  const targetLeft = bounded * 2;
  const targetRight = targetLeft + 1;
  const front = elements.flipLeaf.querySelector(".flip-front");
  const back = elements.flipLeaf.querySelector(".flip-back");

  elements.flipLeaf.classList.remove("turn-next", "turn-prev");
  if (forward) {
    front.innerHTML = pageMarkup(pages[currentRight], currentRight);
    back.innerHTML = pageMarkup(pages[targetLeft], targetLeft);
    elements.rightPage.innerHTML = pageMarkup(pages[targetRight], targetRight);
    elements.flipLeaf.classList.add("turn-next");
  } else {
    front.innerHTML = pageMarkup(pages[currentLeft], currentLeft);
    back.innerHTML = pageMarkup(pages[targetRight], targetRight);
    elements.leftPage.innerHTML = pageMarkup(pages[targetLeft], targetLeft);
    elements.flipLeaf.classList.add("turn-prev");
  }

  window.setTimeout(() => {
    elements.flipLeaf.classList.remove("turn-next", "turn-prev");
    state.turning = false;
    state.mobileSide = 0;
    renderSpread(bounded, { focus: true });
    announcePage();
  }, 790);
}

function goNext() {
  if (!state.opened || state.turning) return;
  if (mobileQuery.matches && state.mobileSide === 0) {
    state.mobileSide = 1;
    updateMobileVisibility();
    updateChrome();
    elements.rightPage.focus({ preventScroll: true });
    announcePage();
    return;
  }
  if (state.currentSpread < chapters.length - 1) goToSpread(state.currentSpread + 1, "next");
}

function goPrev() {
  if (!state.opened || state.turning) return;
  if (mobileQuery.matches && state.mobileSide === 1) {
    state.mobileSide = 0;
    updateMobileVisibility();
    updateChrome();
    elements.leftPage.focus({ preventScroll: true });
    announcePage();
    return;
  }
  if (state.currentSpread > 0) goToSpread(state.currentSpread - 1, "prev");
}

function announcePage() {
  const pageNo = state.currentSpread * 2 + (mobileQuery.matches ? state.mobileSide : 0) + 1;
  const spreadLabel = mobileQuery.matches ? `Página ${pageNo}` : `Páginas ${state.currentSpread * 2 + 1} e ${state.currentSpread * 2 + 2}`;
  elements.liveRegion.textContent = `${spreadLabel}. Capítulo ${state.currentSpread + 1} de ${chapters.length}: ${chapters[state.currentSpread].name}.`;
}

function openDetail(key) {
  const detail = detailData[key];
  if (!detail) return;
  elements.detailEyebrow.textContent = detail.eyebrow;
  elements.detailTitle.textContent = detail.title;
  elements.detailContent.innerHTML = `<div class="detail-body">
    <div class="detail-visual" aria-hidden="true">${detail.icon}</div>
    <div class="detail-copy"><h3>Olhar de perto</h3>${detail.content}</div>
  </div>`;
  elements.detailDialog.showModal();
}

function closeDialog(dialog) {
  if (dialog?.open) dialog.close();
}

function getSavedMemories() {
  try {
    const parsed = JSON.parse(localStorage.getItem("cmd-caderno-memorias") || "[]");
    return Array.isArray(parsed) ? parsed.slice(-4) : [];
  } catch {
    return [];
  }
}

function safeGetPreference(key, fallback = null) {
  try {
    return localStorage.getItem(key) ?? fallback;
  } catch {
    return fallback;
  }
}

function safeSetPreference(key, value) {
  try {
    localStorage.setItem(key, value);
  } catch {
    // A preferência continua válida durante a sessão, mesmo se o navegador bloquear armazenamento local.
  }
}

function hydrateMemoryWall() {
  const container = document.querySelector("#userMemoryNotes");
  if (!container) return;
  const memories = getSavedMemories();
  container.replaceWith(...memories.map((memory) => {
    const note = document.createElement("div");
    note.className = "sticky-note";
    note.textContent = memory;
    const label = document.createElement("small");
    label.textContent = "Salvo neste navegador";
    note.append(label);
    return note;
  }), createMemoryAnchor());
}

function createMemoryAnchor() {
  const anchor = document.createElement("div");
  anchor.id = "userMemoryNotes";
  anchor.hidden = true;
  return anchor;
}

function saveMemory(text) {
  const clean = text.trim().replace(/\s+/g, " ").slice(0, 180);
  if (!clean) {
    showToast("Escreva uma frase curta antes de adicionar.");
    return;
  }
  const memories = [...getSavedMemories(), clean].slice(-4);
  try {
    localStorage.setItem("cmd-caderno-memorias", JSON.stringify(memories));
    showToast("Memória adicionada somente neste navegador.");
  } catch {
    showToast("Não foi possível salvar localmente neste navegador.");
  }
  renderSpread(state.currentSpread);
}

let toastTimer;
function showToast(message) {
  elements.toast.textContent = message;
  elements.toast.classList.add("show");
  window.clearTimeout(toastTimer);
  toastTimer = window.setTimeout(() => elements.toast.classList.remove("show"), 2800);
}

function applyStoredPreferences() {
  const flat = safeGetPreference("cmd-flat") === "true";
  const contrast = safeGetPreference("cmd-contrast") === "true";
  const scale = Number(safeGetPreference("cmd-font-scale", "1"));
  elements.body.classList.toggle("flat-mode", flat);
  elements.body.classList.toggle("high-contrast", contrast);
  elements.motionButton.setAttribute("aria-pressed", String(flat));
  elements.contrastButton.setAttribute("aria-pressed", String(contrast));
  document.documentElement.style.setProperty("--ui-scale", [1, 1.1, 1.2].includes(scale) ? String(scale) : "1");
  elements.fontButton.dataset.scale = String([1, 1.1, 1.2].includes(scale) ? scale : 1);
}

elements.openBookButton.addEventListener("click", () => openBook(0));
elements.homeLink.addEventListener("click", (event) => { event.preventDefault(); showCover(); });
elements.prev.addEventListener("click", goPrev);
elements.next.addEventListener("click", goNext);

elements.indexButton.addEventListener("click", () => elements.indexDialog.showModal());
elements.linearButton.addEventListener("click", () => elements.linearDialog.showModal());

document.addEventListener("click", (event) => {
  const spreadButton = event.target.closest("[data-go-spread]");
  const coverButton = event.target.closest("[data-go-cover]");
  const detailButton = event.target.closest("[data-detail]");
  const closeButton = event.target.closest("[data-close-dialog]");
  const linearOption = event.target.closest("[data-open-linear]");
  const flatOption = event.target.closest("[data-toggle-flat]");
  const contrastOption = event.target.closest("[data-toggle-contrast]");

  if (spreadButton) {
    const target = Number(spreadButton.dataset.goSpread);
    const dialog = spreadButton.closest("dialog");
    if (dialog) closeDialog(dialog);
    openBook(target);
  }
  if (coverButton) showCover();
  if (detailButton) openDetail(detailButton.dataset.detail);
  if (closeButton) closeDialog(closeButton.closest("dialog"));
  if (linearOption) {
    closeDialog(elements.indexDialog);
    elements.linearDialog.showModal();
  }
  if (flatOption) elements.motionButton.click();
  if (contrastOption) elements.contrastButton.click();
});

document.addEventListener("submit", (event) => {
  if (event.target.id !== "memoryForm") return;
  event.preventDefault();
  saveMemory(document.querySelector("#memoryInput")?.value || "");
});

document.addEventListener("keydown", (event) => {
  if (["INPUT", "TEXTAREA"].includes(document.activeElement?.tagName)) return;
  if (document.querySelector("dialog[open]")) return;
  if (event.key === "ArrowRight" || event.key === "PageDown") {
    event.preventDefault();
    goNext();
  }
  if (event.key === "ArrowLeft" || event.key === "PageUp") {
    event.preventDefault();
    goPrev();
  }
  if (event.key === "Home" && state.opened) {
    event.preventDefault();
    goToSpread(0, "prev");
  }
  if (event.key === "End" && state.opened) {
    event.preventDefault();
    goToSpread(chapters.length - 1, "next");
  }
});

document.querySelectorAll("dialog").forEach((dialog) => {
  dialog.addEventListener("click", (event) => {
    const rect = dialog.getBoundingClientRect();
    const outside = event.clientX < rect.left || event.clientX > rect.right || event.clientY < rect.top || event.clientY > rect.bottom;
    if (outside) dialog.close();
  });
});

elements.motionButton.addEventListener("click", () => {
  const enabled = !elements.body.classList.contains("flat-mode");
  elements.body.classList.toggle("flat-mode", enabled);
  elements.motionButton.setAttribute("aria-pressed", String(enabled));
  safeSetPreference("cmd-flat", String(enabled));
  showToast(enabled ? "Modo 2D ativado." : "Profundidade 3D ativada.");
});

elements.contrastButton.addEventListener("click", () => {
  const enabled = !elements.body.classList.contains("high-contrast");
  elements.body.classList.toggle("high-contrast", enabled);
  elements.contrastButton.setAttribute("aria-pressed", String(enabled));
  safeSetPreference("cmd-contrast", String(enabled));
  showToast(enabled ? "Alto contraste ativado." : "Contraste padrão ativado.");
});

elements.fontButton.addEventListener("click", () => {
  const current = Number(elements.fontButton.dataset.scale || "1");
  const next = current === 1 ? 1.1 : current === 1.1 ? 1.2 : 1;
  document.documentElement.style.setProperty("--ui-scale", String(next));
  elements.fontButton.dataset.scale = String(next);
  safeSetPreference("cmd-font-scale", String(next));
  elements.fontButton.setAttribute("aria-label", next === 1 ? "Aumentar tamanho do texto" : `Tamanho do texto ${Math.round(next * 100)} por cento`);
  showToast(`Texto em ${Math.round(next * 100)}%.`);
});

mobileQuery.addEventListener("change", () => {
  state.mobileSide = 0;
  updateMobileVisibility();
  if (state.opened) updateChrome();
});

buildNavigation();
applyStoredPreferences();

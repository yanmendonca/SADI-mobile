export type Category = {
    matter: string;
    questions: QuestionItem[]
  };
  
  export type QuestionItem = {
    description: string;
    options: string[];
    answer: number;
    img: NodeRequire;
  };
  
  export type Data = Category[];
  
  const dataq: Data = [
    {
        matter: 'Química Orgânica',
        questions: [
            {
                description: '(Enem 2018) As abelhas utilizam a sinalização química para distinguir a abelha-rainha de uma operária, sendo capazes de reconhecer diferenças entre moléculas. A rainha produz o sinalizador químico conhecido como ácido 9-hidroxidec-2-enoico, enquanto as abelhas-operárias produzem ácido 10-hidroxidec-2-enoico. Nós podemos distinguir as abelhas-operárias e rainhas por sua aparência, mas, entre si, elas usam essa sinalização química para perceber a diferença. Pode-se dizer que veem por meio da química.\n\n LE COUTEUR, P.; BURRESON, J. Os botões de Napoleão: as 17 moléculas que mudaram a história. Rio de Janeiro: Jorge Zahar, 2006 (adaptado). \n\nAs moléculas dos sinalizadores químicos produzidas pelas abelhas rainha e operária possuem diferença na',
                options: [
                    'fórmula estrutural', 
                    'fórmula molecular',
                    'identificação dos tipos de ligação',
                    'contagem do número de carbonos',
                    'identificação dos grupos funcionais'
                ],
                answer: 0,
                img: ''
            },
            {
                description: '(Enem 2018) O petróleo é uma fonte de energia de baixo custo e de larga utilização como matéria-prima para uma grande variedade de produtos. É um óleo formado de várias substâncias de origem orgânica, em sua maioria hidrocarbonetos de diferentes massas molares. São utilizadas técnicas de separação para obtenção dos componentes comercializáveis do petróleo. Além disso, para aumentar a quantidade de frações comercializáveis, otimizando o produto de origem fóssil, utiliza-se o processo de craqueamento.\n\nO que ocorre nesse processo?',
                options: [
                    'Transformação das frações do petróleo em outras moléculas menores', 
                    'Reação de óxido-redução com transferência de elétrons entre as moléculas',
                    'Solubilização das frações do petróleo com a utilização de diferentes solventes',
                    'Decantação das moléculas com diferentes massas molares pelo uso de centrífugas',
                    'Separação dos diferentes componentes do petróleo em função de suas temperaturas de ebulição'
                ],
                answer: 0,
                img: ''
            },
        ]
    },
    {
        matter: 'Eletroquímica',
        questions: [
            {
                description: '(Enem 2019) Grupos de pesquisa em todo o mundo vêm buscando soluções inovadoras, visando à produção de dispositivos para a geração de energia elétrica. Dentre eles, pode-se destacar as baterias de zinco-ar, que combinam o oxigênio atmosférico e o metal zinco em um eletrólito aquoso de caráter alcalino. O esquema de funcionamento da bateria zinco-ar está apresentado na figura.',
                options: [
                    'H2 (g)', 
                    'O2 (g)',
                    'H2O (l)',
                    'OH− (aq)',
                    'Zn(OH)4 2− (aq)'
                ],
                answer: 4,
                img: require('@/assets/images/learn/1.jpg')
            },
            {
                description: '(Enem 2013) Se dermos uma mordida em um pedaço de papel-alumínio colocado em cima de uma obturação de amálgama (combinação do mercúrio metálico com metais e/ou ligas metálicas), sentiremos uma dor causada por uma corrente que pode chegar até 30 μA.\n\nO contato dos materiais metálicos citados produz',
                options: [
                    'uma pilha, cujo fluxo de elétrons é espontâneo', 
                    'uma eletrólise, cujo fluxo de elétrons não é espontâneo',
                    'uma solução eletrolítica, cujo fluxo de elétrons é espontâneo',
                    'um sistema galvânico, cujo fluxo de elétrons não é espontâneo',
                    'um sistema eletrolítico, cujo fluxo de elétrons não é espontâneo'
                ],
                answer: 0,
                img: ''
            },
        ]
    },
    {
        matter: 'Química Inorgânica',
        questions: [
            {
                description: '(Enem 2021) No cultivo por hidroponia, são utilizadas soluções nutritivas contendo micronutrientes e micronutrientes essenciais. Além dos nutrientes, o pH é um parâmetro de extrema importância, uma vez que ele afeta a preparação da solução nutritiva e a absorção dos nutrientes pelas plantas. Para o cultivo de alface, os valores de pH entre 5,5 e 6,5 são ideais para o seu desenvolvimento. As correções de pH são feitas pela adição de compostos ácidos ou básicos, mas não devem introduzir elementos nocivos às plantas. Na tabela, são apresentados alguns dados da composição da solução nutritiva de referência para esse cultivo. Também é apresentada a composição de uma solução preparada por um produtor de cultivo hidropônico.\n\nPara correção do pH da solução nutritiva preparada, esse produtor pode empregar uma solução de',
                options: [
                    'ácido fosfórico, H3PO4', 
                    'sulfato de cálcio, CaSO4',
                    'óxido de alumínio, Al2O3',
                    'cloreto de ferro (II), FeCl2',
                    'hidróxido de potássio, KOH'
                ],
                answer: 4,
                img: require('@/assets/images/learn/2.jpg')
            },
            {
                description: '(Enem 2019) Estudos mostram o desenvolvimento de biochips utilizados para auxiliar o diagnóstico de diabetes melito, doença evidenciada pelo excesso de glicose no organismos. O teste é simples e consiste em duas reações sequenciais na superfície do biochip, entre a amostra de soro sanguíneo do paciente, enzimas específicas e reagente (iodeto de potássio, KI ), conforme mostrado na imagem.\n\nApós a Adição de soro sanguíneo, o fluxo desloca-se espontaneamente da esquerda para a direita (ii) provendo reações sequenciais, conforme as equações 1 e 2. Na primeira, há conversão de glicose do sangue em ácido glucônico, gerando peróxido de hidrogênio\n\nEQUAÇÃO 1\nC6H12O6(aq)+O2(g)+H2O(I)→EnzimasC6H12O7(aq)+H2O2(aq)C6H12O6(aq)+O2(g)+H2O(I)→EnzimasC6H12O7(aq)+H2O2(aq)\n\nNa segunda, o peróxido de hidrogênio reage com íons iodeto gerando íon tri-iodeto, água e oxigênio.\n\nEQUAÇÃO 2\n2H2O2(aq)+3I−(aq)→I3(aq)+H2O(I)+O2(g)2H2O2(aq)+3I−(aq)→I3(aq)+H2O(I)+O2(g)\n\nO tipo de reação que ocorre na superfície do biochip, nas duas reações do processo, é',
                options: [
                    'análise', 
                    'síntese',
                    'oxirredução',
                    'complexação',
                    'ácido-base'
                ],
                answer: 2,
                img: require('@/assets/images/learn/3.jpg')
            },
            {
                description: '(Enem 2018) Companhias que fabricam jeans usam cloro para o clareamento, seguido de lavagem. Algumas estão substituindo o cloro por substâncias ambientalmente mais seguras como peróxidos, que podem ser degradados por enzimas chamadas peroxidasses. Pensando nisso, pesquisadores inseriram genes codificadores de peroxidasses em leveduras cultivadas nas condições de clareamento e lavagem dos jeans e selecionaram as sobreviventes para produção dessas enzimas.\n\nTORTORA, G. J.; FUNKE, B.R.; CASE, C.L. Microbiologia. Rio de Janeiro: Artmed, 2016 (adaptado).\n\nNesse caso, o uso dessas leveduras modificadas objetiva.',
                options: [
                    'reduzir a quantidade de resíduos tóxicos efluentes da lavagem.', 
                    'eliminar a necessidade de tratamento da água consumida.',
                    'elevar a capacidade de clareamento dos jeans.',
                    'aumentar a resistência do jeans a peróxidos.  ',
                    'associar ação bactericida ao clareamento'
                ],
                answer: 0,
                img: ''
            },

        ]
    },
    
  ];
  
  export default dataq;
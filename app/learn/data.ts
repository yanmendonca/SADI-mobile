import {ImageSourcePropType} from 'react-native'

export type Category = {
    matter: string;
    questions: QuestionItem[]
  };
  
  export type QuestionItem = {
    description: string;
    options: string[];
    answer: number;
    img: ImageSourcePropType;
  };
  
  export type Data = Category[];
  
  const dataq: Data = [
    {//Química Orgânica
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
                img: undefined
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
                img: undefined
            },
        ]
    },
    {//Eletroquímica
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
                img: undefined
            },
        ]
    },
    {//Química Inorgânica
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
                img: undefined
            },

        ]
    },
    {//Termoquímica
        matter: 'Termoquímica',
        questions: [
            {
                description: '(Enem 2016) O benzeno, um importante solvente para a indústria química, é obtido industrialmente pela destilação do petróleo. Contudo, também pode ser sintetizado pela trimerização do acetileno catalisada por ferro metálico sob altas temperaturas, conforme a equação química:\n\n3 C2H2 → C6H6(l)\n\nA energia envolvida nesse processo pode ser calculada indiretamente pela variação de entalpia das reações de combustão das substâncias participantes, nas mesmas condições experimentais:\n\nI. C2H2(g) + 5/2O2(g) → 2CO2(g) + H2O(l) ∆Hco = –310 kcal/mol\nII. C6H6(l) + 15/2O2(g) à 6CO2(g) + 3H2O(l) ∆Hco = –780 kcal/mol\n\nA variação de entalpia do processo de trimerização, e kcal para a formação de um mol de benzeno é mais próxima de,',
                options: [
                    '1.050', 
                    '-150',
                    '-50',
                    '+157',
                    '+470'
                ],
                answer: 1,
                img: undefined
            },
            {
                description: '(Enem PPL 2014) A escolha de uma determinada substância para ser utilizada como  combustível passa pela análise da poluição que ela causa ao ambiente e pela quantidade de energia liberada em sua combustão completa. O quadro apresenta a entalpia de combustão de algumas substâncias. As massas molares dos elementos H, C e O são, respectivamente, iguais a 1 g/mol, 12 g/mol e 16 g/mol.\nLevando-se em conta somente o aspecto energético, a substância mais eficiente para a obtenção de energia, na combustão de 1 kg de combustível, é o',
                options: [
                    'Etano', 
                    'Etanol',
                    'Metanol',
                    'Acetileno',
                    'Hidrogênio'
                ],
                answer: 4,
                img: require('@/assets/images/learn/4.jpg')
            },
            {
                description: '(Enem 2019) A Glicólise é um processo que ocorre nas células, convertendo glicose em piruvato. Durante a prática de exercícios físicos que demandam grande quantidade de esforço, a glicose é completamente oxidada na presença de O2. Entretanto, em alguns casos, as células musculares podem sofrer um déficit de O2 e a glicose ser convertida em duas moléculas de ácido lático. As equações termoquímicas para a combustão da glicose e do ácido lático são, respectivamente, mostradas a seguir:\n\nC6H12O6 (s) + 6 O2 (g) → 6 CO2 (g) + 6 H2O (l) ∆cH = −2 800 kJ\nCH3CH(OH)COOH (s) + 3 O2 (g) → 3 CO2 (g) + 3 H2O (l) ∆cH = −1 344 kJ\n\nO processo anaeróbico é menos vantajoso energeticamente porque',
                options: [
                    'libera 112 kJ por mol de glicose', 
                    'libera 467 kJ por mol de glicose',
                    'libera 2.688 kJ por mol de glicose',
                    'absorve 1.344 kJ por mol de glicose.',
                    'absorve 2.800 kJ por mol de glicose.'
                ],
                answer: 0,
                img: undefined
            },
            {
                description: '(Enem 2018 PPL) Bebidas podem ser refrigeradas de modo mais rápido utilizando-se caixas de isopor contendo gelo e um pouco de sal grosso comercial. Nesse processo ocorre o derretimento do gelo com consequente formação de líquido e resfriamento das bebidas. Uma interpretação equivocada, baseada no senso comum, relaciona esse efeito à grande capacidade do sal grosso de remover calor do gelo.\nDo ponto de vista científico, o resfriamento rápido ocorre em razão da',
                options: [
                    'variação da solubilidade do sal.', 
                    'alteração da polaridade da água.',
                    'elevação da densidade do líquido.',
                    'modificação da viscosidade do líquido.',
                    'diminuição da temperatura de fusão do líquido.'
                ],
                answer: 4,
                img: undefined
            },
        ]
    },
    {//Estequiometria
        matter: 'Estequiometria',
        questions: [
            {
                description: '(Enem PPL 2017) Os combustíveis de origem fóssil, como o petróleo e o gás natural, geram um sério problema ambiental, devido à liberação de dióxido de carbono durante o processo de combustão. O quadro apresenta as massas molares e as reações de combustão não balanceadas de diferentes combustíveis.',
                options: [
                    'Etano', 
                    'Butano',
                    'Metano',
                    'Propano',
                    'Acetileno'
                ],
                answer: 4,
                img: require('@/assets/images/learn/5.webp')
            },
            {
                description: '(Enem PPL 2017) No Brasil, os postos de combustíveis comercializavam uma gasolina com cerca de 22% de álcool anidro. Na queima de 1 litro desse combustível são liberados cerca de 2 kg de CO2 na atmosfera. O plantio de árvores pode atenuar os efeitos dessa emissão de CO2. A quantidade de carbono fixada por uma árvore corresponde a aproximadamente 50% de sua biomassa seca, e para cada 12g de carbono fixados, 44g de CO2 são retirados da atmosfera. No Brasil, o plantio de eucalipto (Eucalyptus grandis) é bem difundido, sendo que após 11 anos essa árvore pode ter a massa de 106 KG, dos quais 29 kg são água.\nUma única árvore de Eucalyptus grandis, com as características descritas, é capaz de fixar a quantidade de Co2 liberada na queima de um volume dessa gasolina mais próximo de',
                options: [
                    '19 L', 
                    '39 L',
                    '71 L',
                    '97 L',
                    '141 L'
                ],
                answer: 2,
                img: undefined
            },
            {
                description: '(Enem 2016) Para cada litro de etanol produzido em uma indústria de cana-de-açúcar são gerados cerca de 18 L de vinhaça que é utilizada na irrigação das plantações de cana-de-açúcar, já que contém teores médios de nutrientes N, P e K iguais a 357 mg/L, 60mg/L e 2 034 mg/L, respectivamente.\nNa produção de 27 000 L de etanol, a quantidade total de fósforo, em kg, disponível na vinhaça será mais próxima de',
                options: [
                    '1', 
                    '29',
                    '60',
                    '170',
                    '1.000'
                ],
                answer: 1,
                img: undefined
            },
            {
                description: '(Enem 2015) A hidroponia pode ser definida como uma técnica de produção de vegetais sem necessariamente a presença de solo. Uma das formas de implementação é manter as plantas com suas raízes suspensas em meio líquido, de onde retiram os nutrientes essenciais. Suponha que um produtor de rúcula hidropônica precise ajustar a concentração do íon nitrato (NO-3) para 0,009 mol/L em um tanque de 5 000 litros e, para tanto, tem em mãos uma solução comercial nutritiva de nitrato de cálcio 90 g/L. As massas molares dos elementos N, O e Ca são iguais a 14 g/mol, 16 g/mol e 40 g/mol, respectivamente.\nQual o valor mais próximo do volume da solução nutritiva, em litros, que o produtor deve adicionar ao tanque?',
                options: [
                    '26', 
                    '41',
                    '45',
                    '51',
                    '82'
                ],
                answer: 1,
                img: undefined
            },
        ]
    },
    
  ];
  
  export default dataq;

//   {
//     description: '',
//     options: [
//         '', 
//         '',
//         '',
//         '',
//         ''
//     ],
//     answer: 4,
//     img: ''
// },
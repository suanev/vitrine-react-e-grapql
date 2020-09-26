const products = [
    {
        name: "Top Listrado Rosa Zíper",
        img: "https://i.imgur.com/cP5G0s2.jpg",
        price: 109.99,
        description: `O nosso top zíper já é campeão de vendas, e agora ele chegou em novas estampas maravilhosas! 
                      Confeccionado em tecido de algodão com elastano, ele é confortável e se adapta ao seu corpo.
                      Com a frete dupla, ele te dá segurança e pode ser usado sem sutiã, a alça é com regulador 
                      para você deixar no tamanho ideal, as costas tem elásticos para se adaptar perfeitamente ao 
                      seu corpo. Escolha sua estampa e arrase com seu top zíper! Composição: 97% algodão - 3% elastano`,
        category: "1"
    },
    {
        name: "Blazer Amy Listrado Rosa",
        img: "https://i.imgur.com/HqORBAf.jpg",
        price: 169.99,
        description: `Blazer acinturado em tecido plano, sem forro, com bolsos frontais, pequena abertura nas costas. 
                      Nosso blazer é a peça que falta no seu look, além de ter a modelagem incrível, ele faz toda a 
                      diferença na produção, garanta o seu! Confeccionado em tecido de algodão com elastano, ele tem 
                      um caimento perfeito, além de ser super confortável, agora temos estampado também. Ele deixa 
                      qualquer look perfeito e pode ser combinado com outras peças da mesma estampa.`,
        category: "1"
    },
    {
        name: "Top Xadrez Cinza Escuro Zíper",
        img: "https://i.imgur.com/syszsNm.jpg",
        price: 109.99,
        description: `O nosso top zíper já é campeão de vendas, e agora ele chegou em novas estampas maravilhosas! 
                      Confeccionado em tecido de algodão com elastano, ele é confortável e se adapta ao seu corpo. Com a frete dupla, 
                      ele te dá segurança e pode ser usado sem sutiã, a alça é com regulador para você deixar no tamanho ideal, as 
                      costas tem elásticos para se adaptar perfeitamente ao seu corpo. Escolha sua estampa e arrase com seu top zíper! 
                      Composição: 97% algodão - 3% elastano `,
        category: "1"
    },
    {
        name: "Top Xadrez Grid Preto Zíper",
        img: "https://i.imgur.com/7YFWfY0.jpg",
        price: 109.99,
        description: `O nosso top zíper já é campeão de vendas, e agora ele chegou em novas estampas maravilhosas! 
                      Confeccionado em tecido de algodão com elastano, ele é confortável e se adapta ao seu corpo. 
                      Com a frete dupla, ele te dá segurança e pode ser usado sem sutiã, a alça é com regulador para 
                      você deixar no tamanho ideal, as costas tem elásticos para se adaptar perfeitamente ao seu corpo. 
                      Escolha sua estampa e arrase com seu top zíper! Composição: 97% algodão - 3% elastano `,
        category: "1"
    },
    {
        name: "Top Cami Floral Vermelho",
        img: "https://i.imgur.com/OK7gZfM.jpg",
        price: 55.00,
        description: `O Top Cami Floral foi feito para você! Caimento perfeito no corpo, versátil e estiloso! O nosso 
                      top cami é duplo e confeccionado em suplex e tem alça grossa, não tem erro para as meninas com 
                      seios volumosos que tem medo da sustentação! Qualquer um de nossos tops tem a sustentação ótima 
                      para os seios, mas esse é para você que se sente segura com uma alça grossa! Do PP ao 4G, nosso 
                      top cami floral se adequa a todos os tipos de corpos, para você poder arrasar onde quiser. 
                      Composição: 98% poliéster – 2% elastano `,
        category: "1"
    },
    {
        name: "Calça Jogger Moletinho Preta",
        img: "https://i.imgur.com/KTwaQIt.jpg",
        price: 144.99,
        description: `A calça jogger moletinho é a peça que falta no seu closet, ela além de linda é super confortável. 
                      Confeccionada em moletinho preto, com elástico na barra, cós total elástico e cordão regulador, 
                      além disso possui dois bolsos frontais e um bolso nas costas. Ela é perfeita para quem gosta de 
                      estar confortável mas não abre mão do estilo. A peça vai do PP ao 4G e tem um caimento bom no 
                      corpo feminino, mesmo para quem tem perna grossa. Composição:  66% algodão - 27% poliéster - 7% 
                      elastano `,
        category: "2"
    },
    {
        name: "Shorts Gym Preto",
        img: "https://i.imgur.com/Rxa56g7.jpg",
        price: 98.99,
        description: `Nosso shorts de moletinho é super confortável, ele tem o tecido super macio e tem uma ótima 
                      durabilidade. Pode ser usado em diversos looks, desde academia, a um look mais despojado para dias 
                      de sol. Adquira o seu! Composição: 96% viscose / 4% elastano `,
        category: "2"
    },
    {
        name: "Saia Midi Onça",
        img: "https://i.imgur.com/VfEc17Y.jpg",
        price: 83.99,
        description: `Poucas peças do guarda-roupa conseguem ser tão versáteis e charmosas como a saia midi. Perfeita 
                      para praticamente qualquer ambiente, a saia se ajusta ao corpo feminino, ajudando a alongar a 
                      silhueta. Além do caimento perfeito, montar looks com saia midi é uma aventura deliciosa. Com os 
                      nossos modelos de saia midi você pode apostar em t-shirts, croppeds e até mesmo em bodies super 
                      estilosos para criar seu visual favorito. Nos pés, elas dão match com praticamente todos os 
                      modelos de sapato. `,
        category: "2"
    },
    {
        name: "Calça Alfaiataria Viscose",
        img: "https://i.imgur.com/LQpY9eF.jpg",
        price: 109.00,
        description: `Calça em viscose, com bolsos laterais, com pregas, elástico na cintura, barra italiana. Composição: 100% viscose `,
        category: "2"
    },
    {
        name: "Legging Montaria Preta",
        img: "https://i.imgur.com/y6NeYmA.jpg",
        price: 139.99,
        description: `Legging montaria preta, confeccionada em suplex tecnológico, além de ser um produto super confortável, 
                      tem alta durabilidade. Possui recortes que valorizam o corpo e o look. É perfeito para compor looks ou 
                      ir a academia. Escolha como usar, será impossível ter uma só. Temos do tamanho PP ao 4G, garantindo que 
                      todas possam se apaixonar pela nossa legging montaria preta. Composição:  88% poliamida - 12% elastano `,
        category: "2"
    },
    {
        name: "Vestido Lana Preto Manga Longa",
        img: "https://i.imgur.com/LwXgYeK.jpg",
        price: 155.99,
        description: `Vestido em viscolycra de manga curta com franzido, vestido lana tem recortes que valorizam a silhueta 
                      dando uma acinturada sem marcar o corpo. Composição: 96% viscose - 4% elastano. `,
        category: "3"
    },
    {
        name: "Vestido Camponesa Midi Onça",
        img: "https://i.imgur.com/4Ki8N83.jpg",
        price: 182.99,
        description: `Vestido de viscose, estilo camponesa, alcinha com regulador proporcionando conforto ao busto, fechamento 
                      com botões, sem forro. Nosso vestido camponesa é campeão de vendas, e no tecido estampado, ele ganha nosso coração. 
                      Composição: 100% viscose. `,
        category: "3"
    },
    {
        name: "Vestido Camponesa Rainbow",
        img: "https://i.imgur.com/iL7qulK.jpg",
        price: 159.99,
        description: `O vestido camponesa da Wear Ever é feito 100% de viscose, sem nenhum produto de origem animal e, além de tudo, 
                      é uma graça! Com fechamento por botões frontais, esse vestido de alcinha com regulagem possui forro pra te 
                      deixar ainda mais à vontade. Esbanje estilo e leveza ao sair por aí com essa linda peça no corpo. Se joga no 
                      vestido camponesa que será seu favorito! `,
        category: "3"
    },
    {
        name: "Vestido Camponesa Midi Stripes",
        img: "https://i.imgur.com/aZZcmzn.jpg",
        price: 182.99,
        description: `Vestido de viscose, alcinha com regulador, fechamento com botões, sem forro. Composição: 100% viscose. `,
        category: "3"
    },
    {
        name: "Macacão Pantacourt Marinho",
        img: "https://i.imgur.com/0u8wZgO.jpg",
        price: 124.99,
        description: `Macacão pantacourt, com pregas, viscolycra. Alcinha regulável. Composição: 96% viscose - 4% elastano. `,
        category: "3"
    },
    {
        name: "Top Triângulo Branco",
        img: "https://i.imgur.com/ISAHBfL.jpg",
        price: 79.99,
        description: `Top de biquíni em tiras, com regulador e fecho dourado. Composição: 82% poliamida - 18% elastano. `,
        category: "4"
    },
    {
        name: "Top Yasmin Roxo",
        img: "https://i.imgur.com/V82I7ZB.jpg",
        price: 81.99,
        description: `Top biquíni de alcinha, com frente dupla. O nosso top Yasmin é confeccionado em tecido de bíquini, 
                      ele tem um brilho diferente e um toque super macio. Ele acompanha umaa faixa, que transforma ele em 
                      um top de laço, fica uma gracinha! Super versátil, além de poder ser usado de duas maneiras, você 
                      pode utilizar na praia, piscina e na cidade com looks mais elaborados. Composição: 82% poliamida - 18% elastano. `,
        category: "4"
    },
    {
        name: "Top Tube Neon",
        img: "https://i.imgur.com/w0HGm9j.jpg",
        price: 79.99,
        description: `Top duplo, tecido de biquíni. Composição: 82% poliamida - 18% elastano. `,
        category: "4"
    },
    {
        name: "Calcinha Atena Branco",
        img: "https://i.imgur.com/TVHLr1O.jpg",
        price: 76.99,
        description: `Calcinha biquíni cintura alta cavada. Composição: 82% poliamida - 18% elastano.`,
        category: "4"
    },
    {
        name: "Calcinha Anitta Vermelho",
        img: "https://i.imgur.com/PL6uSSq.jpg",
        price: 76.99,
        description: `Calcinha biquíni cintura alta cavada. Composição: 82% poliamida - 18% elastano. `,
        category: "4"
    },
    {
        name: "Cinto Western Duas Fivelas Fino Ouro Velho",
        img: "https://i.imgur.com/viIogG8.jpg",
        price: 99.99,
        description: `Amamos um cinto básico com detalhes que transformam o look! O Cinto Duas Fivelas Western 
                      Fino Ouro Velho é perfeito para completar o seu look Wear Ever! Com duas fivelas na cor 
                      prata, 6 furos, 3 de cada lado e tamanhos do PP ao 4G, garanta o seu!`,
        category: "5"
    },
    {
        name: "Cinto Western Duas Fivelas Fino Preto",
        img: "https://i.imgur.com/LTOeE4n.jpg",
        price: 99.99,
        description: `Amamos um cinto básico com detalhes que transformam o look! O Cinto Duas Fivelas Western 
                      Fino Preto é perfeito para completar o seu look Wear Ever! Com duas fivelas na cor prata, 
                      6 furos, 3 de cada lado e tamanhos do PP ao 4G, garanta o seu!`,
        category: "5"
    },
    {
        name: "Cinto Rebites Fino Preto",
        img: "https://i.imgur.com/7Q8m8wQ.jpg",
        price: 89.99,
        description: `Amamos um cinto básico com detalhes que transformam o look! O Cinto Rebites Fino Preto é 
                      perfeito para completar o seu look Wear Ever! Com aplicação de rebites, fivelas na cor prata, 
                      5 furos e tamanhos do PP ao 4G, garanta o seu!`,
        category: "5"
    },
    {
        name: "Cinto Preto Circle",
        img: "https://i.imgur.com/AS96i9n.jpg",
        price: 87.99,
        description: ` O cinto preto circle é aquele cintinho básico que vai com qualquer roupa! Aliás, de básico 
                       ele não tem nada, porque a fivela dourada em formato de círculo dá aquele charme maravilhoso 
                       para seus looks que você acha que falta alguma coisa. O material é sintético e a fivela 
                       circular é banhada a ouro, chique demais né! Possui regulagem com 5 furos e serve tanto para 
                       segurar as roupas quanto para complementar os looks! Pode usar com calças, saia, shorts, quem 
                       faz a combinação é você. Os tamanhos vão do PP ao 4G, servindo diversos corpos!`,
        category: "5"
    },
    {
        name: "Cinto Animal Print Western",
        img: "https://i.imgur.com/yrdrjDq.jpg",
        price: 84.99,
        description: `O nosso cinto animal print western é de oncinha, feito em material sintético com fivela banhada 
                      ouro velho, ponteira trabalhada, bem estilo western – velho oeste dos Estados Unidos! Achou o 
                      look muito simples? Joga um cinto e vai miga! Nossos tamanhos vão do PP ao 4G, inclusive nos 
                      cintos, pra você poder estar fashion, não importa o tamanho!`,
        category: "5"
    }
];

module.exports = products;

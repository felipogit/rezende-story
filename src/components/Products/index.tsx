export interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
  imageUrl: string;
}

export interface Category {
  id: number;
  name: string;
  products: Product[];
}


export const categories: Category[] = [
  {
    id: 1,
    name: "Clareadores", // Categoria
    products: [
      {
        id: 1,
        name: "Loção bumbum de pêssego",
        price: 25.00,
        description: `Loção bumbum de pêssego , clareia manchas de foliculite, hidrata. A loção pode ser aplicada 
          em diversas partes do corpo, mas é especialmente indicada para regiões como bumbum, coxas.`,
        imageUrl: "/clareador (8).jpeg",
      },
      {
        id: 2,
        name: "Clareador extra forte",
        price: 30.00,
        description: `O clareador extra forte uso noturno é um produto cosmético utilizado para tratar manchas 
        na pele, como melasma, manchas solares, hiperpigmentação ou acne. Ele contém ativos clareadores, como hidroquinona, ácido kójico ou vitamina C, que ajudam a reduzir a produção de melanina, a substância responsável pela coloração da pele.
        Indicado usar protetor solar durante o dia.`,
        imageUrl: "/clareador (9).jpeg",
      },
      {
        id: 3,
        name: "Kit clareador de manchas corporal",
        price: 30.00,
        description: `Kit clareador de manchas corporal ( axila, virilia, joelhos , cotovelos ) 
        Esfoliante clareador 
        Água oxigenada 
        Pó limpeza profunda 
        Pó finalizador 
        Sabonete líquido 
        Espátula 
        Luva 
        Touca`,
        imageUrl: "/clareador (6).jpeg",
      },
      {
        id: 4,
        name: "Máscara de argila branca",
        price: 20.00,
        description: `A máscara de argila branca serve como revitalização e clareamento: A argila branca pode ajudar a melhorar a luminosidade e o tom da pele,
         proporcionando um aspecto mais saudável e radiante. Ela é frequentemente utilizada em máscaras faciais para dar uma aparência mais uniforme à pele.
        Controle da oleosidade`,
        imageUrl: "/clareador (5).jpeg",
      },
      {
        id: 5,
        name: "Gomagem clareadora",
        price: 30.00,
        description: `A gomagem clareadora é uso facial e corporal,ela ajuda uniformizar o tom da pele e a reduzir manchas causadas pelo sol, acne, ou melasma.`,
        imageUrl: "/clareador (4).jpeg",
      },
      {
        id: 6,
        name: "Pomada de rosa mosqueta",
        price: 20.00,
        description: `A pomada de rosa mosqueta é amplamente utilizada por suas propriedades regenerativas e de cuidados com a pele.
        Cicatrizantes de feridas 
        Redução de cicatrizes 
        Hidratação da pele 
        Prevenção e tratamento das estrias.`,
        imageUrl: "/clareador (7).jpeg",
      },
      {
        id: 7,
        name: "Pomada de açafrão",
        price: 20.00,
        description: `Pomada de açafrão indicada para tratamento de inflamações e irritações na pele, é cicatrizante de feridas e manchas, reduz manchas e hipergmentação.`,
        imageUrl: "/clareador (2).jpeg",
      },
      {
        id: 8,
        name: "Dolomita",
        price: 25.00,
        description: `A dolomita possui propriedades alcalinizantes, anti-inflamatórias, antissépticas, calmantes, clareadoras, cicatrizantes e tonificantes. Indicada para rosto e corpo.`,
        imageUrl: "/clareador01 (2).jpeg",
      },
      {
        id: 9,
        name: "Tira manchas & secas espinhas",
        price: 20.00,
        description: `Tira manchas & secas espinhas é um creme capaz de eliminar espinhas e diminuir manchas da pele causadas por exposição excessiva ao sol. Modo se usar:
        Aplicar o tira manchas & seca espinhas no local desejado, massageie por alguns instantes até sua completa absorção. Recomendamos uso noturno, sempre antes de dormir.`,
        imageUrl: "/clareador (3).jpeg",
      },
      {
        id: 10,
        name: "Clareador íntimo extra forte ",
        price: 30.00,
        description: `O clareador íntimo extra forte é utilizado para clarear a pele em áreas íntimas, como 
        a virilha, axilas. Ele contém substâncias que ajudam a reduzir a hiperpigmentação, suavizando a tonalidade da pele e clareando.`,
        imageUrl: "/clareador01 (1).jpeg",
      },
    ],


  },
  {
    id: 2,
    name: "Linha capilar",
    products: [
      {
        id: 11,
        name: "Tônico anti queda",
        price: 20.00,
        description: `Para cabelos quebradiços, finos e fracos.`,
        imageUrl: "/hidratante-amendoas.jpeg",
      },
      {
        id: 12,
        name: "Óleo reparador de rosa mosqueta",
        price: 20.00,
        description: `Hidratação intensa, brilho intenso, anti frizz.`,
        imageUrl: "/hidratante-amendoas.jpeg",
      },
      {
        id: 13,
        name: "Óleo de argan reparador de pontas.",
        price: 20.00,
        description: `Anti frizz, hidrata, nutre, para todos os tipos de cabelos.`,
        imageUrl: "/hidratante-amendoas.jpeg",
      },
      {
        id: 14,
        name: "Perfume capilar",
        price: 20.00,
        description: ``,
        imageUrl: "/hidratante-amendoas.jpeg",
      },
      {
        id: 15,
        name: "Spray de reconstrução dos fios",
        price: 30.00,
        description: ``,
        imageUrl: "/hidratante-amendoas.jpeg",
      },
      {
        id: 16,
        name: "Spray Selante Liso com Força Protetor Térmico",
        price: 25.00,
        description: `O Spray Selante 10 Benefícios Liso com Força é um finalizador 
          capaz de melhorar a penteabilidade dos fios e auxiliar no processo de escovação, deixando os cabelos alinhados por mais tempo.`,
        imageUrl: "/hidratante-amendoas.jpeg",
      },
      {
        id: 17,
        name: "Kit shampoo anti queda",
        price: 45.00,
        description: `Para cabelos quebradiços finos e com alto teor de queda 
        1 shampoo 500ml
        1 máscara de hidratação 500ml
        1 condicionador 500ml`,
        imageUrl: "/hidratante-amendoas.jpeg",
      },
      {
        id: 18,
        name: "Tônico Rapunzel 470ml ",
        price: 25.00,
        description: `Acelera o crescimento dos fios, fortalece, reduz a queda e quebra`,
        imageUrl: "/hidratante-amendoas.jpeg",
      },
      {
        id: 19,
        name: "Kit Rapunzel ",
        price: 45.00,
        description: `Para crescimento, anti queda, reduz frizz, hidratação intensa 
        1 shampoo 500ml
        1 máscara de hidratação 500ml
        1 condicionador 500ml
        1 óleo de ervas`,
        imageUrl: "/hidratante-amendoas.jpeg",
      },
      {
        id: 20,
        name: "Vitamina para cabelo",
        price: 45.00,
        description: ``,
        imageUrl: "/hidratante-amendoas.jpeg",
      },
      {
        id: 21,
        name: "Kit bababell morango",
        price: 50.00,
        description: `  `,
        imageUrl: "/hidratante-amendoas.jpeg",
      },
      {
        id: 22,
        name: "Kit bababell tuti fruti",
        price: 50.00,
        description: `  `,
        imageUrl: "/hidratante-amendoas.jpeg",
      },
      {
        id: 23,
        name: "Kit shampoo babaloo banana ",
        price: 35.00,
        description: `Protege e recupera, fortalece os fios, reposição de minerais
        Para todos os tipos de cabelos 
        1 shampoo 300ml 
        1 máscara de hidratação 300ml
        1 condicionador 300ml`,
        imageUrl: "/hidratante-amendoas.jpeg",
      },
      {
        id: 24,
        name: "Kit shampoo babaloo uva ",
        price: 35.00,
        description: `Pós química, para cabelos danificados 
        1 shampoo 300ml 
        1 máscara de hidratação 300ml
        1 condicionador 300ml`,
        imageUrl: "/hidratante-amendoas.jpeg",
      },
      {
        id: 25,
        name: "Kit shampoo babaloo tutu fruti ",
        price: 35.00,
        description: `Hidratação, nutrição, resistência máxima 
        Para todos os tipos de cabelo 
        1 shampoo 300ml 
        1 máscara de hidratação 300ml
        1 condicionador 300ml`,
        imageUrl: "/hidratante-amendoas.jpeg",
      },
      {
        id: 26,
        name: "Kit shampoo  babaloo maçã verde ",
        price: 35.00,
        description: `Cabelos macios, brilhosos e perfumados. Hidratação intensa 
        Para todos os tipos de cabelos 
        1 shampoo 300ml 
        1 máscara de hidratação 300ml
        1 condicionador 300ml`,
        imageUrl: "/hidratante-amendoas.jpeg",
      },
      {
        id: 27,
        name: "Kit shampoo minoxidil ",
        price: 35.00,
        description: `•shampoo 250ml
        condicionador 250ml
        finalizador 60ml
        valor promocional 30$
        O minoxidil é um medicamento tópico utilizado para o tratamento da queda de cabelo, estimulando o crescimento de novos fios.`,
        imageUrl: "/hidratante-amendoas.jpeg",
      },
      {
        id: 28,
        name: "Kit shampoo ativador de cachos ",
        price: 35.00,
        description: `Limpeza profunda
        Hidratação intensa 
        1 shampoo 300ml 
        1 máscara de hidratação 300ml
        1 condicionador 300ml`,
        imageUrl: "/hidratante-amendoas.jpeg",
      },
      {
        id: 29,
        name: "Kit shampoo fini beijinho ",
        price: 35.00,
        description: `Nutrição intensa 
        Para todos os tipos de cabelos 
        1 shampoo 300ml 
        1 máscara de hidratação 300ml
        1 condicionador 300ml`,
        imageUrl: "/hidratante-amendoas.jpeg",
      },
      {
        id: 30,
        name: "Kit shampoo babaloo melancia",
        price: 35.00,
        description: `Protege, recupera , fortalece, reposição de minerais. 
        Para todos os tipos de cabelos 
        1 shampoo 300ml 
        1 máscara de hidratação 300ml
        1 condicionador 300ml`,
        imageUrl: "/hidratante-amendoas.jpeg",
      },
      {
        id: 31,
        name: "Kit shampoo babaloo morango ",
        price: 35.00,
        description: `Ativador de cachos, nutrição, cachos definidos 
        1 shampoo 300ml 
        1 máscara de hidratação 300ml
        1 condicionador 300ml`,
        imageUrl: "/hidratante-amendoas.jpeg",
      },

    ]
  },
  {
    id: 3,
    name: "Acessorios",
    products: [
      {
        id: 32,
        name: "Touca de cetim",
        price: 15.00,
        description: `A touca de cetim, com sua textura suave e lisa, reduz esse atrito, preservando a integridade dos fios. Além disso,
         a touca de cetim também ajuda a manter a hidratação dos cabelos`,
        imageUrl: "/hidratante-amendoas.jpeg",
      },
      {
        id: 33,
        name: "Xuxa de cetim",
        price: 5.00,
        description: ``,
        imageUrl: "/hidratante-amendoas.jpeg",
      },
      {
        id: 34,
        name: "Escova tira nós",
        price: 10.00,
        description: `tira os nós, ela também é ótima pra finalizar os cachos e fazer fitagem, que é um jeito de pentear o 
        cabelo separando as mechas molhadas como se fossem fitinhas. Mesmo assim, quem tem cabelos ondulados ou até mesmo lisos também pode usar 
        a escova polvo. Ela é ótima pra qualquer tipo de fio!
        `,
        imageUrl: "/hidratante-amendoas.jpeg",
      },
      {
        id: 35,
        name: " Escova Magica",
        price: 10.00,
        description: `A Escova Magica é perfeita para desembaraçar todos os tipos de cabelo sem esforços.
         As cerdas das escovas são delicadas para que não danifique o couro cabeludo.`,
        imageUrl: "/hidratante-amendoas.jpeg",
      },
      {
        id: 36,
        name: "Escova massageadora",
        price: 10.00,
        description: `Remove delicadamente as células mortas, resíduos de produtos e sujeira.
         Indicado para todos os tipos de cabelo, Pode ser usado nos cabelos secos ou molhados, auxiliando na aplicação de produtos óleos e afins.`,
        imageUrl: "/hidratante-amendoas.jpeg",
      },
      {
        id: 37,
        name: "Escova raqueta",
        price: 12.00,
        description: `Ideal para desembaraçar os fios. Reduz a quebra dos fios e possui passagem de ar que auxilia na secagem.`,
        imageUrl: "/hidratante-amendoas.jpeg",
      },

    ]
  },
  {
    id: 4,
    name: "Perfumes e fragrâncias",
    products: [
      {
        id: 38,
        name: "Body Splash 130ml ",
        price: 20.00,
        description: `Tutti frutti e morango `,
        imageUrl: "/hidratante-amendoas.jpeg",
      },
      {
        id: 39,
        name: "Body splash árabe ",
        price: 30.00,
        description: ``,
        imageUrl: "/hidratante-amendoas.jpeg",
      },
      {
        id: 40,
        name: "Perfume miniatura fantasy 30ml",
        price: 70.00,
        description: `Perfume miniatura fantasy 30ml  Dreeam
        (INPIR. Fantasy de Britney Spreace) `,
        imageUrl: "/hidratante-amendoas.jpeg",
      },
      {
        id: 41,
        name: "Kit glow red (Body splash+hidratante) ",
        price: 45.00,
        description: ``,
        imageUrl: "/hidratante-amendoas.jpeg",
      },
      {
        id: 42,
        name: "Perfume miniatura 50ml Invictus",
        price: 80.00,
        description: ``,
        imageUrl: "/hidratante-amendoas.jpeg",
      },
      {
        id: 43,
        name: "Perfume miniatura Ferrari",
        price: 70.00,
        description: `Perfume miniatura de 30ml`,
        imageUrl: "/hidratante-amendoas.jpeg",
      },
      {
        id: 44,
        name: "Kit Plié 60ml",
        price: 55.00,
        description: `01 hidratante perfumado Plié 60ml 
        01 Body Splash Plié 60ml
        Família Olfativa: Oriental Floral`,
        imageUrl: "/hidratante-amendoas.jpeg",
      },
      {
        id: 45,
        name: "Kit Amora 60ml",
        price: 55.00,
        description: `Contém 01 hidratante perfumado Amora 60ml e 01 Body Splash Amora 60ml;
        Família Olfativa: Frutal`,
        imageUrl: "/hidratante-amendoas.jpeg",
      },
      {
        id: 46,
        name: "Kit Coconut 60ml",
        price: 55.00,
        description: `Contém 01 hidratante perfumado Coconut 60ml e 01 Body Splash Coconut 60ml;
        Família Olfativa: Frutal Doce`,
        imageUrl: "/hidratante-amendoas.jpeg",
      },
      {
        id: 47,
        name: "Kit Vanilla ",
        price: 55.00,
        description: `Pokoloka- Body Splash 60ML + Hidratante Corporal 60ML Body Splash Vanilla - Pokoloka.
        Deixa a pele suavemente perfumada ao longo do dia. Fragrância VANILLA : Floral Baunilha`,
        imageUrl: "/hidratante-amendoas.jpeg",
      },
      {
        id: 48,
        name: "PERFUME CAROLINA HERRERA GOOD GIRL ",
        price: 80.00,
        description: `FEMININO EAU DE PARFUM 40ml `,
        imageUrl: "/hidratante-amendoas.jpeg",
      },
      {
        id: 49,
        name: "Body splash fini dentinho 250ml",
        price: 15.00,
        description: ``,
        imageUrl: "/hidratante-amendoas.jpeg",
      },
      {
        id: 50,
        name: "Body splash fini tubes 250ml",
        price: 15.00,
        description: ``,
        imageUrl: "/hidratante-amendoas.jpeg",
      },
      {
        id: 51,
        name: "Body splash fini beijinho 250ml",
        price: 15.00,
        description: ``,
        imageUrl: "/hidratante-amendoas.jpeg",
      },
      {
        id: 52,
        name: "Hidratante corporal babbaloo tutti fruti 200g ",
        price: 15.00,
        description: ` `,
        imageUrl: "/hidratante-amendoas.jpeg",
      },
      {
        id: 53,
        name: "Hidratante corporal babbaloo uva 200g ",
        price: 15.00,
        description: ``,
        imageUrl: "/hidratante-amendoas.jpeg",
      },
      {
        id: 54,
        name: "Hidratante corporal babbaloo morango ",
        price: 15.00,
        description: ``,
        imageUrl: "/hidratante-amendoas.jpeg",
      },
      {
        id: 55,
        name: "Hidratante Fragrância Árabe ",
        price: 25.00,
        description: `Hidratante Fragrância Árabe Eclipse Dourado, é uma combinação luxuosa de
         ingredientes naturais que proporciona hidratação e maciez à pele. Com uma fragrância envolvente, deixa a pele suave e sedosa.`,
        imageUrl: "/hidratante-amendoas.jpeg",
      },
      {
        id: 56,
        name: "Loção Hidratante",
        price: 25.00,
        description: `Loção Hidratante  Eclipse da
         marca Miss Rose é uma fragrância refrescante que combina notas florais e frutadas, proporcionando uma sensação de leveza e bem-estar. 
         Ideal para o dia a dia, seu aroma é sútil `,
        imageUrl: "/hidratante-amendoas.jpeg",
      },

    ]
  },
  {
    id: 5,
    name: "Cuidados faciais e corporais",
    products: [
      {
        id: 57,
        name: "",
        price: 35.00,
        description: `Um hidratante de amêndoas que nutre profundamente a pele, deixando-a macia e com um brilho saudável. Ideal para peles secas e sensíveis.`,
        imageUrl: "/hidratante-amendoas.jpeg",
      },
      {
        id: 58,
        name: "Hidratante corporal de amêndoas",
        price: 35.00,
        description: `Um hidratante de amêndoas que nutre profundamente a pele, deixando-a macia e com um brilho saudável. Ideal para peles secas e sensíveis.`,
        imageUrl: "/hidratante-amendoas.jpeg",
      },
      {
        id: 59,
        name: "Hidratante corporal de amêndoas",
        price: 35.00,
        description: `Um hidratante de amêndoas que nutre profundamente a pele, deixando-a macia e com um brilho saudável. Ideal para peles secas e sensíveis.`,
        imageUrl: "/hidratante-amendoas.jpeg",
      },
      {
        id: 60,
        name: "Hidratante corporal de amêndoas",
        price: 35.00,
        description: `Um hidratante de amêndoas que nutre profundamente a pele, deixando-a macia e com um brilho saudável. Ideal para peles secas e sensíveis.`,
        imageUrl: "/hidratante-amendoas.jpeg",
      },
      {
        id: 61,
        name: "Hidratante corporal de amêndoas",
        price: 35.00,
        description: `Um hidratante de amêndoas que nutre profundamente a pele, deixando-a macia e com um brilho saudável. Ideal para peles secas e sensíveis.`,
        imageUrl: "/hidratante-amendoas.jpeg",
      },
      {
        id: 62,
        name: "Hidratante corporal de amêndoas",
        price: 35.00,
        description: `Um hidratante de amêndoas que nutre profundamente a pele, deixando-a macia e com um brilho saudável. Ideal para peles secas e sensíveis.`,
        imageUrl: "/hidratante-amendoas.jpeg",
      },
      {
        id: 63,
        name: "Hidratante corporal de amêndoas",
        price: 35.00,
        description: `Um hidratante de amêndoas que nutre profundamente a pele, deixando-a macia e com um brilho saudável. Ideal para peles secas e sensíveis.`,
        imageUrl: "/hidratante-amendoas.jpeg",
      },
      {
        id: 64,
        name: "Hidratante corporal de amêndoas",
        price: 35.00,
        description: `Um hidratante de amêndoas que nutre profundamente a pele, deixando-a macia e com um brilho saudável. Ideal para peles secas e sensíveis.`,
        imageUrl: "/hidratante-amendoas.jpeg",
      },

    ]
  },
  {
    id: 6,
    name: "Perfumes",
    products: [
      {
        id: 11,
        name: "Hidratante corporal de amêndoas",
        price: 35.00,
        description: `Um hidratante de amêndoas que nutre profundamente a pele, deixando-a macia e com um brilho saudável. Ideal para peles secas e sensíveis.`,
        imageUrl: "/hidratante-amendoas.jpeg",
      },
      {
        id: 11,
        name: "Hidratante corporal de amêndoas",
        price: 35.00,
        description: `Um hidratante de amêndoas que nutre profundamente a pele, deixando-a macia e com um brilho saudável. Ideal para peles secas e sensíveis.`,
        imageUrl: "/hidratante-amendoas.jpeg",
      },
      {
        id: 11,
        name: "Hidratante corporal de amêndoas",
        price: 35.00,
        description: `Um hidratante de amêndoas que nutre profundamente a pele, deixando-a macia e com um brilho saudável. Ideal para peles secas e sensíveis.`,
        imageUrl: "/hidratante-amendoas.jpeg",
      },
      {
        id: 11,
        name: "Hidratante corporal de amêndoas",
        price: 35.00,
        description: `Um hidratante de amêndoas que nutre profundamente a pele, deixando-a macia e com um brilho saudável. Ideal para peles secas e sensíveis.`,
        imageUrl: "/hidratante-amendoas.jpeg",
      },
      {
        id: 11,
        name: "Hidratante corporal de amêndoas",
        price: 35.00,
        description: `Um hidratante de amêndoas que nutre profundamente a pele, deixando-a macia e com um brilho saudável. Ideal para peles secas e sensíveis.`,
        imageUrl: "/hidratante-amendoas.jpeg",
      },
      {
        id: 11,
        name: "Hidratante corporal de amêndoas",
        price: 35.00,
        description: `Um hidratante de amêndoas que nutre profundamente a pele, deixando-a macia e com um brilho saudável. Ideal para peles secas e sensíveis.`,
        imageUrl: "/hidratante-amendoas.jpeg",
      },
      {
        id: 11,
        name: "Hidratante corporal de amêndoas",
        price: 35.00,
        description: `Um hidratante de amêndoas que nutre profundamente a pele, deixando-a macia e com um brilho saudável. Ideal para peles secas e sensíveis.`,
        imageUrl: "/hidratante-amendoas.jpeg",
      },
      {
        id: 11,
        name: "Hidratante corporal de amêndoas",
        price: 35.00,
        description: `Um hidratante de amêndoas que nutre profundamente a pele, deixando-a macia e com um brilho saudável. Ideal para peles secas e sensíveis.`,
        imageUrl: "/hidratante-amendoas.jpeg",
      },

    ]
  },


];

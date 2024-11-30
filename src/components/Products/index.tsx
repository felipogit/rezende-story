export interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
  imageUrl: string;
  quantity: number;
  
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
        id: 2,
        name: "Clareador extra forte",
        price: 30.00,
        description: `O clareador extra forte uso noturno é um produto cosmético utilizado para tratar manchas 
        na pele, como melasma, manchas solares, hiperpigmentação ou acne. Ele contém ativos clareadores, como hidroquinona, ácido kójico ou vitamina C, que ajudam a reduzir a produção de melanina, a substância responsável pela coloração da pele.
        Indicado usar protetor solar durante o dia.`,
        imageUrl: "/Clareadores/clareador-extra-fortes.jpeg",
        quantity: 0,

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
        imageUrl: "/Clareadores/Clareador-de-manchas.jpeg",
        quantity: 0,
      },
      {
        id: 4,
        name: "Máscara de argila branca",
        price: 20.00,
        description: `A máscara de argila branca serve como revitalização e clareamento: A argila branca pode ajudar a melhorar a luminosidade e o tom da pele,
         proporcionando um aspecto mais saudável e radiante. Ela é frequentemente utilizada em máscaras faciais para dar uma aparência mais uniforme à pele.
        Controle da oleosidade`,
        imageUrl: "/Clareadores/argila-branca.jpeg",
        quantity: 0,
      },
      {
        id: 5,
        name: "Gomagem clareadora",
        price: 30.00,
        description: `A gomagem clareadora é uso facial e corporal,ela ajuda uniformizar o tom da pele e a reduzir manchas causadas pelo sol, acne, ou melasma.`,
        imageUrl: "/Clareadores/gomagem.jpeg",
        quantity: 0,
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
        imageUrl: "/Clareadores/pomada-rosa-mosqueta.jpeg",
        quantity: 0,
      },
      {
        id: 7,
        name: "Pomada de açafrão",
        price: 20.00,
        description: `Pomada de açafrão indicada para tratamento de inflamações e irritações na pele, é cicatrizante de feridas e manchas, reduz manchas e hipergmentação.`,
        imageUrl: "/Clareadores/pomada-acafrao.jpeg",
        quantity: 0,
      },
      {
        id: 8,
        name: "Dolomita",
        price: 25.00,
        description: `A dolomita possui propriedades alcalinizantes, anti-inflamatórias, antissépticas, calmantes, clareadoras, cicatrizantes e tonificantes. Indicada para rosto e corpo.`,
        imageUrl: "/Clareadores/dolomita.jpeg",
        quantity: 0,
      },
      {
        id: 9,
        name: "Tira manchas & secas espinhas",
        price: 20.00,
        description: `Tira manchas & secas espinhas é um creme capaz de eliminar espinhas e diminuir manchas da pele causadas por exposição excessiva ao sol. Modo se usar:
        Aplicar o tira manchas & seca espinhas no local desejado, massageie por alguns instantes até sua completa absorção. Recomendamos uso noturno, sempre antes de dormir.`,
        imageUrl: "/Clareadores/tira-manchas.jpeg",
        quantity: 0,
      },
      {
        id: 10,
        name: "Clareador íntimo extra forte ",
        price: 30.00,
        description: `O clareador íntimo extra forte é utilizado para clarear a pele em áreas íntimas, como 
        a virilha, axilas. Ele contém substâncias que ajudam a reduzir a hiperpigmentação, suavizando a tonalidade da pele e clareando.`,
        imageUrl:"/Clareadores/clareador-extra-forte-intimo.jpeg",
        quantity: 0,
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
        imageUrl: "/Linha-capilar/tonica-ante-queda.jpeg",
        quantity: 0,
      },
      {
        id: 12,
        name: "Óleo reparador de rosa mosqueta",
        price: 20.00,
        description: `Hidratação intensa, brilho intenso, anti frizz.`,
        imageUrl: "/Linha-capilar/olho-reparador-rosa-mosqueta.jpeg",
        quantity: 0,
      },
      {
        id: 13,
        name: "Óleo de argan reparador de pontas.",
        price: 20.00,
        description: `Anti frizz, hidrata, nutre, para todos os tipos de cabelos.`,
        imageUrl: "/Linha-capilar/oleo-reparador-argan.jpeg",
        quantity: 0,
      },
      {
        id: 14,
        name: "Perfume capilar",
        price: 20.00,
        description: ``,
        imageUrl: "/Linha-capilar/perfume-capilar.jpeg",
        quantity: 0,
      },
      {
        id: 15,
        name: "Spray de reconstrução dos fios",
        price: 30.00,
        description: ``,
        imageUrl: "/Linha-capilar/spray-reconstrucao.jpeg",
        quantity: 0,
      },
      {
        id: 16,
        name: "Spray Selante Liso com Força Protetor Térmico",
        price: 25.00,
        description: `O Spray Selante 10 Benefícios Liso com Força é um finalizador 
          capaz de melhorar a penteabilidade dos fios e auxiliar no processo de escovação, deixando os cabelos alinhados por mais tempo.`,
        imageUrl: "/Linha-capilar/protetor-termico.jpeg",
        quantity: 0,
      },
      {
        id: 17,
        name: "Kit shampoo anti queda",
        price: 45.00,
        description: `Para cabelos quebradiços finos e com alto teor de queda 
        1 shampoo 500ml
        1 máscara de hidratação 500ml
        1 condicionador 500ml`,
        imageUrl: "/Linha-capilar/kit-shampoo-antiqueda.jpeg",
        quantity: 0,
      },
      {
        id: 18,
        name: "Tônico Rapunzel 470ml ",
        price: 25.00,
        description: `Acelera o crescimento dos fios, fortalece, reduz a queda e quebra`,
        imageUrl: "/Linha-capilar/tonico-rampunzel.jpeg",
        quantity: 0,
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
        imageUrl: "/Linha-capilar/kit-shampoo-rapunzel.jpeg",
        quantity: 0,
      },
      {
        id: 20,
        name: "Vitamina para cabelo",
        price: 45.00,
        description: ``,
        imageUrl: "/Linha-capilar/vitamina-capilar.jpeg",
        quantity: 0,
      },
      {
        id: 21,
        name: "Kit bababell morango",
        price: 50.00,
        description: `  `,
        imageUrl: "/Linha-capilar/kit-shampoo-bababeu-morango.jpeg",
        quantity: 0,
      },
      {
        id: 22,
        name: "Kit bababell tuti fruti",
        price: 50.00,
        description: `  `,
        imageUrl: "/Linha-capilar/kit-babel-tutifrut.jpeg",
        quantity: 0,
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
        imageUrl: "/Linha-capilar/kit-babalu-banana.jpeg",
        quantity: 0,
      },
      {
        id: 24,
        name: "Kit shampoo babaloo uva ",
        price: 35.00,
        description: `Pós química, para cabelos danificados 
        1 shampoo 300ml 
        1 máscara de hidratação 300ml
        1 condicionador 300ml`,
        imageUrl: "/Linha-capilar/kit-babalu-uva.jpeg",
        quantity: 0,
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
        imageUrl: "/Linha-capilar/kit-babalu-tutifrut.jpeg",
        quantity: 0,
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
        imageUrl: "/Linha-capilar/kit-babalu-maça-verde.jpeg",
        quantity: 0,
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
        imageUrl: "/Linha-capilar/kit-minoxidil.jpeg",
        quantity: 0,
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
        imageUrl: "/Linha-capilar/ativador-cachos.jpeg",
        quantity: 0,
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
        imageUrl: "/Linha-capilar/kit-fini-beijinho.jpeg",
        quantity: 0,
        
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
        imageUrl: "/Linha-capilar/kit-babalu-melancia.jpeg",
        quantity: 0,
      },
      {
        id: 31,
        name: "Kit shampoo babaloo morango ",
        price: 35.00,
        description: `Ativador de cachos, nutrição, cachos definidos 
        1 shampoo 300ml 
        1 máscara de hidratação 300ml
        1 condicionador 300ml`,
        imageUrl: "/Linha-capilar/kit-babalu-morango.jpeg",
        quantity: 0,
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
        imageUrl: "/Acessorios/toca-cetin.jpeg",
        quantity: 0,
      },
      {
        id: 33,
        name: "Xuxa de cetim",
        price: 5.00,
        description: ``,
        imageUrl: "/Acessorios/xuxa-cetin.jpeg",
        quantity: 0,
      },
      {
        id: 34,
        name: "Escova polvo",
        price: 10.00,
        description: `tira os nós, ela também é ótima pra finalizar os cachos e fazer fitagem, que é um jeito de pentear o 
        cabelo separando as mechas molhadas como se fossem fitinhas. Mesmo assim, quem tem cabelos ondulados ou até mesmo lisos também pode usar 
        a escova polvo. Ela é ótima pra qualquer tipo de fio!
        `,
        imageUrl: "/Acessorios/escova-pouvo.jpeg",
        quantity: 0,
      },
      {
        id: 35,
        name: " Escova Magica",
        price: 10.00,
        description: `A Escova Magica é perfeita para desembaraçar todos os tipos de cabelo sem esforços.
         As cerdas das escovas são delicadas para que não danifique o couro cabeludo.`,
        imageUrl: "/Acessorios/escova-magica.jpeg",
        quantity: 0,
      },
      {
        id: 36,
        name: "Escova massageadora",
        price: 10.00,
        description: `Remove delicadamente as células mortas, resíduos de produtos e sujeira.
         Indicado para todos os tipos de cabelo, Pode ser usado nos cabelos secos ou molhados, auxiliando na aplicação de produtos óleos e afins.`,
        imageUrl: "/Acessorios/massageador-capilar.jpeg",
        quantity: 0,
      },
      {
        id: 37,
        name: "Escova raqueta",
        price: 12.00,
        description: `Ideal para desembaraçar os fios. Reduz a quebra dos fios e possui passagem de ar que auxilia na secagem.`,
        imageUrl: "/Acessorios/escova-raquete.jpeg",
        quantity: 0,
      },

    ]
  },
  {
    id: 4,
    name: "Perfumes e fragrâncias",
    products: [
      {
        id: 38,
        name: "Body Splash babaloo",
        price: 20.00,
        description: `Body Splash 130ml, Tutti frutti e morango `,
        imageUrl: "/Perfumes-fragrancias/body-spresh-babalo.jpeg",
        quantity: 0,
      },
      {
        id: 39,
        name: "Body splash árabe ",
        price: 30.00,
        description: ``,
        imageUrl: "/Perfumes-fragrancias/body-spresh-arabe.jpeg",
        quantity: 0,
      },
      {
        id: 40,
        name: "Perfume miniatura fantasy 30ml",
        price: 70.00,
        description: `Perfume miniatura fantasy 30ml  Dreeam
        (INPIR. Fantasy de Britney Spreace) `,
        imageUrl: "/Perfumes-fragrancias/miniatura-fantasy.jpeg",
        quantity: 0,
      },
      {
        id: 41,
        name: "Kit glow red (Body splash+hidratante) ",
        price: 45.00,
        description: ``,
        imageUrl: "/Perfumes-fragrancias/kir-glow-red.jpeg",
        quantity: 0,
      },
      {
        id: 42,
        name: "Perfume miniatura 50ml Invictus",
        price: 80.00,
        description: ``,
        imageUrl: "/Perfumes-fragrancias/miniatura-invictos.jpeg",
        quantity: 0,
      },
      {
        id: 43,
        name: "Perfume miniatura Ferrari",
        price: 70.00,
        description: `Perfume miniatura de 30ml`,
        imageUrl: "/Perfumes-fragrancias/miniatura-ferrari.jpeg",
        quantity: 0,
      },
      {
        id: 44,
        name: "Kit pokaloka Plié ",
        price: 55.00,
        description: `01 hidratante perfumado Plié 60ml 
        01 Body Splash Plié 60ml
        Família Olfativa: Oriental Floral`,
        imageUrl: "/Perfumes-fragrancias/kit-bory-spresh-hidratante-dile.jpeg",
        quantity: 0,
      },
      {
        id: 45,
        name: "Kit pokaloka Amora ",
        price: 55.00,
        description: `Contém 01 hidratante perfumado Amora 60ml e 01 Body Splash Amora 60ml;
        Família Olfativa: Frutal`,
        imageUrl: "/Perfumes-fragrancias/kit-bory-spresh-hidratante-amora.jpeg",
        quantity: 0,
      },
      {
        id: 46,
        name: "Kit pokaloka Coconut",
        price: 55.00,
        description: `Contém 01 hidratante perfumado Coconut 60ml e 01 Body Splash Coconut 60ml;
        Família Olfativa: Frutal Doce`,
        imageUrl: "/Perfumes-fragrancias/kit-bory-spresh-hidratante-coconut.jpeg",
        quantity: 0,
      },
      {
        id: 47,
        name: "Kit pokaloka Vanilla ",
        price: 55.00,
        description: `Pokoloka- Body Splash 60ML + Hidratante Corporal 60ML Body Splash Vanilla - Pokoloka.
        Deixa a pele suavemente perfumada ao longo do dia. Fragrância VANILLA : Floral Baunilha`,
        imageUrl: "/Perfumes-fragrancias/kit-bory-spresh-hidratante-vanila.jpeg",
        quantity: 0,
      },
      {
        id: 48,
        name: "Perfume Carolina Herrera Godd Girl",
        price: 80.00,
        description: `FEMININO EAU DE PARFUM 40ml `,
        imageUrl: "/Perfumes-fragrancias/perfume-carolina.jpeg",
        quantity: 0,
      },
      {
        id: 49,
        name: "Body splash fini dentinho 250ml",
        price: 15.00,
        description: ``,
        imageUrl: "/Perfumes-fragrancias/body-spresh-fine-dentinho.jpeg",
        quantity: 0,
      },
      {
        id: 50,
        name: "Body splash fini bubes",
        price: 15.00,
        description: ``,
        imageUrl: "/Perfumes-fragrancias/body-spresh-fine-bubes.jpeg",
        quantity: 0,
      },
      {
        id: 51,
        name: "Body splash fini beijinho ",
        price: 15.00,
        description: ``,
        imageUrl: "/Perfumes-fragrancias/body-spresh-fine-beijinho.jpeg",
        quantity: 0,
      },
      {
        id: 52,
        name: "Hidratante corporal babbaloo tutti fruti ",
        price: 15.00,
        description: ` `,
        imageUrl: "/Perfumes-fragrancias/hidratante-corporal-babalo-tuti-frut.jpeg",
        quantity: 0,
      },
      {
        id: 53,
        name: "Hidratante corporal babbaloo uva 200g ",
        price: 15.00,
        description: ``,
        imageUrl: "/Perfumes-fragrancias/hidratante-coporal-babalo-uva.jpeg",
        quantity: 0,
      },
      {
        id: 54,
        name: "Hidratante corporal babbaloo morango ",
        price: 15.00,
        description: ``,
        imageUrl: "/Perfumes-fragrancias/hidratante-corporal-babalo-morango.jpeg",
        quantity: 0,
      },
      {
        id: 55,
        name: "Hidratante eclipse dourado Árabe",
        price: 25.00,
        description: `Hidratante Fragrância Árabe Eclipse Dourado, é uma combinação luxuosa de
         ingredientes naturais que proporciona hidratação e maciez à pele. Com uma fragrância envolvente, deixa a pele suave e sedosa.`,
        imageUrl: "/Perfumes-fragrancias/hidratante-corporal-arabe.jpeg",
        quantity: 0,
      },
      {
        id: 56,
        name: "Loção Hidratante",
        price: 25.00,
        description: `Loção Hidratante  Eclipse da
         marca Miss Rose é uma fragrância refrescante que combina notas florais e frutadas, proporcionando uma sensação de leveza e bem-estar. 
         Ideal para o dia a dia, seu aroma é sútil `,
        imageUrl: "/Perfumes-fragrancias/hidratante-arabe-miss-rose.jpeg",
        quantity: 0,
      },

    ]
  },
  {
    id: 5,
    name: "Cuidados faciais e corporais",
    products: [
      {
        id: 57,
        name: "Esfoliante clareador babbaloo tutti frutti",
        price: 25.00,
        description: `Esfoliante clareador babbaloo tutti frutti (facial e corporal)500g`,
        imageUrl: "/faciais-corporais/esfoliante-clareador-babalo-tut-frut.jpeg",
        quantity: 0,
      },
      {
        id: 58,
        name: "Esfoliante clareador babbaloo uva",
        price: 25.00,
        description: `Esfoliante clareador babbaloo uva(facial e corporal) 500g `,
        imageUrl: "/faciais-corporais/esfoliante-clareador-babalo-uva.jpeg",
        quantity: 0,
      },
      {
        id: 59,
        name: "Esfoliante clareador babbaloo morango",
        price: 25.00,
        description: `Esfoliante clareador babbaloo morango (facial e corporal) 500g`,
        imageUrl: "/faciais-corporais/esfoliante-clareador-morango.jpeg",
        quantity: 0,
      },
      {
        id: 60,
        name: "Esfoliante clareador babbaloo melancia ",
        price: 25.00,
        description: `Esfoliante clareador babbaloo melancia (facial e corporal) 500g`,
        imageUrl: "/faciais-corporais/esfoliante-clareador-melancia.jpeg",
        quantity: 0,
      },
      {
        id: 61,
        name: "Esfoliante clareador pó de arroz ",
        price: 25.00,
        description: `Esfoliante clareador pó de arroz 
        (Facial e corporal) auxiliar na remoção das células mortas, renovando a pele e amenizando manchas superficiais. Indicado para todos os tipos de pele.`,
        imageUrl: "/faciais-corporais/esfoliante-clareador-pó-arroz.jpeg",
        quantity: 0,
      },
      {
        id: 62,
        name: "Esfoliante clareador de rosa mosqueta",
        price: 25.00,
        description: `Esfoliante clareador de rosa mosqueta (facial e corporal) oferece uma renovação celular eficaz, estimula o colágeno e desobstrui poros
        , clareia manchas, previne acnes e foliculites. Sua fórmula, combinada ao uso do sabonete e hidratante, promove uma abordagem completa para a saúde e vitalidade da pele.`,
        imageUrl: "/faciais-corporais/esfoliante-clareador-rosa-mosqueta.jpeg",
        quantity: 0,
      },
      {
        id: 63,
        name: "Esfoliante clareador de açafrão",
        price: 25.00,
        description: `Esfoliante clareador de açafrão (facial e corporal) 
        Esfoliação suave: O esfoliante de açafrão ajuda a remover as células mortas da camada superficial da pele, 
        promovendo uma esfoliação suave. Isso pode melhorar a textura da pele, deixando-a mais macia, suave e renovada.
         Clareamento da pele: O açafrão é conhecido por suas propriedades clareadoras naturais`,
        imageUrl: "/faciais-corporais/esfoliante-clareador-acafrao.jpeg",
        quantity: 0,
      },
      {
        id: 64,
        name: "Kit banho de lua antialérgico babbaloo uva",
        price: 30.00,
        description: `Kit banho de lua antialérgico babbaloo uva (pelos dourados,pele limpa e hidratada, não arde, não pinica)
        Esfoliante clareador 
        Água oxigenada 
        Pó descolorante 
        Óleo protetor 
        Sabonete líquido 
        Hidratante 
        Espátula 
        Luva 
        Touca`,
        imageUrl: "/faciais-corporais/kit-banho-de-lua-babalo-uva.jpeg",
        quantity: 0,
      },
      {
        id: 65,
        name: "Kit banho de lua antialérgico babbaloo",
        price: 30.00,
        description: `Kit banho de lua antialérgico babbaloo ( pelos dourados,pele limpa e hidratada, não arde, não pinica)
        Esfoliante clareador 
        Água oxigenada 
        Pó descolorante 
        Óleo protetor 
        Sabonete líquido 
        Hidratante 
        Espátula 
        Luva 
        Touca`,
        imageUrl: "/faciais-corporais/kit-banho-de-lua-babalo-tut-frut.jpeg",
        quantity: 0,
      },
      {
        id: 66,
        name: "Kit banho de lua antialérgico de rosa mosqueta",
        price: 30.00,
        description: `Kit banho de lua antialérgico de rosa mosqueta( pelos dourados,pele limpa e hidratada, não arde, não pinica)
        Esfoliante clareador 
        Água oxigenada 
        Pó descolorante 
        Óleo protetor 
        Sabonete líquido 
        Hidratante 
        Espátula 
        Luva 
        Touca`,
        imageUrl: "/faciais-corporais/kit-banho-de-lua-rosa-mosqueta.jpeg",
        quantity: 0,
      },
      {
        id: 67,
        name: "Kit banho de lua antialérgico de pêssego",
        price: 30.00,
        description: `Kit banho de lua antialérgico de pêssego ( pelos dourados,pele limpa e hidratada, não arde, não pinica)
        Esfoliante clareador 
        Água oxigenada 
        Pó descolorante 
        Óleo protetor 
        Sabonete líquido 
        Hidratante 
        Espátula 
        Luva 
        Touca`,
        imageUrl: "/faciais-corporais/kit-banho-de-lua-pessego.jpeg",
        quantity: 0,
      },
      {
        id: 68,
        name: "Kit banho de lua antialérgico de morango",
        price: 30.00,
        description: `Kit banho de lua antialérgico de morango ( pelos dourados,pele limpa e hidratada, não arde, não pinica)
        Esfoliante clareador 
        Água oxigenada 
        Pó descolorante 
        Óleo protetor 
        Sabonete líquido 
        Hidratante 
        Espátula 
        Luva 
        Touca`,
        imageUrl: "/faciais-corporais/kit-banho-de-lua-moeango.jpeg",
        quantity: 0,
      },
      {
        id: 69,
        name: "Kit Labotrat morango",
        price: 40.00,
        description: `Kit Labotrat Esfoliante 150g + Hidratante 190g Morango`,
        imageUrl: "/faciais-corporais/kit-hidratante-esfoliante-morango.jpeg",
        quantity: 0,
      },
      {
        id: 70,
        name: "Kit Labotrat cereja",
        price: 40.00,
        description: `Kit Labotrat Esfoliante 150g + Hidratante 190g cereja`,
        imageUrl: "/faciais-corporais/kit-hidratante-esfoliante-cereja.jpeg",
        quantity: 0,
      },
      {
        id: 71,
        name: "Kit Labotrat melancia",
        price: 40.00,
        description: `Kit Labotrat Esfoliante 150g + Hidratante 190g Melancia `,
        imageUrl: "/faciais-corporais/kit-hidratante-esfoliante-melancia.jpeg",
        quantity: 0,
      },
      {
        id: 72,
        name: "Kit Labotrat pitaya",
        price: 40.00,
        description: `Kit Labotrat Esfoliante 150g + Hidratante 190g Pitaya`,
        imageUrl: "/faciais-corporais/kit-hidratante-esfoliante-pitaya.jpeg",
        quantity: 0,
      },
      {
        id: 73,
        name: "Kit banho de lua antialérgico babbaloo morango",
        price: 30.00,
        description: `Kit banho de lua antialérgico babbaloo morango (pelos dourados,pele limpa e hidratada, não arde, não pinica)
        Esfoliante clareador 
        Água oxigenada 
        Pó descolorante 
        Óleo protetor 
        Sabonete líquido 
        Hidratante 
        Espátula 
        Luva 
        Touca`,
        imageUrl: "/faciais-corporais/kit-banho-de-lua-babalo-morango.jpeg",
        quantity: 0,
      },

    ]
  },
  {
    id: 6,
    name: "Sabonetes",
    products: [
      {
        id: 74,
        name: "Sabonete íntimo mentos morango ",
        price: 12.00,
        description: `Age reequilibrando o pH, evita maus odores, além de proporcionar cuidado e sensação de bem-estar prolongada. 250ml`,
        imageUrl: "/Sabonetes/sabonete-intimo-mentos.jpeg",
        quantity: 0,
      },
      {
        id: 75,
        name: "Sabonete íntimo babbaloo de banana ",
        price: 12.00,
        description: `Age reequilibrando o pH, evita maus odores, além de proporcionar cuidado e sensação de bem-estar prolongada. 250ml`,
        imageUrl: "/Sabonetes/sabonete-babalo-banana.jpeg",
        quantity: 0,
      },
      {
        id: 76,
        name: "Sabonete íntimo fini beijinho ",
        price: 12.00,
        description: `Age reequilibrando o pH, evita maus odores, além de proporcionar cuidado e sensação de bem-estar prolongada. 250ml`,
        imageUrl: "/Sabonetes/sabonete-intimo-fini-beijinho.jpeg",
        quantity: 0,
      },
      {
        id: 77,
        name: "Sabonete rosa mosqueta líquido",
        price: 12.00,
        description: `Corporal - Facial ,corporal e íntimo
        Ph balanceado, hidratante, antisséptico. 200ml`,
        imageUrl: "/Sabonetes/sabonete-liquido-rosa-mosqueta.jpeg",
        quantity: 0,
      },
      {
        id: 78,
        name: "Sabonete em barra rosa mosqueta 90g",
        price: 12.00,
        description: ``,
        imageUrl: "/Sabonetes/sabonete-barra-rosa-mosqueta.jpeg",
        quantity: 0,
      },
      {
        id: 79,
        name: "Sabonete em barra argila verde",
        price: 12.00,
        description: ``,
        imageUrl: "/Sabonetes/sabonete-barra-argila-verde.jpeg",
        quantity: 0,
      },
      {
        id: 80,
        name: "Mousse de rosa mosqueta",
        price: 28.00,
        description: `Mousse de rosa mosqueta limpeza facial 
        (Sabonete facial) `,
        imageUrl: "/Sabonetes/sabonete-facial-rosa-mosqueta.jpeg",
        quantity: 0,
      },
      

    ]
  },


];

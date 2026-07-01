export interface HeroSlide {
  category: string;
  title: string;
  btnText: string;
  videoUrl: string;
  videoSrc: string;
}

export interface Brand {
  name: string;
  href: string | null;
  img: string;
}

export interface PortfolioProject {
  category: string;
  title: string;
  artist: string;
  videoUrl: string;
  modalTitle: string;
  img: string;
  playlistUrl?: string;
  role?: string;
}

export const heroSlides: HeroSlide[] = [
  {
    category: "Álbum",
    title: "XTRANHO - MATUÊ",
    btnText: "Assistir Produção",
    videoUrl: "https://www.youtube.com/watch?v=wc9UwhMyJfQ",
    videoSrc: "/Videos/matue.mp4",
  },
  {
    category: "Videoclipe",
    title: "BUDAH, Duquesa - VIP (ninguém te conhece)",
    btnText: "Assistir Produção",
    videoUrl: "https://www.youtube.com/watch?v=ltnKqdBPxFg",
    videoSrc: "/Videos/duq.mp4",
  },
  {
    category: "Publicidade & Games",
    title: "Anitta — Free Fire",
    btnText: "Assistir Produção",
    videoUrl: "https://www.youtube.com/watch?v=myDqNZq7r9w",
    videoSrc: "/Videos/Anitta - Free Fire.mp4",
  },
  // {
  //   category: "Documentário / Social",
  //   title: "Facilitadão",
  //   btnText: "Assistir Produção",
  //   videoUrl: "/Videos/facilitadao.mp4",
  //   videoSrc: "/Videos/facilitadao.mp4",
  // },
  {
    category: "Videoclipe Oficial",
    title: "Veigh — Nóis é Nóis",
    btnText: "Assistir Clipe",
    videoUrl: "https://www.youtube.com/watch?v=djivfk-F4OI",
    videoSrc: "/Videos/VEIGH - Nois é Nois (Clipe Oficial).mp4",
  },
  // {
  //   category: "Performance & Arte",
  //   title: "Iza — O Movimento",
  //   btnText: "Assistir Vídeo",
  //   videoUrl: "https://www.youtube.com/watch?v=HTD7DQDsILk",
  //   videoSrc: "/Videos/Iza - O Movimento.mp4",
  // },
  {
    category: "Campanha Publicitária",
    title: "Pizza Hut — Melts",
    btnText: "Assistir Comercial",
    videoUrl: "https://www.youtube.com/watch?v=4Se0tylmoi8",
    videoSrc: "/Videos/Pizza Hut - Melts.mp4",
  },
];

export const brands: Brand[] = [
  { name: "Netflix", href: "https://www.youtube.com/watch?v=HTD7DQDsILk", img: "/img/NETFLIX_1.png" },
  { name: "Gullane", href: "https://www.youtube.com/watch?v=m_BEMdH7184", img: "/img/GULLANE_1.png" },
  { name: "Corazon Filmes", href: "https://www.youtube.com/watch?v=UImGizEEAzQ", img: "/img/CORAZON_1.png" },
  { name: "HBO Max", href: "https://www.youtube.com/watch?v=m_BEMdH7184", img: "/img/MAX_1.png" },
  { name: "Hot Wheels", href: "https://www.youtube.com/watch?v=tC_Y_cf1HLc", img: "/img/HOT_WHELLS.png" },
  { name: "Hypebeast", href: "https://www.instagram.com/reel/CmewoQZooIb/", img: "/img/HYPEBEAST_1.png" },
  { name: "Cafe Royal", href: "https://www.youtube.com/watch?v=myDqNZq7r9w", img: "/img/CAFE_ROYAL_1.png" },
  { name: "Globoplay", href: "https://globoplay.globo.com/40m/t/2fVbYDHjqH/", img: "/img/GLOBOPLAY_1.png" },
  { name: "Hungry Man", href: "https://www.youtube.com/watch?v=4Se0tylmoi8", img: "/img/HUNGRY_MAN_1.png" },
  { name: "Claro", href: "https://www.youtube.com/watch?v=UImGizEEAzQ", img: "/img/claro_logo.png" },
  { name: "Deezer", href: "https://www.youtube.com/watch?v=yEvEsnf2tRk", img: "/img/deezer.png" },
  { name: "Google", href: null, img: "/img/google_logo.png" },
  { name: "Honda", href: "https://www.youtube.com/watch?v=hlRx9ZDhBJU", img: "/img/honda_logo.png" },
  { name: "IGC Partners", href: null, img: "/img/igc_partners_logo.png" },
  { name: "KLM Airlines", href: null, img: "/img/KLM_logo.png" },
  { name: "O2 Filmes", href: null, img: "/img/o2_filmes_logo.png" },
  { name: "Pedigree", href: null, img: "/img/pedigree_logo.png" },
  { name: "iFood", href: null, img: "/img/ifood.png" },
  { name: "Pizza Hut", href: null, img: "/img/pizza_hut.png" },
  { name: "th4ys", href: "https://www.instagram.com/reel/C3yPMTIJJry/", img: "/img/th4ys.png" },
  { name: "Volkswagen", href: "https://www.instagram.com/p/Czw0zolPana/", img: "/img/volkswagen_logo.png" },
  { name: "Avon", href: "https://www.avon.com.br/", img: "/img/avonlogo.png" },
  // { name: "Droper", href: "https://droper.app/", img: "/img/droper.webp" },
  { name: "Ecko", href: "https://www.eckoshop.com.br/", img: "/img/ecko.svg" },
  { name: "Galeria Holding", href: "https://galeria.ag/", img: "/img/galeria-holding-pt.png" },
  { name: "Kenner", href: "https://www.kenner.com.br/", img: "/img/kennerlogo.png" },
  { name: "KondZilla", href: "https://kondzilla.com/", img: "/img/KondZilla_logo.webp" },
  { name: "McDonald's", href: "https://www.mcdonalds.com.br/", img: "/img/mequi.png" },
  { name: "Natura", href: "https://www.natura.com.br/", img: "/img/natura.png" },
  { name: "Puma", href: "https://br.puma.com/", img: "/img/pumalogo.png" },
  { name: "Red Bull", href: "https://www.redbull.com/br-pt", img: "/img/redbull.png" },
  { name: "SBP", href: "https://www.sbpprotege.com.br/produtos/inseticida-aerossol/multi-inseticida/", img: "/img/sbp.png" },
];

export enum Categories {
  Videoclipe = "Videoclipe",
  Publicidade = "Publicidade",
  Documentario = "Documentário",
  ProjetoSocialAudiovisual = "Projeto Social / Audiovisual",
}

export const portfolioProjects: PortfolioProject[] = [

  { category: Categories.Videoclipe, title: "XTRANHO", artist: "Matuê", videoUrl: "https://www.youtube.com/watch?v=Z3_jY015bsE&list=PLEd-urvJlSm_7OfWssVWyCYgS1biu5BV0&index=9", modalTitle: "Matuê — XTRANHO", img: "/img/xtranho.png", playlistUrl: "https://www.youtube.com/playlist?list=PLEd-urvJlSm_7OfWssVWyCYgS1biu5BV0" },

  { category: Categories.Videoclipe, title: "Colapso Global", artist: "Teto & Wiu", videoUrl: "https://www.youtube.com/watch?v=tqLzFFt8t4M&list=PLEd-urvJlSm_f19gOUc2mq7fas-TeRc3q", modalTitle: "Jornal Global: O Colapso é real", img: "/img/colapso_global_thumb.png", role: "Direção de produção" },
  
  { category: Categories.Videoclipe, title: "Facecard", artist: "Wiu & Teto - ft. Yuri Redicopa", videoUrl: "https://www.youtube.com/watch?v=MFsxevr9Wb8", modalTitle: "FACECARD WIU & TETO ft. YURI REDICOPA (Clipe Oficial) 30PRAUM", img: "/img/facecard_thumb.png", role: "Direção de produção" },
  
  { category: Categories.Videoclipe, title: "Tudo tão novo", artist: "G.A", videoUrl: "https://www.youtube.com/watch?v=SCDt1KugOpg", modalTitle: "G.A - Tudo Tão Novo (Clipe Oficial)", img: "/img/g_a_thumb1.jpg", role: "Direção de produção" },
  
  { category: Categories.Videoclipe, title: "Isso aqui é Brasil", artist: "Wiu, Teto e Deekapz", videoUrl: "https://www.youtube.com/watch?v=1bJXSAytcYY", modalTitle: "Isso aqui é Brasil (Clipe Oficial)", img: "/img/issoeobrasil_thumb.png", role: "Direção de produção" },
  
  { category: Categories.Videoclipe, title: "Japonês", artist: "BRANDÃO85, Matuê", videoUrl: "https://www.youtube.com/watch?v=pvH-NtivkQs", modalTitle: "Japonês", img: "/img/thumb_japones.jpg", role: "Direção de produção" },
  
  { category: Categories.Publicidade, title: "Hyper-Z Pro", artist: "Kenner", videoUrl: "https://www.youtube.com/watch?v=JkWRIckNPlU", modalTitle: "HYPER-Z PRO", img: "/img/kenner_thumb.jpg", role: "Direção de produção" },
  
  { category: Categories.Publicidade, title: "Bang Bang - Free Fire ft. Matuê", artist: "Free Fire - ft. Matuê", videoUrl: "https://www.youtube.com/watch?v=i0aZVFeY6ok", modalTitle: "Bang Bang - Free Fire ft. Matuê", img: "/img/matue_freefire_thumb.png", role: "Direção de produção" },

  { category: Categories.Publicidade, title: "Lançamento: McCrispy Chicken Bacon Ranch", artist: "McDonald's", videoUrl: "https://www.instagram.com/stories/highlights/18077851174786813/", modalTitle: "Lançamento: McCrispy Chicken Bacon Ranch", img: "/img/mc_thumb.jpeg", role: "Direção de produção" },
  
  { category: Categories.Publicidade, title: "Ativação Natura", artist: "Natura", videoUrl: "https://www.instagram.com/stories/highlights/18067369042830447/", modalTitle: "Ativação Natura", img: "/img/thumb_natura.jpg", role: "Direção de produção/projeto, pesquisa criativa e produção executiva" },
  
  { category: Categories.Publicidade, title: "Puma H-Street", artist: "Puma", videoUrl: "https://www.instagram.com/p/DLWSA_tz_4o/?igsh=ODF0d2t2a3poNWRt", modalTitle: "Puma H-Street", img: "/img/puma_thumb.jpeg", role: "Direção de produção/projeto, pesquisa criativa e produção executiva" },
  
  { category: Categories.Publicidade, title: "SBP - Contra a dengue", artist: "SBP", videoUrl: "https://www.instagram.com/stories/highlights/17955935286068168/", modalTitle: "SBP - Contra a dengue", img: "/img/thumb_sbp.jpeg", role: "Direção de produção/projeto, pesquisa criativa e produção executiva", playlistUrl: "https://www.instagram.com/reel/DWY_SHkjTwd/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==" },
  
  { category: Categories.Videoclipe, title: "VIP (Ninguém te conhece)", artist: "Budah & Duquesa", videoUrl: "https://www.youtube.com/watch?v=ltnKqdBPxFg", modalTitle: "BUDAH, Duquesa - VIP (ninguém te conhece)", img: "/img/vip_thumb.jpg", role: "Direção de produção/projeto, pesquisa criativa e produção executiva" },
  
  { category: Categories.Videoclipe, title: "EP Coloca O Capacete", artist: "Zé Felipe", videoUrl: "https://www.youtube.com/watch?v=OgkQ9UJivko&list=PLS9ldWLfTcZspV3nkrf50RkfSCYN8aeOq", modalTitle: "Zé Felipe — EP Coloca O Capacete", img: "/img/ZÉ FELIPE EP Coloca O Capacete.png" },
  
  { category: Categories.Videoclipe, title: "Espaço de Voz", artist: "MC Negão Original", videoUrl: "https://www.youtube.com/watch?v=FhYAHwnhXsI&list=PL8QOttFSJWkaXg5GNIwABdHoFXwnUSoAj", modalTitle: "MC Negão Original — Espaço de Voz", img: "/img/MC Negão Original Espaço de Voz.png" },
  
  { category: Categories.Videoclipe, title: "Desabafo", artist: "MC Kadu, GP, Tuto & Jottak", videoUrl: "https://www.youtube.com/watch?v=2O93e15Sa2M", modalTitle: "MC Kadu, GP, Tuto & Jottak — Desabafo", img: "/img/DESABAFO - MC KADU, MC GP, MC TUTO E MC JOTTAK.jpg" },
  
  { category: Categories.Videoclipe, title: "Amor é Mentira", artist: "MC Livinho, Arana & Jeeh FDC", videoUrl: "https://www.youtube.com/watch?v=djivfk-F4OI", modalTitle: "MC Livinho & DJ Arana — Amor é Mentira", img: "/img/AMOR É MENTIRA -  MC Livinho, DJ Arana e DJ Jeeh FDC.png" },
  
  { category: Categories.Videoclipe, title: "NU", artist: "Anitta feat. Hitmaker", videoUrl: "https://www.youtube.com/watch?v=4Se0tylmoi8", modalTitle: "Anitta feat. Hitmaker — NU", img: "/img/Anitta - NU (feat. HITMAKER).png" },
  
  { category: Categories.Videoclipe, title: "VAI VENDO", artist: "Anitta feat. Mc Ryan SP", videoUrl: "https://www.youtube.com/watch?v=UvX4obmAp3g", modalTitle: "Anitta feat. Mc Ryan SP — VAI VENDO", img: "/img/Anitta - VAI VENDO [feat. Mc Ryan SP].png" },
  
  { category: Categories.Videoclipe, title: "Jóia Rara", artist: "Pedro Sampaio & MC Tato", videoUrl: "https://www.youtube.com/watch?v=4NPJzmilvik", modalTitle: "Pedro Sampaio & MC Tato — Jóia Rara", img: "/img/PEDRO SAMPAIO, MC Tato - JOIA RARA.png" },
  
  { category: Categories.Videoclipe, title: "Mete Love", artist: "MC Lan & Kotim", videoUrl: "https://www.youtube.com/watch?v=EeDDf8F-fyg", modalTitle: "MC Lan & Kotim — Mete Love", img: "/img/mete_love_mc_lan_e_kotim.png" },
  
  { category: Categories.Videoclipe, title: "Pecinha Nível 10", artist: "DJ Arana, Yuri Redicopa & Meno Saaint", videoUrl: "https://www.youtube.com/watch?v=_ZrGCZHehSA", modalTitle: "DJ Arana & Yuri Redicopa — Pecinha Nível 10", img: "/img/pecinha_nivel_10_dj_arana_yuri_redicopa_meno_saaint_thumb.png" },
  
  { category: Categories.Videoclipe, title: "Pouco Papo e Muito Vapo", artist: "MC Jeeh FDC & MC Arcanjo", videoUrl: "https://www.youtube.com/watch?v=FtlH7YjE07Y", modalTitle: "MC Jeeh FDC & MC Arcanjo — Pouco Papo e Muito Vapo", img: "/img/pouco_papo_e_muito_vapo_mc_jeeh_fdc_mc_arcanjo.png" },
  
  // { category: "Videoclipe / Dança", title: "Sentido e o Baile", artist: "Luana Maia & DJ Klb", videoUrl: "https://www.youtube.com/watch?v=0HEcOtoplhk", modalTitle: "Luana Maia — Sentido e o Baile", img: "/img/sentido_e_o_baile_Luana_Maia_dj_klb_thumb.png" },
  
  { category: Categories.Videoclipe, title: "Sesh Delas", artist: "Nivy", videoUrl: "https://www.youtube.com/watch?v=1s7UJMzQbmc", modalTitle: "Nivy — Sesh Delas", img: "/img/sesh_delas_Nivy_thumb.png" },
  
  { category: Categories.Publicidade, title: "Tchau Bella", artist: "Bella Ciao Versão Brasil", videoUrl: "https://www.youtube.com/watch?v=HTD7DQDsILk", modalTitle: "Netflix — Tchau Bella", img: "/img/TCHAU_BELLA_NETFLIX_THUMB.png" },
  
  { category: Categories.Publicidade, title: "Se Joga no Boom", artist: "Free Fire Latam", videoUrl: "https://www.youtube.com/watch?v=myDqNZq7r9w", modalTitle: "Free Fire — Se Joga no Boom", img: "/img/SE_JOGA_NO_BOOM_FREE_FIRE_THUMB.jpg" },
  
  { category: Categories.Publicidade, title: "Texaco Instalações", artist: "Campanha Promocional", videoUrl: "https://www.instagram.com/p/C8VUYe2O7D7/", modalTitle: "Texaco Lubrificantes", img: "/img/WhatsApp Image 2024-06-18 at 20.52.54.jpeg" },
  
  { category: Categories.Publicidade, title: "Lançamento Volkswagen", artist: "Volkswagen Brasil", videoUrl: "https://www.instagram.com/p/Czw0zolPana/", modalTitle: "Volkswagen Brasil", img: "/img/WhatsApp Image 2024-06-18 at 20.55.19.jpeg" },
  
  { category: Categories.Publicidade, title: "O Beijo Adolescente", artist: "HBO Max Brasil", videoUrl: "https://www.youtube.com/watch?v=m_BEMdH7184", modalTitle: "HBO Max — O Beijo Adolescente", img: "/img/Beijo_Adolescente_HBO_MAX.jpg" },
  
  { category: Categories.Publicidade, title: "Desafio Hot Wheels", artist: "SBT Kids", videoUrl: "https://www.youtube.com/watch?v=tC_Y_cf1HLc", modalTitle: "Hot Wheels SBT", img: "/img/Hotwhells_SBT_1.png" },
  
  { category: Categories.Publicidade, title: "Claro na Copa", artist: "Claro Brasil", videoUrl: "https://www.youtube.com/watch?v=UImGizEEAzQ", modalTitle: "Claro Copa", img: "/img/CLARO_COPA.png" },
  
  { category: Categories.Publicidade, title: "Deezer Sessions Brasil", artist: "Deezer Music", videoUrl: "https://www.youtube.com/watch?v=yEvEsnf2tRk", modalTitle: "Deezer Sessions", img: "/img/Deezer_1.png" },
  
  { category: Categories.Documentario, title: "40m²", artist: "Globoplay", videoUrl: "https://globoplay.globo.com/40m/t/2fVbYDHjqH/", modalTitle: "Globoplay — 40m²", img: "/img/40m2_globoplay_thumb.jpg" },
  
  { category: Categories.Publicidade, title: "Hypebeast Cobertura", artist: "Hypebeast Brasil", videoUrl: "https://www.instagram.com/reel/CmewoQZooIb/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==", modalTitle: "Hypebeast Brasil", img: "/img/HYPEBEAST_BRASIL.png" },
  
  { category: Categories.Publicidade, title: "Baile da Thays", artist: "Aftermovie Oficial", videoUrl: "https://www.instagram.com/reel/C3yPMTIJJry/?igsh=eWw5YnNpdXllem93", modalTitle: "Baile da Thays", img: "/img/Baile_da_thays.jpeg" },
  
  { category: Categories.ProjetoSocialAudiovisual, title: "Projeto Paracine", artist: "Democratizando o Cinema", videoUrl: "https://www.instagram.com/reel/C8DbqaKxn6s/?igsh=OHc0Z3FwYXZhZTJh", modalTitle: "Projeto Paracine", img: "/img/PARA_CINE.jpeg" },
];

export const galleryImages = [
  { src: "/img/1.jpg", alt: "Galeria 1" },
  { src: "/img/2.jpg", alt: "Galeria 2" },
  { src: "/img/3.jpg", alt: "Galeria 3" },
  { src: "/img/4.jpeg", alt: "Galeria 4" },
  { src: "/img/5.jpeg", alt: "Galeria 5" },
  { src: "/img/6.jpeg", alt: "Galeria 6" },
  { src: "/img/7.jpeg", alt: "Galeria 7" },
  { src: "/img/8.png", alt: "Galeria 8" },
  { src: "/img/9.png", alt: "Galeria 9" },
];

// Contenido basado en el canal de YouTube de Santi (descripción y capítulos publicados). Validar con Santi antes de publicar.
export const site = {
  name: "Santi Beni", tag: "MOTOVIAJERO",
  title: "De Ushuaia a Alaska en una Wave 110cc",
  motto: "La aventura es el coraje de animarse",
  instagram: "https://www.instagram.com/santibeni_motoviajero/", igHandle: "@santibeni_motoviajero",
  igDM: "https://ig.me/m/santibeni_motoviajero",
  youtube: "https://www.youtube.com/@SANTIBENIMOTOVIAJERO",
  tiktok: "https://www.tiktok.com/@santi_beni_motoviajero",
  email: "santi_beni@live.com.ar",
  url: "https://santibeni.example", // TODO: dominio real
};
export const nav: [string, string][] = [["Inicio","/"],["Historia","/historia"],["Recorrido","/recorrido"],["Diario","/diario"],["Videos","/videos"]];
export const photos: Record<string,string> = {
  hero:"/images/hero.jpg", portrait:"/images/portrait.jpg", santi:"/images/Santi.jpg", moto:"/images/moto.jpg",
  ripio:"/images/ripio.jpg", cordillera:"/images/cordillera.jpg", cordillera2:"/images/cordillera-2.jpg",
  ushuaia:"/images/ushuaia-alaska.jpg", logo:"/images/logo.jpg",
};
export const support = { alias: "santibenimotoviajero", platform: "Mercado Pago", qrImage: "" };
export const stats = [{ value:"69,7 K", label:"suscriptores en YouTube" }, { value:"+21.000", label:"km en la primera etapa" }, { value:"4.500", label:"msnm en Mina La Mexicana" }, { value:"337", label:"videos publicados" }];
export const now = { place:"Norte argentino · Catamarca y Tucumán", detail:"Túneles de Paclín, Rumi Punco y acampes a orillas del río, rumbo al norte", date:"Octubre 2026", photo:"hero" };

export type Stage = { slug:string; title:string; place:string; region:string; chapters:string; desc:string; photo:string; x:number; y:number; text:string[]; data:{label:string;value:string}[]; gallery:string[]; video?:string };
export const stages: Stage[] = [
 { slug:"ushuaia-deje-todo", title:"Ushuaia: dejé todo", place:"Ushuaia, Tierra del Fuego", region:"Patagonia", chapters:"Cap. 24–25", desc:"Renuncié al trabajo, vendí mis cosas y arranqué desde el fin del mundo.", photo:"ushuaia", x:56, y:124, video:"EqqtrdpOO20",
   text:["¿Vale la pena venderlo todo por un sueño? Tomé la decisión más difícil de mi vida: renuncié a mi trabajo y vendí mis pertenencias para unir Ushuaia con Alaska en mi Honda Wave 110cc.","Muchos me dijeron que estaba loco, que una 110 no se iba a bancar el desafío. Pero acá estoy. El motor es chico, pero las ganas de recorrer el continente son gigantes.","Antes de salir de Tierra del Fuego dejé la moto unos días y seguí de mochilero. Después, con la Wavelona cargada, empecé a subir hacia el norte."],
   data:[{label:"Punto",value:"Kilómetro 0"},{label:"Moto",value:"Honda Wave 110cc"},{label:"Terreno",value:"Asfalto y ripio"},{label:"Clima",value:"Frío y viento"}], gallery:["ushuaia","portrait"] },
 { slug:"vientos-calafate-chalten", title:"Vientos de 100 km/h, El Calafate y El Chaltén", place:"Santa Cruz", region:"Patagonia", chapters:"Cap. 26–27", desc:"Ráfagas brutales en la Ruta 3 y la Ruta 40, y sobrevivir en los lugares más caros del país.", photo:"ripio", x:50, y:108, video:"VMYDrULrA5s",
   text:["Camino a Río Gallegos por la Ruta 3 me encontré con ráfagas de 100 km/h. Después, por la Ruta 40, llegar a El Calafate fue una misión imposible y tuve que buscar refugio en un puesto de Vialidad.","El Calafate y El Chaltén son dos de los lugares más caros de Argentina, pero arriba de la Wave todo se ve distinto: dónde dormir, qué comer y cómo estirar los pesos para que la ruta no se termine antes de tiempo.","Con el Fitz Roy de fondo entendí que la vida me rodea de personas increíbles: recibí una mano gigante cuando más lo necesitaba."],
   data:[{label:"Rutas",value:"RN 3 y RN 40"},{label:"Viento",value:"Hasta 100 km/h"},{label:"Destacado",value:"Fitz Roy"},{label:"Dormí en",value:"Puesto de Vialidad"}], gallery:["ripio","portrait"] },
 { slug:"ruta-40-73-malditos", title:"Ruta 40: los 73 malditos y la cadena cortada", place:"Ruta 40, de Santa Cruz a Río Negro", region:"Patagonia", chapters:"Cap. 28–33", desc:"El ripio más temido, la moto que no daba más y una cadena cortada antes de Bariloche.", photo:"cordillera", x:46, y:90, video:"-nXvLGYPZ0I",
   text:["Llegué a los famosos 73 malditos, el tramo de ripio más temido de la Ruta 40, entre Tres Lagos y Gobernador Gregores. Lo que parecía una victoria terminó siendo el inicio de una pesadilla mecánica.","Me quedé sin nafta, la Wave empezó a fallar en la Ruta 41 Sur y hubo un día en que casi abandono el viaje. Pero seguí.","Entre El Bolsón y Bariloche la cadena dijo basta y se cortó por completo. Caminé 4 kilómetros bajo el sol para encontrar los pedazos y la reparé con lo que tenía a mano."],
   data:[{label:"Tramo",value:"Tres Lagos – Bariloche"},{label:"Terreno",value:"Ripio suelto"},{label:"Averías",value:"Nafta, motor y cadena"},{label:"Caminata",value:"4 km por la cadena"}], gallery:["cordillera","moto"] },
 { slug:"travesia-por-chile", title:"Travesía por Chile", place:"Chile", region:"Chile", chapters:"Cap. 34–38", desc:"Reencuentro con Poli, el volcán, ripio interminable y perderse de noche.", photo:"cordillera2", x:34, y:72, video:"ldSUa0qFhe0",
   text:["Crucé a Chile para reencontrarme con Poli, una gran amiga y motoviajera. Tirolesa, termas y risas… hasta que el viaje se complicó y ella tuvo que volver. Seguí solo hacia el volcán.","Después vinieron los tramos más duros: ripio interminable en el que la moto casi dijo basta y una noche en la que nos perdimos en el camino más peligroso hasta ahora.","Walter me lo advirtió: “No sigas así”. La cadena pagó el precio, pero aprendí la lección y seguimos juntos hacia la cordillera."],
   data:[{label:"País",value:"Chile"},{label:"Compañeros",value:"Poli y Walter"},{label:"Terreno",value:"Ripio y offroad"},{label:"Destacado",value:"Volcán y termas"}], gallery:["cordillera2","cordillera"] },
 { slug:"cruce-de-los-andes-con-nieve", title:"Cruce de los Andes con nieve y vuelta a casa", place:"Paso Los Libertadores → Córdoba", region:"Cuyo y Centro", chapters:"Cap. 39–40", desc:"Dijeron que era imposible cruzar los Andes en una 110 con nieve. 21.000 km después, volví a casa.", photo:"moto", x:44, y:62, video:"1TcAWahyvPY",
   text:["Desde La Calera, con Walter y cadena nueva, encaramos los caracoles chilenos rumbo al Paso Los Libertadores. Pasamos de la costa a la nieve en un abrir y cerrar de ojos.","Frío extremo cruzando la frontera, el Cristo Redentor y la duda de siempre: ¿aguantaría la Wavelona la altura? Aguantó.","De Mendoza a San Luis y de ahí a Córdoba. El reencuentro con mi abuela y el abrazo con mi mamá me recordaron por qué hago todo esto. El viaje a casa terminaba ahí, pero el sueño de Alaska recién empezaba."],
   data:[{label:"Paso",value:"Los Libertadores"},{label:"Clima",value:"Nieve y bajo cero"},{label:"Total etapa 1",value:"+21.000 km"},{label:"Llegada",value:"Córdoba"}], gallery:["moto","portrait"] },
 { slug:"alaska-dia-1-la-rioja", title:"Alaska Día 1: de Córdoba a La Rioja", place:"Córdoba → La Rioja", region:"Norte", chapters:"Cap. 41–44", desc:"Arranca el viaje en serio: Río Pintos, Termas de Quicho, la Cuesta de Miranda y Chilecito.", photo:"cordillera", x:46, y:52, video:"vywNnbbSiCs",
   text:["Después de prepararme con bajo presupuesto, llegó el día: dejé todo atrás para empezar el viaje de mi vida. Una despedida que casi no pude grabar de la emoción.","Primeros kilómetros por Río Pintos hasta las Termas de Quicho, y la primera noche acampando solo bajo las estrellas. Ahí entendí que ya no era un sueño.","Entré a La Rioja por la Cuesta de Miranda, crucé ríos con la moto cargada, recorrí Chilecito y la Estación 3 del Cable Carril de La Mexicana."],
   data:[{label:"Inicio",value:"19 de agosto de 2026"},{label:"Primera noche",value:"Acampe solo"},{label:"Destacado",value:"Cuesta de Miranda"},{label:"Terreno",value:"Ripio y vados"}], gallery:["cordillera","hero"] },
 { slug:"mina-la-mexicana", title:"Mina La Mexicana a 4.500 msnm", place:"Famatina, La Rioja", region:"Norte", chapters:"Cap. 45–46", desc:"Nieve, hielo y más de 40 cruces de ríos. El reto más difícil y hermoso hasta ahora.", photo:"portrait", x:42, y:46, video:"CJZcm3jWkZ4",
   text:["Muchos me dijeron que era una locura intentar subir a la Mina La Mexicana, a 4.500 msnm, en una Honda Wave 110cc.","Pusimos a prueba los límites de la Wavelona enfrentando nieve, hielo y más de 40 cruces de ríos. Los paisajes son de otro planeta, pero el esfuerzo físico y mecánico fue real.","Este no es solo un viaje hacia Alaska: es un desafío constante contra lo que “se supone” que una moto chica puede hacer."],
   data:[{label:"Altura",value:"4.500 msnm"},{label:"Cruces de río",value:"+40"},{label:"Terreno",value:"Nieve, hielo y piedra"},{label:"Dificultad",value:"La más alta"}], gallery:["portrait","cordillera2"] },
 { slug:"la-silleta-y-tuneles-de-paclin", title:"La Silleta y los túneles de Paclín", place:"Catamarca y Tucumán", region:"Norte", chapters:"Cap. 47–49", desc:"El acampe más extremo, la moto congelada y un túnel inundado.", photo:"hero", x:50, y:40, video:"TfmpLH83j0o",
   text:["Con Andrea subimos por la Cuesta de Humaya hasta el puesto de La Silleta. Noche bajo cero, fogón salvador y carpa con escarcha: a la mañana las motos amanecieron congeladas.","Después nos metimos en los túneles de Paclín (Catamarca) y los senderos de Rumi Punco (Tucumán). El agua cubrió el motor y el escape… y la Wave siguió andando.","Ahora sigo acampando a orillas de ríos, buscando lugares gratis y armando campamento cada día, con novedades importantes sobre el rumbo del viaje."],
   data:[{label:"Compañera",value:"Andrea"},{label:"Temperatura",value:"Bajo cero"},{label:"Destacado",value:"Túnel inundado"},{label:"Estado",value:"En curso"}], gallery:["hero","moto"] },
];
// Próximos destinos (marcadores huecos en el mapa)
export const nextStops: { name:string; x:number; y:number }[] = [
 { name:"Salta · Jujuy", x:48, y:34 }, { name:"Bolivia", x:46, y:28 }, { name:"Perú", x:36, y:22 }, { name:"Ecuador · Colombia", x:32, y:15 },
 { name:"Centroamérica", x:26, y:10 }, { name:"México · EE.UU.", x:20, y:6 }, { name:"Alaska", x:10, y:2 },
];

export type Post = { slug:string; title:string; summary:string; category:"Historias"|"Ruta"|"Moto"|"Consejos"|"Camping"; date:string; photo:string; video?:string; body:string[] };
export const posts: Post[] = [
 { slug:"alaska-dia-1", title:"Alaska Día 1: el comienzo del viaje acampando solo", summary:"La carga final, una despedida que casi no pude grabar y la primera noche solo bajo las estrellas.", category:"Historias", date:"Agosto 2026", photo:"cordillera", video:"vywNnbbSiCs",
   body:["¡Finalmente llegó el día! Dejé todo atrás para empezar el viaje de mi vida: llegar a Alaska en mi Honda Wave 110cc.","Preparé la Wavelona, hice los últimos abrazos con amigos y familia y salí. El primer desafío fue la ruta por Río Pintos; en el camino me crucé con un cementerio profanado que me dejó pensando.","Esa noche acampé solo por primera vez en esta etapa. Al día siguiente llegué a las Termas de Quicho.","Terminar el primer día bajo las estrellas me hizo entender que esto ya no es un sueño. ¡Ya empezó!"] },
 { slug:"el-acampe-mas-extremo", title:"El acampe más extremo: la moto se congeló", summary:"Una noche bajo cero en La Silleta con Andrea. ¿Habrán arrancado las motos a la mañana?", category:"Camping", date:"Septiembre 2026", photo:"portrait", video:"GEmnH3t2r9E",
   body:["Nos fuimos a la montaña con las motos chicas y el frío nos jugó una mala pasada.","Salimos con Andrea rumbo al puesto de La Silleta por la Cuesta de Humaya: ripio exigente, piedras sueltas, una pinchadura en plena ruta y alguna caída.","Llegamos a la cima y pasamos una de las noches más frías del viaje. Fogón salvador y carpa con escarcha.","A la mañana las motos amanecieron cubiertas de nieve. La gran duda era si la Wavelona iba a arrancar…"] },
 { slug:"mina-la-mexicana-en-110cc", title:"Mina La Mexicana en 110cc", summary:"4.500 msnm, nieve, hielo y más de 40 cruces de ríos: el reto más difícil hasta ahora.", category:"Ruta", date:"Septiembre 2026", photo:"cordillera2", video:"CJZcm3jWkZ4",
   body:["Muchos me dijeron que era una locura intentar subir a la Mina La Mexicana en una Honda Wave 110cc.","La subida es, hasta ahora, el reto más difícil y hermoso de toda mi travesía por Argentina.","Nieve, hielo y más de 40 cruces de ríos en La Rioja. Los paisajes son de otro planeta.","¿Llegamos a la cima o la altura nos ganó la partida? Te lo cuento en el video."] },
 { slug:"cruzar-los-andes-con-nieve", title:"Dijeron que era imposible cruzar los Andes en una 110 con nieve", summary:"El Paso Los Libertadores, los caracoles chilenos y el frío extremo en la frontera.", category:"Ruta", date:"Julio 2026", photo:"moto", video:"1TcAWahyvPY",
   body:["Después de meses increíbles recorriendo Chile tocaba despedirse y encarar uno de los desafíos más esperados y temidos: cruzar la Cordillera de los Andes por el Paso Los Libertadores.","Con cadena nueva y el corazón a mil salimos de La Calera con Walter para intentar llegar a Mendoza.","Pasamos de la costa a la nieve en un abrir y cerrar de ojos. ¿Aguantaría la Wavelona la altura del Cristo Redentor?","Como siempre, el camino nos tenía preparada una sorpresa."] },
 { slug:"mi-equipo-para-grabar", title:"Mi secreto para grabar solo y que parezca una película", summary:"Mi equipo completo: GoPro, drone, micrófonos, soportes y cómo edito en la ruta.", category:"Consejos", date:"Julio 2026", photo:"santi", video:"bPCcMLGuF8s",
   body:["Muchos me preguntan cómo hago para grabar mis viajes solo en moto. Acá está todo mi arsenal.","El equipo principal es una GoPro con sus accesorios, montada en el casco con una pinza. Para las tomas aéreas uso un drone.","También hablo de celulares vs. cámara de mano, micrófonos y audio, y los soportes que uso en el casco, la moto y los trípodes.","Por último, cómo edito y administro los archivos sin perder nada en el camino."] },
 { slug:"equipo-de-camping", title:"Todo el equipo de camping que llevo en la 110cc", summary:"Cómo armo el campamento, qué uso para cocinar y cómo busco lugares gratis para dormir.", category:"Camping", date:"Octubre 2026", photo:"cordillera2", video:"5PjpzOy_iK0",
   body:["Les muestro todo el equipo de camping y supervivencia que llevo en la moto.","Primero, cómo busco lugares gratis para acampar. Después, el armado del campamento y una cocina a orillas del río.","Repaso la carpa, los elementos de cocina para ser autosuficiente y cada accesorio que me acompaña día a día.","Y al final, una gran noticia sobre el rumbo de esta aventura."] },
 { slug:"los-73-malditos", title:"Sobreviví a los 73 malditos, pero mi moto no aguantó", summary:"El tramo de ripio más temido de la Ruta 40, entre Tres Lagos y Gobernador Gregores.", category:"Moto", date:"Abril 2026", photo:"cordillera", video:"OQAxrVYHKhs",
   body:["Llegué a los famosos 73 malditos de la Ruta 40, el tramo de ripio más temido entre Tres Lagos y Gobernador Gregores.","Es uno de los desafíos más icónicos para cualquier motoviajero en Argentina. El camino estaba en condiciones increíbles…","…pero el destino me tenía preparada una sorpresa amarga: la moto empezó a fallar.","En ese momento no sabía cómo iba a continuar mi viaje hacia Alaska."] },
 { slug:"deje-todo-para-viajar-en-110cc", title:"Dejé todo para viajar en 110cc", summary:"Renuncié a mi trabajo y vendí mis cosas para unir Ushuaia con Alaska.", category:"Historias", date:"Marzo 2026", photo:"ushuaia", video:"EqqtrdpOO20",
   body:["¿Vale la pena venderlo todo por un sueño? Tomé la decisión más difícil de mi vida: renuncié a mi trabajo y vendí mis pertenencias.","Muchos me dijeron que estaba loco, que una 110 no se iba a bancar el desafío. Pero acá estoy.","Es el inicio de una aventura donde el motor es chico pero las ganas de recorrer el continente son gigantes.","¿Cuál creés que será el mayor desafío de viajar en una 110 por toda América? Contámelo en los comentarios."] },
];

export type Video = { id:string; title:string; desc:string; views:string; kind:"YouTube"|"Reel" };
// id = ID del video de YouTube (se embebe y se usa su miniatura)
export const videos: Video[] = [
 { id:"vywNnbbSiCs", title:"ALASKA DÍA 1: El comienzo del viaje en 110cc acampando solo", desc:"La despedida, Río Pintos y la primera noche solo.", views:"279 K", kind:"YouTube" },
 { id:"GEmnH3t2r9E", title:"El acampe más extremo: la moto se congeló", desc:"Noche bajo cero en La Silleta.", views:"129 K", kind:"YouTube" },
 { id:"1TcAWahyvPY", title:"Cruzar los Andes en una 110 con nieve", desc:"Paso Los Libertadores · Cap. 39", views:"117 K", kind:"YouTube" },
 { id:"CJZcm3jWkZ4", title:"Mina La Mexicana en 110cc", desc:"4.500 msnm y más de 40 cruces de ríos.", views:"107 K", kind:"YouTube" },
 { id:"TfmpLH83j0o", title:"Metí la 110cc a un túnel inundado", desc:"Túneles de Paclín · Cap. 48", views:"64 K", kind:"YouTube" },
 { id:"5PjpzOy_iK0", title:"Acampé solo en el río: esto llevo para sobrevivir", desc:"Equipo de camping completo · Cap. 49", views:"51 K", kind:"YouTube" },
 { id:"bPCcMLGuF8s", title:"Mi secreto para grabar solo y que parezca una película", desc:"Mi equipo completo de grabación.", views:"68 K", kind:"YouTube" },
 { id:"ugrHgGNSDwQ", title:"Así me preparo para Alaska en mi 110cc", desc:"Preparación con bajo presupuesto · Cap. 41", views:"83 K", kind:"YouTube" },
 { id:"qU8wHE5rDQ4", title:"¿Se termina el viaje? 21.000 km después volvemos a casa", desc:"El reencuentro con la familia · Cap. 40", views:"30 K", kind:"YouTube" },
 { id:"-nXvLGYPZ0I", title:"Casi pierdo la moto en la Ruta 40: se cortó la cadena", desc:"Entre El Bolsón y Bariloche · Cap. 33", views:"60 K", kind:"YouTube" },
 { id:"OQAxrVYHKhs", title:"Sobreviví a los 73 malditos pero mi moto no aguantó", desc:"Ruta 40, Santa Cruz · Cap. 28", views:"53 K", kind:"YouTube" },
 { id:"EqqtrdpOO20", title:"Dejé todo para viajar en 110cc", desc:"El comienzo en Ushuaia · Cap. 25", views:"33 K", kind:"YouTube" },
];
export const ytThumb = (id:string) => `https://i.ytimg.com/vi/${id}/hqdefault.jpg`;
export const ytEmbed = (id:string) => `https://www.youtube-nocookie.com/embed/${id}`;
export const ytWatch = (id:string) => `https://www.youtube.com/watch?v=${id}`;
export const photo = (k:string) => photos[k] || "";

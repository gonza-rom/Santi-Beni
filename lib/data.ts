// Contenido basado en el canal de YouTube de Santi (descripción y capítulos publicados). Validar con Santi antes de publicar.
import { episodes, type Episode } from "./episodes";
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
export const stats = [{ value:"69,7 K", label:"suscriptores en YouTube" }, { value:"+21.000", label:"km en la primera etapa" }, { value:"4.500", label:"msnm en Mina La Mexicana" }, { value:"50", label:"capítulos de la serie" }];
export const now = { place:"Norte argentino · Catamarca", detail:"Túneles de Paclín, Rumi Punco, Pomán y Andalgalá, rumbo al norte", date:"Octubre 2026", photo:"hero" };

// Etapas del recorrido: cada una agrupa los capítulos de YouTube (ids en lib/episodes.ts), en orden.
export const legs = ["Antes del viaje", "Córdoba → Ushuaia", "Ushuaia → Córdoba", "Rumbo a Alaska"] as const;
export type Stage = { slug:string; title:string; place:string; leg:typeof legs[number]; desc:string; photo:string; x:number; y:number; text:string[]; data:{label:string;value:string}[]; gallery:string[]; episodes:string[] };
export const stages: Stage[] = [
 { slug:"antes-de-salir", title:"Antes de salir: viajar sin fecha de vuelta", place:"Córdoba", leg:"Antes del viaje", desc:"Cansado de la rutina, un año antes de partir tomé la decisión. Elegir la moto, prepararla y dejar todo.", photo:"yt:9pjEZG9btfM", x:52, y:53,
   episodes:["9pjEZG9btfM","MtIrD2GB1FQ","BVkrW9hBEUc","LaOprGkhS0A","o-7YiHF8lNE","GiI3X0jprbs","8sMjhmMdRh4","RuOZvccH-K0"],
   text:["Cansado de la rutina, tomé la decisión de salir a viajar sin fecha de vuelta: crear un estilo de vida donde el protagonista sea viajar en moto por distintas partes del mundo.","Vivía solo y me mudé con mi mamá, tuve que dejar a mi perro, dudé mil veces qué moto elegir y al final me quedé con la que tenía: la Honda Wave 110cc.","Acá están los capítulos 0: la preparación, cómo equipé la 110 para un viaje largo y todo el equipaje que llevo para unir Ushuaia con Alaska."],
   data:[{label:"Serie",value:"Capítulos 0.0 a 0.3"},{label:"Moto elegida",value:"Honda Wave 110cc"},{label:"Tema",value:"Preparación y equipo"}], gallery:["hero","santi"] },
 { slug:"sierras-de-cordoba-y-merlo", title:"Día 1: Sierras de Córdoba y Merlo", place:"Córdoba y San Luis", leg:"Córdoba → Ushuaia", desc:"Arranca la serie: Parque Nacional Quebrada del Condorito, el Filo de Merlo, la policía y quedarse sin nafta.", photo:"yt:THga9wi26nE", x:48, y:57,
   episodes:["THga9wi26nE","4B54iFyIAYU","h63YA7MUf10"],
   text:["Equipé mi Honda Wave 110 para viajar de Córdoba a Ushuaia y de Ushuaia a Alaska. Mi sueño es vivir viajando, y ese fue el día 1.","Acampé y recorrí el Parque Nacional Quebrada del Condorito, con avistaje de cóndores incluido, y paseé por el Filo de Merlo… con “casi” un problema policial por dormir en un espacio público.","En el capítulo 3 pasó de todo: perdí los guantes, me quedé sin nafta, vi un accidente y acampé en el mejor lugar del mundo."],
   data:[{label:"Zona",value:"Sierras de Córdoba · Merlo"},{label:"Destacado",value:"Quebrada del Condorito"},{label:"Imprevistos",value:"Sin nafta y sin guantes"}], gallery:["hero","portrait"] },
 { slug:"mendoza-y-paso-portillo", title:"Mendoza: Paso Portillo y el Sosneado", place:"Mendoza", leg:"Córdoba → Ushuaia", desc:"Uspallata, el Cerro 7 Colores, el paso por donde cruzó San Martín a 3.200 msnm y el hotel abandonado del Sosneado.", photo:"cordillera2", x:32, y:62,
   episodes:["Fk95nh9pbMw","W8gfBgBDVXk","XrUKum14cwg","w9MU693YLZ4"],
   text:["Me encontré con Ro y fuimos a Uspallata por la Ruta Provincial 13. Camino al Cerro 7 Colores hubo una pequeña caída, aunque en el sendero offroad más difícil no nos caímos.","Nos hospedamos en los domos Amutuy, cortamos leña para bañarnos con agua calentita e intentamos subir al Paso Portillo, por donde San Martín cruzó los Andes. Bajar de 3.200 msnm fue otra aventura.","Compartimos en el Manzano Histórico con Ariel, conocimos San Rafael, me despedí de Ro y seguí solo hasta el Sosneado: el hotel abandonado, voces y ruidos de terror, y un camino durísimo hasta las termas de azufre."],
   data:[{label:"Altura máx.",value:"3.200 msnm"},{label:"Compañera",value:"Ro"},{label:"Destacado",value:"Hotel abandonado del Sosneado"}], gallery:["cordillera2","cordillera"] },
 { slug:"neuquen-chos-malal-y-pehuenia", title:"Neuquén: caída, volcanes y granizo", place:"Neuquén", leg:"Córdoba → Ushuaia", desc:"Una caída fuerte en el ripio de Bardas Blancas, el Salto del Agrio, Villa Pehuenia y la laguna en territorio mapuche.", photo:"yt:ilFVL8773hQ", x:29, y:72,
   episodes:["kr_6z1xS9Uc","ilFVL8773hQ","t8S80cT4x0Y"],
   text:["El ripio que une Bardas Blancas con Chos Malal me agarró con la guardia baja: sufrí una gran caída y un golpe muy fuerte. Un camping gratis en Ranquil Norte me recompuso para seguir.","De Chos Malal a Villa Pehuenia pasando por Caviahue, el Salto del Agrio y el puente de piedra con vista al volcán Copahue. En Loncopué me recibió Cami, y en Pehuenia caía granizo a la hora de acampar.","El granizo complicó todo y terminé acampando bajo un techito que me prestaron. Después me encontré con Gasti por Montañas para intentar llegar a la Laguna Verde, en territorio mapuche… y lo que parecía una aventura terminó mal."],
   data:[{label:"Ruta",value:"Bardas Blancas – Villa Pehuenia"},{label:"Clima",value:"Granizo"},{label:"Con",value:"Gasti por Montañas"}], gallery:["cordillera","moto"] },
 { slug:"paso-hua-hum-y-sur-de-chile", title:"Paso Hua Hum y el sur de Chile", place:"Neuquén → Puerto Montt", leg:"Córdoba → Ushuaia", desc:"Un paso fronterizo que poca gente conoce, cruce en balsa y una semana con una familia sureña.", photo:"yt:WtagxA47zTE", x:21, y:84,
   episodes:["WtagxA47zTE","YUKmhNqNXaM"],
   text:["Dejé Argentina por el Paso Hua Hum, un cruce muy bonito en balsa que no conoce mucha gente, y decidí seguir por Chile rumbo a la Carretera Austral hasta Ushuaia.","Una familia del sur de Chile me hospedó por un día… que terminó siendo una semana. Gracias a su buena onda (y a la lluvia) conocí Puerto Montt en profundidad: costumbres, comidas tradicionales, su forma de hablar y, sobre todo, de andar en moto."],
   data:[{label:"Frontera",value:"Paso Hua Hum (balsa)"},{label:"Base",value:"Puerto Montt"},{label:"Estadía",value:"Una semana en familia"}], gallery:["cordillera2","portrait"] },
 { slug:"carretera-austral", title:"Carretera Austral completa", place:"Ruta 7, Chile", leg:"Córdoba → Ushuaia", desc:"La carretera más linda del mundo: barcazas, el volcán Chaitén, cascadas, amigos de todo el mundo y Villa O'Higgins.", photo:"yt:WPf3Z8xM-BE", x:23, y:97,
   episodes:["WPf3Z8xM-BE","1-RbRCbGjMc","R60NimcBYsE","hFZGgRhThV8","XfVrw6udaIg","NGpQX2Oc538","k_ZYgTzzBJE","ZxHskmnaSlk"],
   text:["Desde el punto cero en Puerto Montt hacia el sur por Caleta La Arena y Hornopirén, con tres barcazas por los fiordos. Subí el volcán activo de Chaitén, que en 2008 arrasó el pueblo, y conocí a Daniel y su camping Parque Los Ríos.","Volví a Argentina para el service de la moto, hice el trekking al Salto Tronador (más de 100 metros de cascada) y conocí a Lea, una alemana viajando en una XR 190. La Wave se cayó sola dos veces: ¿mucho peso para una 110?","Con Eva, una amiga francesa, cruzamos un río en barcaza sin motor y subimos a la Laguna Cerro Castillo. Después, las Catedrales de Mármol, Navidad en Cochrane con amigos ciclistas, Caleta Tortel y el final de la Austral en Villa O'Higgins."],
   data:[{label:"Capítulos",value:"13 a 20"},{label:"Destacados",value:"Chaitén · Cerro Castillo · Mármol"},{label:"Final",value:"Villa O'Higgins"}], gallery:["cordillera2","portrait"] },
 { slug:"fiordos-punta-arenas-y-ushuaia", title:"Fiordos, Punta Arenas y Ushuaia", place:"Magallanes y Tierra del Fuego", leg:"Córdoba → Ushuaia", desc:"Tres días navegando el Pacífico, Punta Arenas, el Paso Garibaldi y 9 días de trekking en Isla Navarino.", photo:"ushuaia", x:36, y:124,
   episodes:["4E7xsY2rGeI","3BfktqOnUlk","_vk4a5Ld3Xo","tJaUrgFhG_g"],
   text:["Dejamos Villa O'Higgins llevando la cultura cordobesa a todas partes (fernet con coca incluido) y navegamos tres días por el Pacífico entre fiordos hasta Puerto Natales.","En Punta Arenas la gente de Chile me demostró que la frontera solo está en nuestra mente. Después, Tierra del Fuego: Río Grande, Tolhuin y la llegada a Ushuaia por el antiguo Paso Garibaldi, un camino bastante difícil.","Sin moto, exploramos la Isla Navarino con un trekking de 9 días cruzando la isla completa hasta Bahía Windhond."],
   data:[{label:"Navegación",value:"3 días por fiordos"},{label:"Llegada",value:"Ushuaia por Paso Garibaldi"},{label:"Trekking",value:"9 días en Isla Navarino"}], gallery:["ushuaia","ripio"] },
 { slug:"santa-cruz-viento-chalten-73-malditos", title:"Santa Cruz: viento, Chaltén y los 73 malditos", place:"Santa Cruz", leg:"Ushuaia → Córdoba", desc:"Empieza el regreso: ráfagas de 100 km/h, sobrevivir en El Calafate y El Chaltén, y el ripio más temido de la Ruta 40.", photo:"ripio", x:27, y:109,
   episodes:["EqqtrdpOO20","k9uRBwDZStg","VMYDrULrA5s","OQAxrVYHKhs"],
   text:["Dejé Ushuaia para empezar el regreso al norte. Por la Ruta 3 camino a Río Gallegos me encontré con ráfagas de 100 km/h, el embrague empezó a fallar y tuve que refugiarme en un puesto de Vialidad.","El Calafate y El Chaltén son dos de los lugares más caros de Argentina: dónde dormir, qué comer y cómo estirar los pesos. La vida me rodeó de personas increíbles y recibí una mano gigante.","Llegué a los famosos 73 malditos, entre Tres Lagos y Gobernador Gregores. El ripio estaba bien… pero al final la moto empezó a fallar."],
   data:[{label:"Rutas",value:"RN 3 y RN 40"},{label:"Viento",value:"Hasta 100 km/h"},{label:"Destacado",value:"Fitz Roy · 73 malditos"}], gallery:["ripio","portrait"] },
 { slug:"perito-moreno-ruta-40-bariloche", title:"Perito Moreno, Ruta 40 y la cadena cortada", place:"Santa Cruz → Río Negro", leg:"Ushuaia → Córdoba", desc:"El momento más crítico: empujar la moto, quedarse sin nafta, una estafa, Tamariscos y la cadena rota antes de Bariloche.", photo:"yt:a1ShikEunTw", x:26, y:92,
   episodes:["a1ShikEunTw","_Tr4dmQHpzk","xzK9S4_Urjw","qn02bl2uG9s","-nXvLGYPZ0I"],
   text:["En el Parque Perito Moreno y la Ruta 41 Sur me metí en el camino más difícil hasta ahora: caídas, roturas y 3 kilómetros empujando la Wavelona, solo y con todo roto.","Camino a Lago Posadas tuve una caída que me dejó atrapado bajo la moto y me quedé sin nafta. Después pinché dos veces, perdí la mochila de agua, el embrague dijo basta y me estafaron con un arreglo. Estuve a un paso de abandonar.","Salí de Río Mayo por el asfalto más destruido de la Ruta 40 y llegué a Tamariscos, un parador detenido en el tiempo, donde entrevisté a Lily. Entre El Bolsón y Bariloche se cortó la cadena y caminé 4 km para encontrar los pedazos."],
   data:[{label:"Tramo",value:"Perito Moreno – Bariloche"},{label:"Averías",value:"Embrague, nafta, cubiertas y cadena"},{label:"Destacado",value:"Parador Tamariscos"}], gallery:["cordillera","moto"] },
 { slug:"travesia-por-chile", title:"Travesía por Chile", place:"Araucanía → Valparaíso", leg:"Ushuaia → Córdoba", desc:"Reencuentro con Poli, el volcán de Melipeuco, ripio interminable, Walter y su KTM, y la cadena en La Calera.", photo:"yt:ldSUa0qFhe0", x:23, y:68,
   episodes:["wmdGpTxIBeM","Nj4sAXBbms4","bf8kleAJBuk","ldSUa0qFhe0","NiAzZBnyMRg"],
   text:["Crucé a Chile para reencontrarme con Poli, una gran amiga motoviajera: tirolesa, termas y risas, hasta que su moto pinchó en medio de 120 km de offroad y tuvo que volver.","Seguí solo hasta Melipeuco y subí a un volcán con un glaciar en su interior. Después, el ripio interminable de las rutas chilenas, donde la moto casi dijo basta.","Me reencontré con Walter, que ahora maneja mi antigua KTM Adventure. Nos perdimos de noche camino a Pichilemu, acampamos frente al Pacífico en Piedra del Viento y la cadena no aguantó más hasta La Calera."],
   data:[{label:"Compañeros",value:"Poli y Walter"},{label:"Destacado",value:"Volcán en Melipeuco"},{label:"Acampe",value:"Piedra del Viento"}], gallery:["cordillera2","cordillera"] },
 { slug:"cruce-de-los-andes-y-vuelta-a-casa", title:"Cruce de los Andes con nieve y vuelta a casa", place:"Paso Los Libertadores → Córdoba", leg:"Ushuaia → Córdoba", desc:"Dijeron que era imposible cruzar los Andes en una 110 con nieve. Más de 21.000 km después, volví a casa.", photo:"moto", x:31, y:58,
   episodes:["1TcAWahyvPY","y96i37O83jg","qU8wHE5rDQ4"],
   text:["Con cadena nueva y el corazón a mil salimos de La Calera con Walter: los caracoles chilenos, el frío extremo, el Cristo Redentor y problemas en la aduana argentina por el bidón de nafta.","De Mendoza a San Luis, con un seguidor policía en el camino y una parada técnica para probar una Yamaha.","El reencuentro con mi abuela y el abrazo con mi mamá. La “prueba piloto” terminaba en casa, pero el sueño de Alaska recién empezaba."],
   data:[{label:"Paso",value:"Los Libertadores"},{label:"Clima",value:"Nieve y bajo cero"},{label:"Total etapa 1",value:"+21.000 km"}], gallery:["moto","portrait"] },
 { slug:"preparacion-y-alaska-dia-1", title:"La preparación y Alaska Día 1", place:"Córdoba", leg:"Rumbo a Alaska", desc:"Ahorros reales, visas, el equipo para grabar, un viaje con mi viejo y la partida definitiva rumbo a Alaska.", photo:"yt:vywNnbbSiCs", x:49, y:50,
   episodes:["bPCcMLGuF8s","6DexdbZ8uH0","ugrHgGNSDwQ","vywNnbbSiCs"],
   text:["Después de los 13.500 km de la “prueba piloto” hasta Ushuaia, empieza la verdadera aventura: la Etapa 2. Mecánica, camping ultraliviano, visas, seguros y mis ahorros reales para viajar sin fecha de vuelta.","Antes de salir cumplí uno de mis sueños: viajar en moto con mi papá por las sierras de Córdoba, su primer viaje en moto. Y les mostré todo el equipo con el que grabo solo.","El 19 de agosto de 2026 llegó el día: la carga final, una despedida que casi no pude grabar, Río Pintos, un cementerio profanado, la primera noche acampando solo y las Termas de Quicho."],
   data:[{label:"Partida",value:"19 de agosto de 2026"},{label:"Primera noche",value:"Acampe solo"},{label:"Destino",value:"Alaska"}], gallery:["santi","hero"] },
 { slug:"la-rioja-y-mina-la-mexicana", title:"La Rioja y Mina La Mexicana", place:"La Rioja", leg:"Rumbo a Alaska", desc:"Cuesta de Miranda, Chilecito, 4.500 msnm en La Mexicana y el peor día del viaje.", photo:"yt:CJZcm3jWkZ4", x:40, y:47,
   episodes:["MDomCi8VSww","CJZcm3jWkZ4","PRD17sN--Sk"],
   text:["Entré a La Rioja por la Cuesta de Miranda, conocí Chilecito y la unión de los ríos, la Estación 3 del Cable Carril y una finca de nogales en Famatina.","Muchos me dijeron que era una locura subir a la Mina La Mexicana (4.500 msnm) en una 110: nieve, hielo y más de 40 cruces de ríos. El reto más difícil y hermoso de toda la travesía por Argentina.","Y después, el peor día desde que salí: perdí el drone y, en pleno calor riojano, la cubierta trasera reventó a fondo. Desarme total en la banquina."],
   data:[{label:"Altura máx.",value:"4.500 msnm"},{label:"Cruces de río",value:"+40"},{label:"Imprevistos",value:"Drone perdido y cubierta reventada"}], gallery:["portrait","cordillera2"] },
 { slug:"catamarca-y-tucuman", title:"Catamarca y Tucumán", place:"Catamarca y Tucumán", leg:"Rumbo a Alaska", desc:"La Silleta bajo cero, una Kawasaki 500, los túneles inundados de Paclín, acampes en el río y una Tornado prestada.", photo:"hero", x:46, y:43,
   episodes:["GEmnH3t2r9E","aoD_M-JHd28","TfmpLH83j0o","5PjpzOy_iK0","Km6KwboDRxU"],
   text:["Con Andrea subimos por la Cuesta de Humaya hasta La Silleta: noche bajo cero, fogón salvador y las motos amanecieron congeladas. Después probé una Kawasaki 500 en uno de los ripios más difíciles.","En los túneles de Paclín (Catamarca) y Rumi Punco (Tucumán) el agua cubrió el motor y el escape de la Wave… y siguió andando.","Acampé solo a orillas de un río, mostré todo mi equipo de camping y conté una gran noticia sobre el rumbo del viaje. En el último capítulo, una Tornado 300 prestada perdió todo el aceite camino a Pomán y Andalgalá."],
   data:[{label:"Compañera",value:"Andrea"},{label:"Destacado",value:"Túneles de Paclín"},{label:"Estado",value:"En curso"}], gallery:["hero","moto"] },
];
// Próximos destinos (marcadores huecos en el mapa)
export const nextStops: { name:string; x:number; y:number }[] = [
 { name:"Salta · Jujuy", x:47, y:34 }, { name:"Bolivia", x:45, y:26 }, { name:"Perú", x:34, y:19 }, { name:"Ecuador · Colombia", x:28, y:13 },
 { name:"Centroamérica", x:22, y:9 }, { name:"México · EE.UU.", x:16, y:5 }, { name:"Alaska", x:8, y:2 },
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
export const photo = (k:string) => k.startsWith("yt:") ? `https://i.ytimg.com/vi/${k.slice(3)}/maxresdefault.jpg` : photos[k] || "";
// Helpers de capítulos
export { episodes };
export type { Episode };
export const ep = (id:string) => episodes[id];
export const stageOf = (id:string) => stages.find(s => s.episodes.includes(id));
export const allStageEpisodes = stages.flatMap(s => s.episodes);
export const fmtViews = (n:number) => n >= 1000 ? `${(n / 1000).toLocaleString("es-AR", { maximumFractionDigits: n < 10000 ? 1 : 0 })} K` : String(n);
export const fmtDate = (d:string) => new Date(d + "T12:00:00").toLocaleDateString("es-AR", { day:"numeric", month:"short", year:"numeric" });
export const capLabel = (e:Episode) => e.cap ? `Cap. ${e.cap}` : "Especial";
export const stageRange = (s:Stage) => { const ds = s.episodes.map(id => episodes[id].date).sort(); const f = (d:string) => new Date(d + "T12:00:00").toLocaleDateString("es-AR", { month:"short", year:"numeric" }); return f(ds[0]) === f(ds[ds.length - 1]) ? f(ds[0]) : `${f(ds[0])} – ${f(ds[ds.length - 1])}`; };
export const stageCaps = (s:Stage) => { const c = s.episodes.map(id => episodes[id].cap).filter((x): x is string => !!x); return c.length ? (c.length > 1 ? `Cap. ${c[0]}–${c[c.length - 1]}` : `Cap. ${c[0]}`) : ""; };

const products = [
          {
            id: 1,
            nombre: "Manómetro",
            categoria: "instrumentacion",
            marca: "RITHERM",
            especificaciones: { rangos: "Diferentes rangos de presión", conexion: "1/4\" NPT (bronce)", caja: "Acero inoxidable", uso: "Aire, agua, aceite y otros fluidos" }
          },
          {
            id: 2,
            nombre: "Termómetro Bimetálico",
            categoria: "instrumentacion",
            marca: "RITHERM",
            especificaciones: { rango: "0 - 250 °C (otros)", diametro: "63 mm - 100 mm", conexion: "1/2\" NPT", vastago: "Acero inoxidable", uso: "Calderas, tuberías, tanques y procesos industriales" }
          },
          {
            id: 3,
            nombre: "Presostato",
            categoria: "instrumentacion",
            marca: "Danfoss",
            especificaciones: { serie: "KP", rango: "Ajustable", conexion: "1/4\" flare / NPT", aplicacion: "Compresores, refrigeración y procesos industriales" }
          },
          {
            id: 4,
            nombre: "Presostato Diferencial",
            categoria: "instrumentacion",
            marca: "Danfoss",
            especificaciones: { serie: "KP", funcion: "Control de presión diferencial", conexion: "1/4\" flare / NPT", aplicacion: "Filtros, ventilación, bombas y procesos industriales" }
          },
          {
            id: 5,
            nombre: "Transmisor de Presión",
            categoria: "instrumentacion",
            marca: "RITHERM",
            especificaciones: { salida: "4 - 20 mA", rangos: "0 - 10 bar (otros)", conexion: "1/4\" NPT", precision: "Alta precisión", uso: "Procesos industriales" }
          },
          {
            id: 6,
            nombre: "Sensor de Nivel (Flotador)",
            categoria: "instrumentacion",
            marca: "Variado",
            especificaciones: { tipo: "Flotador magnético", material: "Acero inoxidable", conexion: "1/4\" - 1/2\" NPT", aplicacion: "Tanques, cisternas, reservorios y procesos industriales" }
          },
          {
            id: 7,
            nombre: "Sifón para Manómetro",
            categoria: "instrumentacion",
            marca: "Variado",
            imagen: "sifon-manometro.jpg",
            especificaciones: { material: "Acero inoxidable", conexion: "1/2\" - 1/4\" NPT", funcion: "Reduce la temperatura del fluido y protección del manómetro", uso: "Vapor, aceite y fluidos calientes" }
          },
          {
            id: 8,
            nombre: "Conexiones y Accesorios",
            categoria: "instrumentacion",
            marca: "Variado",
            imagen: "conexiones-accesorios.jpg",
            especificaciones: { material: "Acero inoxidable", incluye: "Codos, tees, niples, reducciones, bridas, uniones, adaptadores, válvulas de aguja", tipo: "Accesorios para instrumentación", uso: "Sistemas de medición y control" }
          },
          {
            id: 9,
            nombre: "Válvulas Selenoides",
            categoria: "valvulas",
            marca: "Variado",
            imagen: "valvula-selenoide.jpg",
            especificaciones: { tipo: "Acción directa / Servo-operada", material: "Latón, Acero inoxidable", conexion: "1/4\" - 2\" NPT / BSP", voltaje: "12VDC, 24VDC, 110VAC, 220VAC", uso: "Aire, agua, aceite, gas. Automatización y control de fluidos" }
          },
          {
            id: 10,
            nombre: "Válvulas YEE",
            categoria: "valvulas",
            marca: "Variado",
            imagen: "valvula-yee.jpg",
            especificaciones: { tipo: "Neumática / Manual", material: "Acero inoxidable 304 / 316", conexion: "Roscada, Soldar, Brida", accionamiento: "Actuador neumático simple/doble efecto", uso: "Vapor, agua, fluidos viscosos y corrosivos" }
          },
          {
            id: 11,
            nombre: "Válvulas para Vapor",
            categoria: "valvulas",
            marca: "KLOD",
            imagen: "valvula-vapor.jpg",
            especificaciones: { tipo: "Selenoide para vapor / Globo para vapor", material: "Bronce, Acero inoxidable", conexion: "1/2\" - 2\" NPT", temperatura: "Hasta 180°C", uso: "Calderas, líneas de vapor, procesos industriales" }
          },
          {
            id: 12,
            nombre: "Válvulas Reguladoras",
            categoria: "valvulas",
            marca: "Variado",
            imagen: "valvula-reguladora.jpg",
            especificaciones: { tipo: "Reguladora de presión", material: "Latón, Acero inoxidable", conexion: "1/4\" - 2\" NPT", funcion: "Reduce y estabiliza la presión de línea", uso: "Aire, agua, aceite y sistemas hidráulicos" }
          },
          {
            id: 13,
            nombre: "Válvulas de Bola 2 piezas / 3 piezas",
            categoria: "valvulas",
            marca: "Variado",
            imagen: "valvula-bola.jpg",
            especificaciones: { material: "Acero inoxidable 304/316, Latón", conexion: "1/4\" - 4\" NPT / BSP", paso: "Full Port", presion: "Hasta 1000 PSI", uso: "Agua, aire, aceite, gas y fluidos industriales" }
          },
          {
            id: 14,
            nombre: "Válvulas Globo",
            categoria: "valvulas",
            marca: "Variado",
            imagen: "valvula-globo.jpg",
            especificaciones: { material: "Bronce, Latón", conexion: "1/2\" - 3\" NPT", tipo: "Rosca / Brida", funcion: "Regulación y cierre de flujo", uso: "Vapor, agua y fluidos en general" }
          },
          {
            id: 15,
            nombre: "Válvulas Mariposa Wafer / Lug",
            categoria: "valvulas",
            marca: "Variado",
            imagen: "valvula-mariposa.jpg",
            especificaciones: { material: "Hierro dúctil, Acero inoxidable", disco: "Acero inoxidable", asiento: "EPDM, NBR, PTFE", accionamiento: "Palanca, Reductor, Actuador neumático/eléctrico", uso: "Agua, tratamiento de agua, HVAC e industria" }
          },
          {
            id: 16,
            nombre: "Válvulas de Seguridad y Alivio",
            categoria: "valvulas",
            marca: "Variado",
            imagen: "valvula-seguridad-alivio.jpg",
            especificaciones: { material: "Latón, Bronce", conexion: "1/4\" - 2\" NPT", presion: "Ajustable", funcion: "Protección contra sobrepresión", norma: "ASME", uso: "Calderas, compresores, tanques y sistemas presurizados" }
          },
          {
            id: 17,
            nombre: "Cilindros Neumáticos",
            categoria: "neumatica",
            marca: "Variado",
            imagen: "cilindros-neumaticos.jpg",
            especificaciones: { modelos: "Diferentes modelos y tamaños", tipo: "Simple y doble efecto", descripcion: "Cilindros estándar, compactos, guiados y sin vástago" }
          },
          {
            id: 18,
            nombre: "Válvulas Direccionales y Electroválvulas",
            categoria: "neumatica",
            marca: "Variado",
            imagen: "valvulas-direccionales-electrovalvulas.jpg",
            especificaciones: { vias: "3/2, 5/2", voltaje: "Diferentes voltajes", accionamiento: "Solenoide y neumático" }
          },
          {
            id: 19,
            nombre: "Unidad FRL",
            categoria: "neumatica",
            marca: "Variado",
            imagen: "unidad-frl.jpg",
            especificaciones: { componentes: "Filtro, Regulador, Lubricador", funcion: "Preparación y acondicionamiento del aire comprimido" }
          },
          {
            id: 20,
            nombre: "Filtros Neumáticos",
            categoria: "neumatica",
            marca: "Variado",
            imagen: "filtros-neumaticos.jpg",
            especificaciones: { tipos: "Filtros de partículas, Filtros coalescentes, Filtros de carbón activado", funcion: "Filtración y purificación del aire comprimido" }
          },
          {
            id: 21,
            nombre: "Racores y Conexiones",
            categoria: "neumatica",
            marca: "Variado",
            imagen: "racores-conexiones.jpg",
            especificaciones: { formas: "Rectos, codos, tees, uniones", material: "En plástico y metal", conexion: "Rosca y push-in" }
          },
          {
            id: 22,
            nombre: "Silenciadores",
            categoria: "neumatica",
            marca: "Variado",
            imagen: "silenciadores.jpg",
            especificaciones: { material: "Bronce sinterizado, Plásticos", funcion: "Reducción de ruido de escape de válvulas", conexion: "1/8\" - 1\" NPT" }
          },
          {
            id: 23,
            nombre: "Válvulas de Bloqueo",
            categoria: "neumatica",
            marca: "Variado",
            imagen: "valvulas-bloqueo.jpg",
            especificaciones: { material: "Acero inoxidable, Bronce", tipo: "Válvula de bola de cierre manual", uso: "Aislamiento de líneas neumáticas" }
          },
          {
            id: 24,
            nombre: "Mangueras Neumáticas",
            categoria: "neumatica",
            marca: "Variado",
            imagen: "mangueras-neumaticas.jpg",
            especificaciones: { material: "Poliuretano (PU), Nylon, Teflón (PTFE)", colores: "Azul, transparente, negro", diametros: "4mm, 6mm, 8mm, 10mm, 12mm" }
          },
          {
            id: 25,
            nombre: "Pedales Neumáticos",
            categoria: "neumatica",
            marca: "Variado",
            imagen: "pedales-neumaticos.jpg",
            especificaciones: { vias: "3/2", tipo: "Con y sin protección", material: "Aluminio / Plástico", funcion: "Accionamiento de cilindros y máquinas" }
          },
          {
            id: 26,
            nombre: "Válvulas con Mando",
            categoria: "neumatica",
            marca: "Variado",
            imagen: "valvulas-con-mando.jpg",
            especificaciones: { tipos: "Palanca, Pulsador, Selector", accionamiento: "Manual", vias: "3/2, 5/2, 5/3" }
          },
          {
            id: 27,
            nombre: "Finales de Carrera",
            categoria: "neumatica",
            marca: "AirTAC",
            imagen: "finales-carrera.jpg",
            especificaciones: { tipo: "Mecánico", accionamiento: "Rodillo, palanca y pulsador", funcion: "Detección de posición de cilindros" }
          },
          {
            id: 28,
            nombre: "Accesorios de Montaje",
            categoria: "neumatica",
            marca: "Variado",
            imagen: "accesorios-montaje.jpg",
            especificaciones: { incluye: "Soportes y fijaciones, Accesorios para cilindros", tipos: "Rótulas, horquillas, bridas, escuadras", uso: "Fijación y montaje de cilindros neumáticos" }
          }
        ];
// ... dentro de createApp({ setup() { ...

        // Array con la información de los logos
        const Logos = [
          { src: "./img/marcas/klod.png", alt: "KLOD" },
          { src: "./img/marcas/sun.png", alt: "SUN" },
          { src: "./img/marcas/danfoss.jpeg", alt: "Danfoss" },
          { src: "./img/marcas/valve.png", alt: "Valve CIM" },
          { src: "./img/marcas/rfs.jpg", alt: "RFS" },
          { src: "./img/marcas/xcpc.jpg", alt: "XCPC" },
          { src: "./img/marcas/festo.jpg", alt: "FESTO" },
          { src: "./img/marcas/vpc.png", alt: "VPC" },
          { src: "./img/marcas/airtac.png", alt: "AirTAC" },
          { src: "./img/marcas/smc.png", alt: "SMC" }
        ];

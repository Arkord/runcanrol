# RunCanRol
Aplicación ofertas, lugares, eventos para tu mascota

## API
URL https://kingsware.maxapex.net/apex/runcanrol/

### area/{id}
nombre,
descripcion,
ubicacion_maps,
horario
-- datos de un área en específico, parámetro = area_id

### areasg/
area_id,
nombre,
descripcion,
ubicacion_maps,
horario,
tipo,
zona
-- todos los registros de las areas

### areasp/{id}
area_id,
nombre,
descripcion,
ubicacion_maps,
horario
-- areas filtradas por tipo, parámetro = tipo_area_id

### areast/
tipo_area_id,
nombre,
descripcion,
-- tipos de areas

### evento/{id}
nombre,
descripcion,
fecha_inicio,
fecha_fin,
lugar,
costo,

### ubicacion_maps
-- datos de un evento en específico, parámetro = evento_id

### eventosg/
evento_id,
nombre,
descripcion,
fecha_inicio,
fecha_fin,
lugar,
costo,
ubicacion_maps,
tipo
-- todos los registros de los eventos

### eventosp/{id}
evento_id,
nombre,
descripcion,
fecha_inicio,
fecha_fin,
lugar,
costo,
ubicacion_maps
-- eventos filtrados por tipo, parámetro = tipo_evento_id

### eventost/
tipo_evento_id,
nombre,
descripción
-- tipos de eventos

### productos/{id}
nombre,
descripcion,
precio,
disponible

-- productos filtrados por sitio, parámetro = sitio_id

### sitio/{id}
nombre,
domicilio,
telefono,
celular,
facebook,
coordenadas,
contacto,
youtube,
web,
descripcion,
tienda
-- datos de un sitio en específico, parámetro = sitio_id
*el campo tienda nos regresa un 0 si no cuenta con una, o un 1 si
cuenta con ella

### sitiosg/
sitio_id,
nombre,
domicilio,
telefono,
celular,
facebook,
coordenadas,
contacto,
youtube,
web,
descripcion,
zona,
tienda
-- todos los registros de sitios

### sitiosp/{id}
sitio_id,
nombre,
domicilio,
telefono,
celular,
facebook,
coordenadas,
contacto,
youtube,
web,
descripcion,
tienda
-- sitios filltrados por tipos parámetro = tipo
*los tipos son los siguientes:
Esteticas -0
Veterinarias – 1
Clinicas – 2
Estancias – 3
Guarderias – 4

### zonas/
zona_id,
nombre
-- catálogo de zonas
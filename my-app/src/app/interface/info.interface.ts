export interface Usuarios {
    administradorid: number,
	usuario: string,
	password: string,
	nombre: string,
	estadoCuenta: string,
	correo: string,
	telefono: string,
	rol: string,
}

export interface Estudiantes {
    estudianteid: number,	
	nombre: string,	
	identificacion: string,
	edad: number,	
	fecha_nacimiento: string,	
	ultimo_grado: string,
	escuela: string,	
	referido: string,
	nombre_referido: string
	horario_dia: string,
    horario_hora: string,
    acudiente: string	

}

export interface Acudientes{
	acudienteid:number,
    nombre: string,
	apellido: string,
	cedula: string,
	correo: string,
	direccion: string,
	telefono: string,
	forma_pago: string
}

export interface Inventarios{
	articuloid: number,
	nombre: string,
	precio: string,
	cantidad: string,
}


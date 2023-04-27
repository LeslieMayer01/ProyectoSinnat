import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders} from '@angular/common/http';
import { Estudiantes } from './interface/info.interface';
import { Acudientes } from './interface/info.interface';
import { Inventarios } from './interface/info.interface';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class ClientService {

  BASE_API: string=environment.BASE_API
  estudiantes:Estudiantes [] = [];
  constructor(private http: HttpClient) { }

  getRequestdatosEstudiantes() {
    
 
    const result = this.http.get(`${this.BASE_API}/estudiantesInfo`)
    console.log("Moriremos")
    console.log(result)
    return this.http.get(`${this.BASE_API}/estudiantesInfo`)
  }
  getRequestdateEstudiantes(route:any) {
    
    let config1:any={
      responseType:"json"
    }
    const header =new HttpHeaders().set('Authorization',`Bearer ${localStorage.getItem('token')}`);
    config1["headers"]=header;
    return this.http.get(route,config1)
 
  }
 
  getRequestEstudiante() {
 
    return this.http.get(`${this.BASE_API}/estudiantesInfo`)
  }
  getRequestUsuario() {
 
    return this.http.get(`${this.BASE_API}/usuariosInfo`)
  }
  getRequestAcudiente() {
 
    return this.http.get(`${this.BASE_API}/acudientesInfo`)
  }
  getRequestInventario() {
 
    return this.http.get(`${this.BASE_API}/productosInfo`)
  }
  postRequestPaquete(route:string, data?:any){
    let config:any={
      responseType:"json"
    }
    const header =new HttpHeaders().set('Authorization',`Bearer ${localStorage.getItem('token')}`);
    config["headers"]=header; 
    return this.http.post(route,data, config)
  }
  getRequestAdop(route:string){
    let config1:any={
      responseType:"json"
    }
    const header =new HttpHeaders().set('Authorization',`Bearer ${localStorage.getItem('token')}`);
    config1["headers"]=header;
    return this.http.get(route,config1)
  }
  getRequestPerfil(route:string){
    let config:any={
      responseType:"json"
    }
    const header =new HttpHeaders().set('Authorization',`Bearer ${localStorage.getItem('token')}`);
    config["headers"]=header;
    return this.http.get(route,config)
  }

  getRequestCom(route:string){
    let config1:any={
      responseType:"json"
    }
    const header =new HttpHeaders().set('Authorization',`Bearer ${localStorage.getItem('token')}`);
    config1["headers"]=header;
    return this.http.get(route,config1)
  }
  getRequestInventarios(route:string,data?:any){
    let config1:any={
      responseType:"json"
    }
    const header =new HttpHeaders().set('Authorization',`Bearer ${localStorage.getItem('token')}`);
    config1["headers"]=header;
    return this.http.get(route,config1)
  }

  getRequestListaAdop(route:string){
    let config1:any={
      responseType:"json"
    }
    const header =new HttpHeaders().set('Authorization',`Bearer ${localStorage.getItem('token')}`);
    config1["headers"]=header;
    return this.http.get(route,config1)
  }

  getRequestRegEstudiante(route:string){
    let config1:any={
      responseType:"json"
    }
    const header =new HttpHeaders().set('Authorization',`Bearer ${localStorage.getItem('token')}`);
    config1["headers"]=header;
    return this.http.get(route,config1)
  }
  getReqGaleria(route:string){
    let config:any={
      responseType:"json"
    }
    const header =new HttpHeaders().set('Authorization',`Bearer ${localStorage.getItem('token')}`);
    config["headers"]=header;
    console.log(`Bearer ${localStorage.getItem('token')}`);
    
    return this.http.get(route,config)
  }

  getReqAdoptar(route:string){
    let config:any={
      responseType:"json"
    }
    const header =new HttpHeaders().set('Authorization',`Bearer ${localStorage.getItem('token')}`);
    config["headers"]=header;
    return this.http.get(route,config)
  }
  
  getRequestLista(route:string){
    let config:any={
      responseType:"json"
    }
    const header =new HttpHeaders().set('Authorization',`Bearer ${localStorage.getItem('token')}`);
    config["headers"]=header;
    return this.http.get(route,config)
  }

  getReqInventario(route:string, data?:any){
    let config:any={
      responseType:"json"
    }
    const header =new HttpHeaders().set('Authorization',`Bearer ${localStorage.getItem('token')}`);
    config["headers"]=header; 
    return this.http.post(route, data, config)
  }
 


  //metodo que recibe como parametro una url y realiza la peticion con metodo GET
  postRequestAllProducts(route: string, data?: any) {
    //configuracion del tipo de respuesta esperado
    let config:any = {
      responseType: "json"
    }
    //configuracion de una cabecera,, en este caso la cabecera se llama Authorization y
    //su valor es 57ydf544ljka559ahjkfgd1
    const header = new HttpHeaders().set('Authorization', '57ydf544ljka559ahjkfgd1');
    config["header"] = header;
    //se retorna el observable el cual emitira un valor una vez el server haya devuelto 
    //la respuesta, tal valor es la descarga esperada. Recordar que el observador debe
    //suscribirse a este observable para poder tener acceso al valor de descarga
    //esto se puede ver en la linea 83 de ejemplos.conponent.ts
    //Notese que como segundo parametro se pasa la configuracion de la request
    return this.http.get(route, config);
  }


  //metodo que recibe como parametro una url y un id que se pasara como paramatro de consulta
  //la peticion se hace con el metodo GET
  getRequestIdProduct(route: string, id: number) {
    let config:any = {
      responseType: "json"
    }
    //se configura un parametro de consulta llamado "id" cuyo valor sera el valor del argumento id
    const params = new HttpParams().set('id', `${id}`);
    config["params"] = params;

    const header = new HttpHeaders().set('Authorization', '57ydf544ljka559ahjkfgd1');
    config["header"] = header;
    //Notese que como segundo parametro se pasa la configuracion de la request
    return this.http.get(route, config);
  }
  


  //metodo que recibe como parametro una url y un json a ser enviado. Esta solicitud se hace con metodo POST
  postRequestCreateProduct(route: string, data?:any) {
    let config:any = {
      responseType: "json"
    }
    const header = new HttpHeaders().set('Authorization', '57ydf544ljka559ahjkfgd1');
    config["header"] = header;
    //Notese que como tercer parametro se pasa la configuracion de la request
    return this.http.post(route, data, config);
  }


  //metodo que recibe como parametro una url un json a ser enviado. Esta solicitud se hace con metodo POST
  //en este caso el json proviene de los datos de un formulario.
  postRequestSendForm(route: string, data?:any) {
    let config:any = {
      responseType: "json"
    }
    const header = new HttpHeaders().set('Authorization', '57ydf544ljka559ahjkfgd1');
    config["header"] = header;
    //Notese que como tercer parametro se pasa la configuracion de la request
    return this.http.post(route, data, config);
  }
  putReqNewPassword(route: string, data?:any) {
    let config:any = {
      responseType: "json"
    }
    const header = new HttpHeaders().set('Authorization', '57ydf544ljka559ahjkfgd1');
    config["header"] = header;
    //Notese que como tercer parametro se pasa la configuracion de la request
    return this.http.put(route, data, config);
  }

  postReqSendForm(route: string, data?:any) {
    let config:any = {
      responseType: "json"
    }
    const header = new HttpHeaders().set('Authorization', '57ydf544ljka559ahjkfgd1');
    config["header"] = header;
    //Notese que como tercer parametro se pasa la configuracion de la request
    return this.http.post(route, data, config);
  }
  postActive(route: string, data?:any) {
    let config:any = {
      responseType: "json"
    }
    const header = new HttpHeaders().set('Authorization', '57ydf544ljka559ahjkfgd1');
    config["header"] = header;
    //Notese que como tercer parametro se pasa la configuracion de la request
    return this.http.post(route, data, config);
  }


  postRequestEstudiante(route: string, data?:any) {
    return this.http.post(route,data)
  }

  delete(route: string) {
    return this.http.delete(route);
  }

  update(route: string, data?:any) {
    return this.http.put(route,data)
  }
  
}

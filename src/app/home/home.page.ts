import { Component } from '@angular/core';
import { Database, object, ref, set } from '@angular/fire/database';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  encendido: any = true;
  encendido2: any = true;
  encendido3: any = true;
  encendido4: any = true;
  encendido5: any = true;
  encendido6: any = true;
  color: string='';
  color2: string='';
  color3: string='';
  color4: string='';
  color5: string='';
  color6: string='';
  route: any;

  constructor(private database:Database) {}
  
  ngOnInit() 
  {
    this.readDatabaseAndSetColor('banio', 1);
    this.readDatabaseAndSetColor('cocina', 2);
    this.readDatabaseAndSetColor('cuarto', 3);
    this.readDatabaseAndSetColor('sala', 4);
    this.readDatabaseAndSetColor('musica', 5);
    this.readDatabaseAndSetColor('lavado', 6);
  }
  
  readDatabaseAndSetColor(room: string, number: number) {
    const route = ref(this.database, room);
    object(route).subscribe(attributes => {
    const valores_db = attributes.snapshot.val();
    console.log(valores_db);//Imprimir valores obtenidos de la búsqueda en la ruta 
    switch (number) 
    {
      case 1:
        this.encendido = valores_db;
        this.color = this.encendido ? 'background-color:  rgba(0, 0, 0, 0.5);' : 'background-color:   rgba(255, 255, 0, 0.5);';
        break;
      case 2:
        this.encendido2 = valores_db;
        this.color2 = this.encendido2 ? 'background-color:  rgba(0, 0, 0, 0.5);' : 'background-color:   rgba(255, 255, 0, 0.5);';
        break;
      case 3:
        this.encendido3 = valores_db;
        this.color3 = this.encendido3 ? 'background-color:  rgba(0, 0, 0, 0.5);' : 'background-color:   rgba(255, 255, 0, 0.5);';
        break;
      case 4:
        this.encendido4 = valores_db;
        this.color4 = this.encendido4 ? 'background-color:  rgba(0, 0, 0, 0.5);' : 'background-color:   rgba(255, 255, 0, 0.5);';
        break;
      case 5:
        this.encendido5 = valores_db;
        this.color5 = this.encendido5 ? 'background-color:  rgba(0, 0, 0, 0.5);' : 'background-color:   rgba(255, 255, 0, 0.5);';
        break;
      case 6:
        this.encendido6 = valores_db;
        this.color6 = this.encendido6 ? 'background-color:  rgba(0, 0, 0, 0.5);' : 'background-color:   rgba(255, 255, 0, 0.5);';
        break;
      default:
        break;
    }
    });
  }
  async encender(numero: number){
    if(numero==1)
    {
      this.encendido=!this.encendido;
      this.route = set(ref(this.database,'banio') , this.encendido); /*direccion a donde ir dentro de la base de datos */
      this.color= this.encendido? 'background-color:  rgba(0, 0, 0, 0.5);':'background-color:   rgba(255, 255, 0, 0.5);';
    }
    if(numero==2)
    {
      this.encendido2=!this.encendido2;
      this.route = set(ref(this.database,'cocina') , this.encendido2); /*direccion a donde ir dentro de la base de datos */
      this.color2= this.encendido2? 'background-color:  rgba(0, 0, 0, 0.5);':'background-color:   rgba(255, 255, 0, 0.5);';
    }
    if(numero==3)
    {
      this.encendido3=!this.encendido3;
      this.route = set(ref(this.database,'cuarto') , this.encendido3); /*direccion a donde ir dentro de la base de datos */
      this.color3= this.encendido3? 'background-color:  rgba(0, 0, 0, 0.5);':'background-color:   rgba(255, 255, 0, 0.5);';
    }
    if(numero==4)
    {
      this.encendido4=!this.encendido4;
      this.route = set(ref(this.database,'sala') , this.encendido4); /*direccion a donde ir dentro de la base de datos */
      this.color4= this.encendido4? 'background-color:  rgba(0, 0, 0, 0.5);':'background-color:   rgba(255, 255, 0, 0.5);';
    }
    if(numero==5)
    {
      this.encendido5=!this.encendido5;
      this.route = set(ref(this.database,'musica') , this.encendido5); /*direccion a donde ir dentro de la base de datos */
      this.color5= this.encendido5? 'background-color:  rgba(0, 0, 0, 0.5);':'background-color:   rgba(255, 255, 0, 0.5);';
    }
    if(numero==6)
    {
      this.encendido6=!this.encendido6;
      this.route = set(ref(this.database,'lavado') , this.encendido5); /*direccion a donde ir dentro de la base de datos */
      this.color6= this.encendido6? 'background-color:  rgba(0, 0, 0, 0.5);':'background-color:   rgba(255, 255, 0, 0.5);';
    }
  }
}
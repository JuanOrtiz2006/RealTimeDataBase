import { Component } from '@angular/core';
import { Database, object, ref, set } from '@angular/fire/database';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  encendido: boolean=true;
  encendido2: boolean=true;
  encendido3: boolean=true;
  encendido4: boolean=true;
  encendido5: boolean=true;
  encendido6: boolean=true;

  color: string='';
  color2: string='';
  color3: string='';
  color4: string='';
  color5: string='';
  color6: string='';
  constructor(private database:Database) {}
  route:any;

  async encender(numero: number){
    if(numero==1)
    {
      this.encendido=!this.encendido;
      this.route = set(ref(this.database,'baño') , this.encendido); /*direccion a donde ir dentro de la base de datos */
      
      const route = ref(this.database, 'baño');
      object(route).subscribe(attributes => {
        const valores_db = attributes.snapshot.val();
        console.log(valores_db);//Imprimir valores obtenidos de la busqueda en la ruta 
      });

      this.color= this.encendido? 'background-color:  rgba(0, 0, 0, 0.5);':'background-color:   rgba(255, 255, 0, 0.5);';
    }
    if(numero==2)
    {
      this.encendido2=!this.encendido2;
      this.route = set(ref(this.database,'cocina') , this.encendido2); /*direccion a donde ir dentro de la base de datos */
      
      const route = ref(this.database, 'cocina');
      object(route).subscribe(attributes => {
        const valores_db = attributes.snapshot.val();
        console.log(valores_db);//Imprimir valores obtenidos de la busqueda en la ruta 
      });
    
      this.color2= this.encendido2? 'background-color:  rgba(0, 0, 0, 0.5);':'background-color:   rgba(255, 255, 0, 0.5);';

    }
    if(numero==3)
    {
      this.encendido3=!this.encendido3;
      this.route = set(ref(this.database,'cuarto') , this.encendido3); /*direccion a donde ir dentro de la base de datos */
     
      const route = ref(this.database, 'cuarto');
      object(route).subscribe(attributes => {
        const valores_db = attributes.snapshot.val();
        console.log(valores_db);//Imprimir valores obtenidos de la busqueda en la ruta 
      });

      this.color3= this.encendido3? 'background-color:  rgba(0, 0, 0, 0.5);':'background-color:   rgba(255, 255, 0, 0.5);';

    }
    if(numero==4)
    {
      this.encendido4=!this.encendido4;
      this.route = set(ref(this.database,'sala') , this.encendido4); /*direccion a donde ir dentro de la base de datos */
    
      const route = ref(this.database, 'sala');
      object(route).subscribe(attributes => {
        const valores_db = attributes.snapshot.val();
        console.log(valores_db);//Imprimir valores obtenidos de la busqueda en la ruta 
      });
      this.color4= this.encendido4? 'background-color:  rgba(0, 0, 0, 0.5);':'background-color:   rgba(255, 255, 0, 0.5);';

    }
    if(numero==5)
    {
      this.encendido5=!this.encendido5;
      this.route = set(ref(this.database,'musica') , this.encendido5); /*direccion a donde ir dentro de la base de datos */
    
      const route = ref(this.database, 'musica');
      object(route).subscribe(attributes => {
        const valores_db = attributes.snapshot.val();
        console.log(valores_db);//Imprimir valores obtenidos de la busqueda en la ruta 
      });
      this.color5= this.encendido5? 'background-color:  rgba(0, 0, 0, 0.5);':'background-color:   rgba(255, 255, 0, 0.5);';

    }
    if(numero==6)
    {
      this.encendido6=!this.encendido6;
      this.route = set(ref(this.database,'lavado') , this.encendido5); /*direccion a donde ir dentro de la base de datos */
    
      const route = ref(this.database, 'lavado');
      object(route).subscribe(attributes => {
        const valores_db = attributes.snapshot.val();
        console.log(valores_db);//Imprimir valores obtenidos de la busqueda en la ruta 
      });
      this.color6= this.encendido6? 'background-color:  rgba(0, 0, 0, 0.5);':'background-color:   rgba(255, 255, 0, 0.5);';

    }
  }
}

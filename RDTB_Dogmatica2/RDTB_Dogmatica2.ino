#include <Arduino.h>
#include <WiFi.h>
#include <Firebase_ESP_Client.h>
#include <addons/TokenHelper.h>
#include <addons/RTDBHelper.h>
const char* WIFI_SSID = "Xiaomi 13T";
const char* WIFI_PASSWORD= "pepinodemar";
const char* API_KEY= "AIzaSyAxiReY8V2fk9P1BbV0vK5E5spwJ9AGKkg";
const char* DATABASE_URL= "https://realdatabase-9cdc9-default-rtdb.firebaseio.com"; //<databaseName>.firebaseio.com or <databaseName>.<region>.firebasedatabase.app;
const char* USER_EMAIL= "esp32@gmail.com";
const char* USER_PASSWORD= "1034596";
FirebaseData fbdo;
FirebaseAuth auth;
FirebaseConfig config;
unsigned long sendDataPrevMillis = 0;
unsigned long count = 0;
const int cuarto =15;
const int cambio=21;
int cont=0
bool buttonState= false;
void setup_WIFI(){
  WiFi.begin(WIFI_SSID, WIFI_PASSWORD);
  Serial.print("Connecting to Wi-Fi");
  unsigned long ms = millis();
  while (WiFi.status() != WL_CONNECTED)
  {
    Serial.print(".");
    delay(300);
  }
  Serial.println();
  Serial.print("Connected with IP: ");
  Serial.println(WiFi.localIP());
  Serial.println();
}
void setupFirebase() {
  config.api_key = API_KEY;
  auth.user.email = USER_EMAIL;
  auth.user.password = USER_PASSWORD;
  config.database_url = DATABASE_URL;
  config.token_status_callback = tokenStatusCallback; // see addons/TokenHelper.h
  config.signer.tokens.legacy_token = "<database secret>";
  Firebase.reconnectNetwork(true);
  fbdo.setBSSLBufferSize(4096, 1024);
  fbdo.setResponseSize(2048);
  Firebase.begin(&config, &auth);
  Firebase.setDoubleDigits(5);
  config.timeout.serverResponse = 10 * 1000;
  Serial.printf("Firebase Client v%s\n\n", FIREBASE_CLIENT_VERSION);
}
void setup() {
    Serial.begin(115200);
    setup_WIFI();
    setupFirebase();
    pinMode(cuarto,INPUT);
    pinMode(cambio,INPUT);
}
void loop() {
  if (digitalRead(cambio) == HIGH) {
    cont++;
    if (cont > 5) {
      cont = 0;
    }
  }

  if (digitalRead(cuarto) == HIGH) {
    buttonState = !buttonState;
  }
  
   if (Firebase.ready() && (millis() - sendDataPrevMillis > 15000 || sendDataPrevMillis == 0))
  {
    switch (cont)
    {
      case 0:
      dato("/banio");
      break;
       case 1:
      dato("/cocina");
      break;
       case 2:
      dato("/cuarto");
      break;
       case 3:
      dato("/lavado");
      break;
       case 4:
      dato("/musica");
      break;
       case 5:
      dato("/sala");
      break;
    }
     
  }
}

void dato (String nombre)
{
  if(cuarto=)
  {
    
  }
   if (Firebase.RTDB.setBool(&fbdo, F(dato), buttonState)) {
         Serial.println(buttonState);
         Serial.println("Data sent successfully.");
         Serial.println(dato); 
      } else {
         Serial.println(buttonState);
          Serial.print("Failed to send data: ");
          Serial.println(dato);
          Serial.println(fbdo.errorReason().c_str());
      }
}

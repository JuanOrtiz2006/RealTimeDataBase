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
const int BUTTON =15;
const int cambio=21;
int cont=0
bool buttonState = false;
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
    pinMode(BUTTON,INPUT);
    pinMode(cambio,INPUT);
}
void loop() {
   if (Firebase.ready() && (millis() - sendDataPrevMillis > 15000 || sendDataPrevMillis == 0))
  {
      // Envía el estado del botón a la base de datos en tiempo real de Firebase
      if (Firebase.RTDB.setBool(&fbdo, F("/cocina"), buttonState)) {
         Serial.println(buttonState);
          Serial.println("Data sent successfully.");
      } else {
         Serial.println(buttonState);
          Serial.print("Failed to send data: ");
          Serial.println(fbdo.errorReason().c_str());
      }
      if (Firebase.RTDB.setBool(&fbdo, F("/cuarto"), buttonState)) {
         Serial.println(buttonState);
          Serial.println("Data sent successfully.");
      } else {
         Serial.println(buttonState);
          Serial.print("Failed to send data: ");
          Serial.println(fbdo.errorReason().c_str());
      }
      if (Firebase.RTDB.setBool(&fbdo, F("/lavado"), buttonState)) {
         Serial.println(buttonState);
          Serial.println("Data sent successfully.");
      } else {
         Serial.println(buttonState);
          Serial.print("Failed to send data: ");
          Serial.println(fbdo.errorReason().c_str());
      }
      if (Firebase.RTDB.setBool(&fbdo, F("/musica"), buttonState)) {
         Serial.println(buttonState);
          Serial.println("Data sent successfully.");
      } else {
         Serial.println(buttonState);
          Serial.print("Failed to send data: ");
          Serial.println(fbdo.errorReason().c_str());
      }
      if (Firebase.RTDB.setBool(&fbdo, F("/sala"), buttonState)) {
         Serial.println(buttonState);
          Serial.println("Data sent successfully.");
      } else {
         Serial.println(buttonState);
          Serial.print("Failed to send data: ");
          Serial.println(fbdo.errorReason().c_str());
      }
      if (Firebase.RTDB.setBool(&fbdo, F("/banio"), buttonState)) {
         Serial.println(buttonState);
          Serial.println("Data sent successfully.");
      } else {
         Serial.println(buttonState);
          Serial.print("Failed to send data: ");
          Serial.println(fbdo.errorReason().c_str());
      }
  }
}
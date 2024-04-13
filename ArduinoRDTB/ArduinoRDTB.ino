#include <Arduino.h>
#include <WiFi.h>
#include <Firebase_ESP_Client.h>
#include <addons/TokenHelper.h>
#include <addons/RTDBHelper.h>
const char* WIFI_SSID = "Xiaomi 13T";
const char* WIFI_PASSWORD= "pepinodemar";
const char* API_KEY= "AIzaSyAxiReY8V2fk9P1BbV0vK5E5spwJ9AGKkg";
const char* DATABASE_URL= "https://realdatabase-9cdc9-default-rtdb.firebaseio.com";
const char* USER_EMAIL= "esp32@gmail.com";
const char* USER_PASSWORD= "1034596";
FirebaseData fbdo;
FirebaseAuth auth;
FirebaseConfig config;
unsigned long sendDataPrevMillis = 0;
unsigned long count = 0;
const int led_pin = 26;
int cont = 0;
bool buttonState = false;

void setup_WIFI() {
  WiFi.begin(WIFI_SSID, WIFI_PASSWORD);
  Serial.print("Connecting to Wi-Fi");
  while (WiFi.status() != WL_CONNECTED) {
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
  config.token_status_callback = tokenStatusCallback;
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
  pinMode(led_pin, OUTPUT);
}

void loop() {
  int cuarto = touchRead(T3);
  int cambio = touchRead(T0);
  if (cambio < 20) {
    cont++;
    Serial.println(cont);
    delay(500);
    if (cont > 5) {
      cont = 0;
      Serial.println(cont);
    }
  }
  if (cuarto < 20) {
    digitalWrite(led_pin, 1);
    buttonState = false;
  }
  else{
    digitalWrite(led_pin, 0);
    buttonState = true;
  }
  if (Firebase.ready() && (millis() - sendDataPrevMillis > 15000 || sendDataPrevMillis == 0)) {
    switch (cont) {
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
        dato("/sala");
        break;
      case 4:
        dato("/musica");
        break;
      case 5:
        dato("/lavado");
        break;
    }
  }
}

void dato(String nombre) {
  if (Firebase.RTDB.setBool(&fbdo, F(nombre.c_str()), buttonState)) {
    Serial.println(buttonState);
    Serial.println("Data sent successfully.");
    Serial.println(nombre);
  } else {
    Serial.println(buttonState);
    Serial.print("Failed to send data: ");
    Serial.println(nombre);
    Serial.println(fbdo.errorReason().c_str());
  }
}

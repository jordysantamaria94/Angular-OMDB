# App Móvil de Catalogo de Series y Peliculas

Bienvenido a la aplicación móvil de Series y Peliculas creada con Ionic.

## Installation of local enviroment

Instala [npm](https://nodejs.org/es/)  para que se puedan instalar las dependencias.

```bash
npm install
```

## Installation of production enviroment (generate APK)

Instala las siguientes aplicaciónes para poder generar exitosamente el APK:

[Android Studio](https://developer.android.com/studio?hl=es-419)
[Gradle](https://gradle.org/install/)
[JDK 8 Dev](https://www.oracle.com/mx/java/technologies/javase/javase-jdk8-downloads.html)

A continuación debe configurar las variables de entorno para que el APK pueda generarse sin ningun problema:

#### Variables de Usuario

Insertar la carpeta de Gradle en la unidad C principal y agregar la siguiente ruta a las **variables de usuario** en **Path**: *C:\Gradle\gradle-6.8.2\bin*

#### Variables del sistema

Agregar las siguientes variables al sistema:

**ANDROID_SDK_ROOT**: *C:\Users\USER_NAME\AppData\Local\Android\Sdk*
**JAVA_HOME**: *C:\Program Files\Java\jdk1.8.0_281*
**Path**: 

*C:\Users\USER_NAME\AppData\Local\Android\Sdk\platforms
*C:\Users\USER_NAME\AppData\Local\Android\Sdk\platform-tools*

Ejecutar el comando:

```bash
ionic cordova build android --prod
```

## Usage local

```bash
ionic serve
```

## Credits

Aplicación desarrollada por [Jordy Santamaria](https://www.jordysantamaria.com/)

## Redes Sociales
[Twitter](https://twitter.com/jordysantm) \
[Twitch](https://www.twitch.tv/jsgames18) \
[YouTube - JSCode](https://www.youtube.com/channel/UCyF_ych9Hy2oL8i_mj1kIXA) \
[YouTube - JSGames](https://www.youtube.com/channel/UC4kAwepESweVcXwmvUW3e0A)
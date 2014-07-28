## Requisitos minimos

Apache 2
PHP 5.3 con mcrypt library


## Instalando dependencias npm

Ingresar a la carpeta Public y correr el siguiente comando

```shell
npm install
```

#### Configurando la base de datos

Dentro de la carpeta app/config/ existe un archivo llamado database.php, se debe modificar con los datos del servidor


```php
		'mysql' => array(
			'driver'    => 'mysql',
			'host'      => getenv('OPENSHIFT_MYSQL_DB_HOST'),
			'port'      => getenv('OPENSHIFT_MYSQL_DB_PORT'),
			'database'  => getenv('OPENSHIFT_APP_NAME'),
			'username'  => getenv('OPENSHIFT_MYSQL_DB_USERNAME'),
			'password'  => getenv('OPENSHIFT_MYSQL_DB_PASSWORD'),
			'charset'   => 'utf8',
			'collation' => 'utf8_unicode_ci',
			'prefix'    => '',
		),
```


Despues de configurar los parametros Correctamente se procede a correr los siguientes comandos en la raiz

```shell
php artisan migrate
php artisan db:seed
```
Con estos comandos se correran las estructuras y los datos de prueba y se crearan la tablas correspondientes


### Para correr la aplicacion en la carpeta raiz corremos el siguiente comando
```shell
php artisan serve
```

Se correra la aplicacion en el puerto asignado por default es el 8000
http://localhost:8000/


## En esta direccion podemos ver un demo de la aplicacion corriendo

http://pruebalevelap-ogretirees.rhcloud.com/



Bryan Guamba

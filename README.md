server

​ express

​ pg pg-hstore (система управление базами данных )

​ sequelize орм для реляционных баз данных на node js

​ dotenv (чтобы задавать переменное окружение)

express-fileupload

uuid

    jsonwebtoken

    bcrypt

client
axios
react-router-dom
mobx
mobx-react-lite

    react-bootstrap
    bootstrap

    jwt_decode

## Сервер файл `.env`

```
PORT=<порт на котором будет запущено приложение>
DB_NAME=onlinestore
DB_USER=max
DB_PASSWORD=password1
DB_HOST=localhost
DB_PORT=5432
SECRET_KEY=<ваш секретный ключ для подписи JWT>
```

## Клиент файл `.env`

```
REACT_APP_API_URL=<url на базу данных>
```

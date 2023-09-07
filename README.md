# Laravel 10 and Next.js 13 Boilerplate with Docker

This is a template project that uses Docker and Nginx as a web server. It sets up PHP and Composer, deploys a Laravel 10 application on an Nginx server, and includes MySQL and PHPMyAdmin in Docker Compose. There's also a "client" directory containing a Next.js 13 application configured with NextAuth for authentication.

## Project Structure

The project has the following directory structure:

<img src="https://i.imgur.com/J44OW0K.png" />

## Features

- Dockerized environment with Nginx, PHP, MySQL, PHPMyAdmin
- Laravel 10 application running on Nginx
- Next.js 13 application with NextAuth for authentication
- JWT token-based authentication for both Next.js and Laravel

## Prerequisites

Before you begin, ensure you have met the following requirements:

- [Docker](https://www.docker.com/) installed and running.
- Node.js (minimum version 18) installed on your local machine.
- Ensure that the `.local.sh` script has executable permissions. You can set the permissions using the following command:

  ```bash
    chmod +x .local.sh
  ```

## Getting Started

To run this project, follow these steps (full instructions will be provided by you):

 ### Manual Installation

 #### Configuring the Laravel App

Create a .env file in the server directory by copying it from .env.example.
    
    cp src/server/.env.example src/server/.env

Build the Docker containers with:

    docker-compose build
    
Start the Docker containers in detached mode:

    docker-compose up -d

Access the Laravel app container with:

    ./local.sh ssh

Inside the container, run 

    composer install. 
    
If you encounter a "permission denied" error, run and try again:

    chmod -R 777 storage/

Generate an application encryption key:

    php artisan key:generate

Generate a JWT secret:

    php artisan jwt:secret

Now, you should be able to see your Laravel version at http://localhost.


To migrate the database and seed it with basic logins:

    php artisan migrate
    php artisan db:seed

To exit the container, type 
    
    exit

#### Configuring the Next.js App

Navigate to the src/client directory.

Create a .env.local file by copying it from .env.example.

    cp src/client/.env.example src/client/.env.local

Generate an OpenSSL key by running 

    openssl rand -base64 32 

Add it as the NEXTAUTH_SECRET in the .env file NEXTAUTH_SECRET

Optionally, you can add NEXTAUTH_JWT_AGE to set the JWT token age.

    NEXTAUTH_JWT_AGE=1209600


Start by installing the required dependencies:

    npm install

Run the Next.js development server:

    npm run dev

Access your Next.js app at http://localhost:3000.

To check if your app works, you can log in using the following credentials:
<br>Email: test@test.com
<br>Password: password

Alternatively, create your own account to test the functionality.

By following these steps, you should have both the Laravel and Next.js apps up and running with the specified configurations.

## References

This project was heavily inspired by the following excellent articles:

- [Docker Laravel Environment with PHP, Nginx, MySQL, Redis, and Scheduler](https://mattkomarnicki.com/articles/docker-laravel-environment-with-php-nginx-mysql-redis-and-scheduler)
- [Laravel 10 + Next.js 13 + JWT Open Source Boilerplate](https://dev.to/avocado-media/laravel-10-nextjs-13-jwt-open-source-boilerplate-2ogf)

## License

This project is licensed under the MIT License. Feel free to use and modify it in your own projects.

## Contribution

Contributions are welcome! Please feel free to send pull requests.

Happy coding!

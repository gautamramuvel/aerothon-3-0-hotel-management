This project was built as part of Aerothon 3.0 - AirBus Virtual Hackathon

**1 - Clone the project:**

    git clone https://github.com/gautamramuvel/aerothon-3-0-hotel-management.git
    cd aerothon-3-0-hotel-management

**2 - Install Laravel dependencies**

    cd backend
    composer install

**3 - Setup database:**

    DB_CONNECTION=mysql
    DB_HOST=127.0.0.1
    DB_PORT=3306
    DB_DATABASE=db_name
    DB_USERNAME=db_username
    DB_PASSWORD=db_password

**4 - Migrate, seed , setup oauth2:**
    
    php artisan migrate --seed
    php artisan passport:install

**5 - Serve Laravel Backend:**
    
    php artisan serve
    
**6 - Install React dependencies:**

    cd ..
    cd frontend
    npm install

**7 - Set base url in .env file**

    REACT_APP_BASE_URL=http://127.0.0.1:8000

**8 - Serve React Frontend**

    npm run serve

**_Technologies and packages used:_**

Backend :

    Laravel, laravel/passport, guzzlehttp/guzzle

Frontend:

    React, TailwindCSS, react-redux, react-router-dom,
    react-slick, react-to-print, react-typical,
    react-image-lightbox, secure-ls,
    @yaireo/tagify, axios, google-maps-react, AOS

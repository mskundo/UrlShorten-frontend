Application is available in docker
We can run the application in 3 ways.


Way-1
--------
1. Run docker in local.
2. Pull the docker image to local
   docker image pull mskundo/urlshorten-frontend
3. Run the image in local
   docker container run -p 3000:3000 urlshorten-frontend
3. Open the application on browser - http://localhost:3000    

Way - 2
---------
1. Clone the application to local.
   git clone https://github.com/mskundo/UrlShorten-frontend.git
2. Start docker in local   
3. Create an image locallly
   docker image build -t urlshorten-frontend .   
4. Run the image in local
   docker container run -p 3000:3000 urlshorten-frontend
5. Open the application on browser - http://localhost:3000     


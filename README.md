Application is available in docker
We can run the application in 2 ways.

Way-1
________
1. Pull the docker image to local
   docker image pull mskundo/urlshorten-frontend
2. Run the image in local
   docker container run -p 3000:3000 urlshorten-frontend
3. Open the application on browser - http://localhost:3000    

Way - 2
___________
1. Clone the application in local.
   git clone https://github.com/mskundo/UrlShorten-frontend.git
2. Create an image locallly
   docker image build -t urlshorten-frontend .   
3. Run the image in local
   docker container run -p 3000:3000 urlshorten-frontend
4. Open the application on browser - http://localhost:3000     


start cmd /k mongod
cd app
cd gds-logger
git pull
start "gds-logger" cmd forever /k nf start dev
ping 127.0.0.1 -n 6 > nul
cd ..
cd authentication-module
git pull
start "authentication-module" cmd forever /k nf start dev
ping 127.0.0.1 -n 6 > nul
cd .. 
cd school-module
git pull
start "school-nodule" cmd forever /k nf start dev
ping 127.0.0.1 -n 6 > nul
cd ..
cd file-service
git pull
start "file-service" cmd forever /k nf start web
ping 127.0.0.1 -n 6 > nul
cd ..
cd import-service
git pull
start "import-service" cmd forever /k nf start web
ping 127.0.0.1 -n 6 > nul
cd ..
cd export-service
git pull
start "export-service" cmd forever /k nf start web
ping 127.0.0.1 -n 6 > nul
cd ..
cd time-service
git pull
start "time-service" cmd forever /k nf start web
ping 127.0.0.1 -n 6 > nul
cd ..
cd gds-ms-api
git pull
start "gds-ms-api" cmd forever /k nf start dev
ping 127.0.0.1 -n 6 > nul
cd ..
cd gds-terminal
git pull
start "gds-terminal" cmd forever /k nf start local
ping 127.0.0.1 -n 6 > nul
cd ..
cd gds-lrts
git pull
start "gds-lrts" cmd forever /k nf start local
ping 127.0.0.1 -n 6 > nul
cd ../
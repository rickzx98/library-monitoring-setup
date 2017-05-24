cd app
cd gds-logger
start "gds-logger" cmd /k npm install
ping 127.0.0.1 -n 6 > nul

cd ..
cd authentication-module
start "authentication-module" cmd /k npm install
ping 127.0.0.1 -n 6 > nul

cd .. 
cd school-module
start "school-nodule" cmd /k npm install
ping 127.0.0.1 -n 6 > nul

cd ..
cd import-service
start "import-service" cmd /k npm install
ping 127.0.0.1 -n 6 > nul

cd ..
cd export-service
start "export-service" cmd /k npm install
ping 127.0.0.1 -n 6 > nul

cd ..
cd time-service
start "time-service" cmd /k npm install
ping 127.0.0.1 -n 6 > nul

cd ..
cd file-service
start "file-service" cmd /k npm install
ping 127.0.0.1 -n 6 > nul

cd ..
cd gds-ms-api
start "gds-ms-api" cmd /k npm install
ping 127.0.0.1 -n 6 > nul

cd ..
cd gds-terminal
start "gds-terminal" cmd /k npm install
ping 127.0.0.1 -n 6 > nul

cd ..
cd gds-lrts
start "gds-lrts" cmd /k npm install
ping 127.0.0.1 -n 6 > nul

cd ..
#Call postman

curl --location 'http://localhost:8080/api/send' \
--header 'Content-Type: application/json' \
--data '{    
        "message":[ {
                    "key" :"key1",
                    "value" : "esto es un mensaje de prueba desde postman"
                }]
}'

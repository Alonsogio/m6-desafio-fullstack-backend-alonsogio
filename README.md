# Como rodar a api?

- `yarn`
- `yarn migration:prod`
- `yarn build`
- `yarn start`
  ‌
<br/>
<br/>

# Aviso

- `Quando for utilizar o frontend não é necessario rodar a api, porque foi feito o deploy.`
  ‌
<br/>
<br/>



# Rota Client

<br/>

### Criação de um cliente

<br/>

```http
	POST /clients
```

<br/>

`Rota para criar cliente deve receber os seguintes dados:`

<br/>

- `fullName: string`
- `email: string`
- `password: Deverá receber uma string`
- `contact: string`
  ‌
<br/>
<br/>

### Body


    {
        "name": "celeste da silva",
        "email": "celeste@email.com",
        "password": "12345",
        "contact": "40028922",
     }

### Response (201 Created)


    { 
    "createdAt": "2023-04-05T03:49:25.000Z",
	"contact": "40028922",
	"fullName": "celeste da silva",
	"email": "celeste@email.com",
	"id": "f0210f0e-cf23-4f3c-b402-2799827d0398"
    }


<br/>
<br/>

## Listar todos os clientes

<br/>

```http
	GET /clients
```

<br/>
<br/>

### Response (200 OK)

    [
		{
		"id": "ef6f0fee-b73f-4594-a2ba-b03897413b8d",
		"fullName": "celeste da silva",
		"email": "celeste@email.com",
		"contact": "40028922",
		"createdAt": "2023-04-04 23:38:49",
		"contacts": []
	}
	{
		"id": "ef6f0fee-b73f-4594-a2ba-b03897413b8d",
		"fullName": "Giovanna Alonso",
		"email": "giovanna@email.com",
		"contact": "2233445566",
		"createdAt": "2023-04-04 23:39:49",
		"contacts": []
	}
    
    ]

<br/>
<br/>

## Listar um cliente

<br/>

```http
  GET /clients/<id>
```

| Parâmetro | Tipo     | Descrição                      |
| :--------:| :-------:| :-----------------------------:|
| `id`      | `string` | **Obrigatório** id do cliente. |

<br/>
<br/>


## Atualizar cliente

<br/>

```http
  PATCH /clients/<id>
```
<br/>

| Parâmetro | Tipo     | Descrição                      |
| :--------:| :-------:| :-----------------------------:|
| `id`      | `string` | **Obrigatório** id do usuário. |

<br/>

### Body

    { 

       "fullName": "Giovanna",
		"email": "giovanna@email.com",
		"contact": "40028922"
    
    }


### Response (200 OK)

      
      {
    	"id": "ef6f0fee-b73f-4594-a2ba-b03897413b8d",
		"fullName": "Giovanna",
		"email": "giovanna@email.com",
		"contact": "40028922",
		"createdAt": "2023-04-04 23:38:49",
		"contacts": []
      }

<br/>

- `Não é possível atualizar os campos id e password.`

<br/>
<br/>

## Deletar cliente

<br/>

```http
  DELETE /clients/<id>
```

| Parâmetro | Tipo     | Descrição                      |
| :--------:| :-------:| :-----------------------------:|
| `id`      | `string` | **Obrigatório** id do cliente. |

<br/>
<br/>

# Rota login

<br/>

### Logar cliente

<br/>

```http
  POST /login
```

<br/>

* `Rota de login recebe email e password.`
<br/>

### Body

    { 

       "email": "lu@email.com",
	   "password": "12345"
    
    }


### Response (200 OK)

   {
	
	"token": {
		"id": "f0210f0e-cf23-4f3c-b402-2799827d0398",
		"token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE2ODA2NTY0NDEsImV4cCI6MTY4MDc0Mjg0MSwic3ViIjoiZjAyMTBmMGUtY2YyMy00ZjNjLWI0MDItMjc5OTgyN2QwMzk4In0.ctQSAzyV-S7B5wcS92qkcGYpE4cUgPb_QN8Or3sCsak"
	}
}

<br/>
<br/>

# Rota Contatos

<br/>

### Criar um contato

<br/>

```http
  POST /contacts
```

<br/>

`Rota para criar contato deve receber os seguintes dados:`

<br/>

- `fullName: string`
- `email: string`
- `contact: string`
  ‌
<br/>
<br/>

### Body


    {
        "fullName": "Ali",
		"email": "ali@email.com",
		"contact": "40028922"
     }

### Response (201 Created)


    { 
    	"client": "644f7483-0e7a-4e08-a110-5d41f5ed4a26",
		"createdAt": "2023-04-04T23:18:31.000Z",
		"contact": "40028922",
		"fullName": "Ali",
		"email": "ali@email.com",
		"id": "518718d3-0482-42dc-859a-da76bc835be1"
    }

<br/>
<br/>

## Listar todos os contatos

<br/>

```http
	GET /contacts
```

<br/>
<br/>

### Response (200 OK)

    [
	{
		"id": "9742c25f-9aa7-4833-936a-4c6f063a4810",
		"fullName": "Aline",
		"email": "aline@email.com",
		"contact": "40028922",
		"createdAt": "2023-03-29 16:41:21",
		"client": {
			"id": "747d26de-1324-4088-b998-122af5e9a8f9",
			"fullName": "celeste da silva trololo",
			"email": "celeste@email.com",
			"password": "$2b$10$VV5JMvM5sTBJRFUeQHHfo.GUPgc11xeD93rcHkm4ngOTtDA9uC56C",
			"contact": "40028922",
			"createdAt": "2023-03-29 16:37:57"
		}
	},
	{
		"id": "518b7c98-032a-4c58-b17e-24df65d5d05f",
		"fullName": "Giovanna Alonso",
		"email": "giovanna@email.com",
		"contact": "40028922",
		"createdAt": "2023-03-29 16:44:23",
		"client": {
			"id": "747d26de-1324-4088-b998-122af5e9a8f9",
			"fullName": "celeste da silva trololo",
			"email": "celeste@email.com",
			"password": "$2b$10$VV5JMvM5sTBJRFUeQHHfo.GUPgc11xeD93rcHkm4ngOTtDA9uC56C",
			"contact": "40028922",
			"createdAt": "2023-03-29 16:37:57"
		}
	}

    ]

<br/>
<br/>

## Atualizar contato

<br/>

```http
  	PATCH /contacts/<id>
```
<br/>

| Parâmetro | Tipo     | Descrição                      |
| :--------:| :-------:| :-----------------------------:|
| `id`      | `string` | **Obrigatório** id do contato. |

<br/>

### Body

    { 

       "fullName": "Giovanna Alonso",
		"email": "giovanna@email.com",
		"contact": "40028922"
    
    }


### Response (200 OK)
      
      {
    	"createdAt": "2023-03-29T19:44:23.000Z",
		"contact": "40028922",
		"fullName": "Giovanna Alonso",
		"email": "giovanna@email.com",
		"id": "518b7c98-032a-4c58-b17e-24df65d5d05f"
      }

<br/>

- `Não é possível atualizar o campo id.`

<br/>
<br/>

## Deletar contato

<br/>

```http
  DELETE /contacts/<id>
```

| Parâmetro | Tipo     | Descrição                      |
| :--------:| :-------:| :-----------------------------:|
| `id`      | `string` | **Obrigatório** id do contato. |

<br/>
<br/>


# contact manager

## POST - add contact

http://localhost:4000/add

```

This endpoint allows you to add a new contact via an HTTP POST request to http://localhost:4000/add.
Request Body
The request should have a raw body of type JSON, with the following parameters:
contactName (string): The name of the contact.
contactNumber (string): The phone number of the contact.

Response
The response will be in JSON format with the following schema:


```

```
{
  "id": 0,
  "contactName": "",
  "contactNumber": ""
}
```

### Body raw (json)

```
{
  "contactName": "test",
  "contactNumber": "6465454514"
}
```

## GET - get all contact

http://localhost:4000/getContact

## GET - get contact with id

http://localhost:4000/getContact/2

## PUT update contact with id

http://localhost:4000/getContact/1

### Body raw (json)

```
{
  "contactName": "pankaj",
  "contactNumber": "9653050975"
}
```

## DELETE - delete contact with id

http://localhost:4000/getContact/3

### Body raw (json)

```
{
  "contactName": "monu",
  "contactNumber": "9653050975"
}
```

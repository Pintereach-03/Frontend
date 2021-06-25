# Frontend

`https://pintereach-03.netlify.app`

## Installation

1. `git clone https://github.com/Pintereach-03/Frontend`
2. `cd /Frontend`
3. `npm i`
4. `npm start`

## Contribution

1. Clone the repository without forking and work on your own branch.
2. `git checkout -b ''` (Checkout with your feature name.)
3. `git add .`
4. `git commit -m ''` (Add a description here.)
5. `git pull origin main` (Fix any potential merge conflicts.)
6. `git add .`
7. `git commit -m ''` (Add a description here.)
8. `git push -u origin ''` (Push to your branch.)

## Auth

### Payload

```js
    {
        username: '', // (Required | Unique)
        password: ''  // (Required)
    }
```

### Response - Sign Up

```js
    {
        id: 0,
        username: '',
        password: ''
    }
```

### Response - Sign In

```js
    {
        id: 0,
        message: '',
        token: ''
    }
```

## Users (Restricted)

### Response

```js
    {
        id: 0,
        username: '',
        password: ''
    }
```

## Articles (Restricted)

### Payload

```js
    {
        title: '',       // (Required)
        description: '', // (Required)
        link: '',        // (Optional)
        category: ''     // (Optional)
    }
```

### Response

```js
    {
        id: 0,
        title: '',
        description: '',
        link: '',
        category: '',
        created_at: '',
        user_id: 0
    }
```

## Categories (Restricted)

### Payload

```js
    {
        name: '' // (Required | Unique)
    }
```

### Response

```js
    {
        id: 0,
        name: '',
        created_at: '',
        user_id: 0
    }
```

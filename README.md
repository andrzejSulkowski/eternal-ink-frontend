This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

## Models
```ts
type ITxStatus =
  | "WaitingForFunds"
  | "ConfirmingFunds"
  | "ConfirmedFunds"
  | "Engraving"
  | "Engraved"
  | "Finalized"
  | "ExternalUnconfirmed"
  | "ExternalConfirmed";

interface IMessage {
  content: string;
  id: string;
  time: string;
}
```

# API-Endpoints

<details>
  <summary><h3>Health Check</h3></summary>

`[get] api/healthcheck`

**Response**

```ts
{
    message: string,
    status: string
}
```

</details>

<details>
  <summary><h3>Request Engraving</h3></summary>

`[post] api/request-engraving`
**Request Body**

```ts
{
    chain: "btc",
    message: string,
    is_file: boolean,
    is_encrypted: boolean,
    password: string | null,
    is_public: boolean
}
```

**Response**

```ts
{
    address: string,
    fees: number
}
```

</details>

<details>
  <summary><h3>Request Tx Stream</h3></summary>

`[get] api/tx-stream/:id`
**Path**

```ts
{
  id: string;
}
```

**Response**

```ts
interface Response {
  data: ITxStatus | string, // string in case its a error - ITxStatus if status = 'keep-alive'
  status: 'keep-alive' | 'error'
}
const stream = new EventSource(`${baseUrl}/api/tx-stream/${id}`);
```

</details>

<details>
  <summary><h3>Estimate Fees</h3></summary>

`[get] api/estimate-fees`
**Body**

```ts
{
  msg_length: number;
}
```

**Response**

```ts
{
  fee: number;
}
```

</details>

<details>
  <summary><h3>Tx Status</h3></summary>

`[get] api/tx-status/:id`
**Path**

```ts
{
  id: string;
}
```

### Response

```ts

type Response = {
  status: ITxStatus;
};
```

</details>

<details>
  <summary><h3>Messages</h3></summary>

`[get] api/get-messages?after_uuid=&items=`
**Query**

```ts
{
    after_uuid: string,
    items: number
}
```

**Response**

```ts

interface Response {
  messages: IMessage[];
}
```

</details>

<details>
  <summary><h3>Request PDF</h3></summary>

`[get] api/request-engraving-cert/:id`
**Path**

```ts
{
  id: string;
}
```

**Response**

```binary
    Binary PDF
```

</details>

<details>
  <summary><h3>Remaining Time</h3></summary>

`[get] api/remaining-time/:id`
**Path**

```ts
id: string;
```

**Response**

```ts
{
    // Negative number means the tx has been dropped and is invalid but is still being kept in the DB
    "remaining-time": number
}
```

</details>

<details>
  <summary><h2>Error Types</h2></summary>

```ts
//This is a global error. It will always follow this pattern in case of error events
type IErrorType =
  | "LOGIN_FAIL"
  | "NO_AUTH"
  | "ENTITY_NOT_FOUND"
  | "API_REQUEST_INVALID"
  | "API_REQUEST_METHOD_UNKNOWN"
  | "API_PARAMS_INVALID"
  | "SERVICE_ERROR";

interface Response {
  type: IErrorType;
  detail?: string;
}
```

</details>

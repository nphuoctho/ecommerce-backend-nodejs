export enum Header {
  API_KEY = 'x-api-key',
  AUTHORIZATION = 'authorization'
}

export enum RoleShop {
  SHOP = 'SHOP',
  WITTER = 'WITTER',
  EDITOR = 'EDITOR',
  ADMIN = 'ADMIN'
}

export interface SignUpPayload {
  name: string
  email: string
  password: string
  roles: RoleShop[]
}

type User = {
    id: string;
    name: string;
    email: string;
}

export type AuthType = {
    user: User;
    token: string;
}

export type AuthContextType = {
    authenticatedUser: AuthType;
}
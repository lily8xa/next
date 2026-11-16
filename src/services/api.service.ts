import {UserType} from "@/models/UserType";

const baseUrls='https://jsonplaceholder.typicode.com';

export const getAllUsers = async (): Promise<UserType[]> => {
    'use cache';
    const response = await fetch(`${baseUrls}/users`);

    if (!response.ok) {
        throw new Error('Не вдалося завантажити користувачів');
    }

    return await response.json();
};

import { gql } from '@apollo/client';

export const LOGIN_USER = gql`
    mutation login($email: String!, $password: String!) {
        login(email: $email, password: $password) {
            token
            user {
                username
            }
        }
    }
`

export const ADD_USER = gql`
    mutation addUser($username: String!, $email: String!, $password: String!) {
        addUser(username: $username, email: $email, password: $password) {
            token
            user {
                username
                email
            }
        }
    }
`

export const SAVE_BOOK = gql`
    mutation saveBook($input: bookInput!) {
        saveBook(input: $input) {
            username
            savedBooks {
                bookId
                authors
                description
                title
                image
                link
            }
        }
    }
`

export const REMOVE_BOOK = gql`
    mutation removeBook($bookId: String!) {
        removeBook(bookId: $bookId) {
            username
            savedBooks {
                bookId
                authors
                description
                title
                image
                link
            }
        }
    }
`
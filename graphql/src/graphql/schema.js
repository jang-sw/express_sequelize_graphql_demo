const { buildSchema } = require('graphql');

module.exports = buildSchema(`

    input UsersInput {
        id: String,
        pwd: String,
        email: String
    }
    input BoardsInput {
        seq: Int,
        content: String,
        user_id: String
    }
    type Users {
        id: String,
        pwd: String,
        email: String,
        board: Boards
    }
    type Boards {
        seq: Int,
        content: String,
        user_id: String
    }
    type Mutation { 
        updateContent(board: BoardsInput): Int,
        createUser(user: UsersInput): Users,
        deleteBoard(seq: Int): Int
    }
    type Query {
        findBoardByContentContain(content: String): [Boards],
        getBoardList: [Users]
    }         
    
`);
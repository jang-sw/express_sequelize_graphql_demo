const { Users, Boards } = require('../models')
const { QueryTypes } = require("sequelize"); 
const { sequelize } = require("../models/index"); 

module.exports = {
    findBoardByContentContain: async (content_) => {
        const query = `
                        SELECT 
                            * 
                        FROM 
                            boards 
                        WHERE
                            content LIKE CONCAT('%', ?, '%')
                    `; 
        const res = await sequelize.query(query, { 
            type: QueryTypes.SELECT,
            replacements: [content_.content.trim()], 
        });
        return res;
    },
    createUser: async ({ user }) => {
        let res = await Users.create(user);
        return res;
    },
    updateContent: async ({ board }) => {
        let res = await Boards.update(
            {
                content: board.content
            },
            {
                where: {
                    user_id: board.user_id,
                    seq: board.seq
                }
            }
        );
        console.log(res);
        return res[0];
    },
    deleteBoard: async (seq_) => {
        let res = await Boards.destroy(
            {where: {seq: seq_.seq}
        });
        return res;
    },
    getBoardList: async () => {
        let res = await Users.findAll({
            include: [Boards] 
        })
        console.log(res[0].boards);
        return res;
    }

};


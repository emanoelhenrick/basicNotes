module.exports = {

    posts: [
        {
            id: '909090',
            title: 'teste',
            description: 'descricao do mural teste'
        }
    ],

    getAll() {
        return this.posts
    },

    newPost(title, description) {
        this.posts.push({ id: generateID(), title, description })
    },

    deletPost(id) {
        
    }

}

function generateID() {
    return Math.random().toString(36).substring(2, 9)
}


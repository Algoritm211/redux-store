
export default class BookstoreService {

    data = [
        { 
            id: 1, 
            title: 'Production-Ready Microservices',
            author: 'Susan J. Fowler',
            price: 32,
            coverImage: 'https://www.kv.by/sites/default/files/pictures/userpictures/2019/09/11/2359/2.jpg'
        },
        { 
            id: 2, 
            title: 'Release It!',
            author: 'Michael T. Nigard',
            price: 34,
            coverImage: 'https://d2xzmw6cctk25h.cloudfront.net/post/835/og_cover_image/8bc07429a0838da7d4e2b6e4ce4556cc' 
        }
    ]

    getBooks() {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (Math.random() > 0.75) {
                    reject(new Error('Something bad happened'))
                } else {
                    resolve(this.data)
                }
                
            }, 1000)
        })
    }
    
}
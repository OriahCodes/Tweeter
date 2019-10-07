// An array of posts - this should be private. Use the dummy data below to get started
// A getPosts function that returns the posts array
// An addPost function that receives some text and adds a post object to posts
// Each object should have three properties: id, text, and comments
// You should generate the next id correctly for each post: "p4", "p5", ...
// The comments array should be empty initially
// A removePost function that recives a postID and removes the relevant post from posts


// An addComment function that receives a postID and text. It should push an object to the relevant
//  post's comments array
// The object should have two properties: text and id - this is the comment's ID
// You should generate the next id correctly for each comment: "c7", "c8", ...
// A removeComment function that receives a postID and a commentID - you understand what it should do

const Tweeter = function(){
    _posts = [
        {
            text: "First post!",
            id: "p1",
            comments: [
                { id: "c1", text: "First comment on first post!" },
                { id: "c2", text: "Second comment on first post!!" },
                { id: "c3", text: "Third comment on first post!!!" }
            ]
        },
        {
            text: "Aw man, I wanted to be first",
            id: "p2",
            comments: [
                { id: "c4", text: "Don't wory second poster, you'll be first one day." },
                { id: "c5", text: "Yeah, believe in yourself!" },
                { id: "c6", text: "Haha second place what a joke." }
            ]
        }
    ]

    const getPosts = function(){
        return _posts
    }

    const addPost = function(someText){
        let newPost = {
            text : someText,
            id: "p" + (_posts.length + 1),
            comments: [],
        }
        _posts.push(newPost)
    }

    const removePost = function(postId){
        for (let i = 0; i<_posts.length; i++){
            if (_posts[i].id === postId){
                _posts.splice(i,1)
            }
        }
        return _posts
    }

    const removeComment = function(postId , commentId){
        for (let i = 0; i<_posts.length; i++){
            if (_posts[i].id === postId){
                for (let f = 0; f<_posts[i].comments.length; f++){
                    if (_posts[i].comments[f].id === commentId){
                        _posts[i].comments.splice(f,1)
                    }
                }
                return _posts
            }
        }
    }

    const generateCommentID = function(){
        let counter = 1;
        for (let i = 0; i < _posts.length; i ++){
            for (let f = 0; f < _posts[i].comments.length; f ++){
                lastComment = _posts[i].comments[f].id.replace("c","")
                if (lastComment > counter){
                    counter = lastComment
                }
            }
        }
        const CommentID = "c" + (parseInt(counter) + 1)
        return CommentID

    }

    const addComment = function(someText , postId){
        for (let i = 0; i<_posts.length; i++){
            if (_posts[i].id === postId){
                const commentID = generateCommentID()
                let newComment = {
                    id: commentID,
                    text: someText,
                }
                _posts[i].comments.push(newComment)
            }
        }
    }

    return{
        getPosts : getPosts,
        addPost : addPost,
        removePost : removePost,
        addComment :addComment,
        removeComment : removeComment,
    }
}


// const tweeter = Tweeter()

// tweeter.addPost("This is my own post!")
// console.log(tweeter.getPosts())
// //This should be added to the posts array:
// //{text: "This is my own post!", id: "p3", comments: []}

// tweeter.removePost("p1")
// console.log(tweeter.getPosts())
// // //There should only be two posts in the post's array:
// // //{text: "Aw man, I wanted to be first", id: "p2", comments: Array(3)}
// // //{text: "This is my own post!", id: "p3", comments: []}

// tweeter.addComment("Damn straight it is!", "p3")
// tweeter.addComment("Second the best!", "p2")
// console.log(tweeter.getPosts())
// // //This should be added to the third post's comments array:
// // //{id: "c7", text: "Damn straight it is!"}

// // //This should be added to the second post's comments array:
// // //{id: "c8", text: "Second the best!"}

// tweeter.removeComment("p2", "c6")
// console.log(tweeter.getPosts())
// // //This comment should be removed:
// // //{id: "c6", text: "Haha second place what a joke."}
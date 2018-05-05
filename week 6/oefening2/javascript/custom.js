var books = [
    {title: 'Harry Potter',
    author: 'J.K. Rowling',
    alreadyRead: false
    },
    {title: 'Jane Eyre',
    author: 'Charlotte Brontë',
    alreadyRead: true
    },
    {title: 'De verschrikkelijke schoolmeester',
    author: 'Dolf Verroen',
    alreadyRead: true
    }
];
/*console.log(books[i].title)
console.log(books[i].author)*/

for(let i = 0; i<books.length; i++){
   // divbooks.innerHTML = books[i].title + 'door' + books[i].author

   let content='';

   content = '<p>' + books[i].title + ' by ' + books[i].author + '</p>';

    if(books[i].alreadyRead){
        content += '<p>You have already read this.</p>';
    }
    else{
        content += content += '<pIt\'s time to read this novel!</p>';
    }

    let divBooks = document.getElementById('books');

    content += '<hr>';
    divBooks.innerHTML += content;

    let book = function(title, author, alreadyRead){
        this.title = title,
        this.author = writer,
        this.alreadyRead = alreadyRead,
        this.output = function(){
            if(this.alreadyRead){
                return "al gelezen";
            }
            else{
                return "nog niet gelezen";
            }
        }

    }
}

let myFavouriteBook = new book('Twilight', 'Stephenie Meyer', false)
let excitingNovel = new Book ('the Da vinci code', 'levi schokkaert', true)

console.log(myFavouriteBook.output());

console.log(excitingNovel);
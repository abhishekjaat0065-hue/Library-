let books = [];

function addBook(){

    let title = document.getElementById("title").value;
    let author = document.getElementById("author").value;
    let isbn = document.getElementById("isbn").value;

    if(title=="" || author=="" || isbn==""){
        alert("Please fill all fields");
        return;
    }

    books.push({
        title:title,
        author:author,
        isbn:isbn,
        status:"Available"
    });

    displayBooks();

    document.getElementById("title").value="";
    document.getElementById("author").value="";
    document.getElementById("isbn").value="";
}

function displayBooks(){

    let list=document.getElementById("bookList");
    list.innerHTML="";

    books.forEach((book,index)=>{

        list.innerHTML+=`
        <tr>
            <td>${book.title}</td>
            <td>${book.author}</td>
            <td>${book.isbn}</td>
            <td>${book.status}</td>
            <td>
                <button onclick="checkoutBook(${index})">Checkout</button>
                <button onclick="returnBook(${index})">Return</button>
                <button onclick="deleteBook(${index})">Delete</button>
            </td>
        </tr>
        `;
    });
}

function checkoutBook(index){
    books[index].status="Issued";
    displayBooks();
}

function returnBook(index){
    books[index].status="Available";
    displayBooks();
}

function deleteBook(index){
    books.splice(index,1);
    displayBooks();
}
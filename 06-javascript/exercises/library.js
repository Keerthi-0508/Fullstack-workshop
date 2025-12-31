class Library {
    constructor() {
        this.books = [];
        this.members = [];
        this.transactions = [];
        this.BORROW_LIMIT_DAYS = 14;
    }

    addBook(book) {
        this.books.push({ ...book });
    }

    addMember(member) {
        this.members.push({ ...member });
    }


    borrowBook(memberId, isbn) {
        const book = this.books.find(b => b.isbn === isbn);
        const member = this.members.find(m => m.id === memberId);

        if (!book || !member || book.copies === 0) return;

        book.copies--;

        this.transactions.push({
            memberId,
            isbn,
            title: book.title,
            borrowedAt: new Date(),
            returnedAt: null
        });
    }
    returnBook(memberId, isbn) {
        const book = this.books.find(b => b.isbn === isbn);
        const record = this.transactions.find(
            t => t.memberId === memberId && t.isbn === isbn && t.returnedAt === null
        );

        if (!book || !record) return;

        book.copies++;
        record.returnedAt = new Date();
    }

   
    getAvailableCopies(isbn) {
        const book = this.books.find(b => b.isbn === isbn);
        return book ? book.copies : 0;
    }

    getMemberHistory(memberId) {
        return this.transactions.filter(t => t.memberId === memberId);
    }

    getOverdueBooks() {
        const now = new Date();
        return this.transactions.filter(t => {
            if (t.returnedAt !== null) return false;
            const days =
                (now - t.borrowedAt) / (1000 * 60 * 60 * 24);
            return days > this.BORROW_LIMIT_DAYS;
        });
    }
    searchBooks(keyword) {
        keyword = keyword.toLowerCase();
        return this.books.filter(
            book =>
                book.title.toLowerCase().includes(keyword) ||
                book.author.toLowerCase().includes(keyword)
        );
    }
}
function createLibrary() {
    return new Library();
}
const library=createLibrary();
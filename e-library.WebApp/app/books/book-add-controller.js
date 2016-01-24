(function() {

    var bookAddController = function ($scope, $log, library, libraryApi, message) {

        $scope.library = library;

        var addBook = function(book) {
            message.info("Saving the book " + book.title);
            libraryApi.addBook(book)
                .then(function(newBook) {
                    library.addBook(newBook);
                    library.modalWindow.close();
                    //Comment
                    message.success("Book saved.");
                }, function(reason) {
                    message.error("Unable to save the book.");
                    $log.log(reason);
                });
        };

        var cancel = function() {
            library.modalWindow.dismiss();
        };

        $scope.addBook = addBook;
        $scope.cancel = cancel;
    };

    var app = angular.module("eLibrary");
    app.controller("bookAddController", bookAddController);

})();

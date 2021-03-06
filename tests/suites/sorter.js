
casper.test.begin( 'tests: sorter', function( test ) {


 	casper.start( 'tests/html/sorter.html' )

    .then( function() {
        test.comment( '> initial sort on column 1' );

        test.assertEquals( this.getElementAttribute('#sorter table thead tr th:first-child', 'data-sort-by'), 'ASC' );
        test.assertSelectorHasText( '#sorter table tbody tr:first-child td:first-child', 'abc' );
    })

    .then( function() {
        test.comment( '> first column sortable' );

        this.click( '#sorter table thead tr th:first-child' );
        test.assertEquals( this.getElementAttribute('#sorter table thead tr th:first-child', 'data-sort-by'), 'DESC' );
        test.assertSelectorHasText( '#sorter table tbody tr:first-child td:first-child', 'ghi' );

        this.click( '#sorter table thead tr th:first-child' );
        test.assertEquals( this.getElementAttribute('#sorter table thead tr th:first-child', 'data-sort-by'), 'ASC' );
        test.assertSelectorHasText( '#sorter table tbody tr:first-child td:first-child', 'abc' );
    })

    .then( function() {
        test.comment( '> second column not sortable' );

        this.click( '#sorter table thead tr th:last-child' );
        test.assertSelectorHasText( '#sorter table tbody tr td:last-child', '789' );
    })

    .then( function() {
        test.comment( '> observing envent sorted and updated' );

        test.assertSelectorHasText( 'p.eventCounter', '2' );
        test.assertSelectorHasText( 'p.updatedEventCounter', '2' );
    })

 	.run( function() { test.done(); });

});

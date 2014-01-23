var menuLeft = document.getElementById( 'cbp-spmenu-s1' ),
    showLeft = document.getElementById( 'showLeft' ),
    closeLeft = document.getElementById( 'closeLeft' ),
    body = document.body;
 
showLeft.onclick = function() {
    classie.toggle( this, 'active' );
    classie.toggle( menuLeft, 'cbp-spmenu-open' );
    disableOther( 'showLeft' );
};
 
function disableOther( button ) {
    if( button !== 'showLeft' ) {
        classie.toggle( showLeft, 'disabled' );
    }
};

closeLeft.onclick = function() {
    classie.toggle( this, 'active' );
    classie.toggle( menuLeft, 'cbp-spmenu-open' );
    disableOther( 'closeLeft' );
};
 
function disableOther( button ) {
    if( button !== 'closeLeft' ) {
        classie.toggle( closeLeft, 'disabled' );
    }
}
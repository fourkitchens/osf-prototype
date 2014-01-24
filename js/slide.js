var menuLeft = document.getElementById( 'cbp-spmenu-s1' ),
    menuLeft2 = document.getElementById( 'cbp-spmenu-s2' ),
    showLeft = document.getElementById( 'showLeft' ),
    showLeft2 = document.getElementById( 'showLeft2' ),
    closeLeft = document.getElementById( 'closeLeft' ),
    closeLeft2 = document.getElementById( 'closeLeft2' ),
    body = document.body;
 
showLeft.onclick = function() {
    classie.toggle( this, 'active' );
    classie.toggle( menuLeft, 'cbp-spmenu-open' );
    disableOther( 'showLeft' );
};
 
closeLeft.onclick = function() {
    classie.toggle( this, 'active' );
    classie.toggle( menuLeft, 'cbp-spmenu-open' );
    disableOther( 'closeLeft' );
};

// Menu 2

showLeft2.onclick = function() {
    classie.toggle( this, 'active' );
    classie.toggle( menuLeft2, 'cbp-spmenu-open' );
    disableOther( 'showLeft2' );
};

closeLeft2.onclick = function() {
    classie.toggle( this, 'active' );
    classie.toggle( menuLeft2, 'cbp-spmenu-open' );
    disableOther( 'closeLeft2' );
};

// Close

function disableOther( button ) {
    if( button !== 'showLeft' ) {
        classie.toggle( showLeft, 'disabled' );
    }
    if( button !== 'closeLeft' ) {
        classie.toggle( closeLeft, 'disabled' );
    }
    if( button !== 'showLeft2' ) {
        classie.toggle( showLeft2, 'disabled' );
    }
    if( button !== 'closeLeft2' ) {
        classie.toggle( closeLeft2, 'disabled' );
    }
}

//TMP LOGIC TO CHANGE BTN TEXT;
const order_ammount = Math.floor(Math.random() * 2) + 1;

if(order_ammount === 1) {
    $('#accept_button').html('ACCEPT ORDER');
    $('#accept_button_fixed').html('ACCEPT ORDER');
} else {
    $('#accept_button').html('ACCEPT ALL ORDER');
    $('#accept_button_fixed').html('ACCEPT ALL ORDER');
}
//-=====-=====-======-=====-=====

function acceptBtnEvents() {
    // Handle initial btn state
    const elem = $('#accept_button'),
          elemWrapper = $('.oder_rest-accept_button_wrapper'),
          fixedElem = $('#accept_button_fixed');

    let elemScrollBottom = elem.offset().top - $(window).height() - $(window).scrollTop();

    if(elemScrollBottom > 1) {
        elemWrapper.addClass('static');
        fixedElem.removeClass('static');
    } else {
        elemWrapper.removeClass('static');
        fixedElem.addClass('static');
    }

    // Handle onScroll btn state
    $(window).scroll(function() {

        elemScrollBottom = elem.offset().top - $(window).height() - $(window).scrollTop();

        if(elemScrollBottom > 1) {
            fixedElem.removeClass('static');
            elemWrapper.addClass('static');
        } else {
            fixedElem.addClass('static');
            elemWrapper.removeClass('static');
        }
    })
}

function confirmationMsgEvents() {
    // Handle initial msg state
    let elem = $('.order_confirmed_msg'),
          fixedElem = $('.status_message-block--fixed'),
          elemTop = elem.offset().top,
          elementBottom = elemTop + elem.outerHeight();

    let elemScrollTop = $(window).scrollTop() - elementBottom ;

    if(elemScrollTop < 1) {
        fixedElem.removeClass('visible');
    } else {
        fixedElem.addClass('visible');
    }

    // Handle onScroll msg state
    $(window).scroll(function() {
        elementBottom = elem.offset().top + elem.outerHeight();
        elemScrollTop = $(window).scrollTop() - elementBottom;

        if(elemScrollTop < 1) {
            fixedElem.removeClass('visible');
        } else {
            fixedElem.addClass('visible');
        }
    })
}

function smoothScrollToAnchor() {
    $('.scroll').click(function(){

    $('html, body').animate({
      scrollTop: $( $.attr(this, 'href') ).offset().top
    }, 1000);

    $(this).attr('disabled', true);

    setTimeout(function() {
      $(this).removeAttr("disabled");
    }.bind(this), 2000)
    return false;
  });
}

function handleDropdown() {
    $('.dropdown-toggler').click(function () {
        $(this).parent('.dropdown').toggleClass('open');
        $(this).siblings('.main_content-user_order_wrapper').slideToggle();
        setTimeout(() => {
            acceptBtnEvents();
        }, 300);
    });

    // Open dropdown on anchor link click
    $('.info_user-user-link').click(function () {
        const elemId = $(this).data('id');
              dropdown = $(`#${elemId}`);

        if(!dropdown.hasClass('open')) {
            dropdown.addClass('open');
            dropdown.find('.main_content-user_order_wrapper').slideToggle();
        }
    });
}

function setUserImagesMargin() {
   $('.user_pics_wrapper').each(function() {
        const elemAmmount = $("img, a", $(this)).length;

        if(elemAmmount === 2) {
            $(this).addClass('two_images_block')
        } else if(elemAmmount === 3) {
            $(this).addClass('threee_images_block')
        } else if(elemAmmount === 4) {
            $(this).addClass('four_images_block')
        } else if(elemAmmount === 5) {
            $(this).addClass('five_images_block')
        } else if(elemAmmount === 6) {
            $(this).addClass('six_images_block')
        }
    });

    $('.order_short_info-users_pics').each(function() {
        const elemAmmount = $(this).children().length;

        if(elemAmmount === 2) {
            $(this).addClass('two_images_block')
        } else if(elemAmmount === 3) {
            $(this).addClass('threee_images_block')
        } else if(elemAmmount === 4) {
            $(this).addClass('four_images_block')
        } else if(elemAmmount === 5) {
            $(this).addClass('five_images_block')
        } else if(elemAmmount === 6) {
            $(this).addClass('six_images_block')
        }
    });
}

function toggleModal() {
    const modal = $('.app_modal');

    $('.modal_trigger_btn').click(function(event) {
        event.preventDefault();
        modal.addClass('open')
    });

    $('.close_modal_btn, .app_modal-overlay').click(function() {
        event.preventDefault();
        modal.removeClass('open')
    });
}

$(document).ready(function() {
    acceptBtnEvents();
    smoothScrollToAnchor();
    handleDropdown();
    confirmationMsgEvents();
    setUserImagesMargin();
    toggleModal();
})

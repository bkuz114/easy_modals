/**
 * adapted from
 * https://www.w3schools.com/howto/howto_css_modals.asp
 * https://www.w3schools.com/howto/tryit.asp?filename=tryhow_css_modal
 */

function setup_modals() {
    prepare_modal_triggers();
    prepare_modal_closers();
}

function open_modal(modal) {
    modal.style.display = "block";
    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function(event) {
        if (event.target == modal) {
            close_modal(modal);
        }
    }
}

function close_modal(modal) {
    modal.style.display = "none";
}

function prepare_modal_closers() {
    var modal_closers = document.getElementsByClassName("modal-close");
    for (let i = 0; i < modal_closers.length; i++) {
        prepare_modal_closer(modal_closers.item(i));
    }
}

function prepare_modal_closer(modal_closer) {
    // Create an event for the span
    // that closes the modal:
    // check user clicks the
    // <span> (x), close the modal
    modal_closer.onclick = function() {
        // get modal this span is child of
        var modal = modal_closer.closest(".modal")
        // close the modal
        close_modal(modal);
    }
}

function prepare_modal_triggers() {
    // Find all modal triggers
    var triggers = document.getElementsByClassName("modal-triggers");

    // loop through and prepare each of them
    for (let i = 0; i < triggers.length; i++) {
        prepare_modal_trigger(triggers.item(i));
    }
}

function prepare_modal_trigger(trigger) {
    // create an event: if the trigger
    // is clicked, open its modal
    trigger.onclick = function() {
        // get trigger's target modal
        var myattr = trigger.getAttribute("target");
        var modal = document.getElementById(trigger.getAttribute("target"));
        open_modal(modal);
    }
}

/**
 * set up all modals
 * in the page
 */

setup_modals();
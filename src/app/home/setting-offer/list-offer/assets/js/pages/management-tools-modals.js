'use strict';
//  Author: ThemeREX.com
//  management-tools-modal.html scripts
//

(function ($) {

    $(document).ready(function () {

        "use strict";

        // Init Theme Core
        Core.init();

        // Init Demo JS
        Demo.init();

        var modalContent = $('#modal-content');

        modalContent.on('click', function (e) {
            e.preventDefault();

           
        });

        function findActive() {
            var activeModal = modalContent.find('.btn-dark').attr('name');
            return activeModal;
        }

        // Skin Switcher
        $('#animation-switcher button').on('click', function () {
            $('#animation-switcher').find('button').removeClass('active-animation');
            $(this).addClass('active-animation item-checked');

            $.magnificPopup.open({
                removalDelay: 500,
                items: {
                    src: findActive()
                },
                callbacks: {
                    beforeOpen: function (e) {
                        var Animation = $("#animation-switcher").find('.active-animation').attr('data-effect');
                        this.st.mainClass = Animation;
                    }
                },
                midClick: true
            });

        });
    });

})(jQuery);

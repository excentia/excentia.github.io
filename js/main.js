$(document).ready(function () {
    var $inputs = $("input,textarea");
    var $testimonialSlider = $("#testimonial-slider");
    var $customerLogos = $("#customer-logos");
    var $productFeaturesSlider = $("#product-features-slider");
    var $fancybox = $(".fancybox");
    var $siteNav = $("#mainNav.site-navbar");
    var $siteNavToggle = $siteNav.find("[data-site-nav-toggle]");
    var $siteNavMenu = $siteNav.find("[data-site-nav-menu]");
    var $siteDropdowns = $siteNav.find("[data-site-dropdown]");
    var $forms = $("form");
    var generatedFieldId = 0;

    function initSmoothScroll() {
        $(document).on("click", "a.page-scroll", function (event) {
            var $anchor = $(this);
            var href = $anchor.attr("href");
            var isHashLink = href && href.charAt(0) === "#";

            if (!isHashLink) {
                return;
            }

            var $target = $(href);

            if (!$target.length) {
                return;
            }

            $("html, body").stop().animate({
                scrollTop: Math.max($target.offset().top - 200, 0)
            }, 600);

            event.preventDefault();
        });
    }

    function closeSiteDropdowns() {
        $siteDropdowns.removeClass("is-open");
        $siteDropdowns.find("[data-site-dropdown-toggle]").attr("aria-expanded", "false");
    }

    function closeSiteNav() {
        $siteNav.removeClass("is-open");
        $siteNavToggle.attr("aria-expanded", "false");
        closeSiteDropdowns();
    }

    function syncSiteNavScrollState() {
        $siteNav.toggleClass("is-scrolled", $(window).scrollTop() > 24);
    }

    function enhanceLegacyForms() {
        $forms.each(function () {
            var $form = $(this);
            var hasFields = $form.find("input, textarea, select").not("[type=hidden],[type=submit],[type=image],[type=checkbox]").length > 0;
            var hasCheckbox = $form.find("input[type=checkbox]").length > 0;

            if (!$form.hasClass("site-newsletter-form") && hasFields) {
                $form.addClass("site-form");
            }

            $form.find(".control-group").addClass("site-form-row");
            $form.find(".floating-label-form-group.controls, .form-group-2.controls").addClass("site-form-field");
            $form.find("input.form-control, textarea.form-control, select.form-control").addClass("site-form-control");
            $form.find("button[type=submit], input[type=submit]").addClass("site-form-submit");
            $form.find(".help-block").addClass("site-form-help");
            $form.find(".block").has("button[type=submit], input[type=submit]").addClass("site-form-actions");
            $form.find("input[name=_gotcha]").addClass("site-form-honeypot").attr("tabindex", "-1").attr("autocomplete", "off");

            if (hasCheckbox) {
                $form.find("input[type=checkbox]").closest(".floating-label-form-group, .form-group, .form-group-2").addClass("site-form-consent");
            }

            $form.find("input, textarea, select").not("[type=hidden],[type=submit],[type=image]").each(function () {
                var $field = $(this);
                var tagName = this.tagName.toLowerCase();
                var type = ($field.attr("type") || "").toLowerCase();
                var fieldId = $field.attr("id");
                var fieldName = ($field.attr("name") || "").toLowerCase();
                var labelText = $field.attr("placeholder") || $field.attr("aria-label") || $field.attr("title") || fieldName.replace(/[_-]+/g, " ");
                var $existingLabel;
                var $helpBlock;
                var helpId;

                if (!fieldId) {
                    generatedFieldId += 1;
                    fieldId = "site-form-field-" + generatedFieldId;
                    $field.attr("id", fieldId);
                }

                $existingLabel = $form.find("label[for='" + fieldId + "']").first();
                if (!$existingLabel.length && !$field.closest("label").length && type !== "checkbox" && labelText) {
                    $('<label class="site-visually-hidden" for="' + fieldId + '"></label>')
                        .text(labelText)
                        .insertBefore($field);
                }

                if (!$field.attr("autocomplete")) {
                    if (fieldName.indexOf("email") !== -1) {
                        $field.attr("autocomplete", "email");
                    } else if (fieldName.indexOf("name") !== -1) {
                        $field.attr("autocomplete", "name");
                    } else if (fieldName.indexOf("phone") !== -1 || fieldName.indexOf("telefono") !== -1 || fieldName.indexOf("tel") !== -1) {
                        $field.attr("autocomplete", "tel");
                    } else if (fieldName.indexOf("company") !== -1 || fieldName.indexOf("empresa") !== -1) {
                        $field.attr("autocomplete", "organization");
                    } else if (tagName === "textarea" || fieldName.indexOf("message") !== -1 || fieldName.indexOf("mensaje") !== -1) {
                        $field.attr("autocomplete", "off");
                    }
                }

                $helpBlock = $field.closest(".control-group").find(".help-block").first();
                if ($helpBlock.length) {
                    helpId = $helpBlock.attr("id");
                    if (!helpId) {
                        helpId = fieldId + "-help";
                        $helpBlock.attr("id", helpId);
                    }

                    $helpBlock.attr("role", "alert").attr("aria-live", "polite");
                    $field.attr("aria-describedby", helpId);
                }
            });
        });
    }

    if ($siteNav.length) {
        syncSiteNavScrollState();

        $siteNavToggle.on("click", function () {
            var isOpen = $siteNav.hasClass("is-open");

            if (isOpen) {
                closeSiteNav();
                return;
            }

            $siteNav.addClass("is-open");
            $siteNavToggle.attr("aria-expanded", "true");
        });

        $siteNav.find("[data-site-dropdown-toggle]").on("click", function () {
            var $toggle = $(this);
            var $dropdown = $toggle.closest("[data-site-dropdown]");
            var isDesktop = window.matchMedia("(min-width: 992px)").matches;

            if (isDesktop) {
                return;
            }

            var willOpen = !$dropdown.hasClass("is-open");
            closeSiteDropdowns();

            if (willOpen) {
                $dropdown.addClass("is-open");
                $toggle.attr("aria-expanded", "true");
            }
        });

        $siteNavMenu.find("a").on("click", function () {
            if (window.matchMedia("(max-width: 991px)").matches) {
                closeSiteNav();
            }
        });

        $(document).on("click", function (event) {
            if ($siteNav.length && !$siteNav[0].contains(event.target)) {
                closeSiteNav();
            }
        });

        $(window).on("resize", function () {
            if (window.matchMedia("(min-width: 992px)").matches) {
                $siteNav.removeClass("is-open");
                $siteNavToggle.attr("aria-expanded", "false");
                closeSiteDropdowns();
            }
        }).on("scroll", syncSiteNavScrollState);
    }

    enhanceLegacyForms();
    initSmoothScroll();

    if ($.fn.jqBootstrapValidation && $inputs.length) {
        $inputs.jqBootstrapValidation({
            preventSubmit: true,
            submitError: function ($form, event, errors) {
                $form.addClass("site-form-has-errors");
                $form.find(".control-group.error, .control-group.warning").addClass("site-form-row-error");
            },
            submitSuccess: function ($form) {
                $form.removeClass("site-form-has-errors");
            },
            filter: function () {
                return $(this).is(":visible");
            },
        });

        $inputs.on("validation.validation", function () {
            var $field = $(this);
            var $row = $field.closest(".control-group");

            window.requestAnimationFrame(function () {
                $row.toggleClass("site-form-row-error", $row.hasClass("error") || $row.hasClass("warning"));
                $row.toggleClass("site-form-row-success", $row.hasClass("success"));
                $field.attr("aria-invalid", ($row.hasClass("error") || $row.hasClass("warning")) ? "true" : "false");
            });
        });
    }

    if ($.fn.owlCarousel && $testimonialSlider.length) {
        $testimonialSlider.owlCarousel({
            paginationSpeed: 800,
            singleItem: true,
            autoPlay: 8000,
        });
    }

    if ($.fn.owlCarousel && $customerLogos.length) {
        $customerLogos.owlCarousel({
            autoPlay: 3000,
            items: 7,
            itemsDesktop: [1199, 5],
            itemsDesktopSmall: [979, 5],
        });
    }

    if ($.fn.owlCarousel && $productFeaturesSlider.length) {
        $productFeaturesSlider.owlCarousel({
            paginationSpeed: 800,
            singleItem: true,
            autoPlay: 8000,
        });
    }

    if ($.fn.fancybox && $fancybox.length) {
        $fancybox.fancybox();
    }

    if (typeof WOW === "function" && $(".wow").length) {
        new WOW().init();
    }
});

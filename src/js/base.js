jQuery(document).ready(function ($) {


	/*
	-ˋˏ *.·:·.⟐.·:·.* ˎˊ-
	━━━ ⋅𖥔⋅ ━━✶━━ ⋅𖥔⋅ ━━━
	Store VH
	━━━ ⋅𖥔⋅ ━━✶━━ ⋅𖥔⋅ ━━━
	-ˋˏ *.·:·.⟐.·:·.* ˎˊ-
	*/
	function viewportHeight() {
		if (window.innerWidth !== currentWidth) {
			let viewportHeight = window.innerHeight;
			document.documentElement.style.setProperty('--vh', viewportHeight + 'px');
		} else {
			document.documentElement.style.setProperty('--vh', currentHeight + 'px');
		}
	}
	viewportHeight();

	$(window).on('resize', function () {
		viewportHeight();
	});

});
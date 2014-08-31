page = PAGE
#page.config.metaCharset = utf-8
page {
	config {
		metaCharset = utf-8
		additionalHeaders = Content-Type:text/html;charset=utf-8
	}
	
	includeCSS.bootstrap = EXT:mouad_ben/Resources/Public/Bootstrap/css/bootstrap.min.css
	includeCSS.bootstratheme = EXT:mouad_ben/Resources/Public/Bootstrap/css/bootstrap-theme.min.css
	includeCSS.bootstrapcustom = EXT:mouad_ben/Resources/Public/Css/custom.css
	
	includeJS.bootstrap = EXT:mouad_ben/Resources/Public/Bootstrap/js/bootstrap.min.js
	
	10 = FLUIDTEMPLATE
	10 {
		file = EXT:mouad_ben/Resources/Private/Template/index.html
		layoutRootPath = EXT:mouad_ben/Resources/Private/Layouts/
		partialRootPath = EXT:mouad_ben/Resources/Private/Partials/
		variables {
			hallo = TEXT
			hallo.value = HALLO WELT!
			content < styles.content.get
            left < styles.content.getLeft
		}
	}
	
}

<!DOCTYPE html>
<html lang="de">
<head>
	<title>Boilerplate-Tool</title>
	<meta charset="utf-8">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<meta name="description" content="Boilerplate-Tool von Michael Horstmann">
	<meta name="keywords" content="Boilerplate, Tool, Boilerplate-Tool, HTML, CSS, JavaScript">
	<meta name="author" content="Michael Horstmann">
	<meta name="msapplication-TileColor" content="#da532c">
	<meta name="theme-color" content="#ffffff">
	<link rel="apple-touch-icon" sizes="180x180" href="apple-touch-icon.png">
	<link rel="icon" type="image/png" sizes="32x32" href="favicon-32x32.png">
	<link rel="icon" type="image/png" sizes="16x16" href="favicon-16x16.png">
	<link rel="manifest" href="site.webmanifest">
	<link rel="mask-icon" href="safari-pinned-tab.svg" color="#7c7c7c">
	<link rel="shortcut icon" href="favicon.ico">
	<link rel="stylesheet" type="text/css" href="https://static.hrstmnn.de/node_modules/bootstrap/dist/css/bootstrap.min.css">
	<link rel="stylesheet" type="text/css" href="https://static.hrstmnn.de/node_modules/@highlightjs/cdn-assets/styles/default.min.css">
	<link rel="stylesheet" type="text/css" href="https://static.hrstmnn.de/node_modules/normalize.css/normalize.css">
	<link rel="stylesheet" type="text/css" href="style.css">
</head>
<body>
	<div id="app" class="container-xxl mt-5 mb-5">
		<h1 class="fs-2"><a style="color: black;" href="./">Boilerplate-Tool</a></h1>
		<div class="row">
			<div class="col-xl-4" id="configure">
				<div class="mt-4" style="padding-top: 5px;">
					<h2 class="fs-3">Konfiguration</h2>
					<div class="input-group input-group-sm mb-3  mt-3">
						<span class="input-group-text" id="configTitle">title</span>
						<input type="text" class="form-control" aria-label="title" aria-describedby="configTitle" v-model="configTitle" v-on:keyup="app.refresh()">
					</div>
					<div class="input-group input-group-sm mb-3">
						<span class="input-group-text" id="configDescription">description</span>
						<input type="text" class="form-control" aria-label="description" aria-describedby="configDescription" v-model="configDescription" v-on:keyup="app.refresh()">
					</div>
					<div class="input-group input-group-sm mb-3">
						<span class="input-group-text" id="configKeywords">keywords</span>
						<input type="text" class="form-control" aria-label="keywords" aria-describedby="configKeywords" v-model="configKeywords" v-on:keyup="app.refresh()" placeholder="mit Komma separieren">
					</div>
					<div class="input-group input-group-sm mb-3">
						<span class="input-group-text" id="configAuthor">author</span>
						<input type="text" class="form-control" aria-label="author" aria-describedby="configAuthor" v-model="configAuthor" v-on:keyup="app.refresh()">
					</div>
					<div class="form-check form-switch">
						<input class="form-check-input" type="checkbox" id="displaySocialMediaMetadata" v-model="socialMediaMetadata.display" v-on:click="app.refresh()">
						<label class="form-check-label" for="displaySocialMediaMetadata">Social Media Metadata</label>
					</div>
					<div class="input-group input-group-sm mb-3 mt-3" v-if="socialMediaMetadata.display">
						<span class="input-group-text" id="ogUrl">og:url</span>
						<input type="text" class="form-control" aria-label="og:url" aria-describedby="ogUrl" v-model="socialMediaMetadata.ogUrl" v-on:keyup="app.refresh()">
					</div>
					<div v-if="socialMediaMetadata.display" class="form-text">The canonical URL of your object that will be used as its permanent ID in the graph.</div>
					<div class="input-group input-group-sm mb-3" v-if="socialMediaMetadata.display">
						<span class="input-group-text" id="ogImage">og:image</span>
						<input type="text" class="form-control" aria-label="og:image" aria-describedby="ogImage" v-model="socialMediaMetadata.ogImage" v-on:keyup="app.refresh()">
					</div>
					<div v-if="socialMediaMetadata.display" class="form-text">An image URL which should represent your object within the graph.</div>
					<div class="input-group input-group-sm mb-3" v-if="socialMediaMetadata.display">
						<span class="input-group-text" id="twitterSite">twitter:site</span>
						<input type="text" class="form-control" aria-label="twitter:site" aria-describedby="twitterSite" v-model="socialMediaMetadata.twitterSite" v-on:keyup="app.refresh()">
					</div>
					<div v-if="socialMediaMetadata.display" class="form-text">&commat;username for the website used in the card footer.</div>
					<div class="input-group input-group-sm mb-3" v-if="socialMediaMetadata.display">
						<span class="input-group-text" id="twitterCreator">twitter:creator</span>
						<input type="text" class="form-control" aria-label="twitter:creator" aria-describedby="twitterCreator" v-model="socialMediaMetadata.twitterCreator" v-on:keyup="app.refresh()">
					</div>
					<div v-if="socialMediaMetadata.display" class="form-text">&commat;username for the content creator &sol; author.</div>
					<div class="form-check form-switch">
						<input class="form-check-input" type="checkbox" id="useContentDeliveryNetwork" v-model="useContentDeliveryNetwork" v-on:click="app.refresh()">
						<label class="form-check-label" for="useContentDeliveryNetwork">Content Delivery Network</label>
					</div>
				</div>

				<div class="mt-3" style="padding-top: 1.5rem;">
					<h3 class="fs-4">CSS</h3>
					<div class="form-check form-switch">
						<input class="form-check-input" type="checkbox" id="bootstrapMinCss" value="bootstrapMin" v-model="cssAndJsData" v-on:click="app.refresh()">
						<label class="form-check-label" for="bootstrapMinCss">bootstrap.min.css</label>
					</div>
					<div class="form-check form-switch">
						<input class="form-check-input" type="checkbox" id="bulmaMinCss" value="bulmaMinCss" v-model="cssData" v-on:click="app.refresh()">
						<label class="form-check-label" for="bulmaMinCss">bulma.min.css</label>
					</div>
					<div class="form-check form-switch">
						<input class="form-check-input" type="checkbox" id="tailwindMinCss" value="tailwindMinCss" v-model="cssData" v-on:click="app.refresh()">
						<label class="form-check-label" for="tailwindMinCss">tailwind.min.css</label>
					</div>
					<div class="form-check form-switch">
						<input class="form-check-input" type="checkbox" id="tablerMinCss" value="tablerMinCss" v-model="cssData" v-on:click="app.refresh()">
						<label class="form-check-label" for="tablerMinCss">tabler.min.css</label>
					</div>
					<div class="form-check form-switch">
						<input class="form-check-input" type="checkbox" id="animateMinCss" value="animateMinCss" v-model="cssData" v-on:click="app.refresh()">
						<label class="form-check-label" for="animateMinCss">animate.min.css</label>
					</div>
					<div class="form-check form-switch">
						<input class="form-check-input" type="checkbox" id="highlightMinCss" value="highlightMin" v-model="cssAndJsData" v-on:click="app.refresh()">
						<label class="form-check-label" for="highlightMinCss">highlight.min.css</label>
					</div>
					<div class="form-check form-switch">
						<input class="form-check-input" type="checkbox" id="prismCss" value="prism" v-model="cssAndJsData" v-on:click="app.refresh()">
						<label class="form-check-label" for="prismCss">prism.css</label>
					</div>
					<div class="form-check form-switch">
						<input class="form-check-input" type="checkbox" id="slickCss" value="slick" v-model="cssAndJsData" v-on:click="app.refresh()">
						<label class="form-check-label" for="slickCss">slick.css</label>
					</div>
					<div class="form-check form-switch">
						<input class="form-check-input" type="checkbox" id="slickThemeCss" value="slick" v-model="cssAndJsData" v-on:click="app.refresh()">
						<label class="form-check-label" for="slickThemeCss">slick-theme.css</label>
					</div>
					<div class="form-check form-switch">
						<input class="form-check-input" type="checkbox" id="normalizeCss" value="normalizeCss" v-model="cssData" v-on:click="app.refresh()">
						<label class="form-check-label" for="normalizeCss">normalize.css</label>
					</div>
					<br>

				</div>
				<div>
					<h3 class="fs-4">JavaScript</h3>
					<div class="form-check form-switch">
						<input class="form-check-input" type="checkbox" id="vueMinJs" value="vueMinJs" v-model="jsData" v-on:click="app.refresh()">
						<label class="form-check-label" for="vueMinJs">vue.min.js</label>
					</div>
					<div class="form-check form-switch">
						<input class="form-check-input" type="checkbox" id="jqueryMinJs" value="jqueryMinJs" v-model="jsData" v-on:click="app.refresh()">
						<label class="form-check-label" for="jqueryMinJs">jquery.min.js</label>
					</div>
					<div class="form-check form-switch">
						<input class="form-check-input" type="checkbox" id="popperMinJs" value="popperMinJs" v-model="jsData" v-on:click="app.refresh()">
						<label class="form-check-label" for="popperMinJs">popper.min.js</label>
					</div>
					<div class="form-check form-switch">
						<input class="form-check-input" type="checkbox" id="bootstrapMinJs" value="bootstrapMin" v-model="cssAndJsData" v-on:click="app.refresh()">
						<label class="form-check-label" for="bootstrapMinJs">bootstrap.min.js</label>
					</div>
					<div class="form-check form-switch">
						<input class="form-check-input" type="checkbox" id="featherMinJs" value="featherMinJs" v-model="jsData" v-on:click="app.refresh()">
						<label class="form-check-label" for="featherMinJs">feather.min.js</label>
					</div>
					<div class="form-check form-switch">
						<input class="form-check-input" type="checkbox" id="isMobileMinJs" value="isMobileMinJs" v-model="jsData" v-on:click="app.refresh()">
						<label class="form-check-label" for="isMobileMinJs">isMobile.min.js</label>
					</div>
					<div class="form-check form-switch">
						<input class="form-check-input" type="checkbox" id="validatorMinJs" value="validatorMinJs" v-model="jsData" v-on:click="app.refresh()">
						<label class="form-check-label" for="validatorMinJs">validator.min.js</label>
					</div>
					<div class="form-check form-switch">
						<input class="form-check-input" type="checkbox" id="darkmodeJsMinJs" value="darkmodeJsMinJs" v-model="jsData" v-on:click="app.refresh()">
						<label class="form-check-label" for="darkmodeJsMinJs">darkmode-js.min.js</label>
					</div>
					<div class="form-check form-switch">
						<input class="form-check-input" type="checkbox" id="highlightMinJs" value="highlightMin" v-model="cssAndJsData" v-on:click="app.refresh()">
						<label class="form-check-label" for="highlightMinJs">highlight.min.js</label>
					</div>
					<div class="form-check form-switch">
						<input class="form-check-input" type="checkbox" id="prismJs" value="prism" v-model="cssAndJsData" v-on:click="app.refresh()">
						<label class="form-check-label" for="prismJs">prism.js</label>
					</div>
					<div class="form-check form-switch">
						<input class="form-check-input" type="checkbox" id="slickMinJs" value="slick" v-model="cssAndJsData" v-on:click="app.refresh()">
						<label class="form-check-label" for="slickMinJs">slick.min.js</label>
					</div>
					<br><br>

				</div>
			</div>
			<div class="col-xl-8" style="height: 100%;">
				<div id="code">
					<h2 class="fs-3" style="display: inline-block;">Code</h2><a id="linkToCopy" href="javascript:copyCode()" style="margin-left: 1rem;">kopieren</a>
					<svg id="copyCodeCheckmark" class="checkmark" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 52 52">
						<circle class="checkmark__circle" cx="26" cy="26" r="25" fill="none"/>
						<path class="checkmark__check" fill="none" d="M14.1 27.2l7.1 7.2 16.7-16.8"/>
					</svg>
					<pre style="display: none;"><code id="codeNoHighlight" class="nohighlight"><?php require("code.html"); ?></code></pre>
					<pre id="codeContainer" class="mt-2"><code id="codeToCopy" class="language-html"></code></pre>
				</div>
			</div>
		</div>
	</div>
	<script src="https://static.hrstmnn.de/node_modules/vue/dist/vue.min.js" type="text/javascript"></script>
	<script src="https://static.hrstmnn.de/node_modules/@popperjs/core/dist/umd/popper.min.js" type="text/javascript"></script>
	<script src="https://static.hrstmnn.de/node_modules/bootstrap/dist/js/bootstrap.min.js" type="text/javascript"></script>
	<script src="https://static.hrstmnn.de/node_modules/ismobilejs/dist/isMobile.min.js" type="text/javascript"></script>
	<script src="https://static.hrstmnn.de/node_modules/darkmode-js/lib/darkmode-js.min.js" type="text/javascript"></script>
	<script src="https://static.hrstmnn.de/node_modules/@highlightjs/cdn-assets/highlight.min.js" type="text/javascript"></script>
	<script src="main.js" type="text/javascript"></script>
</body>
</html>

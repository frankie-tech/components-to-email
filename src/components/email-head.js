import { h } from 'preact';
import htm from 'htm';
const html = htm.bind(h);
const EmailHead = ({ style, title, children }) => html`
<head>
	<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<meta http-equiv="X-UA-Compatible" content="IE=edge">

	<title>${title}</title>
	${children}
	<style type="text/css">
	${style}
	</style>
</head>`;


export default EmailHead;

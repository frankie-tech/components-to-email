import render from 'preact-render-to-string';
import { h } from 'preact';
import htm from 'htm';

const html = htm.bind(h);

import EmailWrapper from './components/email-wrapper';

const Email = () => {
	const Header = html`<h1>This is a test email header</h1>`;

	const ListContent = html`
		<ul>
			<li>List Item 1</li>
			<li>List Item 2</li>
			<li>List Item 3</li>
			<li>List Item 4</li>
			<li>List Item 5</li>
		</ul>
	`

	const Footer = html`
		<footer>
			<h2>Here is the footer</h2>
		<footer>
	`

	return html`<${EmailWrapper} children="${html`<${Header}/><${ListContent}/><${Footer}/>`}" />`
}

render(html`<${Email}/>`)

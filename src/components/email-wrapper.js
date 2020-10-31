import { h } from 'preact';
import htm from 'htm';

import EmailHead from './email-head';
import EmailBody from './email-body';

const html = htm.bind(h);

const EmailWrapper = ({ title, style, bodyBackground, children }) => html`
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html lang="en">
	<${EmailHead} title="${title} style="${style}" />
	<${EmailBody} background="${bodyBackground}" children="${children}">
</html>`;


export default EmailWrapper

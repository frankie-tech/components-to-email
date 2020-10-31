import { h } from 'preact';
import htm from 'htm';

const EmailContent = ({ children }) => html`
<table width="100%" cellpadding="0" cellspacing="0" border="0">
	<tr>
		<td align="center" valign="top">
			${children}
		</td>
	</tr>
</table>`;

export default EmailContent;

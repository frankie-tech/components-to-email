import render from 'preact-render-to-string';
import { h } from 'preact';
import htm from 'htm';

const html = htm.bind(h);

const EmailBody = ({ background, children }) => html`
<body style="margin:0; padding:0; background-color:${background};">
  <center>
    <table width="100%" border="0" cellpadding="0" cellspacing="0" bgcolor="${background}">
        <tr>
            <td align="center" valign="top">
                ${ children }
            </td>
        </tr>
    </table>
  </center>
</body>
`

export default EmailBody;

/*
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html lang="en">

<body style="margin:0; padding:0; background-color:#F2F2F2;">
  <center>
    <table width="100%" border="0" cellpadding="0" cellspacing="0" bgcolor="#F2F2F2">
        <tr>
            <td align="center" valign="top">
                
                
            </td>
        </tr>
    </table>
  </center>
</body>
</html>
*/

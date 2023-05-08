function redirect()
{
//'my_iframe' is the name of the iframe
document.getElementById('my_form').target = 'my_iframe';
document.getElementById('my_form').submit();
}

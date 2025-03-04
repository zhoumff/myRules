/**
 * Surge Script: Google Redirect Fix
 * 适用于 iOS 18.2 及以上，解决 URL Rewrite 无效问题
 */

var modifiedHeaders = $response.headers;
modifiedHeaders['Location'] = 'https://www.google.com';

$done({ headers: modifiedHeaders });

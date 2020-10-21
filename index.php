<?php

/**
 * Request broker ArtHub Application.
 * 
 * @author jam
 * @version 201018
 */
// Non-web tree base directory for this application.
define('NON_WEB_BASE_DIR', 'H:/ArtHub/ArtHubPrivate/');
define('APP_NON_WEB_BASE_DIR', NON_WEB_BASE_DIR . 'artHub/');
include_once(APP_NON_WEB_BASE_DIR . 'includes/artHubIncludes.php');
session_start();

// Sanitze the routing input from links and forms - set default values if
// missing.
$post = true;
if (hRequestMethod() === 'GET') {
    $vm = null;
    $actionGET = hGET('action');
    $ctlrGET = hGET('ctlr');
    $ctlr = isset($ctlrGET) ? $ctlrGET : '';
    $actionSet = isset($actionGET) ? $actionGET : '';

    // Whitelist actions from a GET request.
    $action = hasInclusionIn($actionSet, $whiltelistGET) ? $actionSet : '';
    if (!$action !== '') {
        $post = false;
    }
} else {

    // POST request processing
    // Added logic to evaluate CSRF tokens
    $vm = MessageVM::getErrorInstance();
    if(csrf_token_is_valid()) {
        if(csrf_token_is_recent()) {
            $actionPost = hPOST('action');
            $ctlrPost = hPOST('ctlr');
            $action = isset($actionPost) ? $actionPost : '';
            $ctlr = isset($ctlrPost) ? $ctlrPost : 'index';
        }
        else {
            $vm->errorMsg = 'Form has expired.';
        }
    }
    else {
        $vm->errorMsg = 'Missing or invalid form token';
    }

    
    // If the CSRF token was invalid or expired, set the ctlr and action
    // to display the invalid form page
    if ($vm->errorMsg !== '') {
        $action = 'invalidForm';
        $ctlr = 'home';
    }
}

switch ($ctlr) {
    case 'admin':
        $controller = new AdminController();
        if ($action === 'login') {
            if ($post) {
                $action = 'loginPOST';
            } else {
                $action = 'loginGET';
            }
        }
        if ($action === 'addProduct') {
            if ($post) {
                $action = 'addEditProduct';
            } else {
                $action = 'showAddProduct';
            }
        }
        if ($action === 'register') {
            if ($post) {
                $action = 'registerPOST';
            } else {
                $action = 'registerGET';
            }
        }
        break;
    case 'home':
        $controller = new HomeController();
        break;
    case 'cart':
        $controller = new CartController();
        break;
    case 'register':
        $controller = new AdminController();
        if ($action === 'register') {
            if ($post) {
                $action = 'registerPOST';
            } else {
                $action = 'registerGET';
            }
        }
        break;
    default:
        $controller = new DefaultController();
}
$controller->run($action, $vm);

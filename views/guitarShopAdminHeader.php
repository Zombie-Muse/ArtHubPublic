<?php
$categoryDAM = new CategoryDAM();
$categories = $categoryDAM->readCategories();
?>
<!DOCTYPE html>
<html>
    <head>
        <title><?php echo Page::$title; ?></title>
        <link rel="stylesheet" type="text/css" href="content/css/main.css">
    </head>

    <body>
        <header>
            <h1>My Guitar Shop</h1>
        </header>
        <aside>
            <!-- These links are for testing only.
                 Remove them from a production application. -->
            <h2>Links</h2>
            <nav>
                <ul>
                    <li>
                        <a href=".">Home</a>
                    </li>
                    <li>
                        <a href="?ctlr=admin&amp;action=addProduct">Add Product</a>
                    </li>
                </ul>
                <h2>Categories</h2>
                <ul>
                    <!-- display links for all categories -->
                    <?php foreach ($categories as $category) { ?>
                        <li>
                            <a href="?ctlr=admin&amp;action=listProducts&amp;categoryId=<?php echo $category->id; ?>">
                                <?php echo $category->name; ?>
                            </a>
                        </li>
                    <?php } ?>
                    <li>&nbsp;</li>
                </ul>
            </nav>
        </aside>

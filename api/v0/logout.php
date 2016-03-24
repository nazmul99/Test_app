<?php
session_start();
unset($_SESSION['ng_app']);
session_destroy();
?>